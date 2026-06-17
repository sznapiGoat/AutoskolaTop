import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Color of the wordmark text. Defaults to current text color. */
  className?: string;
  /** Render as a plain <span> instead of a link (e.g. inside other links). */
  asLink?: boolean;
  /** Size of the mark tile. */
  size?: "sm" | "md";
};

/**
 * Custom steering-wheel mark in a rounded accent tile, paired with the
 * "Autoškola TOP" wordmark. Designed to read clearly down to favicon size.
 */
export default function Logo({ className, asLink = true, size = "md" }: LogoProps) {
  const tile = size === "sm" ? "h-9 w-9" : "h-10 w-10";

  const content = (
    <span className="flex items-center gap-2.5">
      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-sm shadow-accent/30",
          tile
        )}
      >
        <SteeringMark className="h-[58%] w-[58%]" />
      </span>
      <span
        className={cn(
          "font-display text-lg font-bold leading-none tracking-tight",
          className
        )}
      >
        Autoškola{" "}
        <span className="text-accent">TOP</span>
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link href="/" aria-label="Autoškola TOP – domů" className="inline-flex">
      {content}
    </Link>
  );
}

function SteeringMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      {/* outer rim */}
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="2" />
      {/* hub */}
      <circle cx="12" cy="12" r="2.6" fill="currentColor" />
      {/* three spokes */}
      <path
        d="M12 14.6V20M9.7 10.7 4.6 7.9M14.3 10.7l5.1-2.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
