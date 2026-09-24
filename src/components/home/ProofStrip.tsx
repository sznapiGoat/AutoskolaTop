"use client";

import { useEffect, useRef } from "react";
import { animate, utils } from "animejs";
import { site } from "@/lib/site";

const stats = [
  { value: site.facebookRating.percent, suffix: " %", label: `doporučení na Facebooku (${site.facebookRating.reviews} recenzí)` },
  { value: 28, suffix: "", label: "hodin jízd v každém kurzu sk. B" },
  { value: 2, suffix: "", label: "splátky bez navýšení ceny" },
  { value: 500, suffix: " Kč", label: "bonus za každého kamaráda" },
];

/** Numbers count up once when the strip scrolls into view (anime.js). */
export function ProofStrip() {
  const ref = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animations: ReturnType<typeof animate>[] = [];
    nodes.forEach((n) => (n.textContent = "0"));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        nodes.forEach((node, i) => {
          const counter = { v: 0 };
          const target = Number(node.dataset.count);
          animations.push(
            animate(counter, {
              v: target,
              duration: 1600,
              delay: i * 120,
              ease: "outExpo",
              modifier: utils.round(0),
              onUpdate: () => {
                node.textContent = counter.v.toLocaleString("cs-CZ");
              },
            }),
          );
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(root);
    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
      nodes.forEach((n) => (n.textContent = Number(n.dataset.count).toLocaleString("cs-CZ")));
    };
  }, []);

  return (
    <section aria-label="Autoškola TOP v číslech" className="border-y border-line bg-surface">
      <dl ref={ref} className="container-page grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:divide-x lg:divide-line">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse gap-1 px-2 lg:px-8 lg:first:pl-0">
            <dt className="max-w-[22ch] text-sm leading-snug text-muted">{s.label}</dt>
            <dd className="font-display text-4xl font-bold tabular-nums tracking-tight md:text-5xl">
              <span data-count={s.value}>{s.value.toLocaleString("cs-CZ")}</span>
              {s.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
