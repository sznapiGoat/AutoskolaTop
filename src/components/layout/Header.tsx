"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { List, Phone, X } from "@phosphor-icons/react";
import { BrandLogo } from "@/components/brand/Logo";
import { buttonClass } from "@/components/ui/Button";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(68);
  const barRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  // Close the mobile menu on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const active = nav.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))?.href;
  const highlight = hovered ?? active;

  return (
    <header className="sticky top-0 z-40">
      <div
        ref={barRef}
        className={cn(
          "transition-[background-color,box-shadow,border-color] duration-300",
          scrolled || open
            ? "border-b border-line bg-bg/85 backdrop-blur-xl"
            : "border-b border-transparent bg-bg",
        )}
      >
        <div className="container-page flex h-[4.75rem] items-center justify-between gap-6">
          <Link href="/" aria-label="Autoškola TOP Rakovník, úvodní stránka" className="-my-1 rounded-lg">
            <BrandLogo className="w-[6.25rem] sm:w-[7rem]" title="Autoškola TOP Rakovník" />
          </Link>

          <nav aria-label="Hlavní navigace" className="hidden lg:block">
            <ul className="flex items-center" onMouseLeave={() => setHovered(null)}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHovered(item.href)}
                    aria-current={active === item.href ? "page" : undefined}
                    className={cn(
                      "relative block rounded-lg px-4 py-2 font-display text-[1.05rem] font-semibold uppercase tracking-[0.04em] transition-colors",
                      active === item.href ? "text-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {highlight === item.href && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink transition-colors hover:text-accent-text md:inline-flex"
            >
              <Phone size={18} weight="bold" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <Link href="/kontakt" className={buttonClass("primary", "md", "hidden sm:inline-flex")}>
              Chci řidičák
            </Link>
            <button
              type="button"
              onClick={() => {
                // Open the menu right under the header, wherever it currently sits.
                setMenuTop(barRef.current?.getBoundingClientRect().bottom ?? 68);
                setOpen((v) => !v);
              }}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Zavřít menu" : "Otevřít menu"}
              className="grid size-11 place-items-center rounded-lg border border-line bg-surface text-ink lg:hidden"
            >
              {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ top: menuTop }}
            className="fixed inset-x-0 bottom-0 overflow-y-auto bg-bg lg:hidden"
          >
            <nav aria-label="Mobilní navigace" className="container-page flex min-h-full flex-col py-6">
              <ul className="flex flex-col">
                {[{ href: "/", label: "Úvod" }, ...nav].map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-line"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-4 font-display text-3xl font-bold uppercase",
                        pathname === item.href ? "text-accent-text" : "text-ink",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto grid gap-3 pt-8">
                <Link href="/kontakt" className={buttonClass("primary", "lg")}>
                  Chci řidičák
                </Link>
                <a href={site.phoneHref} className={buttonClass("outline", "lg")}>
                  <Phone size={18} weight="bold" aria-hidden="true" />
                  {site.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
