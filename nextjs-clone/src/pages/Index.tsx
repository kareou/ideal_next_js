import React from "react";
import Box from "../components/MainLanderComponents/HeaderContacts";
import HeroSection from "../components/MainLanderComponents/HearComp";
import Process from "../components/MainLanderComponents/OurProcessSection";
import TakeCare from "../components/MainLanderComponents/EasyTaxReliefSection";
import Ratings from "../components/MainLanderComponents/RatingsSection";
import Footer from "../components/MainLanderComponents/Footer";
import Testimonals from "../components/MainLanderComponents/TestimonalSection";
import OurCompanySection from "../components/MainLanderComponents/OurCompanySection";
import ExpertTeam from "../components/MainLanderComponents/CsrComponents/OurExpertSectionClient";

const Index = () => {
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
};

export default Index;
