import { useI18n } from "@/lib/i18n";
import family from "@/assets/family-game-night.png";
import bedroom1 from "@/assets/bedroom-1.jpg";
import bedroom2 from "@/assets/bedroom-2.jpg";
import terrace1 from "@/assets/terrace-1.jpg";
import terrace2 from "@/assets/terrace-2.jpg";
import livingKitchen from "@/assets/living-kitchen.jpg";
import kitchen from "@/assets/kitchen.jpg";
import exterior from "@/assets/exterior-house.png";

const items = [
  { src: exterior, alt: "House La Vita — zunanjost hiške v Kampu Terme 3000 Moravske Toplice", className: "row-span-2" },
  { src: livingKitchen, alt: "Notranjost hiške La Vita — dnevna soba in kuhinja" },
  { src: terrace1, alt: "House La Vita pokrita terasa s sedežno garnituro" },
  { src: bedroom1, alt: "Spalnica v hiški La Vita s premium Dormeo jogiji", className: "row-span-2" },
  { src: kitchen, alt: "Polno opremljena kuhinja v hiški La Vita" },
  { src: terrace2, alt: "Stranska terasa hiške La Vita s kolesom" },
  { src: bedroom2, alt: "Druga spalnica v hiški La Vita" },
  { src: family, alt: "Družinski večer v hiški La Vita ob Termah 3000" },
];

export function Gallery() {
  const { t } = useI18n();
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-5xl text-walnut mb-3">{t.gallery.title}</h2>
          <p className="text-muted-foreground">{t.gallery.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-card hover:shadow-luxe transition-luxe ${it.className ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-luxe"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-luxe" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}