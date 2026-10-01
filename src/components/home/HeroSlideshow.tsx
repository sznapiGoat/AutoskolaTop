"use client";

import Image from "next/image";
import { useState, useSyncExternalStore, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  src: string;
  alt: string;
  /** Short label in the switcher. */
  label: string;
  /** object-position, so the subject stays clear of the headline. */
  position: string;
  /** Ken Burns drift direction. */
  drift?: { x: string; y: string };
};

const DURATION = 7; // seconds per slide

const motionQuery = "(prefers-reduced-motion: reduce)";
const reducedMotion = () => window.matchMedia(motionQuery).matches;

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(motionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function subscribeVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

/**
 * Full-bleed photos that cross-fade (CSS opacity transition) while the active
 * one slowly pushes in (CSS Ken Burns). No animation library: the switcher's
 * progress bar is a CSS scaleX animation and its animationend advances the
 * slide, so pausing the bar pauses the slideshow exactly where it is.
 */
export function HeroSlideshow({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [userPaused, setUserPaused] = useState(false);
  // Bumped each time a slide becomes active, so its drift restarts from the beginning.
  const [runs, setRuns] = useState(() => slides.map(() => 0));
  // Reduced motion: no autoplay at all (the global CSS also zeroes animation durations).
  const reduce = useSyncExternalStore(subscribeReducedMotion, reducedMotion, () => false);
  // Don't run through slides in a background tab.
  const hidden = useSyncExternalStore(
    subscribeVisibility,
    () => document.hidden,
    () => false,
  );
  const paused = reduce || hidden || userPaused;

  const go = (i: number) => {
    if (i === active) return;
    setPrevious(active);
    setActive(i);
    setRuns((r) => r.map((n, j) => (j === i ? n + 1 : n)));
  };

  const playState = { animationPlayState: paused ? "paused" : "running" } as const;

  return (
    <>
      <div
        className="absolute inset-0 -z-20 overflow-hidden bg-road"
        aria-roledescription="prezentace"
        aria-label="Fotky z autoškoly"
      >
        {slides.map((s, i) => {
          const visible = i === active;
          // Keep the drift running on the slide that is fading out, so it doesn't snap back mid-fade.
          const drifting = i === active || i === previous;
          return (
            <div
              key={s.src}
              aria-hidden={!visible}
              className={cn(
                "absolute inset-0 transition-opacity duration-[1400ms] ease-in-out",
                visible ? "opacity-100" : "opacity-0",
              )}
            >
              <div
                key={runs[i]}
                className={cn("absolute inset-0", drifting && "animate-ken-burns")}
                style={{ "--kb-x": s.drift?.x, "--kb-y": s.drift?.y, ...playState } as CSSProperties}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  quality={85}
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition: s.position }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* The clock: an invisible bar running the same CSS animation; when it ends, the next slide comes in. */}
      <span
        key={`timer-${active}-${runs[active]}`}
        aria-hidden="true"
        onAnimationEnd={() => {
          if (!reduce) go((active + 1) % slides.length);
        }}
        className="animate-progress pointer-events-none absolute top-0 left-0 h-px w-px opacity-0"
        style={{ "--duration": `${DURATION}s`, ...playState } as CSSProperties}
      />

      {/* switcher: one button per photo with its progress bar, plus pause */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden md:block">
        <div className="container-page flex items-end justify-end gap-2 pb-10">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Fotka ${i + 1}: ${s.label}`}
              aria-current={i === active}
              className={cn(
                "group w-36 text-left text-sm font-medium transition-colors",
                i === active ? "text-white" : "text-white/60 hover:text-white",
              )}
            >
              <span className="relative block h-[3px] overflow-hidden rounded-full bg-white/25">
                {i === active && (
                  <span
                    key={runs[i]}
                    className="animate-progress absolute inset-0 rounded-full bg-accent"
                    style={{ "--duration": `${DURATION}s`, ...playState } as CSSProperties}
                  />
                )}
              </span>
              <span className="mt-2.5 block">{s.label}</span>
            </button>
          ))}
          {!reduce && (
            <button
              type="button"
              onClick={() => setUserPaused((v) => !v)}
              aria-label={paused ? "Spustit prezentaci" : "Pozastavit prezentaci"}
              className="ml-2 grid size-11 shrink-0 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-ink active:scale-95"
            >
              {paused ? (
                <svg viewBox="0 0 24 24" width={16} height={16} aria-hidden="true">
                  <path d="M7 4.5v15L19.5 12Z" fill="currentColor" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width={16} height={16} aria-hidden="true">
                  <path d="M6.5 4.5h4v15h-4Zm7 0h4v15h-4Z" fill="currentColor" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>

      {/* phones: simple dots, same behaviour */}
      <div className="absolute top-[5.25rem] right-3 z-10 flex items-center gap-0.5 md:hidden">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Fotka ${i + 1}: ${s.label}`}
            aria-current={i === active}
            className="grid size-8 place-items-center"
          >
            <span
              className={cn(
                "block h-1.5 rounded-full transition-all",
                i === active ? "w-5 bg-accent" : "w-1.5 bg-white/60",
              )}
            />
          </button>
        ))}
      </div>
    </>
  );
}
