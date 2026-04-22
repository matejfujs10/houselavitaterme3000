import { useI18n } from "@/lib/i18n";
import { Star, ShieldCheck, Facebook } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Review = { name: string; date: string; initials: string; text: Record<string, string> };

const REVIEWS: Review[] = [
  {
    name: "Maja P.",
    date: "08/2024",
    initials: "MP",
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
    initials: "MH",
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
    initials: "IK",
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
    initials: "TR",
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

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {REVIEWS.map((r) => (
              <CarouselItem key={r.name} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="h-full bg-card rounded-3xl p-7 shadow-luxe border border-border/60 relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 text-gold/15 font-display text-[120px] leading-none select-none">
                    “
                  </div>
                  <div className="flex items-center gap-3 mb-4 relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold text-walnut-deep font-bold flex items-center justify-center shadow-card shrink-0">
                      {r.initials}
                    </div>
                    <div className="flex-1 min-w-0">
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
                  <p className="text-sm sm:text-base text-walnut/90 leading-relaxed font-medium relative">
                    “{r.text[lang]}”
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-walnut text-cream border-walnut hover:bg-walnut-deep hover:text-cream" />
            <CarouselNext className="static translate-y-0 bg-walnut text-cream border-walnut hover:bg-walnut-deep hover:text-cream" />
          </div>
        </Carousel>

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