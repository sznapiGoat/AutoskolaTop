"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Photo settles in on first paint (CSS, so LCP is not delayed), then drifts slightly as the page scrolls. */
export function HeroImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "10%"]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute -inset-y-[6%] inset-x-0">
        <div className="animate-settle absolute inset-0">{children}</div>
      </motion.div>
      {/* fade into the dark panel: from below on phones, from the left on desktop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-road from-0% via-road/0 via-35% lg:bg-linear-to-r lg:via-25%"
      />
    </div>
  );
}
