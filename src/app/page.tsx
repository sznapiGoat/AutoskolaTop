import { Hero } from "@/components/home/Hero";
import { ProofStrip } from "@/components/home/ProofStrip";
import { WhyUs } from "@/components/home/WhyUs";
import { ServicesRail } from "@/components/home/ServicesRail";
import { PricingPreview } from "@/components/home/PricingPreview";
import { InstagramStrip } from "@/components/home/InstagramStrip";
import { CharityTeaser } from "@/components/home/CharityTeaser";
import { FaqPreview } from "@/components/home/FaqPreview";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <WhyUs />
      <ServicesRail />
      <PricingPreview />
      <InstagramStrip />
      <CharityTeaser />
      <FaqPreview />
      <CtaBand />
    </>
  );
}
