import Image from "next/image";
import { IconCalm, IconCar, IconCity, IconFriends } from "@/components/icons/Icons";
import { IconTile } from "@/components/icons/ServiceIcon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { reasons } from "@/lib/content";

const icons = [IconCalm, IconCity, IconCar, IconFriends];

export function WhyUs() {
  return (
    <section className="container-page py-20 md:py-28" aria-labelledby="proc-nadpis">
      <div className="max-w-2xl">
        <h2 id="proc-nadpis" className="font-display text-4xl font-bold md:text-5xl">
          Nepřipravíme vás jen na zkoušky. Připravíme vás na silnici.
        </h2>
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">
          Každý krok probíráme vaším tempem a dál jdeme, až když si jsme jistí, že ho máte zažitý.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.25fr]">
        <Reveal className="relative min-h-80 overflow-hidden rounded-[var(--radius-card)]">
          <Image
            src="/images/ucebna-stul-logo.webp"
            alt="Učebna Autoškoly TOP v Rakovníku s logem na stěně a připravenými materiály"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-6 pt-24 text-white">
            <p className="font-display text-xl font-semibold">Vlastní učebna v centru Rakovníka</p>
            <p className="mt-1 text-sm text-white/80">Ottova 418, budova Raportu, 2. patro</p>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => {
            const Icon = icons[i];
            return (
              <RevealItem key={r.title} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-7">
                <IconTile>
                  <Icon size={28} />
                </IconTile>
                <h3 className="mt-6 font-display text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{r.text}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
