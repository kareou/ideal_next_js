// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "../Navbar";
// import { ArrowRight } from "lucide-react";
// import { Inter } from "next/font/google";
// import RotatingHeader from "./RotatingHeader";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// const HeroSection: React.FC = () => {
//   return (
//     <div className={`${inter.variable} font-sans main_con min-h-[80vh] w-full flex justify-center`}>
//       <div
//         className="w-[98.5%] rounded-[20px] mt-[10px] px-4 md:px-8"
//         style={{
//           background:
//             "repeating-linear-gradient(90deg, #D9E7FD 0px, #D9E7FD 19px, #ffffff 19px, #ffffff 20px)",
//         }}
//       >
//         <Navbar />

//         <div className="py-10 flex justify-center w-[100%] pt-[50px]">
//           <div className="flex justify-center w-[100%] pr-[60px]">
//             <div className="space-y-6 md:space-y-8 flex flex-col w-[100%]  items-center text-center md:items-start md:text-left md:ml-[60px]">
//                 <RotatingHeader/>
//               <div className="space-y-1 text-sm sm:text-[20px] text-gray-600 w-[100%] text-center justify-center">
//                 <p className="pb-3">
//                   Unlock the potential of professional tax resolution for your financial future.
//                 </p>
//                 <p className="hidden sm:block">
//                   Resolve your tax problems, eliminate debt stress, and move toward financial freedom.
//                 </p>
//               </div>
//                 <div className="cont flex justify-center w-[100%] pt-[40px]">
//                     <Link
//                       href="/survey"
//                       className="inline-flex items-center space-x-2 bg-[#3059E4] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-blue-700 transition-colors group shadow-md"
//                     >
//                       <span>Get Started</span>
//                       <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </Link>
//                 </div> 

//               <div className="flex items-center w-[100%] justify-center hidden space-x-4 lg:flex  pt-[44px] ">
//                 <div className="flex -space-x-2">
//                   {["avatar1.jpg","avatar2.jpg","avatar3.jpg","avatar4.jpg"].map((src, i) => (
//                     <div
//                       key={i}
//                       className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden relative ${
//                         i === 0 ? "bg-blue-400" :
//                         i === 1 ? "bg-green-400" :
//                         i === 2 ? "bg-purple-400" : "bg-red-400"
//                       }`}
//                     >
//                       <Image src={`/${src}`} alt={`Avatar ${i + 1}`} fill className="object-cover" />
//                     </div>
//                   ))}
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#e6eefd] rounded-full border-2 border-white flex items-center justify-center">
//                     <span className="text-xs font-bold text-gray-800">+10k</span>
//                   </div>
//                 </div>
//                 <span className="text-[#1C1F21] font-medium text-sm sm:text-base">
//                   Join more than 10,000 happy clients
//                 </span>
//               </div>

//             </div>
//              <div className="flex items-center space-x-4 lg:hidden">
//                 <div className="flex -space-x-2">
//                   {["avatar1.jpg","avatar2.jpg","avatar3.jpg","avatar4.jpg"].map((src, i) => (
//                     <div
//                       key={i}
//                       className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden relative ${
//                         i === 0 ? "bg-blue-400" :
//                         i === 1 ? "bg-green-400" :
//                         i === 2 ? "bg-purple-400" : "bg-red-400"
//                       }`}
//                     >
//                       <Image src={`/${src}`} alt={`Avatar ${i + 1}`} fill className="object-cover" />
//                     </div>
//                   ))}
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#e6eefd] rounded-full border-2 border-white flex items-center justify-center">
//                     <span className="text-xs font-bold text-gray-800">+10k</span>
//                   </div>
//                 </div>
//                 <span className="text-[#1C1F21] font-medium text-sm sm:text-base">
//                   Join more than 10,000 happy clients
//                 </span>
//               </div>

//           </div>
//         </div> 
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "../Navbar";
// import { ArrowRight } from "lucide-react";
// import { Inter } from "next/font/google";
// import RotatingHeader from "./RotatingHeader";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// const HeroSection: React.FC = () => {
//   return (
//     <div className={`${inter.variable} font-sans main_con w-full flex justify-center`}>
//       <div
//         className="w-[98.5%] rounded-[20px] mt-[10px] px-4 md:px-8"
//         style={{
//           background:
//             "repeating-linear-gradient(90deg, #D9E7FD 0px, #D9E7FD 19px, #ffffff 19px, #ffffff 20px)",
//         }}
//       >
//         <Navbar />

//         {/* Container */}
//         <div className="flex justify-center w-full py-8 md:py-10 min-h-[70vh] md:min-h-[80vh]">
//           <div className="flex flex-col items-center w-full md:flex-row md:justify-start md:pr-[60px]">

//             {/* Content */}
//             <div className="space-y-6 md:space-y-8 flex flex-col w-full items-center text-center md:items-start md:text-center md:ml-[60px]">

//               {/* Rotating Header */}
//               <RotatingHeader />

//               {/* Description */}
//               <div className="space-y-1 text-sm sm:text-[20px] flex flex-col items-center justify-center text-gray-600 w-full text-center md:text-center">
//                 <p className="pb-3">
//                   Unlock the potential of professional tax resolution for your financial future.
//                 </p>
//                 <p className="hidden sm:block">
//                   Resolve your tax problems, eliminate debt stress, and move toward financial freedom.
//                 </p>
//               </div>

//               {/* CTA Button */}
//               <div className="flex justify-center md:justify-start w-full pt-4 md:pt-6">
//                 <Link
//                   href="/survey"
//                   className="inline-flex items-center space-x-2 bg-[#3059E4] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-blue-700 transition-colors group shadow-md"
//                 >
//                   <span>Get Started</span>
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>

//               {/* Avatars (single section for all screens) */}
//               <div className="flex flex-col items-center md:flex-row md:justify-start space-y-4 md:space-y-0 md:space-x-4 pt-6 md:pt-[44px] w-full">
//                 <div className="flex -space-x-2 justify-center md:justify-start">
//                   {["avatar1.jpg","avatar2.jpg","avatar3.jpg","avatar4.jpg"].map((src, i) => (
//                     <div
//                       key={i}
//                       className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden relative ${
//                         i === 0 ? "bg-blue-400" :
//                         i === 1 ? "bg-green-400" :
//                         i === 2 ? "bg-purple-400" : "bg-red-400"
//                       }`}
//                     >
//                       <Image src={`/${src}`} alt={`Avatar ${i + 1}`} fill className="object-cover" />
//                     </div>
//                   ))}
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#e6eefd] rounded-full border-2 border-white flex items-center justify-center">
//                     <span className="text-xs font-bold text-gray-800">+10k</span>
//                   </div>
//                 </div>
//                 <span className="text-[#1C1F21] font-medium text-sm sm:text-base text-center md:text-left">
//                   Join more than 10,000 happy clients
//                 </span>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";
import { ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";
import RotatingHeader from "./RotatingHeader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const HeroSection: React.FC = () => {
  return (
    <div className={`${inter.variable} font-sans main_con min-h-[60vh] w-full flex justify-center`}>
      <div
        className="w-[98.5%] rounded-[20px] mt-[10px] px-4 md:px-8"
        style={{
          background:
            "repeating-linear-gradient(90deg, #D9E7FD 0px, #D9E7FD 19px, #ffffff 19px, #ffffff 20px)",
        }}
      >
        <Navbar />

        {/* <div className="py-10 flex justify-center w-[100%] pt-[50px] sm:py-[0px]"> */}
        <div className="flex justify-center w-full pt-[50px] pb-[3.5rem] sm:pt-[10px] sm:pb-10">

          <div className="flex justify-center w-[100%] md:pr-[60px]">
            <div className="space-y-6 md:space-y-8 flex flex-col w-[100%] items-center text-center md:ml-[60px]">
                <RotatingHeader/>
              <div className="space-y-1 sm:text-[20px] text-gray-600 w-[100%] text-center justify-center">
                {/* <p className="pb-3 sm:pb-[10px]"> */}
                <p className="pt-[10px] sm:pt-3">
                  Unlock the potential of professional tax resolution for your financial future.
                </p>
                {/* <p className="block pt-[40px] sm:pt-3 sm:block">
                  Resolve your tax problems, eliminate debt stress, and move toward financial freedom.
                </p> */}
                <p className="hidden sm:block pt-[40px] sm:pt-3">
  Resolve your tax problems, eliminate debt stress, and move toward financial freedom.
</p>
              </div>
                {/* <div className="cont flex justify-center w-[100%] pt-[40px]"> */}
                

                     <div className="cont flex justify-center w-[100%] pt-[30px] pb-[30px]">
                    <Link
                      href="/survey"
                      className="inline-flex items-center space-x-2 bg-[#3059E4] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-blue-700 transition-colors group shadow-md"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div> 


              <div className="flex items-center w-[100%] justify-center space-x-4 sm:pt-[100px] pt-[20px]">
                <div className="flex -space-x-2">
                  {["avatar1.jpg","avatar2.jpg","avatar3.jpg","avatar4.jpg"].map((src, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden relative ${
                        i === 0 ? "bg-blue-400" :
                        i === 1 ? "bg-green-400" :
                        i === 2 ? "bg-purple-400" : "bg-red-400"
                      }`}
                    >
                      <Image src={`/${src}`} alt={`Avatar ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#e6eefd] rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-800">+10k</span>
                  </div>
                </div>
                <span className="text-[#1C1F21] font-medium text-sm sm:text-base">
                  Join more than 10,000 happy clients
                </span>
              </div>

               
            </div>

          </div>
        </div> 
      </div>
    </div>
  );
};

export default HeroSection;