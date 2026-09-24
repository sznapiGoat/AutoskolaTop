import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CharityTeaser() {
  return (
    <section className="container-page py-20 md:py-28" aria-labelledby="pomahame-nadpis">
      <div className="grid items-center gap-10 rounded-[var(--radius-card)] border border-line bg-surface p-6 md:grid-cols-2 md:p-10 lg:gap-16 lg:p-14">
        <Reveal from="left" className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/pomahame-ridicak.webp"
            alt="Ruka drží nový český řidičský průkaz"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal from="right">
          <h2 id="pomahame-nadpis" className="font-display text-4xl leading-[1.05] font-bold md:text-5xl">
            Jeden rok, jeden člověk, jeden řidičák.
          </h2>
          <p className="mt-5 max-w-[55ch] text-lg leading-relaxed text-muted">
            Každý rok zaplatíme celý kurz někomu, kdo si ho nemůže dovolit. Řidičák totiž umí změnit život: cestu do
            práce, ke vzdělání i k rodině.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ButtonLink href="/pomahame" variant="dark" size="lg">
              Jak to funguje
            </ButtonLink>
            <div className="flex items-center gap-3 text-sm text-muted">
              <Image src="/images/fbc-rakovnik-logo.webp" alt="FBC Rakovník" width={64} height={37} className="h-9 w-auto" />
              <span>Hrdý partner FBC Rakovník</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
