import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoBadge from "@/components/ui/DemoBadge";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autoškola TOP Rakovník | Řidičák bez stresu",
  description:
    "Moderní autoškola v Rakovníku s individuálním přístupem. Řidičský průkaz sk. B, kondiční jízdy, kurz parkování a školení řidičů. Volejte 777 660 186.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <DemoBadge />
      </body>
    </html>
  );
}
