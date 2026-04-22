import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const BookingSchema = z.object({
  checkIn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  checkOut: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  guests: z.number().int().min(1).max(6),
  guestName: z.string().trim().min(2).max(120),
  guestEmail: z.string().trim().email().max(255),
  guestPhone: z.string().trim().min(5).max(40),
  isPensioner: z.boolean(),
  totalPrice: z.number().min(0).max(100000),
  nights: z.number().int().min(1).max(365),
  message: z.string().trim().max(2000).optional(),
  language: z.string().trim().max(8).optional(),
});

const RESEND_GATEWAY = "https://connector-gateway.lovable.dev/resend";
const NOTIFY_TO = "rent@lavitaterme3000.com";
const NOTIFY_FROM = "Hiška LA VITA <onboarding@resend.dev>";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

async function sendBookingEmails(data: z.infer<typeof BookingSchema>) {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  if (!lovableKey || !resendKey) {
    console.warn("Email skipped: missing LOVABLE_API_KEY or RESEND_API_KEY");
    return;
  }

  const subjectOwner = `🆕 Nova rezervacija: ${data.guestName} (${data.checkIn} → ${data.checkOut})`;
  const ownerHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#fdfaf3;color:#2a1f15">
      <h2 style="color:#5a3a1a;margin:0 0 16px">Nova rezervacija – Hiška LA VITA</h2>
      <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06)">
        <tbody>
          <tr><td style="padding:10px 14px;border-bottom:1px solid #eee"><b>Gost</b></td><td style="padding:10px 14px;border-bottom:1px solid #eee">${escapeHtml(data.guestName)}</td></tr>
          <tr><td style="padding:10px 14px;border-bottom:1px solid #eee"><b>E-pošta</b></td><td style="padding:10px 14px;border-bottom:1px solid #eee"><a href="mailto:${escapeHtml(data.guestEmail)}">${escapeHtml(data.guestEmail)}</a></td></tr>
          <tr><td style="padding:10px 14px;border-bottom:1px solid #eee"><b>Telefon</b></td><td style="padding:10px 14px;border-bottom:1px solid #eee"><a href="tel:${escapeHtml(data.guestPhone)}">${escapeHtml(data.guestPhone)}</a></td></tr>
          <tr><td style="padding:10px 14px;border-bottom:1px solid #eee"><b>Prihod</b></td><td style="padding:10px 14px;border-bottom:1px solid #eee">${data.checkIn}</td></tr>
          <tr><td style="padding:10px 14px;border-bottom:1px solid #eee"><b>Odhod</b></td><td style="padding:10px 14px;border-bottom:1px solid #eee">${data.checkOut}</td></tr>
          <tr><td style="padding:10px 14px;border-bottom:1px solid #eee"><b>Noči</b></td><td style="padding:10px 14px;border-bottom:1px solid #eee">${data.nights}</td></tr>
          <tr><td style="padding:10px 14px;border-bottom:1px solid #eee"><b>Gostje</b></td><td style="padding:10px 14px;border-bottom:1px solid #eee">${data.guests}</td></tr>
          <tr><td style="padding:10px 14px;border-bottom:1px solid #eee"><b>Upokojenec</b></td><td style="padding:10px 14px;border-bottom:1px solid #eee">${data.isPensioner ? "Da (−10%)" : "Ne"}</td></tr>
          <tr><td style="padding:10px 14px"><b>Skupaj</b></td><td style="padding:10px 14px;font-size:18px;color:#a87410"><b>${data.totalPrice} €</b></td></tr>
        </tbody>
      </table>
      ${data.message ? `<div style="margin-top:18px;padding:14px;background:#fff;border-left:4px solid #c79a3d;border-radius:8px"><b>Sporočilo gosta:</b><br>${escapeHtml(data.message)}</div>` : ""}
      <p style="margin-top:20px;font-size:13px;color:#7a6a55">Jezik prijave: ${data.language ?? "—"}</p>
    </div>`;

  const subjectGuest = `Vaša rezervacija – Hiška LA VITA Terme 3000`;
  const guestHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#fdfaf3;color:#2a1f15">
      <h2 style="color:#5a3a1a">Hvala za vašo rezervacijo, ${escapeHtml(data.guestName)}!</h2>
      <p>Vašo prošnjo za rezervacijo smo prejeli. Kmalu vas bomo kontaktirali za potrditev.</p>
      <div style="background:#fff;padding:16px;border-radius:12px;margin:16px 0">
        <p><b>Prihod:</b> ${data.checkIn}<br>
        <b>Odhod:</b> ${data.checkOut}<br>
        <b>Noči:</b> ${data.nights} · <b>Gostje:</b> ${data.guests}<br>
        <b>Skupaj:</b> <span style="color:#a87410;font-size:18px"><b>${data.totalPrice} €</b></span></p>
      </div>
      <p>Za vprašanja: <a href="mailto:rent@lavitaterme3000.com">rent@lavitaterme3000.com</a> · +386 68 169 430</p>
      <p style="margin-top:24px;color:#7a6a55">Lep pozdrav,<br>Ekipa Hiška LA VITA</p>
    </div>`;

  const send = (to: string, subject: string, html: string) =>
    fetch(`${RESEND_GATEWAY}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": resendKey,
      },
      body: JSON.stringify({ from: NOTIFY_FROM, to: [to], subject, html, reply_to: data.guestEmail }),
    });

  try {
    const [ownerRes, guestRes] = await Promise.all([
      send(NOTIFY_TO, subjectOwner, ownerHtml),
      send(data.guestEmail, subjectGuest, guestHtml),
    ]);
    if (!ownerRes.ok) console.error("Owner email failed:", ownerRes.status, await ownerRes.text());
    if (!guestRes.ok) console.error("Guest email failed:", guestRes.status, await guestRes.text());
  } catch (e) {
    console.error("Resend send error:", e);
  }
}

export const createBooking = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => BookingSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("bookings").insert({
      check_in: data.checkIn,
      check_out: data.checkOut,
      guests: data.guests,
      guest_name: data.guestName,
      guest_email: data.guestEmail,
      guest_phone: data.guestPhone,
      is_pensioner: data.isPensioner,
      total_price: data.totalPrice,
      nights: data.nights,
      message: data.message ?? null,
      language: data.language ?? null,
    });
    if (error) {
      console.error("Booking insert failed:", error);
      return { ok: false, error: "Could not save booking" };
    }
    await sendBookingEmails(data);
    return { ok: true, error: null };
  });