"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/** Photo settles in on first paint (CSS, so LCP is not delayed), then drifts slightly as the page scrolls. */
export function HeroImageReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] bg-surface-2 lg:aspect-auto lg:h-[min(40rem,calc(100dvh-10rem))]"
    >
      <motion.div style={{ y }} className="absolute -inset-y-[8%] inset-x-0">
        <div className="animate-settle absolute inset-0">{children}</div>
      </motion.div>
    </div>
  );
}
