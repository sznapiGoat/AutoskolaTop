"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { services } from "@/lib/content";
import { formatPrice } from "@/lib/site";

/** Horizontal, snap-scrolling rail of services. Swipe on touch, arrows on desktop. */
export function ServicesRail() {
  const track = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();

  const slide = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="overflow-hidden py-20 md:py-28" aria-labelledby="sluzby-nadpis">
      <div className="container-page flex items-end justify-between gap-6">
        <div>
          <h2 id="sluzby-nadpis" className="font-display text-4xl leading-[1.05] font-bold md:text-5xl">
            Co u nás zvládnete
          </h2>
          <p className="mt-4 max-w-[52ch] text-lg text-muted">
            Od prvního řidičáku po návrat za volant po letech.
          </p>
        </div>
        <div className="hidden gap-2 md:flex">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => slide(dir)}
              aria-label={dir === -1 ? "Předchozí služby" : "Další služby"}
              className="grid size-12 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-ink active:scale-95"
            >
              {dir === -1 ? <ArrowLeft size={20} weight="bold" /> : <ArrowRight size={20} weight="bold" />}
            </button>
          ))}
        </div>
      </div>

      <ul
        ref={track}
        className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto rail-inset pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((s, i) => (
          <li key={s.slug} className="w-[82vw] shrink-0 snap-start sm:w-[22rem] lg:w-[24rem]">
            {/* Animate an inner wrapper: transforming the snap item itself makes the rail re-snap (scroll) on load. */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Link
                href={`/sluzby/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-shadow hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 640px) 24rem, 82vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold">{s.short}</h3>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-surface-2 transition-colors group-hover:bg-accent group-hover:text-on-accent">
                      <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">{s.pitch}</p>
                  <p className="mt-6 text-sm text-muted">
                    {s.pricePrefix ? `${s.pricePrefix} ` : ""}
                    <span className="text-lg font-semibold text-ink">{formatPrice(s.price)}</span>
                  </p>
                </div>
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </section>
  );
}
