import Image from "next/image";
import { IconCheckTile } from "@/components/icons/Icons";
import type { ReactNode } from "react";
import { IconTile, ServiceIcon } from "@/components/icons/ServiceIcon";
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
          <IconCheckTile size={20} className="shrink-0 text-accent" aria-hidden="true" />
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

/** Service subpage body: sticky photo with price card on one side, the full text on the other. */
export function ServiceDetail({ service, children }: { service: Service; children?: ReactNode }) {
  return (
    <section aria-label={service.name} className="container-page pb-16 md:pb-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-surface-2">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="animate-settle object-cover"
            />
          </div>
          <div className="on-dark relative -mt-10 ml-4 mr-4 rounded-[var(--radius-card)] bg-panel p-6 text-panel-ink shadow-soft sm:ml-8 sm:mr-auto sm:max-w-sm">
            <p className="text-sm text-[#bdbcb7]">Cena</p>
            <Price service={service} className="text-4xl" />
            <p className="mt-1 text-sm text-[#bdbcb7]">{service.priceNote}</p>
            <ButtonLink href={`/kontakt?sluzba=${service.slug}`} variant="light" className="mt-5 w-full">
              {order(service)}
            </ButtonLink>
          </div>
        </div>

        <div>
          <Reveal>
            <IconTile tone="dark">
              <ServiceIcon slug={service.slug} size={30} />
            </IconTile>
            <Highlights items={service.highlights} className="mt-6 border-y border-line py-6" />
          </Reveal>
          <Reveal className="mt-10">
            <Body service={service} />
          </Reveal>
          {children}
        </div>
      </div>
    </section>
  );
}
