import { Header } from "@/components/site/Header";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { ValueStack } from "@/components/site/ValueStack";
import { PricingStrip } from "@/components/site/PricingStrip";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { BookingSection } from "@/components/site/BookingSection";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { MobileBookCTA } from "@/components/site/MobileBookCTA";
import { UrgencyBar } from "@/components/site/UrgencyBar";

const SITE_URL = "https://house.lavitaterme3000.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const TITLE = "House La Vita | Najem hiške v Termah 3000 Moravske Toplice";
const DESCRIPTION = "Uživajte v oddihu v House La Vita! Le 50m od bazenov Term 3000. Vključeni 2x kopalni karti, brezplačna kolesa in velika zasebna terasa. Rezervirajte svoj termin!";
const KEYWORDS = "Terme 3000, Moravske Toplice, najem hiške, House La Vita, kopalne karte vključene, dopust Prekmurje";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "House La Vita — počitniška hiška ob Termah 3000 Moravske Toplice" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "House La Vita — počitniška hiška ob Termah 3000 Moravske Toplice" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "alternate", hrefLang: "sl", href: SITE_URL },
      { rel: "alternate", hrefLang: "de", href: SITE_URL },
      { rel: "alternate", hrefLang: "hr", href: SITE_URL },
      { rel: "alternate", hrefLang: "en", href: SITE_URL },
      { rel: "alternate", hrefLang: "x-default", href: SITE_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "House La Vita",
          description: DESCRIPTION,
          url: SITE_URL,
          image: OG_IMAGE,
          priceRange: "€€",
          telephone: "+386",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Moravske Toplice",
            addressCountry: "SI",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 46.6856,
            longitude: 16.2236,
          },
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "2× kopalni karti za Terme 3000 vključeni" },
            { "@type": "LocationFeatureSpecification", name: "4× kolesa brezplačno" },
            { "@type": "LocationFeatureSpecification", name: "Klima" },
            { "@type": "LocationFeatureSpecification", name: "Brezplačno parkirišče" },
            { "@type": "LocationFeatureSpecification", name: "WiFi" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <UrgencyBar />
      <Header />
      <main>
        <Hero />
        <ValueStack />
        <PricingStrip />
        <Gallery />
        <Reviews />
        <Faq />
        <BookingSection />
      </main>
      <Footer />
      <MobileBookCTA />
    </div>
  );
}
