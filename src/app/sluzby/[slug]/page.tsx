import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/PageHero";
import { PlanCards } from "@/components/sections/PlanCards";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { CtaBand } from "@/components/sections/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { getFaqs, getService, services } from "@/lib/content";
import { faqLd, pageMeta, serviceLd } from "@/lib/seo";
import { formatPrice } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMeta({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/sluzby/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const faqs = getFaqs(service.faqIds);
  const others = services.filter((s) => s.slug !== service.slug);
  const isLicence = service.slug === "ridicsky-prukaz-b";

  return (
    <>
      <PageHero
        title={service.name}
        lead={service.lead}
        crumbs={[
          { name: "Služby", path: "/sluzby" },
          { name: service.short, path: `/sluzby/${service.slug}` },
        ]}
      />

      <ServiceDetail service={service}>
        {isLicence && (
          <div className="mt-12 grid items-center gap-6 rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:grid-cols-[1fr_9rem]">
            <div>
              <h2 className="font-display text-2xl font-bold">Jaký přívěs smíte táhnout?</h2>
              <p className="mt-3 leading-relaxed text-muted">
                S řidičákem sk. B zapojíte přívěs do 750 kg, případně těžší, pokud souprava nepřesáhne 3 500 kg. Pro
                soupravu do 4 250 kg potřebujete rozšíření B96, pro ještě těžší skupinu B+E.
              </p>
            </div>
            <div className="relative mx-auto aspect-[541/960] w-36 overflow-hidden rounded-lg">
              <Image
                src="/images/pripojne-vozidlo-skupina-b.webp"
                alt="Infografika Autoškoly TOP: přípojné vozidlo pro skupiny B, B96 a B+E"
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </ServiceDetail>

      {isLicence && (
        <section className="bg-surface-2/60 py-16 md:py-24" aria-labelledby="varianty">
          <div className="container-page">
            <h2 id="varianty" className="font-display text-5xl font-extrabold md:text-6xl">
              Vyberte si variantu kurzu
            </h2>
            <p className="mt-4 max-w-[60ch] text-lg text-muted">
              Všechny varianty obsahují zkoušku nanečisto, jízdu do Prahy a první závěrečnou zkoušku.
            </p>
            <div className="mt-10">
              <PlanCards compact />
            </div>
            <Link href="/cenik" className="group mt-8 inline-flex items-center gap-2 font-semibold text-accent-text">
              Kompletní ceník, platby a poplatky
              <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="container-page py-16 md:py-24" aria-labelledby="faq-sluzba">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <h2 id="faq-sluzba" className="font-display text-4xl font-extrabold md:text-5xl">
                Časté dotazy
              </h2>
              <Link href="/caste-dotazy" className="group mt-6 inline-flex items-center gap-2 font-semibold text-accent-text">
                Všechny dotazy
                <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <Accordion items={faqs} />
          </div>
          <JsonLd data={faqLd(faqs)} />
        </section>
      )}

      <section className="container-page py-16" aria-labelledby="dalsi-sluzby">
        <h2 id="dalsi-sluzby" className="font-display text-4xl font-extrabold md:text-5xl">
          Další služby
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/sluzby/${s.slug}`}
                className="group flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-3 transition-colors hover:border-ink"
              >
                <div className="relative size-20 shrink-0 overflow-hidden rounded-lg">
                  <Image src={s.image} alt="" fill sizes="80px" className="object-cover" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold uppercase">{s.short}</p>
                  <p className="text-sm text-muted">
                    {s.pricePrefix ? `${s.pricePrefix} ` : ""}
                    {formatPrice(s.price)}
                  </p>
                </div>
                <ArrowRight size={18} weight="bold" className="mr-2 ml-auto transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <JsonLd data={serviceLd(service)} />
      <CtaBand />
    </>
  );
}
