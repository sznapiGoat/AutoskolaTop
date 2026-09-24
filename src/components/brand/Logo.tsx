import { cn } from "@/lib/utils";

const LOGO_VIEWBOX = "0 0 3048 1668";

/**
 * The school's own logo (vectorised from their artwork). Colours come from the
 * --logo-ink / --logo-top / --logo-sig variables, so it adapts to light, dark
 * and `.on-dark` surfaces. Loaded once via <use>, cached across pages.
 */
export function BrandLogo({
  className,
  variant = "solid",
  title = "Autoškola TOP Rakovník",
}: {
  className?: string;
  /** "textured" keeps the distressed TOP from the original artwork; use it large. */
  variant?: "solid" | "textured";
  title?: string;
}) {
  return (
    <svg viewBox={LOGO_VIEWBOX} role="img" aria-label={title} className={cn("block h-auto", className)}>
      <use href={`/brand/logo-${variant}.svg#logo`} />
    </svg>
  );
}
