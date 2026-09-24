import Image from "next/image";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { buttonClass } from "@/components/ui/Button";
import { site } from "@/lib/site";

const posts = [
  { src: "ig-06", alt: "Výcvikový vůz Autoškoly TOP na nádraží v Rakovníku" },
  { src: "ig-02", alt: "Infografika: jaký přívěs smíte táhnout s řidičákem skupiny B" },
  { src: "ig-01", alt: "Příspěvek: co znamená bílý kouř z výfuku" },
  { src: "ig-08", alt: "Záznam z jízdy: rozhlížej se v každé křižovatce" },
  { src: "ig-03", alt: "Vtipný příspěvek o tankování benzinu a nafty" },
  { src: "ig-10", alt: "Vtipný příspěvek o kočkách a autech" },
  { src: "ig-04", alt: "Humorné video z provozu" },
];

/** The page's only marquee: a live-feeling strip of the school's real Instagram posts. */
export function InstagramStrip() {
  const loop = [...posts, ...posts];
  return (
    <section className="overflow-hidden py-20 md:py-28" aria-labelledby="ig-nadpis">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="ig-nadpis" className="font-display text-4xl leading-[1.05] font-bold md:text-5xl">
            Tipy z provozu, co jinde neuslyšíte
          </h2>
          <p className="mt-4 max-w-[52ch] text-lg text-muted">
            Na sítích sdílíme rady pro řidiče, novinky z výcviku a občas i něco pro zasmání.
          </p>
        </div>
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass("outline", "md", "self-start md:self-auto")}
        >
          <InstagramLogo size={18} weight="bold" aria-hidden="true" />
          @autoskolatop_rakovnik
        </a>
      </div>

      <div className="group mt-12 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
        <ul className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((p, i) => (
            <li key={i} aria-hidden={i >= posts.length} className="w-48 shrink-0 md:w-56">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={i >= posts.length ? -1 : undefined}
                className="relative block aspect-[9/16] overflow-hidden rounded-[var(--radius-card)] bg-surface-2"
              >
                <Image
                  src={`/images/instagram/${p.src}.webp`}
                  alt={p.alt}
                  fill
                  sizes="224px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
