import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import {
  IconLicence,
  IconLicenceReturn,
  IconParking,
  IconTraining,
  IconTram,
  IconWheel,
  type IconProps,
} from "./Icons";

const bySlug: Record<string, ComponentType<IconProps>> = {
  "ridicsky-prukaz-b": IconLicence,
  "jizdy-do-prahy": IconTram,
  "kurz-parkovani": IconParking,
  "kondicni-jizdy": IconWheel,
  "skoleni-ridicu": IconTraining,
  "vraceni-ridicskeho-prukazu": IconLicenceReturn,
};

export function ServiceIcon({ slug, ...props }: IconProps & { slug: string }) {
  const Icon = bySlug[slug] ?? IconLicence;
  return <Icon {...props} />;
}

/** Soft rounded icon container. */
export function IconTile({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark" | "accent";
}) {
  return (
    <span
      className={cn(
        "grid size-14 shrink-0 place-items-center rounded-xl",
        tone === "light" && "bg-accent-soft text-ink [--icon-knock:var(--accent-soft)]",
        tone === "dark" && "bg-panel text-panel-ink [--icon-knock:var(--panel)]",
        tone === "accent" && "bg-accent text-on-accent [--icon-accent:var(--on-accent)] [--icon-knock:var(--accent)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
