import { useI18n } from "@/lib/i18n";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-lavita.png";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-walnut-deep text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={logo}
              alt="House Lavita logo"
              className="h-12 w-auto object-contain mix-blend-screen"
            />
            <div className="font-display text-2xl">
              HOUSE <span className="text-gradient-gold font-bold">LAVITA</span>
            </div>
          </div>
          <div className="text-gold-bright font-display italic tracking-[0.2em] text-sm mb-3 uppercase">
            Enjoy · Relax · Refresh
          </div>
          <p className="text-cream/70 text-sm leading-relaxed">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-gold-bright">{t.footer.contact}</h4>
          <ul className="space-y-3 text-sm text-cream/85">
            <li>
              <a href="tel:+38668169430" className="flex items-center gap-2 hover:text-gold-bright transition-luxe">
                <Phone className="w-4 h-4" /> +386 68 169 430
              </a>
            </li>
            <li>
              <a href="mailto:rent@lavitaterme3000.com" className="flex items-center gap-2 hover:text-gold-bright transition-luxe">
                <Mail className="w-4 h-4" /> rent@lavitaterme3000.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {t.footer.location}
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-gold-bright">{t.footer.follow}</h4>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://www.facebook.com/hiskalavitaterme3000/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cream/10 hover:bg-cream/20 transition-luxe px-4 py-2 rounded-full text-sm"
            >
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <a
              href="https://www.instagram.com/lavitaterme3000/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-tr from-pink-500/30 via-fuchsia-500/30 to-amber-400/30 hover:from-pink-500/50 hover:via-fuchsia-500/50 hover:to-amber-400/50 transition-luxe px-4 py-2 rounded-full text-sm"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-6 border-t border-cream/10 text-xs text-cream/50 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {year} Hiška LA VITA. {t.footer.rights}</span>
        <span>Terme 3000 · Moravske Toplice · Slovenija</span>
      </div>
    </footer>
  );
}