import { services } from "./content";

export const site = {
  name: "Autoškola TOP",
  legalName: "Autoškola Top Rakovník",
  url: "https://www.autoskolatop.cz",
  tagline: "Vyjeďte s námi tím správným směrem.",
  description:
    "Autoškola TOP v Rakovníku. Řidičský průkaz sk. B v klidu a bez křiku, jízdy do Prahy v ceně kurzu, kurz parkování, kondiční jízdy a školení řidičů.",
  phone: "+420 777 660 186",
  phoneHref: "tel:+420777660186",
  phoneDisplay: "777 660 186",
  whatsappHref: "https://wa.me/420777660186",
  email: "info@autoskolatop.cz",
  ico: "74749579",
  address: {
    street: "Ottova 418",
    city: "Rakovník",
    zip: "269 01",
    region: "Středočeský kraj",
    note: "Budova Raportu naproti Rakoně, 2. patro",
  },
  hours: {
    label: "Po-Pá 8:00-18:00",
    note: "po předchozí telefonické domluvě",
    schema: "Mo-Fr 08:00-18:00",
  },
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Ottova+418+Rakovn%C3%ADk",
  mapsEmbed: "https://www.google.com/maps?q=Ottova+418,+269+01+Rakovn%C3%ADk&output=embed",
  social: {
    instagram: "https://www.instagram.com/autoskolatop_rakovnik/",
    facebook: "https://www.facebook.com/AutoskolaTopRakovnik/",
  },
  facebookRating: { percent: 100, reviews: 13 },
} as const;

/** Time-limited promo. Hidden automatically once `until` has passed. */
export const promo = {
  price: 15900,
  label: "Akční cena kurzu sk. B",
  until: "2026-09-30T23:59:59+02:00",
  untilLabel: "do konce září",
};

export function isPromoActive(now = new Date()) {
  return now <= new Date(promo.until);
}

const servicesNav = services.map((s) => ({ href: `/sluzby/${s.slug}`, label: s.short }));

export type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };

export const nav: NavItem[] = [
  { href: "/sluzby", label: "Služby", children: servicesNav },
  { href: "/cenik", label: "Ceník" },
  { href: "/caste-dotazy", label: "Časté dotazy" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
];

export function formatPrice(value: number) {
  return `${value.toLocaleString("cs-CZ").replace(/\s/g, " ")} Kč`;
}
