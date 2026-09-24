"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { IconArrowRight, IconCar } from "@/components/icons/Icons";
import { steps } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * The path to a licence as a road: the lane marking fills in and the car
 * drives down as you scroll, so progress through the steps is literal.
 */
export function RoadProcess({ showLink = false }: { showLink?: boolean }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const carTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section className="asphalt text-[#f2f1ee]" aria-labelledby="postup-nadpis">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 id="postup-nadpis" className="font-display text-4xl leading-[1.05] font-bold md:text-5xl">
            Cesta k řidičáku
          </h2>
          <p className="mt-4 text-lg text-[#a6a59f]">Šest zastávek. Na každé víte přesně, co vás čeká.</p>
        </div>

        <ol ref={ref} className="relative mt-14 md:mt-20">
          {/* road */}
          <div aria-hidden="true" className="absolute top-0 bottom-0 left-5 w-10 -translate-x-1/2 md:left-1/2">
            <div className="absolute inset-0 rounded-full bg-[#262624]" />
            <div className="absolute inset-y-4 left-1/2 w-[3px] -translate-x-1/2 bg-[repeating-linear-gradient(180deg,rgb(255_255_255/0.18)_0_18px,transparent_18px_34px)]" />
            <motion.div
              style={{ scaleY: reduce ? 1 : progress }}
              className="absolute inset-y-4 left-1/2 w-[3px] origin-top -translate-x-1/2 bg-[repeating-linear-gradient(180deg,#f26b1d_0_18px,transparent_18px_34px)]"
            />
            {!reduce && (
              <motion.div style={{ top: carTop }} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="grid size-10 rotate-90 place-items-center rounded-full bg-accent text-[#151514] shadow-[0_0_0_6px_rgb(242_107_29/0.2)]">
                  <IconCar size={22} />
                </span>
              </motion.div>
            )}
          </div>

          {steps.map((step, i) => {
            const right = i % 2 === 1;
            return (
              <li key={step.title} className="relative grid pb-12 last:pb-0 md:grid-cols-2 md:pb-16">
                <motion.div
                  initial={reduce ? false : { opacity: 0, x: right ? 48 : -48 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "pl-16 md:pl-0",
                    right ? "md:col-start-2 md:pl-16" : "md:pr-16 md:text-right",
                  )}
                >
                  <span className="font-display text-sm font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 font-display text-2xl font-semibold md:text-3xl">{step.title}</h3>
                  <p className={cn("mt-2 max-w-md leading-relaxed text-[#a6a59f]", !right && "md:ml-auto")}>
                    {step.text}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ol>

        {showLink && (
          <div className="mt-16 md:text-center">
            <Link
              href="/sluzby#prubeh"
              className="group inline-flex items-center gap-2 font-semibold text-accent hover:text-[#ff8a47]"
            >
              Jak přesně kurz probíhá
              <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
