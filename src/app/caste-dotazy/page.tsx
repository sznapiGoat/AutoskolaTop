import { ChatCircleText, Phone } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/PageHero";
import { FaqExplorer } from "@/components/sections/FaqExplorer";
import { ButtonLink, buttonClass } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqs } from "@/lib/content";
import { faqLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Časté dotazy",
  description:
    "Odpovědi na nejčastější otázky o autoškole v Rakovníku: kdy začít, co potřebujete, jak dlouho kurz trvá, jak se platí a jak vypadá závěrečná zkouška.",
  path: "/caste-dotazy",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Časté dotazy"
        lead="Všechno, co potřebujete vědět, než k nám nastoupíte. A když tu odpověď nenajdete, prostě zavolejte."
        crumbs={[{ name: "Časté dotazy", path: "/caste-dotazy" }]}
      />

      <section className="container-page grid gap-12 pb-24 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
        <FaqExplorer />

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[var(--radius-card)] bg-surface-2 p-7 md:p-8">
            <ChatCircleText size={32} weight="duotone" className="text-accent-text" aria-hidden="true" />
            <h2 className="mt-5 font-display text-2xl font-semibold">Máte jiný dotaz?</h2>
            <p className="mt-2 text-muted">
              Volejte {site.hours.label.toLowerCase()}, nebo nám napište. Rádi poradíme.
            </p>
            <div className="mt-6 grid gap-3">
              <a href={site.phoneHref} className={buttonClass("primary", "lg")}>
                <Phone size={18} weight="bold" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <ButtonLink href="/kontakt" variant="outline" size="lg">
                Napsat zprávu
              </ButtonLink>
            </div>
          </div>
        </aside>
      </section>

      <JsonLd data={faqLd(faqs)} />
    </>
  );
}
