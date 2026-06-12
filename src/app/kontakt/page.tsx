import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import SafeImage from "@/components/ui/SafeImage";
import { site, images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt | Autoškola TOP Rakovník",
  description:
    "Kontaktujte Autoškolu TOP v Rakovníku. Ottova 418, 269 01 Rakovník. Telefon 777 660 186, e-mail info@autoskolatop.cz. Otevřeno Po–Pá 8:00–18:00.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        title="Kontakt"
        subtitle="Zavolejte, napište nebo se zastavte. Jsme tu pro vás."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <ContactForm />

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-body sm:text-3xl">
                Autoškola TOP
              </h2>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Adresa
                    </p>
                    <p className="mt-0.5 text-base font-medium text-body">
                      {site.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Telefon
                    </p>
                    <a
                      href={site.phoneHref}
                      className="mt-0.5 block text-base font-medium text-body transition-colors duration-200 hover:text-accent"
                    >
                      {site.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                      E-mail
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-0.5 block text-base font-medium text-body transition-colors duration-200 hover:text-accent"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Provozní doba
                    </p>
                    <p className="mt-0.5 text-base font-medium text-body">
                      {site.hours}
                    </p>
                    <p className="text-sm text-muted">{site.hoursNote}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-7 flex gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-muted transition-colors duration-200 hover:bg-accent hover:text-white"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-5 w-5" />
                </span>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-muted transition-colors duration-200 hover:bg-accent hover:text-white"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-muted transition-colors duration-200 hover:bg-accent hover:text-white"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
              </div>

              <div className="relative mt-9 aspect-[4/3] overflow-hidden rounded-2xl">
                <SafeImage
                  src={images.ucebna}
                  alt="Učebna Autoškoly TOP s logem na stěně a připravenými učebnicemi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-line">
                <iframe
                  src="https://www.google.com/maps?q=Ottova+418,+269+01+Rakovn%C3%ADk&output=embed"
                  title="Mapa: Autoškola TOP, Ottova 418, Rakovník"
                  width="600"
                  height="320"
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
