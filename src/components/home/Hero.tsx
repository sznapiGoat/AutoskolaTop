import Image from "next/image";
import { IconArrowRight, IconCity, IconPhone, IconPin } from "@/components/icons/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp, SlideUpText } from "@/components/ui/SlideUpText";
import { plans } from "@/lib/content";
import { formatPrice, site } from "@/lib/site";

const fromPrice = Math.min(...plans.map((p) => p.price));

const facts = [
  { value: `od ${formatPrice(fromPrice)}`, label: "kurz sk. B" },
  { value: `${site.facebookRating.percent} %`, label: "doporučení na Facebooku" },
  { value: "2 splátky", label: "bez navýšení ceny" },
];

/** One light card: the message on the left, the school's own car on the right. */
export function Hero() {
  return (
    <section className="container-page pt-3 pb-10 md:pt-5 md:pb-16">
      <div className="grid gap-3 rounded-[2rem] border border-line bg-surface p-3 lg:min-h-[min(41rem,calc(100dvh-7.5rem))] lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col justify-between gap-10 px-4 pt-6 pb-4 sm:px-7 sm:pt-9 lg:px-10 lg:py-10">
          <div>
            <FadeUp>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-muted">
                <IconPin size={15} className="text-accent" aria-hidden="true" />
                Autoškola v Rakovníku, {site.address.street}
              </p>
            </FadeUp>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] font-bold sm:text-6xl xl:text-[4.25rem]">
              <SlideUpText as="span" text="Řidičák v Rakovníku." delay={0.1} className="block" />
              <SlideUpText as="span" text="Bez stresu, s výsledkem." delay={0.25} className="block text-accent" />
            </h1>
            <FadeUp delay={0.45}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Individuální přístup, pohodlný vůz s klimatizací a jízda do Prahy v ceně každého kurzu. Naučíme vás řídit,
                nejen projít zkouškou.
              </p>
            </FadeUp>
            <FadeUp delay={0.55} className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/kontakt" size="lg" className="group">
                Chci řidičák
                <IconArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/cenik" variant="outline" size="lg">
                Zobrazit ceník
              </ButtonLink>
            </FadeUp>
            <FadeUp delay={0.6}>
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
              >
                <IconPhone size={18} className="text-accent" aria-hidden="true" />
                nebo volejte <span className="font-semibold text-ink">{site.phoneDisplay}</span>
              </a>
            </FadeUp>
          </div>

          <FadeUp delay={0.7}>
            <dl className="grid grid-cols-3 gap-3 border-t border-line pt-6">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col gap-0.5">
                  <dt className="order-last text-xs leading-snug text-muted sm:text-sm">{f.label}</dt>
                  <dd className="font-display text-lg font-bold tracking-tight sm:text-2xl">{f.value}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>

        <div className="relative min-h-[19rem] overflow-hidden rounded-[1.5rem] sm:min-h-[26rem]">
          <Image
            src="/images/autoskola-top-instruktor-vuz.webp"
            alt="Instruktor Autoškoly TOP za volantem oranžového výcvikového vozu v Rakovníku"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="animate-settle object-cover object-[42%_50%]"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/35 to-transparent" />
          <FadeUp delay={0.8} className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
            <div className="flex items-center gap-3 rounded-2xl bg-white/95 py-3 pr-5 pl-3 shadow-soft backdrop-blur">
              <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent-text">
                <IconCity size={24} aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block font-semibold">Jízda do Prahy</span>
                <span className="text-sm text-muted">v ceně každého kurzu</span>
              </span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
