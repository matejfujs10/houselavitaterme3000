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
    return { ok: true, error: null };
  });