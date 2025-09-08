import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const HeroSection: React.FC = () => {
  return (
    <div className={`${inter.variable} font-sans main_con min-h-[80vh] w-full flex justify-center`}>
      <div
        className="w-[98.5%] rounded-[20px] mt-[10px] px-4 md:px-8"
        style={{
          background:
            "repeating-linear-gradient(90deg, #D9E7FD 0px, #D9E7FD 19px, #ffffff 19px, #ffffff 20px)",
        }}
      >
        <Navbar />

        <div className="py-10">
          <div className="grid lg:grid-cols-2 gap-7 items-center">
            <div className="space-y-6 md:space-y-8 flex flex-col items-center text-center md:items-start md:text-left md:ml-[60px]">

              <div>
                <h1 className="text-[6xl] sm:text-6xl md:text-6xl text-110-shrink lg:text-[110px] font-bold text-gray-900 leading-tight">
                  Tax Relief
                </h1>
                <h2 className="text-6xl sm:text-6xl md:text-6xl text-110-shrink lg:text-[110px] font-bold text-gray-900 leading-tight">
                  Made{" "}
                  <span className="relative inline-block">
                    easy
                    <Image
                      src="/vector.png"
                      alt="underline vector"
                      className="absolute -bottom-3 left-0 w-full h-5 object-contain"
                      width={300} 
                      height={20} 
                    />
                  </span>
                </h2>
              </div>

              <div className="space-y-1 text-sm sm:text-[14px] text-gray-600 max-w-xl ">
                <p>
                  Unlock the potential of professional tax resolution for your financial future.
                </p>
                <p className="hidden sm:block">
                  Transform your tax problems, eliminate debt stress, and drive financial freedom.
                </p>
              </div>


              <Link
                href="/survey"
                className="inline-flex items-center space-x-2 bg-[#3059E4] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-blue-700 transition-colors group shadow-md"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Avatars */}
              <div className="flex items-center hidden space-x-4 lg:flex">
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

            {/* Images */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-end justify-end hidden lg:flex">
              <Image
                src="/mcbook.png"
                alt="Laptop"
                width={791}      
                height={400}     
                className="object-contain mr-[-32px]"
              />  
            </div>

            <div className="relative w-full h-auto sm:h-auto md:h-auto lg:hidden flex items-center justify-center">
              <Image
                src="/mcbookmobile.png"
                alt="Laptop"
                width={500}      
                height={400}     
                className="object-contain"
              />  
            </div>
            

             <div className="flex items-center space-x-4 lg:hidden">
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
  );
};

export default HeroSection;
