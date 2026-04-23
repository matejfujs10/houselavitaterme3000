import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function MobileBookCTA() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
        className={`md:hidden fixed bottom-4 inset-x-4 z-40 bg-gradient-gold text-walnut-deep font-bold py-4 rounded-full shadow-gold transition-all duration-500 animate-pulse-gold ${
          show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
        }`}
        style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom, 0px))", paddingTop: "1rem" }}
      >
        {t.hero.ctaBook}
      </button>
      {/* Spacer to prevent overlap with page content on mobile */}
      <div aria-hidden className={`md:hidden h-20 ${show ? "block" : "hidden"}`} />
    </>
  );
}