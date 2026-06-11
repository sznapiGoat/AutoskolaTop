"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import AnnouncementBar from "@/components/ui/AnnouncementBar";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Úvod" },
  { href: "/sluzby", label: "Služby" },
  { href: "/cenik", label: "Ceník" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open
          ? "bg-white/80 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <AnnouncementBar collapsed={scrolled} />
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Hlavní navigace"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-lg font-black text-white">
            A
          </span>
          <span
            className={cn(
              "text-lg font-extrabold tracking-tight",
              scrolled || open || pathname !== "/" ? "text-body" : "text-white"
            )}
          >
            Autoškola TOP
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                  active
                    ? "text-accent"
                    : scrolled || pathname !== "/"
                      ? "text-body hover:text-accent"
                      : "text-white/90 hover:text-white"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            className="group relative ml-3 overflow-hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.25)_50%,transparent_80%)]" />
            <span className="relative">Chci řidičák</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-md md:hidden",
            scrolled || open || pathname !== "/" ? "text-body" : "text-white"
          )}
          aria-expanded={open}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-medium",
                    pathname === link.href
                      ? "bg-orange-50 text-accent"
                      : "text-body hover:bg-surface"
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="mt-2 flex items-center justify-center rounded-full bg-accent px-5 py-3 text-base font-semibold text-white"
              >
                Chci řidičák
              </Link>
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-semibold text-body"
              >
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
