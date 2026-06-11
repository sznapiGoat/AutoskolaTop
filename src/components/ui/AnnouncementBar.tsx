"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gift, X, ArrowRight } from "lucide-react";

type AnnouncementBarProps = {
  collapsed: boolean;
};

export default function AnnouncementBar({ collapsed }: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence initial={false}>
      {!dismissed && !collapsed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden bg-accent"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
            <Link
              href="/cenik"
              className="group flex min-h-[28px] items-center gap-2 text-sm font-medium text-white"
            >
              <Gift className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate">
                Přiveďte kamaráda a získejte 500 Kč. Platí pro každého
                přivedeného žáka.
              </span>
              <ArrowRight
                className="hidden h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 sm:block"
                aria-hidden="true"
              />
            </Link>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Zavřít oznámení"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors duration-200 hover:bg-white/15 hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
