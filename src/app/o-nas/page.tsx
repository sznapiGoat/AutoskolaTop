import Image from "next/image";
import { Briefcase, FacebookLogo, HandHeart, HouseLine, InstagramLogo, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { Wings } from "@/components/brand/Wings";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink, buttonClass } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "O nás a Pomáháme",
  description:
    "Autoškola TOP je moderní autoškola v Rakovníku s lidským přístupem. Vlastní učebna, vůz s klimatizací, jízdy do Prahy a každý rok řidičák zdarma pro někoho, kdo si ho nemůže dovolit.",
  path: "/o-nas",
  image: "/images/autoskola-top-vuz-mesto.webp",
});

const charityBenefits = [
  { Icon: HandHeart, title: "Plně hrazený kurz", text: "Od první hodiny teorie až po poslední 28. hodinu jízdy." },
  { Icon: Briefcase, title: "Šance na lepší práci", text: "Řada pracovních pozic dnes řidičák vyžaduje." },
  { Icon: HouseLine, title: "Svoboda a samostatnost", text: "Snazší cesta za rodinou, k lékaři nebo do školy." },
  { Icon: UsersThree, title: "Podpora komunity", text: "Pocit, že v tom člověk není sám a někdo mu věří." },
];

const timeline = [
  { when: "12.-23. března", what: "Nominace", text: "Přijímáme příběhy přes web i sociální sítě, do 20:00." },
  { when: "23.-29. března", what: "Předvýběr", text: "Projdeme všechny příběhy a vybereme užší skupinu finalistů." },
  { when: "29.-31. března", what: "Hlasování", text: "Anonymizované příběhy zveřejníme a hlasuje veřejnost, do 18:00." },
  { when: "31. března", what: "Vyhlášení", text: "Vítěze oznámíme na webu a sítích a ozveme se mu osobně." },
];

const terms = [
  {
    id: "kdo",
    q: "Kdo se může přihlásit",
    a: "Každý starší 18 let (mladší se souhlasem zákonného zástupce) s trvalým nebo dlouhodobým bydlištěm v ČR. Upřednostňujeme lidi v náročné životní situaci, například samoživitele, pečující osoby nebo lidi s nízkými příjmy. Účastník musí souhlasit se zveřejněním svého příběhu.",
  },
  {
    id: "nominace",
    q: "Jak probíhá nominace",
    a: "Přihlásit se můžete sami, nebo vás může nominovat přítel, rodina či kolega (s vaším souhlasem). Příběh pošlete e-mailem nebo do komentáře na našich sítích. Pokud ho nechcete sdílet veřejně, napište nám soukromou zprávu.",
  },
  {
    id: "vyhra",
    q: "Co výhra obsahuje",
    a: "Úhradu základního kurzu pro řidičské oprávnění skupiny B. Vybraný člověk zaplatí jen administrativní poplatek 700 Kč, ze kterého se hradí závěrečná zkouška. Opakované zkoušky, jízdy navíc a lékařské prohlídky hradí sám. Výhru nelze směnit za peníze ani převést na jinou osobu.",
  },
  {
    id: "povinnosti",
    q: "Povinnosti vybraného účastníka",
    a: "Po domluvě krátký rozhovor, focení nebo natáčení, souhlas se zveřejněním příběhu bez citlivých detailů, včasná komunikace, pravdivé informace a na konci krátké zhodnocení, jak mu pomoc pomohla.",
  },
  {
    id: "organizator",
    q: "Organizátor a osobní údaje",
    a: `Organizátorem je ${site.legalName}, ${site.address.street}, ${site.address.city}, IČO ${site.ico}. Osobní údaje zpracováváme podle GDPR jen v rozsahu nutném pro organizaci akce. Organizátor může akci změnit nebo zrušit, o podstatných změnách účastníky informuje. Úplné znění podmínek vám rádi pošleme.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Moderní autoškola s lidským přístupem"
        lead="Žádný křik, ale klid a pohoda. Nebudeme vás lákat na nereálné ceny. Stojíme si za svými službami a co řekneme, to platí."
        crumbs={[{ name: "O nás", path: "/o-nas" }]}
      />

      <section className="container-page pb-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:aspect-[21/9]">
          <Image
            src="/images/autoskola-top-vuz-mesto.webp"
            alt="Oranžový Renault Captur Autoškoly TOP s logem na dveřích projíždí městem"
            fill
            priority
            sizes="100vw"
            className="animate-settle object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 md:grid-cols-2 md:gap-16">
        <Reveal>
          <Wings className="h-7 w-20 text-accent" />
          <h2 className="mt-5 font-display text-5xl font-extrabold md:text-6xl">S námi správnou cestou</h2>
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
            src="/images/ucebna-stul-logo.webp"
            alt="Učebna Autoškoly TOP s logem na stěně"
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal from="right" className="on-dark asphalt flex flex-col justify-between gap-8 rounded-[var(--radius-card)] p-8 text-panel-ink md:p-10">
          <div>
            <h2 className="font-display text-4xl font-extrabold">Učebna v centru</h2>
            <p className="mt-4 text-[#bdbcb7]">
              Najdete nás v budově Raportu naproti Rakoně ve 2. patře. Teorie, testy nanečisto i zápis do kurzu probíhají
              tady.
            </p>
          </div>
          <address className="not-italic">
            <p className="font-semibold">
              {site.address.street}, {site.address.zip} {site.address.city}
            </p>
            <p className="text-[#bdbcb7]">
              {site.hours.label}, {site.hours.note}
            </p>
          </address>
        </Reveal>
      </section>

      {/* Pomáháme: the yearly charity programme (previously its own page) */}
      <section id="pomahame" aria-labelledby="pomahame-h" className="on-dark asphalt mt-16 text-panel-ink">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal from="left">
              <p className="font-display text-lg font-semibold uppercase tracking-[0.12em] text-accent">Pomáháme</p>
              <h2 id="pomahame-h" className="mt-3 font-display text-5xl font-extrabold md:text-7xl">
                Jeden rok, jeden člověk, jeden řidičák
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#cfcec9]">
                Každý rok zaplatíme celý kurz někomu, kdo si ho z finančních nebo životních důvodů nemůže dovolit.
                Hledáme lidi s opravdovým příběhem: samoživitele, studenty z méně podnětného prostředí, lidi po životní
                změně. Nejde o dokonalé životopisy, ale o upřímnost, odvahu a motivaci.
              </p>
              <ButtonLink
                href={`mailto:${site.email}?subject=Nominace%20do%20dobro%C4%8Dinn%C3%A9%20akce`}
                variant="light"
                size="lg"
                className="mt-8"
              >
                Poslat nominaci
              </ButtonLink>
            </Reveal>
            <Reveal from="right" className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)]">
              <Image
                src="/images/pomahame-ridicak.webp"
                alt="Nový český řidičský průkaz v ruce"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>

          <RevealGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {charityBenefits.map(({ Icon, title, text }) => (
              <RevealItem key={title} className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-6">
                <Icon size={30} weight="duotone" className="text-accent" aria-hidden="true" />
                <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-[#bdbcb7]">{text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <h3 className="mt-20 font-display text-3xl font-bold uppercase">Jak probíhá výběr</h3>
          <p className="mt-3 max-w-[60ch] text-[#bdbcb7]">
            Kombinujeme hlasování veřejnosti a názor nezávislé poroty, aby byl výběr co nejférovější.
          </p>
          <RevealGroup className="mt-10 grid gap-8 md:grid-cols-4">
            {timeline.map((t) => (
              <RevealItem key={t.what} className="border-t-2 border-accent pt-5">
                <p className="text-sm font-semibold text-accent">{t.when}</p>
                <h4 className="mt-2 font-display text-2xl font-bold uppercase">{t.what}</h4>
                <p className="mt-2 text-[#bdbcb7]">{t.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">Podmínky akce</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Můžete také sdílet naši výzvu, nominovat někoho, kdo si šanci zaslouží, nebo se zapojit jako partner akce.
          </p>
        </div>
        <Accordion items={terms} />
      </section>

      <section className="container-page grid items-center gap-10 py-16 md:grid-cols-[1fr_1.4fr]">
        <Reveal className="grid place-items-center rounded-[var(--radius-card)] bg-[#141414] p-10">
          <Image
            src="/images/fbc-rakovnik-logo.webp"
            alt="Logo florbalového klubu FBC Rakovník"
            width={360}
            height={207}
            className="h-auto w-full max-w-xs"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">Hrdí partneři FBC Rakovník</h2>
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
