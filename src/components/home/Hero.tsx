import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp, SlideUpText } from "@/components/ui/SlideUpText";
import { HeroImageReveal } from "./HeroImageReveal";

export function Hero() {
  return (
    <section className="container-page grid items-center gap-10 pt-8 pb-14 md:pt-12 lg:min-h-[calc(100dvh-7rem)] lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:pb-20">
      <div className="max-w-xl">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-text">Autoškola v Rakovníku</p>
        </FadeUp>
        <SlideUpText
          text="Řidičák v klidu a bez křiku."
          delay={0.1}
          className="mt-4 font-display text-5xl leading-[1.02] font-extrabold md:text-6xl xl:text-7xl"
        />
        <FadeUp delay={0.35}>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Individuální přístup, pohodlný vůz s klimatizací a jízda do Prahy v ceně každého kurzu.
          </p>
        </FadeUp>
        <FadeUp delay={0.45} className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/kontakt" size="lg">
            Chci řidičák
          </ButtonLink>
          <ButtonLink href="/cenik" size="lg" variant="outline" className="group">
            Ceník kurzů
            <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </ButtonLink>
        </FadeUp>
      </div>

      <HeroImageReveal>
        <Image
          src="/images/autoskola-top-instruktor-vuz.webp"
          alt="Instruktor Autoškoly TOP mává z oranžového výcvikového vozu Renault Captur"
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover object-[55%_60%]"
        />
      </HeroImageReveal>
    </section>
  );
}
