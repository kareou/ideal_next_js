import Box from "../../components/MainLanderComponents/HeaderContacts";
import HeroSection from "../../components/MainLanderComponents/HeroSection";
import Process from "../../components/MainLanderComponents/CsrComponents/OurProcessSectionClient";
import TakeCare from "../../components/MainLanderComponents/EasyTaxReliefSection";
import Ratings from "../../components/MainLanderComponents/RatingsSection";
import Footer from "../../components/MainLanderComponents/Footer";
import Testimonals from "../../components/MainLanderComponents/CsrComponents/TestimonalSectionClient";
import OurCompanySection from "../../components/MainLanderComponents/CsrComponents/OurCompanyClient";
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
        <HeroSection/>
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


