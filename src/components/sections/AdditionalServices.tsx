"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

const rows = [
  { service: "Kurz parkování (5x 45 min)", price: "3.600 Kč" },
  { service: "Kondiční jízdy do Prahy (45 min/lekce)", price: "750 Kč" },
  { service: "Školení řidičů referentů sk. B", price: "500 Kč" },
  { service: "Vrácení řidičského průkazu (2x 45 min)", price: "5.900 Kč" },
  { service: "Nedostavení bez omluvy (min. 8 hod předem)", price: "500 Kč" },
  { service: "Nedostavení ke státní zkoušce", price: "1.000 Kč" },
];

export default function AdditionalServices() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-extrabold tracking-tight text-body sm:text-3xl">
            Další služby a poplatky
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-line bg-surface">
                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-bold uppercase tracking-wider text-body sm:px-7"
                  >
                    Služba
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-right text-sm font-bold uppercase tracking-wider text-body sm:px-7"
                  >
                    Cena
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.service}
                    className="border-b border-line transition-colors duration-150 last:border-b-0 hover:bg-orange-50"
                  >
                    <td className="px-5 py-4 text-base text-body sm:px-7">
                      {row.service}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-right text-base font-semibold tabular-nums text-body sm:px-7">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-medium text-body">
            Máte otázky ohledně cen? Zavolejte nám.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
            >
              Napište nám
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2.5 text-xl font-bold text-body transition-colors duration-200 hover:text-accent"
            >
              <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
