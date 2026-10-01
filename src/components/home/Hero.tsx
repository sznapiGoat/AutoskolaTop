import { IconArrowRight } from "@/components/icons/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/SlideUpText";
import { plans } from "@/lib/content";
import { formatPrice, site } from "@/lib/site";
import { HeroSlideshow, type HeroSlide } from "./HeroSlideshow";

const slides: HeroSlide[] = [
  {
    src: "/images/autoskola-top-instruktor-vuz.webp",
    alt: "Instruktor Autoškoly TOP za volantem oranžového výcvikového vozu v Rakovníku",
    label: "Výcvikový vůz",
    position: "62% 55%",
    drift: { x: "-2%", y: "-1%" },
  },
  {
    src: "/images/autoskola-top-vuz-mesto.webp",
    alt: "Oranžový Renault Captur Autoškoly TOP v městském provozu",
    label: "Jízdy v provozu",
    position: "30% 60%",
    drift: { x: "2%", y: "-1.5%" },
  },
  {
    src: "/images/ucebna-stul-logo.webp",
    alt: "Učebna Autoškoly TOP s logem na stěně a připravenými materiály",
    label: "Učebna v centru",
    position: "50% 40%",
    drift: { x: "-1.5%", y: "1%" },
  },
];

const fromPrice = Math.min(...plans.map((p) => p.price));

/** The whole first screen is the photo; the header floats over it. Words and one button, nothing else. */
export function Hero() {
  return (
    <section className="relative isolate -mt-[4.75rem] flex min-h-[max(40rem,100svh)] flex-col overflow-hidden text-white">
      <HeroSlideshow slides={slides} />
      {/* legibility: dark from the left on desktop, from the bottom on phones */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-[#0b0e13]/90 via-[#0b0e13]/45 to-[#0b0e13]/10 md:bg-linear-to-r md:from-[#0b0e13]/80 md:via-[#0b0e13]/45 md:to-transparent"
      />
      {/* keeps the transparent header readable on bright skies */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-44 bg-linear-to-b from-[#0b0e13]/55 to-transparent"
      />

      <div className="container-page flex flex-1 flex-col justify-end pt-28 pb-28 md:justify-center md:pt-40 md:pb-32">
        <FadeUp>
          <h1 className="font-display text-[2.4rem] leading-[1.05] font-bold tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            Řidičák v&nbsp;Rakovníku.
            <br />
            Bez stresu, s&nbsp;výsledkem.
          </h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-white/85">
            Kurz skupiny B od {formatPrice(fromPrice)} ve dvou splátkách. Jízda do Prahy v ceně, učebna v centru
            Rakovníka.
          </p>
        </FadeUp>
        <FadeUp delay={0.25} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <ButtonLink href="/kontakt" size="lg" className="group">
            Chci řidičák
            <IconArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </ButtonLink>
          <a
            href={site.phoneHref}
            className="text-lg font-semibold text-white underline decoration-white/40 decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent"
          >
            nebo volejte {site.phoneDisplay}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
