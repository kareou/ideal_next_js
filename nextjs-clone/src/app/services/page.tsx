import Link from "next/link";
import HeroSection from "@/components/services/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f8fcff] via-white to-[#eaf6fa] pb-16">
      <ServicesSection />

      <TestimonialsSection />
    </div>
  );
}
