
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
  useSmoothScroll();

  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     setScrolled(currentScrollY > 50);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  //   const color = scrolled ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0)';
  //   // <meta name="apple-mobile-web-app-status-bar-style" content="black">

    
  //   if (metaThemeColor) {
  //     metaThemeColor.setAttribute('content', color);
  //   } else {
  //     const meta = document.createElement('meta');
  //     meta.name = 'theme-color';
  //     meta.content = color;
  //     document.getElementsByTagName('head')[0].appendChild(meta);
  //   }
  // }, [scrolled]);

//   const [scrolled, setScrolled] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Get scroll percentage relative to page height
//       const scrollTop = window.scrollY;
//       const docHeight = document.body.scrollHeight - window.innerHeight;
//       const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

//       setScrolled(scrollPercent);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const metaThemeColor = document.querySelector('meta[name="theme-color"]');

//     // Make alpha based on scroll: 0 = transparent, 1 = opaque
//     const alpha = Math.min(scrolled + 0.1, 1); // +0.1 so it's never fully transparent
//     const color = `rgba(255, 255, 255, ${alpha})`;

//     if (metaThemeColor) {
//       metaThemeColor.setAttribute("content", color);
//     } else {
//       const meta = document.createElement("meta");
//       meta.name = "theme-color";
//       meta.content = color;
//       document.head.appendChild(meta);
//     }
//   }, [scrolled]);
// }

  return (
    <>
        {/* <div className="hidden md:block">
          <Box1 />
        </div> */}

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