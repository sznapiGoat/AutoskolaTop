import Image from "next/image";
import { IconArrowRight, IconPhone } from "@/components/icons/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

/** Closing call to action: a photo card in the same voice as the home hero, not a flat dark slab. */
export function CtaBand({
  title = "Tak pojďme do toho",
  text = "Zavolejte nebo nám napište. Domluvíme kurz, termín i první jízdu.",
  image = {
    src: "/images/autoskola-top-vuz-mesto.webp",
    alt: "Oranžový výcvikový vůz Autoškoly TOP v provozu",
    position: "70% 55%",
  },
}: {
  title?: string;
  text?: string;
  /** Pick a photo the page doesn't already show. */
  image?: { src: string; alt: string; position: string };
}) {
  return (
    <section className="container-page pt-16 pb-20 md:pt-24 md:pb-28">
      <Reveal className="relative isolate overflow-hidden rounded-[1.75rem] text-white">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1320px) 1240px, 100vw"
          className="-z-20 object-cover"
          style={{ objectPosition: image.position }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-[#0b0e13]/90 via-[#0b0e13]/60 to-[#0b0e13]/20 md:bg-linear-to-r md:from-[#0b0e13]/85 md:via-[#0b0e13]/55 md:to-transparent"
        />
        <div className="flex min-h-[26rem] flex-col justify-end p-8 md:min-h-[28rem] md:justify-center md:p-14 lg:p-16">
          <h2 className="max-w-md font-display text-4xl font-bold md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-md text-lg text-white/80">{text}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href="/kontakt" size="lg" className="group">
              Chci řidičák
              <IconArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
            <a
              href={site.phoneHref}
              className="group inline-flex items-center gap-2.5 text-lg font-semibold transition-colors hover:text-accent"
            >
              <span className="grid size-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/25 backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-accent">
                <IconPhone size={18} aria-hidden="true" />
              </span>
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
