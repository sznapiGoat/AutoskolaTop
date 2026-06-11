import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import PricingCards from "@/components/sections/PricingCards";
import PaymentInfo from "@/components/sections/PaymentInfo";
import AdditionalServices from "@/components/sections/AdditionalServices";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Ceník | Autoškola TOP Rakovník",
  description:
    "Ceník kurzů Autoškoly TOP Rakovník. Řidičský průkaz sk. B od 18.500 Kč, platba ve 2 splátkách bez navýšení. Kondiční jízdy, kurz parkování i školení řidičů.",
};

export default function CenikPage() {
  return (
    <>
      <PageHeader
        title="Ceník"
        subtitle="Férové ceny bez skrytých poplatků. Platba ve 2 splátkách bez navýšení."
      />
      <PricingCards />
      <PaymentInfo />
      <AdditionalServices />
      <FAQ />
    </>
  );
}
