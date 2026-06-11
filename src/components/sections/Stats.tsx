"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 500, suffix: " Kč", label: "Bonus za kamaráda" },
  { value: 4, suffix: "", label: "Typy kurzů" },
  { value: 18500, suffix: " Kč", label: "Nejnižší cena kurzu" },
  { value: 2, suffix: "", label: "Splátky bez navýšení" },
];

export default function Stats() {
  return (
    <section className="bg-[#F3F4F6] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-2 gap-y-10 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i > 0
                  ? "text-center lg:border-l lg:border-line"
                  : "text-center"
              }
            >
              <dd className="text-3xl font-extrabold tracking-tight text-body sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 text-sm font-medium text-muted">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
