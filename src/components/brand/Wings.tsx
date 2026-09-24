"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { cn } from "@/lib/utils";

/**
 * The five stepped stripes from the logo's wings, used as the site's graphic
 * motif. They unfold from the inner edge when they scroll into view (anime.js).
 */
export function Wings({
  side = "left",
  className,
  animated = true,
}: {
  side?: "left" | "right";
  className?: string;
  animated?: boolean;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg || !animated) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Bars start folded via CSS ([data-wings] in globals.css), so nothing flashes before this runs.
    const bars = svg.querySelectorAll<SVGPathElement>("path");

    let anim: ReturnType<typeof animate> | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        anim = animate(bars, {
          scaleX: [0, 1],
          delay: stagger(70),
          duration: 900,
          ease: "outExpo",
        });
      },
      { threshold: 0.3 },
    );
    io.observe(svg);
    return () => {
      io.disconnect();
      anim?.cancel();
    };
  }, [animated]);

  // Drawn as a left wing: bars anchored on the right (inner) edge, each one
  // shorter than the one above, with the slanted outer end of the logo.
  const bars = [0, 1, 2, 3, 4].map((i) => {
    const y = i * 20;
    const x = 8 + i * 16;
    return `M${x + 10} ${y}H200V${y + 12}H${x}Z`;
  });

  return (
    <svg
      ref={ref}
      data-wings={animated ? "" : undefined}
      viewBox="0 0 200 92"
      aria-hidden="true"
      className={cn("block", side === "right" && "-scale-x-100", className)}
    >
      <g fill="currentColor">
        {bars.map((d) => (
          <path key={d} d={d} style={{ transformBox: "fill-box", transformOrigin: "right center" }} />
        ))}
      </g>
    </svg>
  );
}
