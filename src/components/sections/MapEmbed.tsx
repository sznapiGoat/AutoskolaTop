"use client";

import { useState } from "react";
import { MapPin } from "@phosphor-icons/react";
import { site } from "@/lib/site";

/** Google Maps loads only after a click: faster page and no third-party cookies up front. */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface-2 md:aspect-[16/10]">
      {loaded ? (
        <iframe
          src={site.mapsEmbed}
          title={`Mapa: ${site.name}, ${site.address.street}, ${site.address.city}`}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="group absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_center,var(--accent-soft),transparent_70%)] p-6 text-center"
        >
          <span>
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent text-on-accent transition-transform group-hover:scale-110">
              <MapPin size={26} weight="fill" aria-hidden="true" />
            </span>
            <span className="mt-4 block font-semibold">Zobrazit mapu</span>
            <span className="mt-1 block text-sm text-muted">Načte se z Google Maps</span>
          </span>
        </button>
      )}
    </div>
  );
}
