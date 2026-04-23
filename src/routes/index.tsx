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

export const Route = createFileRoute("/")({
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
