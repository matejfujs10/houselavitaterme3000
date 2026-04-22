import { useI18n } from "@/lib/i18n";
import { Sparkles } from "lucide-react";

export function PricingStrip() {
  const { t } = useI18n();
  return (
    <section className="py-20 sm:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-5xl text-walnut mb-3">
            {t.pricing.title}
          </h2>
          <p className="text-muted-foreground">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <div className="rounded-3xl p-8 bg-card shadow-card border border-border/60 relative overflow-hidden">
            <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-beige-deep text-walnut font-semibold">
              {t.pricing.lowSeason}
            </span>
            <div className="text-5xl font-display text-walnut">
              80€<span className="text-base text-muted-foreground font-sans">{t.pricing.nightlyFrom}</span>
            </div>
          </div>
          <div className="rounded-3xl p-8 shadow-luxe relative overflow-hidden text-cream" style={{ background: "var(--walnut-deep)" }}>
            <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-gradient-gold text-walnut-deep font-bold">
              {t.pricing.highSeason}
            </span>
            <div className="text-5xl font-display">
              100€<span className="text-base text-cream/70 font-sans">{t.pricing.nightlyFrom}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-3xl p-6 bg-gradient-warm border border-gold/30">
            <h3 className="font-display text-xl text-walnut mb-3">{t.pricing.discountsTitle}</h3>
            <ul className="space-y-2 text-walnut/85 text-sm">
              {t.pricing.discounts.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span className="text-gold-deep font-bold">✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-6 bg-gradient-gold text-walnut-deep shadow-gold">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-display text-xl font-bold">{t.pricing.pensionerTitle}</h3>
            </div>
            <p className="text-sm font-medium">{t.pricing.pensionerDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}