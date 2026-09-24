import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import { Wings } from "@/components/brand/Wings";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/lib/content";
import { formatPrice } from "@/lib/site";
import { cn } from "@/lib/utils";

function Price({ service, className }: { service: Service; className?: string }) {
  return (
    <p className={cn("font-display font-bold tabular-nums", className)}>
      {service.pricePrefix && <span className="mr-1 text-[0.6em] font-semibold uppercase">{service.pricePrefix}</span>}
      {formatPrice(service.price)}
    </p>
  );
}

function Highlights({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("grid gap-2.5 sm:grid-cols-2", className)}>
      {items.map((h) => (
        <li key={h} className="flex gap-2.5 leading-snug">
          <CheckCircle size={20} weight="fill" className="shrink-0 text-accent" aria-hidden="true" />
          {h}
        </li>
      ))}
    </ul>
  );
}

function Body({ service }: { service: Service }) {
  return (
    <div className="space-y-10">
      {service.body.map((block) => (
        <div key={block.heading}>
          <h3 className="font-display text-2xl font-bold uppercase">{block.heading}</h3>
          {block.text.map((t) => (
            <p key={t} className="mt-3 max-w-[65ch] leading-relaxed text-muted">
              {t}
            </p>
          ))}
          {block.list && (
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {block.list.map((li) => (
                <li key={li} className="flex gap-3 rounded-lg bg-surface-2 px-4 py-3 text-[0.95rem] leading-snug">
                  <span aria-hidden="true" className="mt-2 h-0.5 w-3 shrink-0 bg-accent" />
                  {li}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function order(service: Service) {
  return service.slug === "ridicsky-prukaz-b" ? "Chci řidičák" : "Objednat";
}

/** Detailed service: photo with price card on one side, full text on the other. */
export function ServiceSplit({ service, flip, children }: { service: Service; flip?: boolean; children?: ReactNode }) {
  return (
    <section id={service.slug} aria-labelledby={`${service.slug}-h`} className="container-page py-16 md:py-24">
      <div className={cn("grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16", flip && "lg:grid-cols-[1.15fr_1fr]")}>
        <Reveal from={flip ? "right" : "left"} className={cn("lg:sticky lg:top-40 lg:self-start", flip && "lg:order-last")}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-surface-2">
            <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="on-dark relative -mt-10 ml-4 mr-4 rounded-[var(--radius-card)] bg-panel p-6 text-panel-ink shadow-soft sm:ml-8 sm:mr-auto sm:max-w-sm">
            <p className="text-sm text-[#bdbcb7]">Cena</p>
            <Price service={service} className="text-4xl" />
            <p className="mt-1 text-sm text-[#bdbcb7]">{service.priceNote}</p>
            <ButtonLink href={`/kontakt?sluzba=${service.slug}`} variant="light" className="mt-5 w-full">
              {order(service)}
            </ButtonLink>
          </div>
        </Reveal>

        <div>
          <Wings className="h-7 w-20 text-accent" />
          <h2 id={`${service.slug}-h`} className="mt-5 font-display text-5xl font-extrabold md:text-6xl">
            {service.name}
          </h2>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">{service.lead}</p>
          <Highlights items={service.highlights} className="mt-8 border-y border-line py-6" />
          <div className="mt-10">
            <Body service={service} />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

/** Full-width dark band with the photo behind: for the one service we want to stand out. */
export function ServiceBand({ service }: { service: Service }) {
  return (
    <section id={service.slug} aria-labelledby={`${service.slug}-h`} className="container-page py-8">
      <Reveal className="on-dark relative isolate overflow-hidden rounded-[1.5rem] bg-panel text-panel-ink">
        <Image src={service.image} alt={service.imageAlt} fill sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-[#141414] from-20% via-[#141414]/85 to-[#141414]/30" />
        <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.3fr_1fr] lg:p-16">
          <div>
            <p className="font-display text-lg font-semibold uppercase tracking-[0.12em] text-accent">Jen u nás v Rakovníku</p>
            <h2 id={`${service.slug}-h`} className="mt-3 font-display text-5xl font-extrabold md:text-7xl">
              {service.name}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#cfcec9]">{service.lead}</p>
            {service.body.map((b) =>
              b.text.map((t) => (
                <p key={t} className="mt-4 max-w-xl leading-relaxed text-[#bdbcb7]">
                  {t}
                </p>
              )),
            )}
          </div>
          <div className="self-end rounded-[var(--radius-card)] border border-white/10 bg-black/40 p-6 backdrop-blur-md">
            <Highlights items={service.highlights} className="sm:grid-cols-1" />
            <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
              <div>
                <Price service={service} className="text-3xl" />
                <p className="text-sm text-[#bdbcb7]">{service.priceNote}</p>
              </div>
              <ButtonLink href={`/kontakt?sluzba=${service.slug}`} variant="light">
                {order(service)}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** Services as compact cards, two per row. */
export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="container-page grid gap-4 py-8 md:grid-cols-2">
      {services.map((s, i) => (
        <Reveal key={s.slug} delay={i * 0.08} as="article" className="h-full">
          <section
            id={s.slug}
            aria-labelledby={`${s.slug}-h`}
            className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface"
          >
            <div className="relative aspect-[16/9] bg-surface-2">
              <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <h2 id={`${s.slug}-h`} className="font-display text-4xl font-extrabold md:text-5xl">
                {s.name}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{s.lead}</p>
              <div className="mt-6 flex-1">
                <Body service={s} />
              </div>
              <Highlights items={s.highlights} className="mt-8 border-t border-line pt-6" />
              <div className="mt-8 flex items-center justify-between gap-4">
                <div>
                  <Price service={s} className="text-3xl" />
                  <p className="text-sm text-muted">{s.priceNote}</p>
                </div>
                <ButtonLink href={`/kontakt?sluzba=${s.slug}`}>{order(s)}</ButtonLink>
              </div>
            </div>
          </section>
        </Reveal>
      ))}
    </div>
  );
}
