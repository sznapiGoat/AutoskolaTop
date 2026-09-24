import Link from "next/link";
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { BrandLogo } from "@/components/brand/Logo";
import { LogoLink } from "@/components/brand/LogoLink";
import { Wings } from "@/components/brand/Wings";
import { services } from "@/lib/content";
import { nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark asphalt relative overflow-hidden text-[#d9d8d3]">
      <div aria-hidden="true" className="container-page flex items-center gap-4 pt-14 text-[#3a3a37]">
        <Wings className="h-6 w-28 shrink-0" />
        <div className="h-px flex-1 bg-white/10" />
        <Wings side="right" className="h-6 w-28 shrink-0" />
      </div>
      <div className="container-page grid gap-12 pt-10 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="max-w-sm">
          <LogoLink className="inline-block rounded-lg">
            <BrandLogo variant="textured" className="w-52" />
          </LogoLink>
          <p className="mt-5 leading-relaxed text-[#a6a59f]">{site.tagline} Autoškola pro Rakovník a okolí.</p>
          <div className="mt-6 flex gap-2">
            {[
              { href: site.social.facebook, label: "Facebook", Icon: FacebookLogo },
              { href: site.social.instagram, label: "Instagram", Icon: InstagramLogo },
              { href: site.whatsappHref, label: "WhatsApp", Icon: WhatsappLogo },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-lg border border-white/10 text-white transition-colors hover:border-accent hover:bg-accent hover:text-[#151514]"
              >
                <Icon size={20} weight="fill" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Služby">
          <h2 className="font-display text-base font-bold tracking-[0.08em] text-white">Služby</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/sluzby/${s.slug}`} className="text-[#a6a59f] transition-colors hover:text-white">
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Stránky">
          <h2 className="font-display text-base font-bold tracking-[0.08em] text-white">Autoškola</h2>
          <ul className="mt-4 space-y-2.5">
            {[{ href: "/", label: "Úvod" }, ...nav, { href: "/sluzby#prubeh", label: "Průběh kurzu" }, { href: "/o-nas#pomahame", label: "Pomáháme" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#a6a59f] transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-bold tracking-[0.08em] text-white">Kontakt</h2>
          <address className="mt-4 space-y-2.5 not-italic text-[#a6a59f]">
            <p>
              {site.address.street}, {site.address.zip} {site.address.city}
              <br />
              <span className="text-sm">{site.address.note}</span>
            </p>
            <p>
              <a href={site.phoneHref} className="text-lg font-semibold text-white hover:text-accent">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p className="text-sm">
              {site.hours.label}, {site.hours.note}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-[#8b8a85] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}, IČO {site.ico}
          </p>
          <div className="flex gap-5">
            <Link href="/ochrana-osobnich-udaju" className="hover:text-white">
              Ochrana osobních údajů
            </Link>
            <span>Partner FBC Rakovník</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
