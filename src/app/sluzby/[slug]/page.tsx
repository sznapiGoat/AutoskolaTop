import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Phone } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink, buttonClass } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { getFaqs, getService, services } from "@/lib/content";
import { faqLd, pageMeta, serviceLd } from "@/lib/seo";
import { formatPrice, site } from "@/lib/site";

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
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
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

      <section className="container-page grid gap-10 pb-16 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] bg-surface-2">
            <Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="animate-settle object-cover" />
          </div>

          <div className="mt-14 space-y-14">
            {service.body.map((block) => (
              <Reveal key={block.heading}>
                <h2 className="font-display text-3xl font-bold md:text-4xl">{block.heading}</h2>
                {block.text.map((t) => (
                  <p key={t} className="mt-4 max-w-[65ch] text-lg leading-relaxed text-muted">
                    {t}
                  </p>
                ))}
                {block.list && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {block.list.map((li) => (
                      <li key={li} className="flex gap-3 rounded-2xl bg-surface-2 p-4 leading-snug">
                        <CheckCircle size={22} weight="fill" className="shrink-0 text-accent" aria-hidden="true" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            {isLicence && (
              <Reveal className="grid items-center gap-8 rounded-[var(--radius-card)] border border-line bg-surface p-6 md:grid-cols-[1fr_14rem] md:p-8">
                <div>
                  <h2 className="font-display text-3xl font-bold">Jaký přívěs smíte táhnout?</h2>
                  <p className="mt-4 leading-relaxed text-muted">
                    S řidičákem sk. B zapojíte přívěs do 750 kg, případně těžší, pokud souprava nepřesáhne 3 500 kg.
                    Pro soupravu do 4 250 kg potřebujete rozšíření B96, pro ještě těžší skupinu B+E.
                  </p>
                </div>
                <div className="relative mx-auto aspect-[541/960] w-48 overflow-hidden rounded-2xl md:w-full">
                  <Image
                    src="/images/pripojne-vozidlo-skupina-b.webp"
                    alt="Infografika Autoškoly TOP: přípojné vozidlo pro skupiny B, B96 a B+E"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            )}
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal from="right" className="rounded-[var(--radius-card)] bg-panel p-7 text-panel-ink md:p-8">
            <p className="text-sm text-panel-ink/70">Cena</p>
            <p className="mt-1 font-display text-4xl font-bold">
              {service.pricePrefix && <span className="text-2xl font-semibold">{service.pricePrefix} </span>}
              {formatPrice(service.price)}
            </p>
            <p className="mt-1 text-sm text-panel-ink/70">{service.priceNote}</p>
            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {service.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <CheckCircle size={20} weight="fill" className="shrink-0 text-accent" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <ButtonLink href={`/kontakt?sluzba=${service.slug}`} size="lg">
                {isLicence ? "Chci řidičák" : "Objednat"}
              </ButtonLink>
              <a href={site.phoneHref} className={buttonClass("ghost", "lg", "text-panel-ink hover:bg-white/10")}>
                <Phone size={18} weight="bold" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </div>
            {isLicence && (
              <Link href="/cenik" className="mt-4 flex items-center justify-center gap-1.5 text-sm text-panel-ink/70 hover:text-panel-ink">
                Porovnat varianty kurzu
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </Link>
            )}
          </Reveal>
        </aside>
      </section>

      {faqs.length > 0 && (
        <section className="container-page py-16" aria-labelledby="faq-sluzba">
          <h2 id="faq-sluzba" className="font-display text-3xl font-bold md:text-4xl">
            Časté dotazy
          </h2>
          <Accordion items={faqs} className="mt-8 max-w-3xl" />
          <JsonLd data={faqLd(faqs)} />
        </section>
      )}

      <section className="container-page py-16" aria-labelledby="dalsi-sluzby">
        <h2 id="dalsi-sluzby" className="font-display text-3xl font-bold md:text-4xl">
          Mohlo by vás zajímat
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/sluzby/${s.slug}`}
                className="group flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-4 transition-colors hover:border-ink"
              >
                <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                  <Image src={s.image} alt="" fill sizes="80px" className="object-cover" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">{s.short}</p>
                  <p className="text-sm text-muted">{formatPrice(s.price)}</p>
                </div>
                <ArrowRight size={18} weight="bold" className="ml-auto transition-transform group-hover:translate-x-1" aria-hidden="true" />
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
