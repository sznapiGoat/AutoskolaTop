import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconArrowUpRight } from "@/components/icons/Icons";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { services } from "@/lib/content";
import { formatPrice } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Every service at a glance: the two main ones large, the rest in a row below. */
export function ServicesGrid() {
  return (
    <section className="bg-surface py-20 md:py-28" aria-labelledby="sluzby-nadpis">
      <div className="container-page">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="sluzby-nadpis" className="font-display text-4xl font-bold md:text-5xl">
              Co nabízíme
            </h2>
            <p className="mt-3 max-w-[52ch] text-lg text-muted">Od prvního řidičáku po návrat za volant po letech.</p>
          </div>
          <Link href="/sluzby" className="group inline-flex items-center gap-2 font-semibold text-accent-text">
            Více o službách
            <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const big = i < 2;
            return (
              <RevealItem key={s.slug} className={cn(big && "lg:col-span-2")}>
                <Link
                  href={`/sluzby/${s.slug}`}
                  className={cn(
                    "group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-[var(--radius-card)] p-5 text-white sm:p-6",
                    big ? "min-h-[20rem] lg:min-h-[22rem]" : "min-h-[16rem]",
                  )}
                >
                  <div className="photo-drift absolute inset-0 -z-20">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes={big ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
                    />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
                  <span className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-ink">
                    {s.pricePrefix ? `${s.pricePrefix} ` : ""}
                    {formatPrice(s.price)}
                  </span>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className={cn("font-display font-semibold", big ? "text-2xl md:text-3xl" : "text-xl")}>{s.short}</h3>
                      <p className="mt-1 max-w-[40ch] text-sm leading-relaxed text-white/80">{s.pitch}</p>
                    </div>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur transition-colors group-hover:bg-accent">
                      <IconArrowUpRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
