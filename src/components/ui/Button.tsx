import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "light" | "outline" | "ghost";
type Size = "md" | "lg";

/*
  Primary is calm black (like the logo); on hover an orange fill slides in
  from the left. Noticeable, but no loud orange block at rest.
*/
const fill =
  "relative isolate overflow-hidden before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-300 before:ease-[var(--ease-out-expo)] hover:before:scale-x-100 hover:text-on-accent focus-visible:before:scale-x-100 focus-visible:text-on-accent";

const variants: Record<Variant, string> = {
  primary: cn("bg-ink text-bg", fill),
  /** For dark panels. */
  light: cn("bg-panel-ink text-panel", fill),
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink/5",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.95rem]",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(
    "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold uppercase tracking-[0.06em] transition-[color,background-color,border-color,transform] duration-300 active:translate-y-px",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant; size?: Size };

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClass(variant, size, className)} {...props} />;
}
