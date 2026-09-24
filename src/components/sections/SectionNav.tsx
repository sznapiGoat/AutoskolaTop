"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Sticky in-page navigation for long pages. Highlights the section in view
 * (the pill slides between items) and keeps the active item scrolled into view.
 */
export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      // a thin band just below the sticky bars decides which section is "current"
      { rootMargin: "-160px 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    const list = listRef.current;
    const el = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !el) return;
    // scroll the bar itself, never the page
    list.scrollTo({ left: el.offsetLeft - list.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="Obsah stránky" className="sticky top-[4.75rem] z-30 border-y border-line bg-bg/90 backdrop-blur-xl">
      <ul ref={listRef} className="container-page flex gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <li key={item.id} data-id={item.id} className="shrink-0">
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "relative block rounded-lg px-3.5 py-2 font-display text-[0.95rem] font-semibold uppercase tracking-[0.05em] transition-colors",
                active === item.id ? "text-bg" : "text-muted hover:text-ink",
              )}
            >
              {active === item.id && (
                <motion.span
                  layoutId="section-pill"
                  className="absolute inset-0 -z-10 rounded-lg bg-ink"
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                />
              )}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
