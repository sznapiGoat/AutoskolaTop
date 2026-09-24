import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PromoBar } from "@/components/layout/PromoBar";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { localBusinessLd } from "@/lib/seo";
import { site } from "@/lib/site";

const heading = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const body = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Autoškola TOP Rakovník | Řidičák v klidu a bez křiku",
    template: "%s | Autoškola TOP Rakovník",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "autoškola Rakovník",
    "řidičský průkaz Rakovník",
    "řidičák sk. B",
    "kondiční jízdy Rakovník",
    "kurz parkování",
    "školení řidičů referentů",
    "vrácení řidičského průkazu",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: `${site.name} Rakovník`,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0d" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Přeskočit na obsah
        </a>
        <PromoBar />
        <Header />
        {/* overflow-x-clip: content waiting to slide in from the side must not widen the page (clip keeps sticky working). */}
        <main id="obsah" className="overflow-x-clip pb-20 sm:pb-0">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <JsonLd data={localBusinessLd()} />
      </body>
    </html>
  );
}
