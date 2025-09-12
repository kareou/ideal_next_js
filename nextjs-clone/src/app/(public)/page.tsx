import React from "react";
import FloatingContact from "../../components/MainLanderComponents/HeaderContacts";
import Box1 from "../../components/MainLanderComponents/HeroContactBox";
import HeroComp from "../../components/MainLanderComponents/HearComp";
import Process from "../../components/MainLanderComponents/OurProcessSection";
import TakeCare from "../../components/MainLanderComponents/EasyTaxReliefSection";
import Ratings from "../../components/MainLanderComponents/RatingsSection";
import Footer from "../../components/MainLanderComponents/Footer";
import Testimonals from "../../components/MainLanderComponents/TestimonalSection";
import OurCompanySection from "../../components/MainLanderComponents/OurCompanySection";
import ExpertTeam from "../../components/MainLanderComponents/CsrComponents/OurExpertSectionClient";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Ideal Tax | Tax Debt Resolution Services",
  description: "Through our process we qualify clients for many tax relief programs to end tax issues once and for all. 15 years in business and an A+ BBB rating. Contact us for a free consultation.",

};

export default function Home() {
  return (
    <>
   
        <div className="hidden md:block">
          <Box1 />
        </div>

        <div className="block md:hidden">
          <FloatingContact />
        </div>
        <HeroComp/>
        <Process/>
        <TakeCare/>
        <OurCompanySection/>
        <ExpertTeam/>
        <Testimonals/>
        <Ratings/>
        <Footer/>
    </>
  );
}


