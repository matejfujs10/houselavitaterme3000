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
  { src: exterior, alt: "Exterior", className: "row-span-2" },
  { src: livingKitchen, alt: "Living and kitchen" },
  { src: terrace1, alt: "Covered terrace" },
  { src: bedroom1, alt: "Bedroom 1", className: "row-span-2" },
  { src: kitchen, alt: "Kitchen detail" },
  { src: terrace2, alt: "Side terrace with bike" },
  { src: bedroom2, alt: "Bedroom 2" },
  { src: family, alt: "Family game night" },
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