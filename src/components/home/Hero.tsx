import { IconArrowRight, IconPhone, IconPin } from "@/components/icons/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp, SlideUpText } from "@/components/ui/SlideUpText";
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

const facts = [
  { value: `od ${formatPrice(fromPrice)}`, label: "kurz řidičáku sk. B" },
  {
    value: `${site.facebookRating.percent} %`,
    label: `doporučení na Facebooku (${site.facebookRating.reviews} recenzí)`,
  },
  { value: "Praha", label: "jízda v ceně každého kurzu" },
  { value: "2 splátky", label: "bez navýšení ceny" },
];

/** The whole first screen is the photo: it runs under the transparent header, key facts sit on it. */
export function Hero() {
  return (
    <>
      <section className="relative isolate -mt-[4.75rem] flex min-h-[max(40rem,100svh)] flex-col overflow-hidden text-white">
        <HeroSlideshow slides={slides} />
        {/* legibility: dark from the left on desktop, from the bottom on phones */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-[#0b0e13]/90 via-[#0b0e13]/45 to-[#0b0e13]/10 md:bg-linear-to-r md:from-[#0b0e13]/85 md:via-[#0b0e13]/55 md:to-[#0b0e13]/5"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 hidden h-48 bg-linear-to-t from-[#0b0e13]/60 to-transparent md:block"
        />

        <div className="container-page flex flex-1 flex-col justify-end pt-36 pb-20 md:justify-center md:pt-40 md:pb-48">
          <FadeUp>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm text-white/85 ring-1 ring-white/20 backdrop-blur-md">
              <IconPin size={15} className="text-accent" aria-hidden="true" />
              Autoškola v Rakovníku, {site.address.street}
            </p>
          </FadeUp>
          <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.02] font-bold tracking-[-0.025em] sm:text-6xl lg:text-7xl">
            <SlideUpText as="span" text={"Řidičák v Rakovníku."} delay={0.1} className="block" />
            <SlideUpText as="span" text="Bez stresu, s výsledkem." delay={0.25} className="block text-accent" />
          </h1>
          <FadeUp delay={0.45}>
            <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-white/80">
              Individuální přístup, pohodlný vůz s klimatizací a jízda do Prahy v ceně každého kurzu. Naučíme vás řídit,
              nejen projít zkouškou.
            </p>
          </FadeUp>
          <FadeUp delay={0.55} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href="/kontakt" size="lg" className="group">
              Chci řidičák
              <IconArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
            <a
              href={site.phoneHref}
              className="group inline-flex items-center gap-2.5 text-lg font-semibold text-white transition-colors hover:text-accent"
            >
              <span className="grid size-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/25 backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-accent">
                <IconPhone size={18} aria-hidden="true" />
              </span>
              {site.phoneDisplay}
            </a>
          </FadeUp>
        </div>

        {/* key facts on the photo itself (tablet and up) */}
        <div className="absolute inset-x-0 bottom-0 hidden border-t border-white/15 bg-black/25 backdrop-blur-md md:block">
          <dl className="container-page grid grid-cols-4 divide-x divide-white/15 py-6">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 px-6 first:pl-0">
                <dt className="order-last max-w-[24ch] text-sm leading-snug text-white/70">{f.label}</dt>
                <dd className="font-display text-2xl font-bold tracking-tight tabular-nums lg:text-3xl">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* phones: the same facts right under the photo */}
      <dl className="container-page grid grid-cols-2 gap-x-6 gap-y-5 border-b border-line py-7 md:hidden">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-col gap-1">
            <dt className="order-last text-sm leading-snug text-muted">{f.label}</dt>
            <dd className="font-display text-xl font-bold tracking-tight tabular-nums">{f.value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
