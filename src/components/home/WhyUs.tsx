import Image from "next/image";
import { IconCalm, IconCar, IconCity, IconFriends } from "@/components/icons/Icons";
import { IconTile } from "@/components/icons/ServiceIcon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { reasons } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = [IconCalm, IconCity, IconCar, IconFriends];
const photos: Record<number, string> = {
  1: "/images/jizda-praha.webp",
  2: "/images/autoskola-top-instruktor-vuz.webp",
};

export function WhyUs() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl leading-[1.05] font-bold md:text-5xl">
          Nepřipravíme vás jen na zkoušky. Připravíme vás na silnici.
        </h2>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">
          Každý krok probíráme vaším tempem a dál jdeme, až když si jsme jistí, že ho máte zažitý.
        </p>
      </div>

      <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        <RevealItem className="relative min-h-80 overflow-hidden rounded-[var(--radius-card)] md:col-span-2 lg:col-span-1 lg:row-span-2">
          <Image
            src="/images/ucebna-stul-logo.webp"
            alt="Učebna Autoškoly TOP v Rakovníku s logem na stěně a připravenými materiály"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 pt-24 text-white">
            <p className="font-display text-xl font-semibold">Vlastní učebna v centru Rakovníka</p>
            <p className="mt-1 text-sm text-white/80">Ottova 418, budova Raportu, 2. patro</p>
          </div>
        </RevealItem>

        {reasons.map((r, i) => {
          const Icon = icons[i];
          // two of the reasons get real photos: Prague streets and the school car
          const photo = photos[i];
          const variant = photo ? "photo" : i === 3 ? "accent" : "plain";
          return (
            <RevealItem
              key={r.title}
              className={cn(
                "relative isolate flex min-h-60 flex-col justify-between overflow-hidden rounded-[var(--radius-card)] p-7",
                variant === "plain" && "border border-line bg-surface",
                variant === "accent" && "bg-accent text-on-accent",
                variant === "photo" && "text-white",
              )}
            >
              {variant === "photo" && (
                <>
                  <Image
                    src={photo}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="-z-20 object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />
                </>
              )}
              <IconTile tone={variant === "photo" ? "dark" : variant === "accent" ? "accent" : "light"} className="self-start">
                <Icon size={30} />
              </IconTile>
              <div className="mt-10">
                <h3 className="font-display text-2xl font-semibold">{r.title}</h3>
                <p className={cn("mt-2 leading-relaxed", variant === "plain" ? "text-muted" : "opacity-85")}>{r.text}</p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
