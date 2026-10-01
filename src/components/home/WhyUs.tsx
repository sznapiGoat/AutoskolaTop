import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { reasons } from "@/lib/content";

export function WhyUs() {
  return (
    <section className="container-page py-20 md:py-28" aria-labelledby="proc-nadpis">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="relative min-h-80 overflow-hidden rounded-[var(--radius-card)] lg:min-h-full">
          <Image
            src="/images/ucebna-autoskola-top-rakovnik.webp"
            alt="Světlá učebna Autoškoly TOP v Rakovníku s velkým stolem a obrazovkou"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div>
          <h2 id="proc-nadpis" className="font-display text-4xl font-bold md:text-5xl">
            Proč k nám
          </h2>
          <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted">
            Každý krok probíráme vaším tempem a dál jdeme, až když si jsme jistí, že ho máte zažitý. Učebnu máme v
            Ottově ulici, v budově Raportu ve 2. patře.
          </p>

          <RevealGroup className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {reasons.map((r) => (
              <RevealItem key={r.title}>
                <h3 className="font-display text-xl font-semibold">{r.title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{r.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
