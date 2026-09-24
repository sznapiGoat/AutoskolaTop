import Image from "next/image";
import { Briefcase, HandHeart, HouseLine, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Pomáháme: řidičák zdarma",
  description:
    "Dobročinná akce Autoškoly TOP: každý rok zaplatíme celý kurz řidičského průkazu jednomu člověku, který si ho nemůže dovolit. Jak se přihlásit a podmínky.",
  path: "/pomahame",
  image: "/images/pomahame-ridicak.webp",
});

const benefits = [
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

export default function CharityPage() {
  return (
    <>
      <PageHero
        title="Řidičák, který může někomu změnit život"
        lead="Jeden rok, jeden člověk, jeden řidičák. Každý rok zaplatíme celý kurz někomu, kdo si ho z finančních nebo životních důvodů nemůže dovolit."
        crumbs={[{ name: "Pomáháme", path: "/pomahame" }]}
      />

      <section className="container-page grid gap-12 pb-20 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)]">
          <Image src="/images/pomahame-ridicak.webp" alt="Nový český řidičský průkaz v ruce" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="animate-settle object-cover" />
        </div>
        <Reveal from="right">
          <h2 className="font-display text-4xl leading-[1.05] font-bold md:text-5xl">Komu je akce určena</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Hledáme lidi s opravdovým příběhem. Samoživitele, studenty z méně podnětného prostředí, lidi po životní změně
            nebo kohokoli, komu by řidičák otevřel nové možnosti. Nejde o dokonalé životopisy, ale o upřímnost, odvahu a
            motivaci.
          </p>
          <ButtonLink href={`mailto:${site.email}?subject=Nominace%20do%20dobro%C4%8Dinn%C3%A9%20akce`} size="lg" className="mt-8">
            Poslat nominaci
          </ButtonLink>
        </Reveal>
      </section>

      <section className="container-page py-16">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Co vybraný člověk získá</h2>
        <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ Icon, title, text }) => (
            <RevealItem key={title} className="rounded-[var(--radius-card)] border border-line bg-surface p-7">
              <Icon size={32} weight="duotone" className="text-accent-text" aria-hidden="true" />
              <h3 className="mt-8 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="asphalt my-16 text-[#f2f1ee]">
        <div className="container-page py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Jak probíhá výběr</h2>
          <p className="mt-4 max-w-[60ch] text-lg text-[#a6a59f]">
            Kombinujeme hlasování veřejnosti a názor nezávislé poroty, aby byl výběr co nejférovější.
          </p>
          <RevealGroup className="mt-12 grid gap-8 md:grid-cols-4">
            {timeline.map((t) => (
              <RevealItem key={t.what} className="border-t-2 border-accent pt-5">
                <p className="text-sm font-semibold text-accent">{t.when}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{t.what}</h3>
                <p className="mt-2 text-[#a6a59f]">{t.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Jak můžete pomoct vy</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Sdílejte naši výzvu, nominujte někoho, kdo si šanci zaslouží, nebo se zapojte jako partner akce. Čím víc lidí
            se o projektu dozví, tím spíš se k nám dostane ten správný příběh.
          </p>
        </div>
        <div>
          <h2 className="sr-only">Podmínky akce</h2>
          <Accordion items={terms} />
        </div>
      </section>
    </>
  );
}
