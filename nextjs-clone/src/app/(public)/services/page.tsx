
import ServicesSection from "@/components/services/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Ideal Tax",
  description: "Services The professionals at Ideal Tax provide solutions and methods that provide tax resolution for even the most unique tax problems. Our experienced staff of tax analysts will guide you through a brief and free consultation to evaluate your tax issue and identify areas for relief. Using specialized training and proprietary computer software, he or",

};

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f8fcff] via-white to-[#eaf6fa] pb-16">
      <ServicesSection />

      <TestimonialsSection />
    </div>
  );
}
