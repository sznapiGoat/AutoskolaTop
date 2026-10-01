import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyUs } from "@/components/home/WhyUs";
import { PricingPreview } from "@/components/home/PricingPreview";
import { FaqPreview } from "@/components/home/FaqPreview";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <ServicesGrid />
      <PricingPreview />
      <FaqPreview />
      <CtaBand />
    </>
  );
}
