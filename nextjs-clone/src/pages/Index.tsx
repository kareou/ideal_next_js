import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import ServicesSection from "../components/ServicesSection";
import TrustSection from "../components/TrustSection";
import CompanySection from "../components/CompanySection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProcessSection />
      <ServicesSection />
      <TrustSection />
      <CompanySection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
