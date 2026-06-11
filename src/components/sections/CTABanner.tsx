"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 sm:py-24">
      <div
        className="absolute left-0 top-0 h-1.5 w-full bg-accent"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Tak pojďme do toho
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Zavolejte nebo vyplňte formulář. Ozve se vám do 24 hodin.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            Chci řidičák
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2.5 text-xl font-bold text-white transition-colors duration-200 hover:text-accent"
          >
            <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
