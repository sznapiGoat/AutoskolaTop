import Image from "next/image";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink, buttonClass } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Tak pojďme do toho.",
  text = "Zavolejte nebo nám napište. Domluvíme kurz, termín i první jízdu.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-page py-16 md:py-24">
      <Reveal className="relative isolate overflow-hidden rounded-[var(--radius-card)] bg-accent">
        <div className="grid items-center md:grid-cols-[1.1fr_1fr]">
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="font-display text-4xl leading-[1.05] font-bold text-on-accent md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-md text-lg text-on-accent/80">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/kontakt" variant="dark" size="lg">
                Chci řidičák
              </ButtonLink>
              <a
                href={site.phoneHref}
                className={buttonClass("ghost", "lg", "text-on-accent hover:bg-black/10")}
              >
                <Phone size={18} weight="bold" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="relative h-64 md:h-full md:min-h-[22rem]">
            <Image
              src="/images/autoskola-top-vuz-mesto.webp"
              alt="Oranžový výcvikový vůz Autoškoly TOP v provozu"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover object-[30%_50%]"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
