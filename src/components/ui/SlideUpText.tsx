import type { CSSProperties } from "react";

/** Headline that fades up once on first paint. Pure CSS, so it never delays LCP. */
export function SlideUpText({
  text,
  className,
  delay = 0,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
}) {
  return (
    <Tag className={`animate-fade-up ${className ?? ""}`} style={{ "--delay": `${delay}s` } as CSSProperties}>
      {text}
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
