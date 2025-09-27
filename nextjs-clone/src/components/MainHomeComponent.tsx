
// "use client";

// import React from "react";
// import FloatingContact from "./MainLanderComponents/HeaderContacts";
// import Box1 from "./MainLanderComponents/HeroContactBox";
// import HeroComp from "./MainLanderComponents/HearComp";
// import Process from "./MainLanderComponents/OurProcessSection";
// import TakeCare from "./MainLanderComponents/EasyTaxReliefSection";
// import Ratings from "./MainLanderComponents/RatingsSection";
// import Footer from "./MainLanderComponents/Footer";
// import Testimonals from "./MainLanderComponents/TestimonalSection";
// import OurCompanySection from "./MainLanderComponents/OurCompanySection";
// import ExpertTeam from "./MainLanderComponents/CsrComponents/OurExpertSectionClient";
// import useSmoothScroll from "./useSmoothScroll";

// export default function HomeComp(){
//       useSmoothScroll();

//      return (
//     <>
   
//         {/* <div className="hidden md:block">
//           <Box1 />
//         </div> */}

//         <div className="block md:hidden">
//           <FloatingContact />
//         </div>
//         <HeroComp/>
//         <Process/>
//         <TakeCare/>
//         <OurCompanySection/>
//         <ExpertTeam/>
//         <Testimonals/>
//         <Ratings/>
//         <Footer/>
//     </>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import FloatingContact from "./MainLanderComponents/HeaderContacts";
import Box1 from "./MainLanderComponents/HeroContactBox";
import HeroComp from "./MainLanderComponents/HearComp";
import Process from "./MainLanderComponents/OurProcessSection";
import TakeCare from "./MainLanderComponents/EasyTaxReliefSection";
import Ratings from "./MainLanderComponents/RatingsSection";
import Footer from "./MainLanderComponents/Footer";
import Testimonals from "./MainLanderComponents/TestimonalSection";
import OurCompanySection from "./MainLanderComponents/OurCompanySection";
import ExpertTeam from "./MainLanderComponents/CsrComponents/OurExpertSectionClient";
import useSmoothScroll from "./useSmoothScroll";

export default function HomeComp(){
  // useSmoothScroll();

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const color = '#000000';

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', color);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = color; 
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    let appleStatusBarMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (!appleStatusBarMeta) {
      const appleMeta = document.createElement('meta');
      appleMeta.name = 'apple-mobile-web-app-status-bar-style';
      appleMeta.content = 'black-translucent';
      document.getElementsByTagName('head')[0].appendChild(appleMeta);
    }
  }, []);

  return (
    <>
      <div className="block md:hidden">
        <FloatingContact />
      </div>
      
      <div className="safe-area-top">
        <HeroComp />
      </div>
      
      <Process />
      <TakeCare />
      <OurCompanySection />
      <ExpertTeam />
      <Testimonals />
      <Ratings />
      
      <div className="safe-area-bottom">
        <Footer />
      </div>
    </>
  );
}