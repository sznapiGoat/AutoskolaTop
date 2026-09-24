import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Coins, Info, Receipt } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/PageHero";
import { PlanCards } from "@/components/sections/PlanCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { PromoGate } from "@/components/ui/PromoGate";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { faqs, fees, services } from "@/lib/content";
import { faqLd, pageMeta } from "@/lib/seo";
import { formatPrice, promo } from "@/lib/site";

export const metadata = pageMeta({
  title: "Ceník kurzů",
  description:
    "Ceník Autoškoly TOP Rakovník. Řidičský průkaz sk. B od 18 500 Kč, platba ve 2 splátkách bez navýšení. Kurz parkování, kondiční jízdy, školení řidičů.",
  path: "/cenik",
});

const payment = [
  { Icon: Coins, title: "Záloha při nástupu", text: "Minimálně 10 000 Kč, když začínáte kurz." },
  { Icon: CalendarCheck, title: "Doplatek", text: "Nejpozději 14 dní před ukončením kurzu." },
  { Icon: Receipt, title: "Cena je konečná", text: "Nezahrnuje jen správní poplatek za zkoušku, který platíte úřadu." },
];

const paymentFaqs = faqs.filter((f) => f.category === "Platba");

export default function PricingPage() {
  const extras = services.filter((s) => s.slug !== "ridicsky-prukaz-b");
  return (
    <>
      <PageHero
        title="Ceník bez překvapení"
        lead="Cena kurzu je konečná a zaplatíte ji ve dvou splátkách bez navýšení. Příplatek je jen správní poplatek za zkoušku."
        crumbs={[{ name: "Ceník", path: "/cenik" }]}
      />

      <section className="container-page pb-16" aria-labelledby="kurzy-b">
        <PromoGate>
          <Reveal className="mb-8 flex flex-col gap-2 rounded-[var(--radius-card)] bg-accent p-6 text-on-accent sm:flex-row sm:items-center sm:justify-between md:px-8">
            <p className="font-display text-2xl font-bold uppercase">
              {promo.label} jen za {formatPrice(promo.price)}
            </p>
            <p className="text-on-accent/80">Platí {promo.untilLabel}. Zavolejte a domluvte si nástup.</p>
          </Reveal>
        </PromoGate>
        <h2 id="kurzy-b" className="mb-8 font-display text-4xl font-extrabold md:text-5xl">
          Řidičský průkaz sk. B
        </h2>
        <PlanCards />
      </section>

      <section className="bg-surface-2/60 py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-extrabold md:text-5xl">Jak se platí</h2>
            <RevealGroup className="mt-8 grid gap-3">
              {payment.map(({ Icon, title, text }) => (
                <RevealItem key={title} className="flex gap-4 rounded-[var(--radius-card)] bg-surface p-5">
                  <Icon size={28} weight="duotone" className="shrink-0 text-accent-text" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">{title}</span>
                    <span className="text-muted">{text}</span>
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <div>
            <h2 className="font-display text-4xl font-extrabold md:text-5xl">Příplatky a poplatky</h2>
            <ul className="mt-8 grid gap-3">
              {fees.map((f) => (
                <li key={f.label} className="flex items-center justify-between gap-6 rounded-[var(--radius-card)] bg-surface p-5">
                  <span>
                    <span className="block">{f.label}</span>
                    {f.note && <span className="text-sm text-muted">{f.note}</span>}
                  </span>
                  <span className="shrink-0 font-display text-xl font-bold tabular-nums">{formatPrice(f.price)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex gap-2 text-sm text-muted">
              <Info size={18} className="shrink-0" aria-hidden="true" />
              Jízdu, na kterou nemůžete, stačí omluvit alespoň 8 hodin předem. Pak je zdarma.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24" aria-labelledby="dalsi">
        <h2 id="dalsi" className="font-display text-4xl font-extrabold md:text-5xl">
          Další kurzy a služby
        </h2>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {extras.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/sluzby/${s.slug}`}
                className="group flex items-center justify-between gap-6 rounded-[var(--radius-card)] border border-line bg-surface p-5 transition-colors hover:border-ink"
              >
                <span>
                  <span className="block font-display text-xl font-bold uppercase">{s.name}</span>
                  <span className="text-sm text-muted">{s.priceNote}</span>
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  <span className="font-display text-2xl font-bold tabular-nums">{formatPrice(s.price)}</span>
                  <ArrowUpRight size={18} weight="bold" className="text-muted transition-colors group-hover:text-ink" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page grid gap-10 pb-16 lg:grid-cols-[1fr_1.6fr] lg:gap-16" aria-labelledby="faq-platba">
        <h2 id="faq-platba" className="font-display text-4xl font-extrabold md:text-5xl">
          Dotazy k platbě
        </h2>
        <Accordion items={paymentFaqs} />
        <JsonLd data={faqLd(paymentFaqs)} />
      </section>

      <CtaBand title="Vyberte si kurz. Zbytek domluvíme." />
    </>
  );
}
