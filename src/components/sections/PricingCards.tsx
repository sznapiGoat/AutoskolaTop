"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Standard",
    price: "19.900 Kč",
    features: [
      "Doba kurzu 2 až 3 měsíce",
      "Jízdy 2x týdně",
      "Zkouška na nečisto",
      "Jízda do Prahy",
    ],
  },
  {
    name: "Student",
    price: "18.500 Kč",
    badge: "Nejoblíbenější",
    highlighted: true,
    features: [
      "Doba kurzu 2 až 3 měsíce",
      "Jízdy 2x týdně",
      "Zkouška na nečisto",
      "Jízda do Prahy",
      "Sleva po předložení potvrzení o studiu",
    ],
  },
  {
    name: "Expres",
    price: "22.900 Kč",
    badge: "Rychlý kurz",
    features: [
      "Doba kurzu 1 až 1,5 měsíce",
      "Jízdy až 5x týdně",
      "Zkouška na nečisto",
      "Jízda do Prahy",
    ],
  },
  {
    name: "VIP",
    price: "25.900 Kč",
    badge: "Maximální flexibilita",
    features: [
      "Doba kurzu 1 až 1,5 měsíce",
      "Jízdy až 5x týdně",
      "Zkouška na nečisto",
      "Jízda do Prahy",
      "Flexibilní plánování jízd",
      "Ranní, večerní i víkendové jízdy",
      "Pickup dle potřeby",
    ],
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

export default function PricingCards() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={item}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-white p-7",
                plan.highlighted
                  ? "border-2 border-accent shadow-[0_0_0_4px_rgba(249,115,22,0.12)] xl:scale-[1.04]"
                  : "border-line"
              )}
            >
              {plan.badge && (
                <span
                  className={cn(
                    "absolute -top-3 right-5 rounded-full px-3 py-1 text-xs font-bold",
                    plan.highlighted
                      ? "bg-accent text-white"
                      : "bg-dark text-white"
                  )}
                >
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-bold text-body">{plan.name}</h3>
              <p className="mt-3 text-3xl font-extrabold tracking-tight text-body">
                {plan.price}
              </p>
              <p className="mt-1 text-sm text-muted">
                Řidičský průkaz sk. B
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-body">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className={cn(
                  "mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200",
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-line text-body hover:border-accent hover:text-accent"
                )}
              >
                Objednat kurz
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
