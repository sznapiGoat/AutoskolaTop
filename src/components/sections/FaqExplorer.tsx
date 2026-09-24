"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Accordion } from "@/components/ui/Accordion";
import { faqCategories, faqs, type FaqCategory } from "@/lib/content";
import { cn } from "@/lib/utils";

type Filter = FaqCategory | "Vše";

export function FaqExplorer() {
  const [filter, setFilter] = useState<Filter>("Vše");
  const tabs: Filter[] = ["Vše", ...faqCategories];
  const groups = faqCategories
    .filter((c) => filter === "Vše" || c === filter)
    .map((c) => ({ category: c, items: faqs.filter((f) => f.category === c) }));

  return (
    <div className="min-w-0">
      <div role="tablist" aria-label="Kategorie dotazů" className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-2 [scrollbar-width:none]">
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
