import Image from "next/image";
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { buttonClass } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "O nás",
  description:
    "Autoškola TOP je moderní autoškola v Rakovníku s lidským přístupem. Klidný výcvik, vůz s klimatizací, vlastní učebna a jízdy do Prahy.",
  path: "/o-nas",
  image: "/images/autoskola-top-vuz-mesto.webp",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Moderní autoškola s lidským přístupem"
        lead="Žádný křik, ale klid a pohoda. Nebudeme vás lákat na nereálné ceny. Stojíme si za svými službami a co řekneme, to platí."
        crumbs={[{ name: "O nás", path: "/o-nas" }]}
      />

      <section className="container-page pb-20">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] md:aspect-[21/9]">
          <Image
            src="/images/autoskola-top-vuz-mesto.webp"
            alt="Oranžový Renault Captur Autoškoly TOP projíždí městem"
            fill
            priority
            sizes="100vw"
            className="animate-settle object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.05] font-bold md:text-5xl">S námi správnou cestou</h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            S každým budoucím řidičem probíráme všechny kroky tempem, které přizpůsobíme jemu. Dál nepokračujeme, dokud si
            nejsme jistí, že danou dovednost a potřebné znalosti má dobře zažité.
          </p>
          <p>
            Nepřipravujeme vás jen na zkoušky. Chceme, abyste zvládli běžný provoz a poradili si i v nečekaných situacích.
            Proto s vámi jezdíme i do Prahy, jako jediná autoškola v Rakovníku.
          </p>
          <p>Těší nás, že tahle metoda má u našich žáků velmi dobrou zpětnou vazbu.</p>
        </Reveal>
      </section>

      <section className="container-page grid gap-4 py-16 md:grid-cols-[1.3fr_1fr]">
        <Reveal from="left" className="relative min-h-80 overflow-hidden rounded-[var(--radius-card)]">
          <Image
            src="/images/ucebna-autoskola-top-rakovnik.webp"
            alt="Učebna Autoškoly TOP v budově Raportu v Rakovníku"
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal from="right" className="flex flex-col justify-between gap-8 rounded-[var(--radius-card)] bg-panel p-8 text-panel-ink md:p-10">
          <div>
            <h2 className="font-display text-3xl font-bold">Učebna v centru</h2>
            <p className="mt-4 text-panel-ink/75">
              Najdete nás v budově Raportu naproti Rakoně ve 2. patře. Teorie, testy nanečisto i zápis do kurzu probíhají
              tady.
            </p>
          </div>
          <address className="not-italic">
            <p className="font-semibold">
              {site.address.street}, {site.address.zip} {site.address.city}
            </p>
            <p className="text-panel-ink/70">{site.hours.label}, {site.hours.note}</p>
          </address>
        </Reveal>
      </section>

      <section className="container-page grid items-center gap-10 py-16 md:grid-cols-[1fr_1.4fr]">
        <Reveal className="grid place-items-center rounded-[var(--radius-card)] bg-[#151514] p-10">
          <Image
            src="/images/fbc-rakovnik-logo.webp"
            alt="Logo florbalového klubu FBC Rakovník"
            width={360}
            height={207}
            className="h-auto w-full max-w-xs"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Hrdí partneři FBC Rakovník</h2>
          <p className="mt-4 max-w-[55ch] text-lg leading-relaxed text-muted">
            Fandíme rakovnickému florbalu a podporujeme místní sport. Jsme autoškola odsud a chceme, aby to bylo znát.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className={buttonClass("outline", "md")}>
              <FacebookLogo size={18} weight="fill" aria-hidden="true" />
              Facebook
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className={buttonClass("outline", "md")}>
              <InstagramLogo size={18} weight="bold" aria-hidden="true" />
              Instagram
            </a>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
