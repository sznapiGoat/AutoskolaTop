import Image from "next/image";
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { BrandLogo } from "@/components/brand/Logo";
import { Wings } from "@/components/brand/Wings";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp, SlideUpText } from "@/components/ui/SlideUpText";
import { site } from "@/lib/site";
import { HeroImageReveal } from "./HeroImageReveal";

export function Hero() {
  return (
    <section className="container-page pt-3 pb-6 md:pt-4">
      <div className="on-dark asphalt relative isolate grid overflow-hidden rounded-[1.5rem] text-panel-ink lg:min-h-[min(46rem,calc(100dvh-7.5rem))] lg:grid-cols-[1.02fr_1fr]">
        {/* photo: full-bleed on the right, fading into the panel */}
        <HeroImageReveal className="relative order-first aspect-[16/10] sm:aspect-[4/3] lg:order-last lg:aspect-auto">
          <Image
            src="/images/autoskola-top-instruktor-vuz.webp"
            alt="Instruktor Autoškoly TOP mává z oranžového výcvikového vozu Renault Captur"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[60%_55%]"
          />
        </HeroImageReveal>
        <div className="relative z-20 -mt-6 flex flex-col justify-center gap-6 px-6 pb-8 sm:mt-0 sm:gap-8 sm:px-10 sm:pb-10 lg:py-14 lg:pr-4 lg:pl-14 xl:pl-16">
          <FadeUp>
            <BrandLogo variant="textured" className="w-44 sm:w-[19rem] md:w-[22rem]" title="Autoškola TOP Rakovník" />
          </FadeUp>

          <div>
            <SlideUpText
              text="Řidičák v klidu a bez křiku"
              delay={0.15}
              className="font-display text-5xl leading-[0.92] font-extrabold sm:text-7xl xl:text-[5.5rem]"
            />
            <FadeUp delay={0.4}>
              <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-[#bdbcb7] sm:mt-5 sm:text-lg">
                Individuální přístup, pohodlný vůz s klimatizací a jízda do Prahy v ceně každého kurzu.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.5} className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/kontakt" variant="light" size="lg" className="group">
              Chci řidičák
              <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
            <a
              href={site.phoneHref}
              className="inline-flex h-13 items-center gap-2 rounded-lg px-4 font-semibold text-panel-ink transition-colors hover:text-accent"
            >
              <Phone size={18} weight="bold" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </FadeUp>
        </div>

        {/* the logo's wings, unfolding across the seam between text and photo */}
        <div aria-hidden="true" className="pointer-events-none absolute bottom-8 left-[40%] z-20 hidden text-accent lg:block">
          <Wings className="h-14 w-44" />
        </div>
      </div>
    </section>
  );
}
