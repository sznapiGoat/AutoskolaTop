"use client";

import { useId, useState } from "react";
import { motion } from "motion/react";
import { IconPlus } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

export type AccordionItem = { id: string; q: string; a: string };

export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => {
        const isOpen = open === item.id;
        const panelId = `${baseId}-${item.id}`;
        return (
          <div key={item.id} id={item.id}>
            <h3 className="font-sans text-base tracking-normal">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-[1.05rem] font-semibold text-ink transition-colors hover:text-accent-text"
              >
                {item.q}
                <span
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full border border-line transition-[transform,background-color,border-color] duration-300",
                    isOpen && "rotate-45 border-accent bg-accent text-on-accent",
                  )}
                >
                  <IconPlus size={16} aria-hidden="true" />
                </span>
              </button>
            </h3>
            {/* Answers stay in the DOM when collapsed so they remain indexable. */}
            <motion.div
              id={panelId}
              role="region"
              inert={!isOpen}
              initial={false}
              animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="max-w-[65ch] pb-6 pr-12 leading-relaxed text-muted">{item.a}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
