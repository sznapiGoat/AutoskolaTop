import Link from "next/link";
import { IconArrowRight } from "@/components/icons/Icons";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { getFaqs } from "@/lib/content";
import { site } from "@/lib/site";

const ids = ["zacatek", "delka", "platba", "praha"];

/** The four questions everyone asks, answered in the open: nothing to click. */
export function FaqPreview() {
  const items = getFaqs(ids);
  return (
    <section className="container-page py-20 md:py-28" aria-labelledby="faq-nadpis">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="faq-nadpis" className="font-display text-4xl font-bold md:text-5xl">
            Na co se nás ptáte nejčastěji
          </h2>
          <p className="mt-3 text-lg text-muted">
            Nenašli jste odpověď? Zavolejte na{" "}
            <a
              href={site.phoneHref}
              className="font-semibold whitespace-nowrap text-ink underline decoration-accent decoration-2 underline-offset-4"
            >
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
        <Link href="/caste-dotazy" className="group inline-flex items-center gap-2 font-semibold text-accent-text">
          Všechny dotazy
          <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>

      <RevealGroup className="mt-12 grid gap-x-16 gap-y-10 border-t border-line pt-10 md:grid-cols-2">
        {items.map((f) => (
          <RevealItem key={f.id}>
            <h3 className="font-display text-xl font-semibold">{f.q}</h3>
            <p className="mt-2 max-w-[60ch] leading-relaxed text-muted">{f.a}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
