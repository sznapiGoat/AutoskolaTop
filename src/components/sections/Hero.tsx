"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Phone } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";
import { images, site } from "@/lib/site";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="absolute inset-0">
        <SafeImage
          src={images.hero}
          alt="Výcvikové vozidlo Autoškoly TOP v Rakovníku"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8"
      >
        <motion.h1
          variants={item}
          className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Řidičák v Rakovníku.
          <br />
          Bez stresu, s výsledkem.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          Moderní autoškola s individuálním přístupem. Naučíme vás řídit, nejen
          projít zkouškou.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/cenik"
            className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            Zjistit ceny
          </Link>
          <Link
            href="/sluzby"
            className="inline-flex items-center rounded-full border-2 border-white px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-body"
          >
            Jak to funguje
          </Link>
        </motion.div>

        <motion.div variants={item} className="mt-10">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-3 text-2xl font-bold text-white transition-colors duration-200 hover:text-accent sm:text-3xl"
          >
            <Phone className="h-7 w-7 text-accent" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
