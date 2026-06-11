"use client";

import { motion } from "framer-motion";
import { Check, X, Wallet } from "lucide-react";

export default function PaymentInfo() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl bg-surface p-8 sm:p-10"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
              <Wallet className="h-5 w-5 text-accent" aria-hidden="true" />
            </span>
            <h2 className="text-xl font-bold text-body sm:text-2xl">
              Platba ve 2 splátkách bez navýšení
            </h2>
          </div>

          <div className="mt-7 grid gap-8 sm:grid-cols-2">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-base text-body">
                    Záloha 10.000 Kč při nástupu do kurzu
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-base text-body">
                    Doplatek nejpozději 14 dní před závěrečnou zkouškou
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-base text-body">
                    Cena zahrnuje kompletní výuku, výcvik a první závěrečnou
                    zkoušku
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="mt-1 h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                  <span className="text-base text-muted">
                    Cena nezahrnuje správní poplatek magistrátu
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
