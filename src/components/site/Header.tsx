import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { LANGS, LANG_LABELS, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-lavita.png";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 z-50 transition-luxe",
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-card"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="House Lavita logo"
            className="h-9 sm:h-11 w-auto object-contain mix-blend-multiply"
          />
          <span className="font-display text-xl sm:text-2xl tracking-tight text-walnut">
            HOUSE <span className="text-gradient-gold font-bold">LAVITA</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-walnut">
          <Link to="/zakaj-lavita" className="hover:text-gold-deep transition-luxe font-bold text-gold-deep">
            ★ {t.nav.why}
          </Link>
          <button onClick={() => scrollTo("features")} className="hover:text-gold-deep transition-luxe">
            {t.nav.features}
          </button>
          <button onClick={() => scrollTo("gallery")} className="hover:text-gold-deep transition-luxe">
            {t.nav.gallery}
          </button>
          <button onClick={() => scrollTo("reviews")} className="hover:text-gold-deep transition-luxe">
            {t.nav.reviews}
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-gold-deep transition-luxe">
            {t.nav.contact}
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-full border border-border bg-cream/80 p-1 text-xs">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l as Lang)}
                className={cn(
                  "px-2.5 py-1 rounded-full transition-luxe font-semibold",
                  lang === l
                    ? "bg-walnut text-cream"
                    : "text-walnut/70 hover:text-walnut",
                )}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
          <select
            aria-label="Language"
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="sm:hidden text-xs rounded-full border border-border bg-cream px-2 py-1 text-walnut"
          >
            {LANGS.map((l) => (
              <option key={l} value={l}>
                {LANG_LABELS[l]}
              </option>
            ))}
          </select>
          <button
            onClick={() => scrollTo("booking")}
            className="bg-gradient-gold text-walnut-deep font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-gold hover:scale-105 transition-luxe"
          >
            {t.nav.book}
          </button>
        </div>
      </div>
    </header>
  );
}