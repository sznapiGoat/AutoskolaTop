import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "light" | "outline" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-accent-strong text-on-accent shadow-[0_8px_20px_-8px_rgb(204_74_10/0.55)] hover:bg-accent-hover",
  /** White on photos and dark panels. */
  light: "bg-white text-ink hover:bg-accent hover:text-on-accent",
  outline: "border border-ink/15 bg-white text-ink hover:border-ink/40",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-13 px-7 text-base",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(
    "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[color,background-color,border-color,transform] duration-300 active:translate-y-px",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant; size?: Size };

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClass(variant, size, className)} {...props} />;
}
