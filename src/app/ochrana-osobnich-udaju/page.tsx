import { PageHero } from "@/components/sections/PageHero";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Ochrana osobních údajů",
  description: "Jak Autoškola TOP Rakovník zpracovává osobní údaje z kontaktního formuláře a při výuce a výcviku.",
  path: "/ochrana-osobnich-udaju",
});

const sections = [
  {
    h: "Správce údajů",
    p: `Správcem osobních údajů je ${site.legalName}, ${site.address.street}, ${site.address.zip} ${site.address.city}, IČO ${site.ico}, e-mail ${site.email}, telefon ${site.phone}.`,
  },
  {
    h: "Jaké údaje zpracováváme a proč",
    p: "Z kontaktního formuláře jméno, telefon, e-mail, zvolenou službu a obsah zprávy. Používáme je výhradně k tomu, abychom vám odpověděli a domluvili kurz. Údaje nutné pro výuku a výcvik zpracováváme v rozsahu, který nám ukládá zákon o získávání a zdokonalování odborné způsobilosti k řízení motorových vozidel.",
  },
  {
    h: "Jak dlouho údaje uchováváme",
    p: "Údaje z nezávazné poptávky uchováváme nejdéle 12 měsíců, pokud se nestanete naším žákem. Dokumentaci k výuce a výcviku uchováváme po dobu stanovenou zákonem.",
  },
  {
    h: "Komu údaje předáváme",
    p: "Nikomu je neprodáváme. Předat je můžeme jen tam, kde to vyžaduje zákon, například příslušnému úřadu při přihlášení ke zkoušce.",
  },
  {
    h: "Vaše práva",
    p: "Máte právo na přístup k údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku. Stížnost můžete podat u Úřadu pro ochranu osobních údajů (uoou.gov.cz). Pro uplatnění práv nám stačí napsat e-mail.",
  },
  {
    h: "Cookies a mapa",
    p: "Web nepoužívá reklamní ani analytické cookies. Mapa Google se načte až po kliknutí na tlačítko Zobrazit mapu; teprve potom může Google ukládat vlastní cookies.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Ochrana osobních údajů" crumbs={[{ name: "Ochrana osobních údajů", path: "/ochrana-osobnich-udaju" }]} />
      <section className="container-page max-w-3xl space-y-10 pb-24">
        {sections.map((s) => (
          <div key={s.h}>
            <h2 className="font-display text-2xl font-bold">{s.h}</h2>
            <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
          </div>
        ))}
      </section>
    </>
  );
}
