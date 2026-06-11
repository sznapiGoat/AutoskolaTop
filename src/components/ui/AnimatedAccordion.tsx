"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AnimatedAccordionProps = {
  items: AccordionItem[];
};

export default function AnimatedAccordion({ items }: AnimatedAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
            <button
              id={buttonId}
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              aria-controls={panelId}
              className="flex min-h-[44px] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
            >
              <span
                className={cn(
                  "text-base font-semibold transition-colors duration-200 sm:text-lg",
                  open ? "text-accent" : "text-body"
                )}
              >
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                  open ? "bg-accent/10 text-accent" : "bg-surface text-muted"
                )}
              >
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 text-base leading-relaxed text-muted sm:px-7">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
