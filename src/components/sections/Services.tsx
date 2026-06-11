"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";
import { images } from "@/lib/site";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Řidičský průkaz sk. B",
    description: "Kompletní výcvik od první hodiny po závěrečnou zkoušku.",
    image: images.prukazB,
    alt: "Žák autoškoly přebírá řidičský průkaz skupiny B",
    large: true,
  },
  {
    title: "Jízdy do Prahy",
    description: "Připravíme vás i na provoz v hlavním městě.",
    image: images.praha,
    alt: "Cvičná jízda autoškoly v pražském provozu",
    large: true,
  },
  {
    title: "Kurz parkování",
    description: "5 lekcí, po kterých zaparkujete kdekoliv.",
    image: images.parkovani,
    alt: "Nácvik podélného parkování s instruktorem",
    large: false,
  },
  {
    title: "Kondiční jízdy",
    description: "Získejte zpět jistotu za volantem.",
    image: images.kondicni,
    alt: "Kondiční jízda s instruktorem autoškoly",
    large: false,
  },
  {
    title: "Školení řidičů",
    description: "Povinné školení řidičů referentů.",
    image: images.skoleni,
    alt: "Školení řidičů referentů v učebně",
    large: false,
  },
  {
    title: "Vrácení ŘP",
    description: "Přezkoušení pro vrácení řidičského průkazu.",
    image: images.vraceni,
    alt: "Přezkoušení z odborné způsobilosti pro vrácení řidičského průkazu",
    large: false,
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-body sm:text-4xl">
            Co nabízíme
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg italic text-muted">
            Od prvního řidičáku po návrat za volant
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                service.large
                  ? "min-h-[260px] sm:col-span-2 lg:min-h-[300px]"
                  : "min-h-[220px]"
              )}
            >
              <SafeImage
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-colors duration-300 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-white/80">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <Link
            href="/sluzby"
            className="inline-flex items-center gap-2 text-base font-semibold text-accent transition-colors duration-200 hover:text-accent-hover"
          >
            Více o službách
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
