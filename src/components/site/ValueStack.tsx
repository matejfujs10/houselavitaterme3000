import { useI18n } from "@/lib/i18n";
import { Ticket, TicketPercent, Baby, Bike, Home, Car, Gift, BedDouble, Trees, ShieldCheck, RefreshCcw, Clock, MapPin, Tent } from "lucide-react";

const ICONS = [Ticket, TicketPercent, Baby, Bike, Home, Car];
const HIGHLIGHT_ICONS = [Gift, BedDouble, Trees];
const TRUST_ICONS = [ShieldCheck, ShieldCheck, RefreshCcw, Clock];

export function ValueStack() {
  const { t } = useI18n();

  return (
    <section id="features" className="py-20 sm:py-28 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Camp banner + distance pin */}
        <div className="mb-14 grid md:grid-cols-5 gap-4">
          <div className="md:col-span-3 relative overflow-hidden rounded-3xl bg-walnut text-cream p-6 sm:p-8 shadow-luxe border border-gold/30">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-gold opacity-20 rounded-full blur-3xl" />
            <div className="relative flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                <Tent className="w-7 h-7 text-walnut-deep" strokeWidth={2.2} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-bright font-bold">★ Top destinacija</span>
                <p className="font-display italic text-lg sm:text-2xl leading-snug mt-1.5 text-cream">
                  {t.value.campBanner}
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-gold p-6 sm:p-8 shadow-gold border-2 border-gold-deep flex items-center">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-walnut text-gold-bright flex items-center justify-center shrink-0 animate-pulse-gold">
                <MapPin className="w-7 h-7" strokeWidth={2.4} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-walnut-deep font-black">📍 Lokacija</span>
                <p className="font-display text-base sm:text-lg font-bold text-walnut-deep leading-tight mt-1">
                  {t.value.distancePin}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* High-impact value stack */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold">
            ★ Premium boutique
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-walnut mt-3 mb-4">
            {t.value.valueTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.value.valueSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {t.value.highlights.map((h, i) => {
            const Icon = HIGHLIGHT_ICONS[i] ?? Gift;
            return (
              <div
                key={i}
                className="group relative bg-card rounded-3xl p-7 shadow-luxe hover:-translate-y-2 transition-luxe border border-gold/30 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-luxe" />
                <span className="relative inline-block bg-gradient-gold text-walnut-deep text-[10px] font-black tracking-widest px-3 py-1 rounded-full mb-4">
                  {h.tag}
                </span>
                <div className="relative w-14 h-14 rounded-2xl bg-walnut text-gold-bright flex items-center justify-center mb-4 shadow-card group-hover:scale-110 transition-luxe">
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="relative font-display text-xl text-walnut mb-2 font-bold leading-tight">
                  {h.title}
                </h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>

        {/* All-inclusive bento */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold">
            ✓ All inclusive
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-walnut mt-3 mb-4">
            {t.value.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.value.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.value.items.map((item, i) => {
            const Icon = ICONS[i] ?? Home;
            return (
              <div
                key={i}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-luxe hover:-translate-y-1 transition-luxe border border-border/60"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold group-hover:scale-110 transition-luxe">
                  <Icon className="w-6 h-6 text-walnut-deep" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-lg text-walnut mb-2 font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="mt-16 bg-card/60 backdrop-blur rounded-3xl p-6 sm:p-8 border border-border/60 shadow-card">
          <div className="text-center mb-5">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold">
              {t.value.trustTitle}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.value.trust.map((label, i) => {
              const Icon = TRUST_ICONS[i] ?? ShieldCheck;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-warm border border-gold/20"
                >
                  <div className="w-10 h-10 rounded-full bg-walnut text-gold-bright flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <span className="text-sm font-semibold text-walnut leading-tight">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}