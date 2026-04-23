import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { UrgencyBar } from "@/components/site/UrgencyBar";
import { useI18n } from "@/lib/i18n";
import {
  Tent, Home, Coffee, Trees, Waves, Bike, Bed, Tv, Wifi, Wind, Utensils, Music,
  Sparkles, Sun, Snowflake, Heart, Phone, Mail, MapPin, Gift, Ticket, Check, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/zakaj-lavita")({
  head: () => ({
    meta: [
      { title: "Zakaj House LA VITA — Terme 3000 Moravske Toplice" },
      { name: "description", content: "Zakaj izbrati House La Vita za vaš naslednji dopust? Edinstvena kamping izkušnja le 50 m od bazenov Term 3000, vključene kopalne karte, kolesa in popoln mir." },
      { property: "og:title", content: "Zakaj House LA VITA — Terme 3000 Moravske Toplice" },
      { property: "og:description", content: "Edinstvena kamping izkušnja le 50 m od bazenov Term 3000. Vse vključeno." },
    ],
  }),
  component: WhyPage,
});

function WhyPage() {
  const { t } = useI18n();
  const sections = [
    {
      icon: Tent,
      title: "Edinstvena kamping izkušnja",
      body: "Doživite kampiranje v enem izmed najbolj priljubljenih kampov v Sloveniji — Kamp Terme 3000. Zelene oaze miru, prijazni sosedje in vse udobje na enem mestu.",
    },
    {
      icon: Home,
      title: "Več kot hiška",
      body: "Naša hiška ni navaden apartma. Je vaš zasebni dom v naravi — z dvema terasama, lastnim parkirnim prostorom in popolno zasebnostjo, le 50 m od termalnega kompleksa.",
    },
  ];

  const inclusions = [
    { icon: Bed, label: "Dormeo jogiji za premium spanec" },
    { icon: Sun, label: "2× lastna terasa za kavo in počitek" },
    { icon: Sparkles, label: "Elegantna LED razsvetljava" },
    { icon: Music, label: "Hi-Fi sistem za vašo glasbo" },
    { icon: Tv, label: "Smart TV in zabava za vse" },
    { icon: Wifi, label: "Brezplačen WiFi v hiški" },
    { icon: Wind, label: "Klima za hladne poletne noči" },
    { icon: Utensils, label: "Polno opremljena kuhinja" },
    { icon: Bike, label: "4× kolesa za odrasle in otroke" },
    { icon: Snowflake, label: "Hladilnik in zamrzovalnik" },
    { icon: Coffee, label: "Aparat za kavo & jutranji ritual" },
    { icon: Trees, label: "Mir, narava in zelena oaza" },
  ];

  const bonuses = [
    "🌊 2× GRATIS celodnevni karti za Terme 3000 (vrednost 40€+ dnevno)",
    "🚲 4× kolesa BREZPLAČNO za izlete po Prekmurju",
    "👶 Otroci do 5. leta GRATIS — brez doplačila",
    "🎁 Pri 3+ nočitvah dodatnih 5% popusta + presenečenje dobrodošlice",
    "👴 Upokojenci: dodatnih 10% popusta + 2× GRATIS karti",
    "📍 Le 50 m do bazenov — 2 minuti peš",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <UrgencyBar />
      <Header />

      {/* HERO */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden bg-gradient-to-b from-cream via-background to-cream">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-30"
             style={{ background: "radial-gradient(circle, oklch(0.78 0.18 78), transparent 70%)" }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-25"
             style={{ background: "radial-gradient(circle, oklch(0.6 0.18 200), transparent 70%)" }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black mb-6 px-4 py-2 rounded-full shadow-gold"
                style={{ background: "linear-gradient(135deg, oklch(0.85 0.18 78), oklch(0.72 0.2 50))", color: "#1A1A1A" }}>
            <Sparkles className="w-4 h-4" /> ZAKAJ LAVITA
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-walnut-deep leading-[1.1] mb-5">
            Zakaj izbrati <span className="text-gradient-gold">House La Vita</span> za vaš naslednji dopust?
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Več kot le prenočišče — celostno doživetje miru, udobja in termalne sprostitve v srcu Prekmurja.
          </p>
        </div>
      </section>

      {/* CORE SECTIONS */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          {sections.map((s) => (
            <div key={s.title} className="rounded-3xl p-8 bg-card shadow-card border border-border/60 hover:shadow-luxe transition-luxe">
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
                <s.icon className="w-7 h-7 text-walnut-deep" strokeWidth={2} />
              </div>
              <h3 className="font-display text-2xl text-walnut mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-black uppercase tracking-[0.25em] text-gold-deep mb-3">★ Vse vključeno</span>
            <h2 className="font-display text-3xl sm:text-5xl text-walnut mb-3">Kaj dobite za to ceno?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Brez skritih stroškov. Vse, kar potrebujete za nepozaben dopust, je vključeno v ceno najema hiške.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inclusions.map((i) => (
              <div key={i.label} className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border/60 hover:border-gold/60 transition-luxe">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                  <i.icon className="w-5 h-5 text-gold-deep" strokeWidth={2} />
                </div>
                <span className="text-sm font-medium text-walnut leading-snug pt-1.5">{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-black uppercase tracking-[0.25em] text-gold-deep mb-3">💰 Cenik</span>
            <h2 className="font-display text-3xl sm:text-5xl text-walnut mb-3">CENA, ki vas bo presenetila</h2>
            <p className="text-muted-foreground">Cena velja za <strong className="text-walnut">CELOTNO hiško</strong> (do 6 oseb) — ne na osebo!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div className="rounded-3xl p-8 bg-card shadow-card border-2 border-border relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-beige-deep text-walnut font-bold uppercase tracking-wider">Nizka sezona</span>
                <Snowflake className="w-5 h-5 text-walnut/40" />
              </div>
              <div className="font-display text-6xl text-walnut font-bold mb-1">80€</div>
              <div className="text-sm text-muted-foreground mb-4">/ noč · za celotno hiško</div>
              <div className="text-xs text-muted-foreground">November – Maj</div>
            </div>
            <div className="rounded-3xl p-8 shadow-luxe border-2 border-gold relative overflow-hidden text-cream"
                 style={{ background: "linear-gradient(135deg, oklch(0.32 0.045 55), oklch(0.22 0.04 55))" }}>
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-gold opacity-20 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-gradient-gold text-walnut-deep font-black uppercase tracking-wider">Visoka sezona</span>
                  <Sun className="w-5 h-5 text-gold-bright" />
                </div>
                <div className="font-display text-6xl text-gradient-gold font-bold mb-1">100€</div>
                <div className="text-sm text-cream/70 mb-4">/ noč · za celotno hiško</div>
                <div className="text-xs text-cream/60">Junij – Avgust</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-5 bg-gradient-warm border border-gold/30 text-center">
            <p className="text-sm text-walnut">
              <strong>📌 Cena velja za CELOTNO hiško (do 6 oseb)</strong> — ne na osebo. Pri nas plača samo eden!
            </p>
          </div>
        </div>
      </section>

      {/* BONUS — distinctive background */}
      <section className="py-16 sm:py-20 relative overflow-hidden"
               style={{ background: "linear-gradient(135deg, oklch(0.78 0.13 78) 0%, oklch(0.68 0.16 65) 100%)" }}>
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-walnut-deep bg-cream/80 px-4 py-2 rounded-full mb-4">
              <Gift className="w-3.5 h-3.5" /> BONUS UGODNOSTI
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-walnut-deep font-bold mb-3">
              Prihranite do <span className="underline decoration-cream decoration-4 underline-offset-4">50€ DNEVNO</span>
            </h2>
            <p className="text-walnut-deep/85 max-w-2xl mx-auto">
              Vse, kar je pri drugih dodatek, je pri nas vključeno. Izračunajte sami:
            </p>
          </div>

          <div className="bg-cream/95 rounded-3xl p-6 sm:p-8 shadow-luxe">
            <ul className="space-y-3">
              {bonuses.map((b) => (
                <li key={b} className="flex items-start gap-3 text-walnut">
                  <Check className="w-5 h-5 text-gold-deep shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-sm sm:text-base font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GUESTS RETURN */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Heart className="w-10 h-10 text-urgent mx-auto mb-4" fill="currentColor" />
          <h2 className="font-display text-3xl sm:text-5xl text-walnut mb-4">Gostje se vračajo</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3">
            ☕ Jutro s kavo na terasi, 🌿 popoldne v tišini med drevesi, 🌊 popoldne v termalnih bazenih.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Naši gostje pravijo, da je House La Vita njihov drugi dom. Več kot 90% jih nas obišče znova — to je naša najlepša nagrada.
          </p>
        </div>
      </section>

      {/* CONTACT QUICK STRIP */}
      <section className="py-12 bg-walnut-deep text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-4 text-center sm:text-left">
          <a href="tel:+38668169430" className="flex items-center justify-center sm:justify-start gap-3 hover:text-gold-bright transition-luxe">
            <Phone className="w-5 h-5 text-gold-bright" />
            <span className="font-bold">+386 68 169 430</span>
          </a>
          <a href="mailto:rent@lavitaterme3000.com" className="flex items-center justify-center sm:justify-start gap-3 hover:text-gold-bright transition-luxe">
            <Mail className="w-5 h-5 text-gold-bright" />
            <span className="font-bold">rent@lavitaterme3000.com</span>
          </a>
        </div>
      </section>

      {/* PRIMARY CTA */}
      <section className="py-20 sm:py-28 text-center relative overflow-hidden"
               style={{ background: "linear-gradient(135deg, oklch(0.22 0.04 55) 0%, oklch(0.32 0.045 55) 100%)" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl"
               style={{ background: "radial-gradient(circle, oklch(0.85 0.18 78), transparent 70%)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl"
               style={{ background: "radial-gradient(circle, oklch(0.72 0.2 50), transparent 70%)" }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <Ticket className="w-12 h-12 text-gold-bright mx-auto mb-5" />
          <h2 className="font-display text-3xl sm:text-5xl text-cream font-bold mb-4">
            Pripravljeni na <span className="text-gradient-gold">nepozaben dopust</span>?
          </h2>
          <p className="text-cream/80 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Termini se hitro polnijo. Zagotovite si svoje sanjske počitnice po akcijskih cenah 2026 — še danes.
          </p>
          <Link
            to="/"
            hash="booking"
            className="inline-flex items-center gap-3 text-walnut-deep font-black text-base sm:text-lg tracking-wide px-10 py-5 rounded-full shadow-gold hover:scale-[1.04] transition-luxe animate-pulse-gold"
            style={{ background: "linear-gradient(135deg, oklch(0.85 0.18 78) 0%, oklch(0.72 0.2 50) 100%)" }}
          >
            {t.whyCta}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 text-cream/60 text-xs uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" /> Terme 3000 · Moravske Toplice · Slovenija
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}