"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Logo link that always takes the visitor to the top: from another page it
 * goes home (Next scrolls to top), on the home page it scrolls back up.
 */
export function LogoLink({
  children,
  className,
  onNavigate,
}: {
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      aria-label="Autoškola TOP Rakovník, úvodní stránka"
      className={className}
      onClick={(e) => {
        onNavigate?.();
        if (pathname !== "/") return;
        e.preventDefault();
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        if (window.location.hash) history.replaceState(null, "", "/");
      }}
    >
      {children}
    </Link>
  );
}
