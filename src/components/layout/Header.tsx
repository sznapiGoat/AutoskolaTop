"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { IconArrowRight, IconCaretDown, IconClose, IconMenu, IconPhone } from "@/components/icons/Icons";
import { BrandLogo } from "@/components/brand/Logo";
import { LogoLink } from "@/components/brand/LogoLink";
import { buttonClass } from "@/components/ui/Button";
import { services } from "@/lib/content";
import { formatPrice, nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(68);
  const barRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [dropdown, setDropdown] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  // Close the mobile menu on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setDropdown(false);
  }

  // Escape closes the services dropdown.
  useEffect(() => {
    if (!dropdown) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDropdown(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dropdown]);

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
          <LogoLink className="-my-1 rounded-lg" onNavigate={() => setOpen(false)}>
            <BrandLogo className="w-[6.25rem] sm:w-[7rem]" title="Autoškola TOP Rakovník" />
          </LogoLink>

          <nav aria-label="Hlavní navigace" className="hidden lg:block">
            <ul className="flex items-center" onMouseLeave={() => setHovered(null)}>
              {nav.map((item) => (
                <li
                  key={item.href}
                  className={cn(item.children && "relative flex items-center")}
                  onMouseEnter={item.children ? () => setDropdown(true) : undefined}
                  onMouseLeave={item.children ? () => setDropdown(false) : undefined}
                >
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
                  {item.children && (
                    <>
                      <button
                        type="button"
                        onClick={() => setDropdown((v) => !v)}
                        aria-expanded={dropdown}
                        aria-controls="sluzby-menu"
                        aria-label="Zobrazit jednotlivé služby"
                        className="-ml-3 grid size-8 place-items-center rounded-md text-muted transition-colors hover:text-ink"
                      >
                        <IconCaretDown size={14} className={cn("transition-transform", dropdown && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {dropdown && (
                          <motion.div
                            id="sluzby-menu"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-0 pt-3"
                          >
                            <div className="w-[38rem] rounded-[var(--radius-card)] border border-line bg-surface p-3 shadow-soft">
                              <ul className="grid grid-cols-2 gap-1">
                                {services.map((s) => (
                                  <li key={s.slug}>
                                    <Link
                                      href={`/sluzby/${s.slug}`}
                                      className={cn(
                                        "flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-surface-2",
                                        pathname === `/sluzby/${s.slug}` && "bg-surface-2",
                                      )}
                                    >
                                      <span className="relative size-14 shrink-0 overflow-hidden rounded-md bg-surface-2">
                                        <Image src={s.image} alt="" fill sizes="56px" className="object-cover" />
                                      </span>
                                      <span>
                                        <span className="block font-display text-lg leading-tight font-bold uppercase">{s.short}</span>
                                        <span className="text-sm text-muted">
                                          {s.pricePrefix ? `${s.pricePrefix} ` : ""}
                                          {formatPrice(s.price)}
                                        </span>
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-2 flex items-center justify-between rounded-lg bg-surface-2 px-4 py-3 text-sm font-semibold">
                                <Link href="/sluzby" className="group inline-flex items-center gap-1.5 hover:text-accent-text">
                                  Přehled služeb a průběh kurzu
                                  <IconArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                                </Link>
                                <Link href="/cenik" className="group inline-flex items-center gap-1.5 hover:text-accent-text">
                                  Ceník
                                  <IconArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink transition-colors hover:text-accent-text md:inline-flex"
            >
              <IconPhone size={18} aria-hidden="true" />
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
              {open ? <IconClose size={20} /> : <IconMenu size={20} />}
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
                    {item.children && (
                      <ul className="-mt-1 grid grid-cols-2 gap-x-4 gap-y-1 pb-4">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className={cn(
                                "block py-1.5 text-[1.05rem] font-medium",
                                pathname === c.href ? "text-accent-text" : "text-muted",
                              )}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto grid gap-3 pt-8">
                <Link href="/kontakt" className={buttonClass("primary", "lg")}>
                  Chci řidičák
                </Link>
                <a href={site.phoneHref} className={buttonClass("outline", "lg")}>
                  <IconPhone size={18} aria-hidden="true" />
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
