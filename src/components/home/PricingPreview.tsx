import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PlanCards } from "@/components/sections/PlanCards";

export function PricingPreview() {
  return (
    <section className="container-page py-20 md:py-28" aria-labelledby="cenik-nadpis">
      <h2 id="cenik-nadpis" className="font-display text-4xl leading-[1.05] font-bold md:text-5xl">
        Férová cena. Ve dvou splátkách.
      </h2>
      <p className="mt-4 max-w-[60ch] text-lg text-muted">
        Cena je konečná. Obsahuje výuku, výcvik, jízdu do Prahy i první závěrečnou zkoušku.
      </p>
      <div className="mt-12">
        <PlanCards compact />
      </div>
      <Link
        href="/sluzby#cenik"
        className="group mt-8 inline-flex items-center gap-2 font-semibold text-accent-text"
      >
        Kompletní ceník a poplatky
        <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </section>
  );
}
