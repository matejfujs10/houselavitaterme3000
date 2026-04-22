import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/components/I18nProvider";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ValueStack } from "@/components/site/ValueStack";
import { PricingStrip } from "@/components/site/PricingStrip";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { BookingSection } from "@/components/site/BookingSection";
import { Footer } from "@/components/site/Footer";
import { MobileBookCTA } from "@/components/site/MobileBookCTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <ValueStack />
          <PricingStrip />
          <Gallery />
          <Reviews />
          <BookingSection />
        </main>
        <Footer />
        <MobileBookCTA />
      </div>
    </I18nProvider>
  );
}
