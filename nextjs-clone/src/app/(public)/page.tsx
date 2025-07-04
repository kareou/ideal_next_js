import HeroSection from "../../components/HeroSection";
import ProcessSection from "../../components/ProcessSection";
import ServicesSection from "../../components/ServicesSection";
import TrustSection from "../../components/TrustSection";
import CompanySection from "../../components/CompanySection";
import TeamSection from "../../components/TeamSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CTASection from "../../components/CTASection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Tax Debt Attorney Services - Trust the Experts at Ideal Tax",
  description: "At Ideal Tax, we offer a Fresh Start Program that can help you get relief from your IRS tax debt. We have over 1 years of experience and an A+ BBB rating. Contact us for a free consultation.",

};

export default function Home() {
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
}
