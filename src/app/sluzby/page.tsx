import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { services } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { formatPrice } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMeta({
  title: "Služby autoškoly",
  description:
    "Řidičský průkaz sk. B, jízdy do Prahy, kurz parkování, kondiční jízdy, školení řidičů referentů a vrácení řidičského průkazu v Rakovníku.",
  path: "/sluzby",
});

export default function ServicesPage() {
  const [main, ...rest] = services;
  return (
    <>
      <PageHero
        title="Od prvního řidičáku po návrat za volant"
        lead="Vyberte si, s čím vám můžeme pomoct. U každé služby najdete cenu, průběh i odpovědi na časté otázky."
        crumbs={[{ name: "Služby", path: "/sluzby" }]}
      />

      <section className="container-page pb-8">
        <div className="animate-fade-up" style={{ "--delay": "0.3s" } as CSSProperties}>
            <Link
              href={`/sluzby/${main.slug}`}
              className="group grid overflow-hidden rounded-[var(--radius-card)] bg-panel text-panel-ink md:grid-cols-2"
            >
              <div className="relative min-h-72 md:min-h-[26rem]">
                <Image
                  src={main.image}
                  alt={main.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between gap-10 p-8 md:p-12">
                <div>
                  <p className="font-semibold text-accent">Nejčastější volba</p>
                  <h2 className="mt-3 font-display text-4xl leading-[1.05] font-bold md:text-5xl">{main.name}</h2>
                  <p className="mt-4 max-w-md text-lg text-panel-ink/75">{main.lead}</p>
                </div>
                <div className="flex items-end justify-between gap-6">
                  <p className="text-panel-ink/70">
                    od <span className="font-display text-3xl font-bold text-panel-ink">{formatPrice(main.price)}</span>
                  </p>
                  <span className="grid size-14 place-items-center rounded-full bg-accent text-on-accent transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={24} weight="bold" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
        </div>

        <RevealGroup className="mt-4 grid gap-4 lg:grid-cols-6">
          {rest.map((s, i) => (
            <RevealItem key={s.slug} className={cn(i < 2 ? "lg:col-span-3" : "lg:col-span-2")}>
              <Link
                href={`/sluzby/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-shadow hover:shadow-soft"
              >
                <div className={cn("relative overflow-hidden bg-surface-2", i < 2 ? "aspect-[16/9]" : "aspect-[4/3]")}>
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h2 className="font-display text-2xl font-semibold">{s.name}</h2>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">{s.pitch}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="font-semibold">{formatPrice(s.price)}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-text">
                      Detail
                      <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <CtaBand />
    </>
  );
}
