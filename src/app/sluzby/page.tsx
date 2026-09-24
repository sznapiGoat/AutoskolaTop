import Image from "next/image";
import { CalendarCheck, Coins, FileText, FirstAidKit, IdentificationCard, Info, Receipt } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/PageHero";
import { PlanCards } from "@/components/sections/PlanCards";
import { SectionNav } from "@/components/sections/SectionNav";
import { ServiceBand, ServiceGrid, ServiceSplit } from "@/components/sections/ServiceBlocks";
import { CtaBand } from "@/components/sections/CtaBand";
import { RoadProcess } from "@/components/home/RoadProcess";
import { JsonLd } from "@/components/ui/JsonLd";
import { PromoGate } from "@/components/ui/PromoGate";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fees, getService, services, type Service } from "@/lib/content";
import { pageMeta, serviceLd } from "@/lib/seo";
import { formatPrice, promo } from "@/lib/site";

export const metadata = pageMeta({
  title: "Služby a ceník",
  description:
    "Řidičský průkaz sk. B od 18 500 Kč, jízdy do Prahy, kurz parkování, kondiční jízdy, školení řidičů referentů a vrácení řidičského průkazu v Rakovníku. Ceník a průběh kurzu.",
  path: "/sluzby",
});

const s = (slug: string) => getService(slug) as Service;

const sectionNav = [
  { id: "ridicsky-prukaz-b", label: "Řidičák sk. B" },
  { id: "cenik", label: "Ceník" },
  { id: "jizdy-do-prahy", label: "Praha" },
  { id: "kurz-parkovani", label: "Parkování" },
  { id: "kondicni-jizdy", label: "Kondiční jízdy" },
  { id: "skoleni-ridicu", label: "Školení řidičů" },
  { id: "vraceni-ridicskeho-prukazu", label: "Vrácení ŘP" },
  { id: "prubeh", label: "Průběh kurzu" },
];

const payment = [
  { Icon: Coins, title: "Záloha při nástupu", text: "Minimálně 10 000 Kč, když začínáte kurz." },
  { Icon: CalendarCheck, title: "Doplatek", text: "Nejpozději 14 dní před ukončením kurzu." },
  { Icon: Receipt, title: "Cena je konečná", text: "Nezahrnuje jen správní poplatek za zkoušku, který platíte úřadu." },
];

const documents = [
  { Icon: FileText, title: "Žádost o přijetí k výuce a výcviku", text: "Formulář, který vyplníte u nás při zápisu." },
  { Icon: FirstAidKit, title: "Posudek od praktického lékaře", text: "Lékař potvrdí zdravotní způsobilost přímo na žádosti." },
  { Icon: IdentificationCard, title: "Občanský průkaz", text: "Pro ověření totožnosti a trvalého pobytu v ČR." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Služby a ceník"
        lead="Od prvního řidičáku po návrat za volant. Všechno na jednom místě: co nabízíme, kolik to stojí a jak kurz probíhá."
        crumbs={[{ name: "Služby a ceník", path: "/sluzby" }]}
      />
      <SectionNav items={sectionNav} />

      <ServiceSplit service={s("ridicsky-prukaz-b")}>
        <div className="mt-12 grid items-center gap-6 rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:grid-cols-[1fr_9rem]">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase">Jaký přívěs smíte táhnout?</h3>
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
      </ServiceSplit>

      <section id="cenik" aria-labelledby="cenik-h" className="bg-surface-2/60 py-16 md:py-24">
        <div className="container-page">
          <h2 id="cenik-h" className="font-display text-5xl font-extrabold md:text-6xl">
            Ceník kurzu sk. B
          </h2>
          <p className="mt-4 max-w-[60ch] text-lg text-muted">
            Cena je konečná a zaplatíte ji ve dvou splátkách bez navýšení. Příplatek je jen správní poplatek za zkoušku.
          </p>
          <PromoGate>
            <Reveal className="mt-8 flex flex-col gap-2 rounded-[var(--radius-card)] bg-accent p-6 text-on-accent sm:flex-row sm:items-center sm:justify-between md:px-8">
              <p className="font-display text-2xl font-bold uppercase">
                {promo.label} jen za {formatPrice(promo.price)}
              </p>
              <p className="text-on-accent/80">Platí {promo.untilLabel}. Zavolejte a domluvte si nástup.</p>
            </Reveal>
          </PromoGate>
          <div className="mt-10">
            <PlanCards />
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-3xl font-bold uppercase">Jak se platí</h3>
              <RevealGroup className="mt-6 grid gap-3">
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
              <h3 className="font-display text-3xl font-bold uppercase">Příplatky a poplatky</h3>
              <ul className="mt-6 grid gap-3">
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
        </div>
      </section>

      <div className="py-12 md:py-20">
        <ServiceBand service={s("jizdy-do-prahy")} />
        <ServiceGrid
          services={[s("kurz-parkovani"), s("kondicni-jizdy"), s("skoleni-ridicu"), s("vraceni-ridicskeho-prukazu")]}
        />
      </div>

      <section id="prubeh" aria-label="Průběh kurzu">
        <RoadProcess />
        <div className="container-page py-16 md:py-24">
          <h2 className="font-display text-5xl font-extrabold md:text-6xl">Co si připravit na začátek</h2>
          <p className="mt-4 max-w-[55ch] text-lg text-muted">
            Stačí tři věci. S žádostí vám rádi pomůžeme, pošleme ji e-mailem nebo si ji vyzvednete v učebně.
          </p>
          <RevealGroup className="mt-10 grid gap-4 md:grid-cols-3">
            {documents.map(({ Icon, title, text }) => (
              <RevealItem key={title} className="rounded-[var(--radius-card)] border border-line bg-surface p-7">
                <span className="grid size-12 place-items-center rounded-lg bg-accent-soft text-accent-text">
                  <Icon size={24} weight="duotone" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={services.map(serviceLd)} />
    </>
  );
}
