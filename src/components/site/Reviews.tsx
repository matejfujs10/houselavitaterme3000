import { useI18n } from "@/lib/i18n";
import { Star, ShieldCheck, Facebook } from "lucide-react";

type Review = { name: string; date: string; text: Record<string, string> };

const REVIEWS: Review[] = [
  {
    name: "Maja P.",
    date: "08/2024",
    text: {
      sl: "Čudovita hiška, zelo prijazni gostitelji. Vse vključeno – kopalne karte, kolesa, otroške igrače. Vrnili se bomo!",
      en: "Wonderful house, super friendly hosts. Everything included — pool tickets, bikes, kids' toys. We will be back!",
      de: "Wunderschönes Haus, sehr freundliche Gastgeber. Alles inklusive — Thermenkarten, Räder, Spielzeug. Wir kommen wieder!",
      hr: "Predivna kućica, vrlo ljubazni domaćini. Sve uključeno – ulaznice, bicikli, igračke. Vraćamo se!",
    },
  },
  {
    name: "Markus H.",
    date: "07/2024",
    text: {
      sl: "Odlična lokacija tik ob termah, mirno in zasebno. Hiška je bila brezhibno čista, postelje udobne. Priporočam!",
      en: "Great spot right next to the spa, quiet and private. House was spotless, beds very comfy. Highly recommend!",
      de: "Top Lage direkt an der Therme, ruhig und privat. Haus blitzsauber, sehr bequeme Betten. Klare Empfehlung!",
      hr: "Sjajna lokacija uz terme, mirno i privatno. Kućica besprijekorno čista, kreveti udobni. Preporučujem!",
    },
  },
  {
    name: "Ines K.",
    date: "06/2024",
    text: {
      sl: "Družinski oddih, kot smo si ga želeli. Otroci so uživali na kolesih, mi pa na bazenih. Hvala za vse!",
      en: "Exactly the family holiday we wanted. Kids loved the bikes, we loved the pools. Thank you for everything!",
      de: "Genau der Familienurlaub, den wir wollten. Kinder liebten die Räder, wir die Bäder. Danke für alles!",
      hr: "Točno onakav obiteljski odmor kakav smo željeli. Djeca uživala na biciklima, mi na bazenima. Hvala!",
    },
  },
  {
    name: "Tomaž R.",
    date: "05/2024",
    text: {
      sl: "Cena/kvaliteta odlično. Vse je bilo res vključeno, brez doplačil. Terasa je bila naša najljubša točka.",
      en: "Excellent value. Everything was truly included, no extras. The terrace was our favourite spot.",
      de: "Hervorragendes Preis-Leistungs-Verhältnis. Alles wirklich inklusive. Die Terrasse war unser Lieblingsplatz.",
      hr: "Odličan omjer cijene i kvalitete. Sve uključeno bez doplata. Terasa nam je bila omiljeno mjesto.",
    },
  },
];

export function Reviews() {
  const { t, lang } = useI18n();
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-3 text-gold-deep">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-walnut mb-2">{t.reviews.title}</h2>
          <p className="text-muted-foreground">{t.reviews.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-card rounded-2xl p-6 shadow-card border border-border/60">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-semibold text-walnut">{r.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-success" />
                    {t.reviews.verified} · {r.date}
                  </div>
                </div>
                <div className="flex text-gold-deep">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-walnut/85 leading-relaxed italic">
                “{r.text[lang]}”
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.facebook.com/hiskalavitaterme3000/reviews/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1877F2] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-luxe shadow-card"
          >
            <Facebook className="w-5 h-5" />
            {t.reviews.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}