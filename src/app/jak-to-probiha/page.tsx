import Image from "next/image";
import { FileText, FirstAidKit, IdentificationCard } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { RoadProcess } from "@/components/home/RoadProcess";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { faqs } from "@/lib/content";
import { faqLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Jak probíhá kurz autoškoly",
  description:
    "Jak získat řidičský průkaz v Autoškole TOP Rakovník: přihláška, lékařská prohlídka, teorie, 28 hodin jízd, zkouška nanečisto a závěrečná zkouška.",
  path: "/jak-to-probiha",
});

const examFaqs = faqs.filter((f) => f.category === "Zkouška");

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="Jak to u nás probíhá"
        lead="Od prvního telefonátu po řidičák v peněžence. Tady je celá cesta, krok za krokem."
        crumbs={[{ name: "Jak to probíhá", path: "/jak-to-probiha" }]}
      />

      <RoadProcess showLink={false} />

      <section className="container-page py-20 md:py-28" aria-labelledby="doklady">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal from="left" className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] lg:aspect-square">
            <Image
              src="/images/ucebna-autoskola-top-rakovnik.webp"
              alt="Učebna Autoškoly TOP s obrazovkou, stolem a nástěnkami"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div>
            <h2 id="doklady" className="font-display text-4xl leading-[1.05] font-bold md:text-5xl">
              Co si připravit na začátek
            </h2>
            <p className="mt-4 max-w-[55ch] text-lg text-muted">
              Stačí tři věci. S žádostí vám rádi pomůžeme, pošleme ji e-mailem nebo si ji vyzvednete v učebně.
            </p>
            <RevealGroup className="mt-8 grid gap-3">
              {[
                { Icon: FileText, title: "Žádost o přijetí k výuce a výcviku", text: "Formulář, který vyplníte u nás při zápisu." },
                { Icon: FirstAidKit, title: "Posudek od praktického lékaře", text: "Lékař potvrdí zdravotní způsobilost přímo na žádosti." },
                { Icon: IdentificationCard, title: "Občanský průkaz", text: "Pro ověření totožnosti a trvalého pobytu v ČR." },
              ].map(({ Icon, title, text }) => (
                <RevealItem key={title} className="flex gap-4 rounded-2xl border border-line bg-surface p-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-text">
                    <Icon size={24} weight="duotone" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold">{title}</span>
                    <span className="text-muted">{text}</span>
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="container-page pb-16" aria-labelledby="zkouska">
        <h2 id="zkouska" className="font-display text-3xl font-bold md:text-4xl">
          Závěrečná zkouška
        </h2>
        <Accordion items={examFaqs} className="mt-8 max-w-3xl" />
        <JsonLd data={faqLd(examFaqs)} />
      </section>

      <CtaBand />
    </>
  );
}
