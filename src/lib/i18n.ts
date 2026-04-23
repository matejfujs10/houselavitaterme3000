import { createContext, useContext } from "react";

export type Lang = "sl" | "de" | "hr" | "en";

export const LANGS: Lang[] = ["sl", "de", "hr", "en"];

export const LANG_LABELS: Record<Lang, string> = {
  sl: "SLO",
  de: "DE",
  hr: "HR",
  en: "EN",
};

export function detectLang(): Lang {
  if (typeof window === "undefined") return "sl";
  const stored = window.localStorage.getItem("lang") as Lang | null;
  if (stored && LANGS.includes(stored)) return stored;
  const nav = (navigator.language || "en").toLowerCase();
  if (nav.startsWith("sl")) return "sl";
  if (nav.startsWith("de") || nav.startsWith("at") || nav.startsWith("ch")) return "de";
  if (nav.startsWith("hr") || nav.startsWith("sr") || nav.startsWith("bs")) return "hr";
  return "en";
}

type Dict = {
  nav: { features: string; gallery: string; reviews: string; book: string; contact: string };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaCheck: string;
    ctaBook: string;
    urgent: string;
    discountBadge: string;
    floatingBadge: string;
    quickFrom: string;
    quickNight: string;
    distanceBadge: string;
    promo3Title: string;
    promo3Desc: string;
    ticketsBadge: string;
  };
  value: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
    valueTitle: string;
    valueSubtitle: string;
    highlights: { tag: string; title: string; desc: string }[];
    trustTitle: string;
    trust: string[];
    campBanner: string;
    distancePin: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    lowSeason: string;
    highSeason: string;
    nightlyFrom: string;
    discountsTitle: string;
    discounts: string[];
    pensionerTitle: string;
    pensionerDesc: string;
  };
  gallery: { title: string; subtitle: string };
  reviews: {
    title: string;
    subtitle: string;
    verified: string;
    viewAll: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  booking: {
    title: string;
    subtitle: string;
    checkin: string;
    checkout: string;
    guests: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    pensioner: string;
    pensionerHint: string;
    submit: string;
    submitting: string;
    success: string;
    successDesc: string;
    error: string;
    nights: string;
    pricePerNight: string;
    discount: string;
    total: string;
    selectDates: string;
    available: string;
    booked: string;
    pickRange: string;
    invalidRange: string;
    nightLabel: string;
    nightsLabel: string;
    originalPrice: string;
    youSave: string;
    bestValue: string;
  };
  footer: {
    tagline: string;
    contact: string;
    quickLinks: string;
    follow: string;
    rights: string;
    location: string;
  };
};

const sl: Dict = {
  nav: { features: "Ugodnosti", gallery: "Galerija", reviews: "Mnenja", book: "Rezerviraj", contact: "Kontakt" },
  hero: {
    badge: "Hiška LA VITA · Terme 3000 Moravske Toplice",
    title1: "Udobje hiške La Vita",
    title2: "+ 2 kopalni karti GRATIS",
    subtitle: "Le 50m od bazenov Term 3000. Vključeni 2 kopalni karti, brezplačna kolesa in le par korakov do vodne zabave. Rezervirajte svoj termin za poletje 2026 še danes!",
    ctaCheck: "PREVERI RAZPOLOŽLJIVOST",
    ctaBook: "REZERVIRAJ ZDAJ",
    urgent: "Majski in poletni termini se hitro polnijo! Rezervirajte zdaj po ugodnejši ceni.",
    discountBadge: "DO 30% CENEJE",
    floatingBadge: "PROSTO: Zadnji termini za poletje 2026!",
    quickFrom: "Že od",
    quickNight: "/noč · vse vključeno",
    distanceBadge: "50 m do bazenov",
    promo3Title: "🎁 3+ NOČITEV = DODATNA AKCIJA",
    promo3Desc: "Pri rezervaciji 3 ali več nočitev prejmete dodatni 5% popust + presenečenje dobrodošlice.",
    ticketsBadge: "2× KOPALNI KARTI VKLJUČENI",
  },
  value: {
    title: "Vse vključeno v ceno",
    subtitle: "Brez skritih stroškov. Polno doživetje za vso družino.",
    items: [
      { title: "2× kopalni karti", desc: "Dnevni vstop v Terme 3000 vključen v ceno najema." },
      { title: "Dodatne karte z popustom", desc: "Ugodnejše vstopnice za vse goste hiške." },
      { title: "Otroci do 5. leta GRATIS", desc: "Brez doplačila za najmlajše." },
      { title: "4× kolesa + športni rekviziti", desc: "Raziščite Prekmurje — vse opremo dobite v hiški." },
      { title: "Hiška 50 m² (2–6 oseb)", desc: "Dormeo ležišča, klima, polno opremljena kuhinja, TV." },
      { title: "Parkirišče tik ob hiški", desc: "Popolna zasebnost in mir v zelenem objemu." },
    ],
    valueTitle: "Zakaj gostje izberejo Hiško La Vita?",
    valueSubtitle: "Trije razlogi, zakaj boste rezervirali že nocoj.",
    highlights: [
      { tag: "BREZPLAČNO", title: "2× celodnevne karte za Terme 3000", desc: "Prihranek 40€+ dnevno — vključeno v ceno najema." },
      { tag: "LUKSUZ", title: "Dormeo jogiji za spanec kot v oblakih", desc: "Anatomske vzmetnice premium kakovosti za vsako sobo." },
      { tag: "ZASEBNOST", title: "2× lastna terasa brez sosedov", desc: "Popolna zasebnost v zelenem objemu — vaš mir, vaš ritem." },
    ],
    trustTitle: "Zakaj nam zaupati",
    trust: ["Preverjen gostitelj", "Varna rezervacija", "iCal sinhronizirano (real-time)", "Odgovor v 24h"],
    campBanner: "Doživi kampiranje v enem izmed najbolj priljubljenih kampov v Sloveniji",
    distancePin: "Termalni kompleks je od hiške oddaljen le 50 m",
  },
  pricing: {
    title: "Transparentne cene",
    subtitle: "Več noči = nižja cena. Brez presenečenj.",
    lowSeason: "Nov – Maj",
    highSeason: "Jun – Avg",
    nightlyFrom: "/noč",
    discountsTitle: "Količinski popusti",
    discounts: ["3+ noči: −5%", "5+ noči: −10%", "7+ noči: −15%", "10+ noči: −20%"],
    pensionerTitle: "Posebna ponudba za upokojence",
    pensionerDesc: "Dodatnih −10% popusta + 2× BREZPLAČNI dnevni karti za bazen.",
  },
  gallery: { title: "Vaš dom stran od doma", subtitle: "Pristna prekmurska hiška, opremljena z mislijo na vašo udobje." },
  reviews: {
    title: "Kaj pravijo naši gostje",
    subtitle: "Resnične ocene s Facebooka.",
    verified: "Preverjen gost",
    viewAll: "Vse ocene na Facebooku",
  },
  faq: {
    title: "Pogosta vprašanja",
    subtitle: "Vse, kar morate vedeti pred rezervacijo.",
    items: [
      { q: "Kako poteka rezervacija?", a: "Izberete datume, izpolnite obrazec in v 24 urah vam potrdimo razpoložljivost ter pošljemo navodila za plačilo." },
      { q: "Ali so kopalne karte res vključene?", a: "Da — 2× celodnevni karti za Terme 3000 sta vključeni v ceno za vsako rezervacijo, ne glede na število noči." },
      { q: "Koliko gostov sprejme hiška?", a: "Hiška ima 50 m² in udobno sprejme od 2 do 6 oseb. Otroci do 5. leta so brezplačno." },
      { q: "Kakšna je politika odpovedi?", a: "Brezplačna odpoved do 30 dni pred prihodom. Med 30 in 14 dnevi pred prihodom zadržimo 50% akontacije." },
      { q: "So kolesa zares vključena?", a: "Da — 4× kolesa za odrasle in otroke so vam na voljo brezplačno, prav tako športni rekviziti." },
      { q: "Ali je možen prihod s hišnim ljubljenčkom?", a: "Po dogovoru — kontaktirajte nas pred rezervacijo, da uskladimo podrobnosti." },
    ],
  },
  booking: {
    title: "Rezervirajte svoj termin",
    subtitle: "Izberite datume in v 24h potrdimo razpoložljivost.",
    checkin: "Prihod",
    checkout: "Odhod",
    guests: "Število gostov",
    name: "Ime in priimek",
    email: "E-pošta",
    phone: "Telefon",
    message: "Sporočilo (neobvezno)",
    pensioner: "Sem upokojenec",
    pensionerHint: "Dodatnih −10% in 2× BREZPLAČNI karti za bazen.",
    submit: "POŠLJI POVPRAŠEVANJE",
    submitting: "Pošiljam …",
    success: "Hvala!",
    successDesc: "Vaše povpraševanje smo prejeli. Kontaktiramo vas v 24 urah.",
    error: "Napaka pri pošiljanju. Poskusite znova ali nas pokličite.",
    nights: "Število noči",
    pricePerNight: "Cena/noč",
    discount: "Popust",
    total: "Skupaj",
    selectDates: "Izberite datume",
    available: "Prosto",
    booked: "Zasedeno",
    pickRange: "Kliknite prihod, nato odhod.",
    invalidRange: "Izbrani datumi so že zasedeni.",
    nightLabel: "noč",
    nightsLabel: "noči",
    originalPrice: "Redna cena",
    youSave: "Prihranek",
    bestValue: "NAJBOLJŠA VREDNOST",
  },
  footer: {
    tagline: "50m² Hiška v Kampu Terme 3000.",
    contact: "Kontakt",
    quickLinks: "Povezave",
    follow: "Sledite nam",
    rights: "Vse pravice pridržane.",
    location: "Moravske Toplice, Slovenija",
  },
};

const en: Dict = {
  nav: { features: "Features", gallery: "Gallery", reviews: "Reviews", book: "Book Now", contact: "Contact" },
  hero: {
    badge: "House LA VITA · Terme 3000 Moravske Toplice",
    title1: "House La Vita comfort",
    title2: "+ 2 FREE pool tickets",
    subtitle: "Premium 50 m² cabin for 2–6 guests · pool tickets, bikes and full comfort included — in the heart of Prekmurje, Slovenia.",
    ctaCheck: "CHECK AVAILABILITY",
    ctaBook: "BOOK NOW",
    urgent: "May and summer dates fill up fast! Book now to lock in the lower price.",
    discountBadge: "UP TO 30% OFF",
    floatingBadge: "AVAILABLE: Last summer 2026 dates!",
    quickFrom: "From",
    quickNight: "/night · all included",
    distanceBadge: "50 m to the pools",
    promo3Title: "🎁 3+ NIGHTS = BONUS DEAL",
    promo3Desc: "Book 3 or more nights and get an extra 5% off + a welcome surprise on arrival.",
    ticketsBadge: "2× POOL TICKETS INCLUDED",
  },
  value: {
    title: "Everything included",
    subtitle: "No hidden fees. A complete experience for the whole family.",
    items: [
      { title: "2× pool tickets", desc: "Daily entry to Terme 3000 included in the rate." },
      { title: "Extra tickets at discount", desc: "Reduced-price tickets for all house guests." },
      { title: "Kids up to 5 — FREE", desc: "No surcharge for the little ones." },
      { title: "4× bikes + sports gear", desc: "Explore Prekmurje — gear is in the house." },
      { title: "50 m² house (2–6 guests)", desc: "Dormeo mattresses, A/C, fully equipped kitchen, TV." },
      { title: "Parking next to the house", desc: "Total privacy in a quiet, green setting." },
    ],
    valueTitle: "Why guests choose House La Vita",
    valueSubtitle: "Three reasons you'll book tonight.",
    highlights: [
      { tag: "FREE", title: "2× full-day Terme 3000 passes", desc: "Save €40+ per day — included with every booking." },
      { tag: "LUXURY", title: "Dormeo mattresses for cloud-like sleep", desc: "Premium anatomic mattresses in every bedroom." },
      { tag: "PRIVACY", title: "2× private terraces — no neighbours", desc: "Total seclusion in a green setting — your pace, your peace." },
    ],
    trustTitle: "Why trust us",
    trust: ["Verified host", "Secure booking", "iCal synced (real-time)", "Reply within 24h"],
    campBanner: "Experience camping at one of Slovenia's most popular campsites",
    distancePin: "The thermal complex is just 50 m from the house",
  },
  pricing: {
    title: "Transparent pricing",
    subtitle: "More nights = lower price. No surprises.",
    lowSeason: "Nov – May",
    highSeason: "Jun – Aug",
    nightlyFrom: "/night",
    discountsTitle: "Volume discounts",
    discounts: ["3+ nights: −5%", "5+ nights: −10%", "7+ nights: −15%", "10+ nights: −20%"],
    pensionerTitle: "Special offer for seniors",
    pensionerDesc: "Extra −10% + 2× FREE daily pool passes.",
  },
  gallery: { title: "Your home away from home", subtitle: "An authentic Prekmurje cabin, designed for your comfort." },
  reviews: {
    title: "What our guests say",
    subtitle: "Real reviews from Facebook.",
    verified: "Verified guest",
    viewAll: "View all reviews on Facebook",
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything you need to know before booking.",
    items: [
      { q: "How does booking work?", a: "Pick your dates, fill in the form, and within 24h we confirm availability and send payment instructions." },
      { q: "Are the pool tickets really included?", a: "Yes — 2× full-day tickets to Terme 3000 are included in every booking, regardless of length of stay." },
      { q: "How many guests fit?", a: "The 50 m² house comfortably hosts 2–6 people. Children up to 5 stay free." },
      { q: "What is the cancellation policy?", a: "Free cancellation up to 30 days before arrival. Between 30 and 14 days we retain a 50% deposit." },
      { q: "Are the bikes really included?", a: "Yes — 4 bikes for adults and kids plus sports gear are free for guests." },
      { q: "Can we bring a pet?", a: "On request — please contact us before booking so we can align on details." },
    ],
  },
  booking: {
    title: "Book your stay",
    subtitle: "Pick your dates — we confirm availability within 24h.",
    checkin: "Check-in",
    checkout: "Check-out",
    guests: "Guests",
    name: "Full name",
    email: "Email",
    phone: "Phone",
    message: "Message (optional)",
    pensioner: "I am a senior / pensioner",
    pensionerHint: "Extra −10% and 2× FREE pool passes.",
    submit: "SEND BOOKING REQUEST",
    submitting: "Sending …",
    success: "Thank you!",
    successDesc: "We received your request and will reply within 24 hours.",
    error: "Could not send. Please try again or call us.",
    nights: "Nights",
    pricePerNight: "Price/night",
    discount: "Discount",
    total: "Total",
    selectDates: "Select your dates",
    available: "Available",
    booked: "Booked",
    pickRange: "Click check-in, then check-out.",
    invalidRange: "Selected dates are already booked.",
    nightLabel: "night",
    nightsLabel: "nights",
    originalPrice: "Regular price",
    youSave: "You save",
    bestValue: "BEST VALUE",
  },
  footer: {
    tagline: "50m² cabin in Camp Terme 3000.",
    contact: "Contact",
    quickLinks: "Links",
    follow: "Follow us",
    rights: "All rights reserved.",
    location: "Moravske Toplice, Slovenia",
  },
};

const de: Dict = {
  nav: { features: "Vorteile", gallery: "Galerie", reviews: "Bewertungen", book: "Buchen", contact: "Kontakt" },
  hero: {
    badge: "Haus LA VITA · Terme 3000 Moravske Toplice",
    title1: "Komfort des Hauses La Vita",
    title2: "+ 2 GRATIS Thermenkarten",
    subtitle: "Premium 50 m² Haus für 2–6 Personen · inklusive Thermeneintritt, Fahrräder und vollem Komfort — im Herzen von Prekmurje.",
    ctaCheck: "VERFÜGBARKEIT PRÜFEN",
    ctaBook: "JETZT BUCHEN",
    urgent: "Mai- und Sommertermine sind schnell ausgebucht! Jetzt zum günstigeren Preis sichern.",
    discountBadge: "BIS ZU 30% RABATT",
    floatingBadge: "FREI: Letzte Termine Sommer 2026!",
    quickFrom: "Ab",
    quickNight: "/Nacht · alles inklusive",
    distanceBadge: "50 m bis zu den Pools",
    promo3Title: "🎁 3+ NÄCHTE = BONUS-AKTION",
    promo3Desc: "Bei 3 oder mehr Nächten zusätzliche 5% Rabatt + eine Willkommensüberraschung.",
    ticketsBadge: "2× THERMENKARTEN INKLUSIVE",
  },
  value: {
    title: "Alles inklusive",
    subtitle: "Keine versteckten Kosten. Komplettes Erlebnis für die ganze Familie.",
    items: [
      { title: "2× Thermeneintritt", desc: "Tageskarten für Terme 3000 im Preis enthalten." },
      { title: "Zusatztickets vergünstigt", desc: "Reduzierte Eintritte für alle Hausgäste." },
      { title: "Kinder bis 5 GRATIS", desc: "Kein Aufpreis für die Kleinsten." },
      { title: "4× Fahrräder + Sportausrüstung", desc: "Entdecken Sie Prekmurje — Ausrüstung im Haus." },
      { title: "Haus 50 m² (2–6 Personen)", desc: "Dormeo-Matratzen, Klima, voll ausgestattete Küche, TV." },
      { title: "Parkplatz direkt am Haus", desc: "Volle Privatsphäre im grünen Idyll." },
    ],
    valueTitle: "Warum Gäste Haus La Vita wählen",
    valueSubtitle: "Drei Gründe, heute Abend zu buchen.",
    highlights: [
      { tag: "GRATIS", title: "2× Tageskarten Terme 3000", desc: "Ersparnis 40€+ pro Tag — bei jeder Buchung inklusive." },
      { tag: "LUXUS", title: "Dormeo-Matratzen für Schlaf wie auf Wolken", desc: "Anatomische Premium-Matratzen in jedem Schlafzimmer." },
      { tag: "PRIVATSPHÄRE", title: "2× private Terrassen — keine Nachbarn", desc: "Volle Abgeschiedenheit im Grünen — Ihr Tempo, Ihre Ruhe." },
    ],
    trustTitle: "Warum uns vertrauen",
    trust: ["Verifizierter Gastgeber", "Sichere Buchung", "iCal synchronisiert (Echtzeit)", "Antwort in 24h"],
    campBanner: "Erleben Sie Camping auf einem der beliebtesten Campingplätze Sloweniens",
    distancePin: "Der Thermalkomplex ist nur 50 m vom Haus entfernt",
  },
  pricing: {
    title: "Transparente Preise",
    subtitle: "Mehr Nächte = günstiger. Keine Überraschungen.",
    lowSeason: "Nov – Mai",
    highSeason: "Jun – Aug",
    nightlyFrom: "/Nacht",
    discountsTitle: "Mengenrabatte",
    discounts: ["3+ Nächte: −5%", "5+ Nächte: −10%", "7+ Nächte: −15%", "10+ Nächte: −20%"],
    pensionerTitle: "Sonderangebot für Senioren",
    pensionerDesc: "Zusätzliche −10% + 2× GRATIS Tages-Thermeneintritte.",
  },
  gallery: { title: "Ihr Zuhause auf Zeit", subtitle: "Authentisches Prekmurje-Haus, gemacht für Ihren Komfort." },
  reviews: {
    title: "Was unsere Gäste sagen",
    subtitle: "Echte Bewertungen von Facebook.",
    verified: "Verifizierter Gast",
    viewAll: "Alle Bewertungen auf Facebook ansehen",
  },
  faq: {
    title: "Häufige Fragen",
    subtitle: "Alles, was Sie vor der Buchung wissen müssen.",
    items: [
      { q: "Wie funktioniert die Buchung?", a: "Daten wählen, Formular ausfüllen, innerhalb 24h bestätigen wir die Verfügbarkeit und senden Zahlungsanweisungen." },
      { q: "Sind die Thermenkarten wirklich inklusive?", a: "Ja — 2× Tageskarten für Terme 3000 sind in jeder Buchung enthalten, unabhängig von der Aufenthaltsdauer." },
      { q: "Wie viele Gäste passen ins Haus?", a: "Das 50 m² Haus bietet Platz für 2–6 Personen. Kinder bis 5 Jahre gratis." },
      { q: "Wie ist die Stornierungsbedingung?", a: "Kostenlose Stornierung bis 30 Tage vor Anreise. Zwischen 30 und 14 Tagen behalten wir 50% der Anzahlung ein." },
      { q: "Sind die Fahrräder wirklich inklusive?", a: "Ja — 4 Fahrräder für Erwachsene und Kinder sowie Sportausrüstung sind kostenlos." },
      { q: "Können wir ein Haustier mitbringen?", a: "Auf Anfrage — bitte vor der Buchung kontaktieren, um Details abzustimmen." },
    ],
  },
  booking: {
    title: "Aufenthalt buchen",
    subtitle: "Daten wählen — wir bestätigen innerhalb 24h.",
    checkin: "Anreise",
    checkout: "Abreise",
    guests: "Gäste",
    name: "Vor- und Nachname",
    email: "E-Mail",
    phone: "Telefon",
    message: "Nachricht (optional)",
    pensioner: "Ich bin Rentner / Senior",
    pensionerHint: "Zusätzliche −10% und 2× GRATIS Thermenkarten.",
    submit: "ANFRAGE SENDEN",
    submitting: "Senden …",
    success: "Vielen Dank!",
    successDesc: "Wir haben Ihre Anfrage erhalten und melden uns innerhalb 24h.",
    error: "Senden fehlgeschlagen. Bitte erneut versuchen oder anrufen.",
    nights: "Nächte",
    pricePerNight: "Preis/Nacht",
    discount: "Rabatt",
    total: "Gesamt",
    selectDates: "Daten auswählen",
    available: "Frei",
    booked: "Belegt",
    pickRange: "Anreise klicken, dann Abreise.",
    invalidRange: "Ausgewählte Daten sind bereits belegt.",
    nightLabel: "Nacht",
    nightsLabel: "Nächte",
    originalPrice: "Regulärer Preis",
    youSave: "Ersparnis",
    bestValue: "BESTER WERT",
  },
  footer: {
    tagline: "50m² Hütte im Camp Terme 3000.",
    contact: "Kontakt",
    quickLinks: "Links",
    follow: "Folgen Sie uns",
    rights: "Alle Rechte vorbehalten.",
    location: "Moravske Toplice, Slowenien",
  },
};

const hr: Dict = {
  nav: { features: "Pogodnosti", gallery: "Galerija", reviews: "Recenzije", book: "Rezerviraj", contact: "Kontakt" },
  hero: {
    badge: "Kućica LA VITA · Terme 3000 Moravske Toplice",
    title1: "Udobnost kućice La Vita",
    title2: "+ 2 GRATIS ulaznice za bazen",
    subtitle: "Premium kućica 50 m² za 2–6 osoba · uključene ulaznice za bazen, bicikli i potpuna udobnost — u srcu Prekmurja.",
    ctaCheck: "PROVJERI DOSTUPNOST",
    ctaBook: "REZERVIRAJ ODMAH",
    urgent: "Svibanjski i ljetni termini brzo se popunjavaju! Rezervirajte sada po nižoj cijeni.",
    discountBadge: "DO 30% JEFTINIJE",
    floatingBadge: "SLOBODNO: Zadnji termini ljeto 2026!",
    quickFrom: "Već od",
    quickNight: "/noć · sve uključeno",
    distanceBadge: "50 m do bazena",
    promo3Title: "🎁 3+ NOĆI = DODATNA AKCIJA",
    promo3Desc: "Uz rezervaciju 3 ili više noći ostvarite dodatnih 5% popusta + dobrodošlicu na poklon.",
    ticketsBadge: "2× ULAZNICE ZA BAZEN UKLJUČENE",
  },
  value: {
    title: "Sve uključeno u cijenu",
    subtitle: "Bez skrivenih troškova. Potpuni doživljaj za cijelu obitelj.",
    items: [
      { title: "2× ulaznice za bazen", desc: "Dnevni ulaz u Terme 3000 uključen u cijenu." },
      { title: "Dodatne ulaznice s popustom", desc: "Povoljnije ulaznice za sve goste kućice." },
      { title: "Djeca do 5 godina BESPLATNO", desc: "Bez doplate za najmlađe." },
      { title: "4× bicikla + sportska oprema", desc: "Istražite Prekmurje — oprema je u kućici." },
      { title: "Kućica 50 m² (2–6 osoba)", desc: "Dormeo madraci, klima, opremljena kuhinja, TV." },
      { title: "Parking uz kućicu", desc: "Potpuna privatnost u zelenom okruženju." },
    ],
    valueTitle: "Zašto gosti biraju Kućicu La Vita",
    valueSubtitle: "Tri razloga zašto ćete rezervirati još večeras.",
    highlights: [
      { tag: "BESPLATNO", title: "2× cjelodnevne ulaznice Terme 3000", desc: "Ušteda 40€+ dnevno — uključeno u svaku rezervaciju." },
      { tag: "LUKSUZ", title: "Dormeo madraci za san kao u oblacima", desc: "Anatomski premium madraci u svakoj sobi." },
      { tag: "PRIVATNOST", title: "2× privatne terase — bez susjeda", desc: "Potpuna privatnost u zelenom okruženju — vaš ritam, vaš mir." },
    ],
    trustTitle: "Zašto nam vjerovati",
    trust: ["Provjereni domaćin", "Sigurna rezervacija", "iCal sinkronizirano (real-time)", "Odgovor u 24h"],
    campBanner: "Doživite kampiranje u jednom od najpopularnijih kampova u Sloveniji",
    distancePin: "Termalni kompleks je udaljen samo 50 m od kućice",
  },
  pricing: {
    title: "Transparentne cijene",
    subtitle: "Više noći = niža cijena. Bez iznenađenja.",
    lowSeason: "Stu – Svi",
    highSeason: "Lip – Kol",
    nightlyFrom: "/noć",
    discountsTitle: "Popusti za više noći",
    discounts: ["3+ noći: −5%", "5+ noći: −10%", "7+ noći: −15%", "10+ noći: −20%"],
    pensionerTitle: "Posebna ponuda za umirovljenike",
    pensionerDesc: "Dodatnih −10% + 2× BESPLATNE dnevne ulaznice za bazen.",
  },
  gallery: { title: "Vaš dom daleko od doma", subtitle: "Autentična prekmurska kućica za vašu udobnost." },
  reviews: {
    title: "Što kažu naši gosti",
    subtitle: "Stvarne recenzije s Facebooka.",
    verified: "Provjereni gost",
    viewAll: "Sve recenzije na Facebooku",
  },
  faq: {
    title: "Česta pitanja",
    subtitle: "Sve što trebate znati prije rezervacije.",
    items: [
      { q: "Kako ide rezervacija?", a: "Odaberite datume, ispunite obrazac i u roku 24h potvrđujemo dostupnost te šaljemo upute za plaćanje." },
      { q: "Jesu li ulaznice za bazen stvarno uključene?", a: "Da — 2× cjelodnevne ulaznice za Terme 3000 uključene su u svaku rezervaciju, neovisno o broju noći." },
      { q: "Koliko gostiju može u kućicu?", a: "Kućica od 50 m² udobno prima 2–6 osoba. Djeca do 5 godina besplatno." },
      { q: "Kakva je politika otkazivanja?", a: "Besplatno otkazivanje do 30 dana prije dolaska. Između 30 i 14 dana zadržavamo 50% akontacije." },
      { q: "Jesu li bicikli stvarno uključeni?", a: "Da — 4 bicikla za odrasle i djecu te sportska oprema su besplatni." },
      { q: "Možemo li dovesti kućnog ljubimca?", a: "Po dogovoru — kontaktirajte nas prije rezervacije za detalje." },
    ],
  },
  booking: {
    title: "Rezervirajte boravak",
    subtitle: "Odaberite datume — potvrđujemo u roku 24h.",
    checkin: "Dolazak",
    checkout: "Odlazak",
    guests: "Broj gostiju",
    name: "Ime i prezime",
    email: "E-pošta",
    phone: "Telefon",
    message: "Poruka (neobavezno)",
    pensioner: "Umirovljenik sam",
    pensionerHint: "Dodatnih −10% i 2× BESPLATNE ulaznice za bazen.",
    submit: "POŠALJI UPIT",
    submitting: "Slanje …",
    success: "Hvala!",
    successDesc: "Primili smo upit i javljamo se u roku 24 sata.",
    error: "Greška pri slanju. Pokušajte ponovno ili nas nazovite.",
    nights: "Broj noći",
    pricePerNight: "Cijena/noć",
    discount: "Popust",
    total: "Ukupno",
    selectDates: "Odaberite datume",
    available: "Slobodno",
    booked: "Zauzeto",
    pickRange: "Kliknite dolazak, zatim odlazak.",
    invalidRange: "Odabrani datumi su zauzeti.",
    nightLabel: "noć",
    nightsLabel: "noći",
    originalPrice: "Redovna cijena",
    youSave: "Ušteda",
    bestValue: "NAJBOLJA VRIJEDNOST",
  },
  footer: {
    tagline: "Kućica 50m² u Kampu Terme 3000.",
    contact: "Kontakt",
    quickLinks: "Linkovi",
    follow: "Pratite nas",
    rights: "Sva prava pridržana.",
    location: "Moravske Toplice, Slovenija",
  },
};

export const dictionaries: Record<Lang, Dict> = { sl, en, de, hr };

export const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "sl",
  setLang: () => {},
  t: sl,
});

export function useI18n() {
  return useContext(I18nContext);
}

/* ---------- Pricing engine ---------- */
export function nightlyRate(date: Date): number {
  const m = date.getMonth(); // 0..11
  // High season: Jun (5) – Aug (7)
  return m >= 5 && m <= 7 ? 100 : 80;
}

export function discountPct(nights: number, isPensioner: boolean): number {
  let d = 0;
  if (nights >= 10) d = 20;
  else if (nights >= 7) d = 15;
  else if (nights >= 5) d = 10;
  else if (nights >= 3) d = 5;
  if (isPensioner) d += 10;
  return Math.min(d, 40);
}

export function calcStay(checkIn: Date | null, checkOut: Date | null, isPensioner: boolean) {
  if (!checkIn || !checkOut || checkOut <= checkIn) {
    return { nights: 0, base: 0, discount: 0, total: 0, avgRate: 0 };
  }
  const ms = checkOut.getTime() - checkIn.getTime();
  const nights = Math.round(ms / (1000 * 60 * 60 * 24));
  let base = 0;
  for (let i = 0; i < nights; i++) {
    const d = new Date(checkIn);
    d.setDate(d.getDate() + i);
    base += nightlyRate(d);
  }
  const pct = discountPct(nights, isPensioner);
  const discount = Math.round(base * (pct / 100));
  const total = base - discount;
  const avgRate = nights > 0 ? Math.round(base / nights) : 0;
  return { nights, base, discount, total, avgRate, pct };
}