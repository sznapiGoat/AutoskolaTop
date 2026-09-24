import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Accordion } from "@/components/ui/Accordion";
import { getFaqs } from "@/lib/content";
import { site } from "@/lib/site";

const ids = ["zacatek", "delka", "platba", "praha", "zkouska-format"];

export function FaqPreview() {
  const items = getFaqs(ids);
  return (
    <section className="container-page grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_1.6fr] lg:gap-16" aria-labelledby="faq-nadpis">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <h2 id="faq-nadpis" className="font-display text-4xl leading-[1.05] font-bold md:text-5xl">
          Na co se nás ptáte nejčastěji
        </h2>
        <p className="mt-4 text-lg text-muted">
          Nenašli jste odpověď? Zavolejte na{" "}
          <a href={site.phoneHref} className="font-semibold whitespace-nowrap text-ink underline decoration-accent decoration-2 underline-offset-4">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <Link href="/caste-dotazy" className="group mt-6 inline-flex items-center gap-2 font-semibold text-accent-text">
          Všechny dotazy
          <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
      <Accordion items={items} />
    </section>
  );
}
