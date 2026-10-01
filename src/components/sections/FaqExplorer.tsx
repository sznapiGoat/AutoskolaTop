"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconPhone } from "@/components/icons/Icons";
import { Accordion } from "@/components/ui/Accordion";
import { faqCategories, faqs, type FaqCategory } from "@/lib/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Filter = FaqCategory | "Vše";

/** Lowercase without diacritics, so "zkouska" finds "zkouška". */
const fold = (text: string) =>
  text
    .toLocaleLowerCase("cs")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

export function FaqExplorer() {
  const [filter, setFilter] = useState<Filter>("Vše");
  const [query, setQuery] = useState("");
  const tabs: Filter[] = ["Vše", ...faqCategories];
  const needle = fold(query.trim());
  // Czech declines words ("zkouška", "zkoušku"), so match each word without its last letter.
  const stems = needle.split(/\s+/).filter(Boolean).map((w) => (w.length > 4 ? w.slice(0, -1) : w));
  const matches = (f: (typeof faqs)[number]) => {
    const text = fold(`${f.q} ${f.a}`);
    return stems.every((stem) => text.includes(stem));
  };
  const groups = faqCategories
    .filter((c) => filter === "Vše" || c === filter)
    .map((c) => ({ category: c, items: faqs.filter((f) => f.category === c && matches(f)) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="min-w-0">
      <label htmlFor="faq-hledat" className="sr-only">
        Hledat v dotazech
      </label>
      <input
        id="faq-hledat"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Hledat, třeba „zkouška“ nebo „splátky“"
        className="mb-4 w-full rounded-full border border-line bg-white px-5 py-3.5 text-base text-ink transition-colors placeholder:text-muted/70 focus:border-accent focus:ring-4 focus:ring-accent/20 focus:outline-none"
      />
      <div
        role="tablist"
        aria-label="Kategorie dotazů"
        className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-2 [scrollbar-width:none]"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            type="button"
            aria-selected={filter === tab}
            onClick={() => setFilter(tab)}
            className={cn(
              "relative shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
              filter === tab ? "text-on-accent" : "text-muted hover:text-ink",
            )}
          >
            {filter === tab && (
              <motion.span
                layoutId="faq-tab"
                className="absolute inset-0 -z-10 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 space-y-14"
        >
          {groups.length === 0 && (
            <div className="rounded-[var(--radius-card)] bg-surface p-8" role="status">
              <p className="font-display text-xl font-semibold">Na tohle tu odpověď zatím nemáme.</p>
              <p className="mt-2 text-muted">Zeptejte se nás rovnou, rádi poradíme.</p>
              <a href={site.phoneHref} className="mt-5 inline-flex items-center gap-2 font-semibold text-accent-text">
                <IconPhone size={18} aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </div>
          )}
          {groups.map((g, i) => (
            <section key={g.category} aria-labelledby={`faq-skupina-${i}`}>
              <h2 id={`faq-skupina-${i}`} className="font-display text-2xl font-bold md:text-3xl">
                {g.category}
              </h2>
              <Accordion items={g.items} className="mt-4" />
            </section>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
