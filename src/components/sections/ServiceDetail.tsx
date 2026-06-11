"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";

export type ServiceDetailProps = {
  title: string;
  description: string[];
  image: string;
  alt: string;
  imageRight?: boolean;
  priceBadge?: string;
  listTitle?: string;
  listItems?: string[];
  ctaHref?: string;
  ctaLabel?: string;
  muted?: boolean;
};

export default function ServiceDetail({
  title,
  description,
  image,
  alt,
  imageRight = false,
  priceBadge,
  listTitle,
  listItems,
  ctaHref,
  ctaLabel,
  muted = false,
}: ServiceDetailProps) {
  return (
    <section className={muted ? "bg-surface" : "bg-white"}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-2xl",
              imageRight && "lg:order-2"
            )}
          >
            <SafeImage
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {priceBadge && (
              <span className="absolute right-4 top-4 rounded-full bg-accent px-4 py-2 text-sm font-bold text-white shadow-lg">
                {priceBadge}
              </span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className={cn(imageRight && "lg:order-1")}
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-body sm:text-3xl">
              {title}
            </h2>
            {description.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base leading-relaxed text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            {listItems && listItems.length > 0 && (
              <div className="mt-6">
                {listTitle && (
                  <h3 className="text-sm font-bold uppercase tracking-wider text-body">
                    {listTitle}
                  </h3>
                )}
                <ul className="mt-3 space-y-2.5">
                  {listItems.map((listItem) => (
                    <li key={listItem} className="flex items-start gap-2.5">
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span className="text-base text-body">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {ctaHref && ctaLabel && (
              <Link
                href={ctaHref}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
