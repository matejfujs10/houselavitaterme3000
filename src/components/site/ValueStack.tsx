import { useI18n } from "@/lib/i18n";
import { Ticket, TicketPercent, Baby, Bike, Home, Car } from "lucide-react";

const ICONS = [Ticket, TicketPercent, Baby, Bike, Home, Car];

export function ValueStack() {
  const { t } = useI18n();

  return (
    <section id="features" className="py-20 sm:py-28 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
      </div>
    </section>
  );
}