import { Suspense } from "react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { IconClock, IconExternal, IconMail, IconPhone, IconPin } from "@/components/icons/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Kontakt a přihláška",
  description:
    "Přihlaste se do Autoškoly TOP v Rakovníku. Ottova 418, budova Raportu, 2. patro. Telefon 777 660 186, e-mail info@autoskolatop.cz, Po-Pá 8:00-18:00.",
  path: "/kontakt",
});

const contacts = [
  { Icon: IconPhone, label: "Telefon", value: site.phone, href: site.phoneHref },
  { Icon: WhatsappLogo, label: "WhatsApp", value: "Napište nám zprávu", href: site.whatsappHref, external: true },
  { Icon: IconMail, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
  { Icon: IconClock, label: "Provozní doba", value: site.hours.label, note: site.hours.note },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Pojďme na to"
        lead="Zavolejte, napište nebo vyplňte přihlášku. Domluvíme kurz, termín nástupu i první jízdu."
        crumbs={[{ name: "Kontakt", path: "/kontakt" }]}
      />

      <section className="container-page grid gap-10 pb-24 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        <Suspense fallback={<div className="min-h-[40rem] animate-pulse rounded-[var(--radius-card)] bg-surface-2" />}>
          <ContactForm />
        </Suspense>

        <div className="grid content-start gap-6">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {contacts.map(({ Icon, label, value, href, note, external }) => {
              const inner = (
                <>
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-text">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">{label}</span>
                    <span className="block font-semibold">{value}</span>
                    {note && <span className="block text-sm text-muted">{note}</span>}
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-ink"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="rounded-[var(--radius-card)] bg-panel p-6 text-panel-ink md:p-7">
            <div className="flex items-start gap-3">
              <IconPin size={24} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h2 className="font-display text-xl font-semibold">Kde máme učebnu</h2>
                <address className="mt-1 not-italic text-panel-ink/75">
                  {site.address.street}, {site.address.zip} {site.address.city}
                  <br />
                  {site.address.note}
                </address>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-[#ff8a47]"
                >
                  Navigovat
                  <IconExternal size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <MapEmbed />
        </div>
      </section>
    </>
  );
}
