import { useMemo, useState } from "react";
import { useI18n, calcStay } from "@/lib/i18n";
import { AvailabilityCalendar } from "./AvailabilityCalendar";
import { Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { createBooking } from "@/server/booking";
import { cn } from "@/lib/utils";

function ymd(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function BookingSection() {
  const { t, lang } = useI18n();
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [pensioner, setPensioner] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const stay = useMemo(() => calcStay(checkIn, checkOut, pensioner), [checkIn, checkOut, pensioner]);

  const canSubmit =
    !submitting && checkIn && checkOut && stay.nights > 0 && name.trim().length >= 2 && /\S+@\S+\.\S+/.test(email) && phone.trim().length >= 5;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || !checkIn || !checkOut) return;
    setSubmitting(true);
    setErr(null);
    try {
      const res = await createBooking({
        data: {
          checkIn: ymd(checkIn),
          checkOut: ymd(checkOut),
          guests,
          guestName: name.trim(),
          guestEmail: email.trim(),
          guestPhone: phone.trim(),
          isPensioner: pensioner,
          totalPrice: stay.total,
          nights: stay.nights,
          message: message.trim() || undefined,
          language: lang,
        },
      });
      if (res.ok) setSubmitted(true);
      else setErr(t.booking.error);
    } catch {
      setErr(t.booking.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-5xl text-walnut mb-3">{t.booking.title}</h2>
          <p className="text-muted-foreground">{t.booking.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <AvailabilityCalendar
              checkIn={checkIn}
              checkOut={checkOut}
              onChange={(r) => {
                setCheckIn(r.checkIn);
                setCheckOut(r.checkOut);
              }}
            />
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={submit} className="bg-card rounded-2xl p-6 shadow-card border border-border/60 space-y-4">
              {submitted ? (
                <div className="text-center py-8 animate-float-up">
                  <CheckCircle2 className="w-14 h-14 text-success mx-auto mb-3" />
                  <h3 className="font-display text-2xl text-walnut mb-1">{t.booking.success}</h3>
                  <p className="text-muted-foreground text-sm">{t.booking.successDesc}</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label={t.booking.checkin}>
                      <div className="text-sm font-semibold text-walnut h-10 flex items-center px-3 bg-muted rounded-lg">
                        {checkIn ? checkIn.toLocaleDateString(lang) : "—"}
                      </div>
                    </Field>
                    <Field label={t.booking.checkout}>
                      <div className="text-sm font-semibold text-walnut h-10 flex items-center px-3 bg-muted rounded-lg">
                        {checkOut ? checkOut.toLocaleDateString(lang) : "—"}
                      </div>
                    </Field>
                  </div>

                  <Field label={t.booking.guests}>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label={t.booking.name}>
                    <input value={name} onChange={(e) => setName(e.target.value)} required maxLength={120} className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm" />
                  </Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label={t.booking.email}>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={255} className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm" />
                    </Field>
                    <Field label={t.booking.phone}>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required maxLength={40} className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm" />
                    </Field>
                  </div>

                  <Field label={t.booking.message}>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} maxLength={2000} rows={2} className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm resize-none" />
                  </Field>

                  <label className="flex items-start gap-3 p-3 rounded-xl bg-gradient-warm border border-gold/30 cursor-pointer">
                    <input type="checkbox" checked={pensioner} onChange={(e) => setPensioner(e.target.checked)} className="mt-0.5 accent-walnut w-4 h-4" />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-walnut flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-gold-deep" />
                        {t.booking.pensioner}
                      </div>
                      <div className="text-xs text-muted-foreground">{t.booking.pensionerHint}</div>
                    </div>
                  </label>

                  {stay.nights > 0 && (
                    <div className="rounded-xl bg-walnut text-cream p-4 space-y-1.5 text-sm">
                      <Row label={t.booking.nights} value={`${stay.nights} ${stay.nights === 1 ? t.booking.nightLabel : t.booking.nightsLabel}`} />
                      <Row label={t.booking.pricePerNight} value={`${stay.avgRate}€`} />
                      {stay.discount > 0 && (
                        <Row label={`${t.booking.discount} (−${stay.pct}%)`} value={`−${stay.discount}€`} accent />
                      )}
                      <div className="border-t border-cream/20 pt-2 mt-2 flex justify-between font-bold text-lg">
                        <span>{t.booking.total}</span>
                        <span className="text-gradient-gold">{stay.total}€</span>
                      </div>
                    </div>
                  )}

                  {err && <div className="text-sm text-destructive">{err}</div>}

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={cn(
                      "w-full bg-gradient-gold text-walnut-deep font-bold py-3.5 rounded-full shadow-gold transition-luxe",
                      canSubmit ? "hover:scale-[1.02]" : "opacity-50 cursor-not-allowed",
                    )}
                  >
                    {submitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> {t.booking.submitting}
                      </span>
                    ) : (
                      t.booking.submit
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-cream/75">{label}</span>
      <span className={cn(accent ? "text-gold-bright font-semibold" : "text-cream font-medium")}>{value}</span>
    </div>
  );
}