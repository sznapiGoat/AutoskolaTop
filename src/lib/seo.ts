import type { Metadata } from "next";
import { site } from "./site";
import type { Faq, Service } from "./content";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMeta({ title, description, path, image }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name} Rakovník`,
      description,
      url: path,
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}

const businessId = `${site.url}/#autoskola`;

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    "@id": businessId,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: `${site.url}/icon-512.png`,
    image: `${site.url}/images/autoskola-top-vuz-mesto.webp`,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    taxID: site.ico,
    priceRange: "500 Kč - 25 900 Kč",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.zip,
      addressRegion: site.address.region,
      addressCountry: "CZ",
    },
    areaServed: [
      { "@type": "City", name: "Rakovník" },
      { "@type": "AdministrativeArea", name: "okres Rakovník" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    hasMap: site.mapsHref,
    sameAs: [site.social.facebook, site.social.instagram],
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Úvod", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqLd(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.seoDescription,
    url: `${site.url}/sluzby/${service.slug}`,
    provider: { "@id": businessId },
    areaServed: "Rakovník",
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "CZK",
      availability: "https://schema.org/InStock",
    },
  };
}
