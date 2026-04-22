import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/exterior-house.png";
import termeImg from "@/assets/terme-3000-pools.jpg";

export function Hero() {
  const { t } = useI18n();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="House LA VITA" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-7 text-cream animate-float-up">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-gold-bright/90 mb-5">
            <span className="h-px w-8 bg-gold-bright/70" />
            {t.hero.badge}
          </span>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
            {t.hero.title1}{" "}
            <span className="text-gradient-gold italic">{t.hero.title2}</span>
          </h1>

          <p className="text-base sm:text-lg text-cream/85 max-w-xl mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo("booking")}
              className="bg-gradient-gold text-walnut-deep font-bold tracking-wide px-7 py-4 rounded-full shadow-gold hover:scale-[1.03] transition-luxe animate-pulse-gold"
            >
              {t.hero.ctaCheck}
            </button>
            <button
              onClick={() => scrollTo("booking")}
              className="border-2 border-cream/70 text-cream font-bold tracking-wide px-7 py-4 rounded-full hover:bg-cream hover:text-walnut transition-luxe"
            >
              {t.hero.ctaBook}
            </button>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 bg-urgent/15 border border-urgent/40 backdrop-blur-sm rounded-full px-4 py-2 text-cream text-xs sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-urgent animate-pulse" />
            {t.hero.urgent}
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block animate-float-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute -top-6 -right-6 z-10 bg-gradient-gold text-walnut-deep font-black text-sm px-5 py-3 rounded-full shadow-gold rotate-[8deg]">
              {t.hero.discountBadge}
            </div>
            <div className="rounded-3xl overflow-hidden shadow-luxe border-4 border-cream/20">
              <img src={termeImg} alt="Terme 3000" className="w-full h-[460px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}