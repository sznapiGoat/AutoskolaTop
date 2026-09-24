import Image from "next/image";
import { IconPhone } from "@/components/icons/Icons";
import { Wings } from "@/components/brand/Wings";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Tak pojďme do toho",
  text = "Zavolejte nebo nám napište. Domluvíme kurz, termín i první jízdu.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-page py-16 md:py-24">
      <Reveal className="on-dark asphalt relative isolate overflow-hidden rounded-[1.5rem] text-panel-ink">
        <div className="grid items-stretch md:grid-cols-[1.1fr_1fr]">
          <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <Wings className="h-8 w-24 text-accent" />
            <h2 className="mt-6 font-display text-5xl font-extrabold md:text-6xl">{title}</h2>
            <p className="mt-4 max-w-md text-lg text-[#bdbcb7]">{text}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/kontakt" variant="light" size="lg">
                Chci řidičák
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="inline-flex h-13 items-center gap-2 rounded-lg px-4 font-semibold transition-colors hover:text-accent"
              >
                <IconPhone size={18} aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="relative h-64 md:h-auto md:min-h-[24rem]">
            <Image
              src="/images/autoskola-top-vuz-mesto.webp"
              alt="Oranžový výcvikový vůz Autoškoly TOP v provozu"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover object-[30%_50%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-road via-road/0 via-40% md:bg-linear-to-r" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
