import React from "react";
import Box from "../../components/MainLanderComponents/HeaderContacts";
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
  title: "Tax Debt Attorney Services - Trust the Experts at Ideal Tax",
  description: "At Ideal Tax, we offer a Fresh Start Program that can help you get relief from your IRS tax debt. We have over 1 years of experience and an A+ BBB rating. Contact us for a free consultation.",

};

export default function Home() {
  return (
    <>
   
        <Box />
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


