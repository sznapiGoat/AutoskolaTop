import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { BrandLogo } from "@/components/brand/Logo";
import { Wings } from "@/components/brand/Wings";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp, SlideUpText } from "@/components/ui/SlideUpText";
import { site } from "@/lib/site";

/** The logo carries the hero; its wings, blown up, run through the background. */
export function Hero() {
  return (
    <section className="container-page pt-3 pb-6 md:pt-4">
      <div className="on-dark asphalt relative isolate grid items-center gap-10 overflow-hidden rounded-[1.5rem] px-6 py-12 text-panel-ink sm:px-10 sm:py-16 lg:min-h-[min(40rem,calc(100dvh-8rem))] lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-16">
        {/* giant wing stripes, unfolding outwards from the centre */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-1/2 -z-10 flex items-center text-white/[0.045]">
          <Wings className="h-[18rem] w-[40rem] max-w-none sm:h-[26rem] sm:w-[56rem]" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 flex items-center text-white/[0.045]">
          <Wings side="right" className="h-[18rem] w-[40rem] max-w-none sm:h-[26rem] sm:w-[56rem]" />
        </div>

        <FadeUp className="w-full">
          <BrandLogo
            variant="textured"
            className="w-60 sm:w-[24rem] lg:mx-auto lg:w-full lg:max-w-[34rem]"
            title="Autoškola TOP Rakovník"
          />
        </FadeUp>

        <div>
          <SlideUpText
            text="Řidičák v klidu a bez křiku"
            delay={0.15}
            className="font-display text-5xl leading-[0.92] font-extrabold sm:text-7xl xl:text-[5.5rem]"
          />
          <FadeUp delay={0.4}>
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[#bdbcb7] sm:text-lg">
              Individuální přístup, pohodlný vůz s klimatizací a jízda do Prahy v ceně každého kurzu.
            </p>
          </FadeUp>
          <FadeUp delay={0.5} className="mt-8 flex flex-wrap items-center gap-3">
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
      </div>
    </section>
  );
}
