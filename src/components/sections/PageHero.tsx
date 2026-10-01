import Link from "next/link";
import { IconCaretRight } from "@/components/icons/Icons";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/ui/JsonLd";
import { FadeUp, SlideUpText } from "@/components/ui/SlideUpText";
import { breadcrumbLd } from "@/lib/seo";

type Crumb = { name: string; path: string };

export function PageHero({
  title,
  lead,
  crumbs,
  children,
}: {
  title: string;
  lead?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="container-page pt-10 pb-12 md:pt-14 md:pb-16">
      <nav aria-label="Drobečková navigace">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          <li>
            <Link href="/" className="hover:text-ink">
              Úvod
            </Link>
          </li>
          {crumbs.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1.5">
              <IconCaretRight size={12} aria-hidden="true" />
              {i === crumbs.length - 1 ? (
                <span aria-current="page" className="text-ink">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="hover:text-ink">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <SlideUpText
        text={title}
        className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] font-bold md:text-6xl"
      />
      {lead && (
        <FadeUp delay={0.25}>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">{lead}</p>
        </FadeUp>
      )}
      {children}
      <JsonLd data={breadcrumbLd(crumbs)} />
    </section>
  );
}
