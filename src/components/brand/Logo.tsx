"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { cn } from "@/lib/utils";

type MarkProps = {
  className?: string;
  /** Plays the "road lights up" sequence on mount and on hover. */
  animated?: boolean;
};

/**
 * The mark: a road running up to the horizon that also reads as the "A" of
 * Autoškola. The white stop line is the crossbar.
 */
export function LogoMark({ className, animated = false }: MarkProps) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!animated || !svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dashes = svg.querySelectorAll<SVGPathElement>("[data-dash]");
    const play = () =>
      animate(dashes, {
        opacity: [0.15, 1],
        translateY: [3, 0],
        delay: stagger(70),
        duration: 420,
        ease: "outQuad",
      });

    const intro = play();
    const host = svg.closest("a") ?? svg;
    host.addEventListener("mouseenter", play);
    return () => {
      intro.cancel();
      host.removeEventListener("mouseenter", play);
    };
  }, [animated]);

  return (
    <svg ref={ref} viewBox="0 0 64 64" className={cn("shrink-0", className)} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#F26B1D" />
      <path d="M10 55 28.4 9h7.2L54 55Z" fill="#151514" />
      <g fill="#FFFFFF">
        <path data-dash d="M30.2 53h3.6l-.3-8.6h-3z" />
        <path data-dash d="M17.2 37h29.6l1.2 3.2H16z" />
        <path data-dash d="M30.9 32.4h2.2l-.2-5h-1.8z" />
        <path data-dash d="M31.25 23.2h1.5l-.15-3.8h-1.2z" />
        <path data-dash d="M31.5 16.2h1l-.1-2.7h-.8z" />
      </g>
    </svg>
  );
}

export function Logo({ className, animated }: MarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="size-9" animated={animated} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted">
          Autoškola
        </span>{" "}
        <span className="font-display text-[1.35rem] font-extrabold tracking-tight text-ink">
          TOP
        </span>
      </span>
    </span>
  );
}
