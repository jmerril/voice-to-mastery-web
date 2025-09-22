
import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CategorySection } from "@/components/CategorySection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { EducationalRevolutionSection } from "@/components/EducationalRevolutionSection";
import { CTASection } from "@/components/CTASection";
import { FooterSection } from "@/components/FooterSection";
import Header from "@/components/Header";

const ZyglioLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <FAQSection />
      <FeaturesSection />
      <CategorySection />
      <UseCasesSection />
      <EducationalRevolutionSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default ZyglioLanding;
