import type { CSSProperties } from "react";

/**
 * Headline whose words slide up out of a mask, one after another.
 * Pure CSS (no hydration needed), so it never delays LCP.
 */
export function SlideUpText({
  text,
  className,
  delay = 0,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
}) {
  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden="true" className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
          <span className="animate-rise inline-block" style={{ "--delay": `${delay + i * 0.06}s` } as CSSProperties}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/** Fades content up on first paint. For above-the-fold content only; use <Reveal> below the fold. */
export function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`animate-fade-up ${className ?? ""}`} style={{ "--delay": `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}
