import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/exterior-house.png";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";
import slide4 from "@/assets/hero-slide-4.jpg";
import slide5 from "@/assets/hero-slide-5.jpg";
import slide6 from "@/assets/hero-slide-6.jpg";
import slide7 from "@/assets/hero-slide-7.jpg";
import slide8 from "@/assets/hero-slide-8.jpg";
import { useEffect, useState } from "react";
import { ShieldCheck, Sparkles, Calendar, MapPin, Gift } from "lucide-react";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

export function Hero() {
  const { t } = useI18n();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const [scrollY, setScrollY] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setSlideIdx((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="House LA VITA"
          className="w-full h-full object-cover will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0) scale(1.08)` }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-7 text-cream animate-float-up relative">
          {/* Creative colorful blobs */}
          <div className="pointer-events-none absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl opacity-40 animate-pulse-gold"
               style={{ background: "radial-gradient(circle, oklch(0.78 0.18 320) 0%, transparent 70%)" }} />
          <div className="pointer-events-none absolute top-40 left-20 w-80 h-80 rounded-full blur-3xl opacity-30"
               style={{ background: "radial-gradient(circle, oklch(0.75 0.2 200) 0%, transparent 70%)" }} />

          <span className="relative inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold mb-5 px-4 py-2 rounded-full backdrop-blur-md border border-gold-bright/40"
                style={{ background: "linear-gradient(135deg, oklch(0.78 0.18 320 / 0.25), oklch(0.78 0.13 78 / 0.25))" }}>
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
            <span className="text-gradient-gold">{t.hero.badge}</span>
          </span>

          <h1 className="relative font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
            <span className="block">{t.hero.title1}</span>
            <span className="block italic mt-1"
                  style={{
                    background: "linear-gradient(120deg, oklch(0.86 0.14 88) 0%, oklch(0.78 0.2 320) 50%, oklch(0.75 0.2 200) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}>
              {t.hero.title2}
            </span>
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

          <div className="mt-4 inline-flex items-center gap-2 bg-gradient-gold text-walnut-deep rounded-full px-4 py-2 text-xs sm:text-sm font-bold shadow-gold sm:ml-3">
            <MapPin className="w-4 h-4" strokeWidth={2.5} />
            {t.hero.distanceBadge}
          </div>

          <div className="mt-6 relative max-w-md rounded-2xl border-2 border-gold-bright/60 bg-walnut-deep/70 backdrop-blur-md p-4 shadow-luxe overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-gold opacity-25 blur-2xl" />
            <div className="relative flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold animate-pulse-gold">
                <Gift className="w-5 h-5 text-walnut-deep" strokeWidth={2.4} />
              </div>
              <div>
                <div className="text-gold-bright font-black text-sm sm:text-base tracking-wide">
                  {t.hero.promo3Title}
                </div>
                <p className="text-cream/85 text-xs sm:text-sm mt-1 leading-snug">
                  {t.hero.promo3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block animate-float-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            {/* Floating badge */}
            <div className="absolute -top-5 -left-5 z-20 bg-urgent text-cream font-bold text-xs px-4 py-2 rounded-full shadow-luxe rotate-[-6deg] flex items-center gap-1.5 animate-pulse-gold">
              <span className="h-2 w-2 rounded-full bg-cream" />
              {t.hero.floatingBadge}
            </div>
            <div className="absolute -top-6 -right-6 z-10 bg-gradient-gold text-walnut-deep font-black text-sm px-5 py-3 rounded-full shadow-gold rotate-[8deg]">
              {t.hero.discountBadge}
            </div>

            {/* Glassmorphism booking widget */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-luxe border border-cream/20"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="relative w-full h-[300px] overflow-hidden">
                {slides.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Hiška LA VITA ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{ opacity: i === slideIdx ? 1 : 0 }}
                  />
                ))}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlideIdx(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${i === slideIdx ? "w-6 bg-gold-bright" : "w-1.5 bg-cream/60"}`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-6 text-cream">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs uppercase tracking-wider text-cream/70">{t.hero.quickFrom}</span>
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-display text-5xl text-gradient-gold font-bold">80€</span>
                  <span className="text-sm text-cream/80">{t.hero.quickNight}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 mb-4 bg-gold-bright/15 border border-gold-bright/40 text-gold-bright text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  <MapPin className="w-3.5 h-3.5" />
                  {t.hero.distanceBadge}
                </div>
                <button
                  onClick={() => scrollTo("booking")}
                  className="w-full bg-gradient-gold text-walnut-deep font-bold py-3 rounded-full shadow-gold hover:scale-[1.02] transition-luxe inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  {t.hero.ctaCheck}
                </button>
                <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-wider text-cream/75">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <ShieldCheck className="w-4 h-4 text-gold-bright" />
                    <span>iCal real-time</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Sparkles className="w-4 h-4 text-gold-bright" />
                    <span>Vse vključeno</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <ShieldCheck className="w-4 h-4 text-gold-bright" />
                    <span>Varno · 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}