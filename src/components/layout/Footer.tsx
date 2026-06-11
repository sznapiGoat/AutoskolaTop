import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/sluzby", label: "Služby" },
  { href: "/cenik", label: "Ceník" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-lg font-black text-white">
                A
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                Autoškola TOP
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Vyjeďte s námi tím správným směrem.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Jsme hrdými partnery FBC Rakovník.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Navigace
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors duration-200 hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors duration-200 hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {site.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Provozní doba
            </h3>
            <p className="mt-4 text-sm text-slate-300">{site.hours}</p>
            <p className="mt-1 text-sm text-slate-400">{site.hoursNote}</p>
            <div className="mt-5 flex gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-colors duration-200 hover:bg-accent hover:text-white"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </span>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-colors duration-200 hover:bg-accent hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </span>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-colors duration-200 hover:bg-accent hover:text-white"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-400">
            © 2025 Autoškola TOP | okr. Rakovník
          </p>
        </div>
      </div>
    </footer>
  );
}
