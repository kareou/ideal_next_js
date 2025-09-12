"use client";

import { Award } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Ratings() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-16 bg-white w-full flex justify-center" data-aos="fade-up" data-aos-delay={200}>
      <div className="max-w-[90%] w-full mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <div className="mb-8" >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto">
            <Award className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <h2 className="text-[40px] md:text-5xl font-bold text-gray-900 mb-5"  >
          You are in good hands
        </h2>

        <p className="text-gray-500 mb-12 text-sm sm:text-base md:text-lg"  >
          Experienced team, Ideal process, Happy clients
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24 mb-16">
          <div className="text-center sm:border-r sm:border-gray-200 sm:pr-12 mb-8 sm:mb-0"  >
            <div className="text-4xl sm:text-[60px] font-bold text-[#3059E4] mb-5">15+</div>
            <div className="text-sm sm:text-[18px] text-gray-900">Years of experience</div>
          </div>

          <div className="text-center sm:border-r sm:border-gray-200 sm:pr-12 mb-8 sm:mb-0"  >
            <div className="text-4xl sm:text-[60px] font-bold text-[#3059E4] mb-5">A+</div>
            <div className="text-sm sm:text-[18px] text-gray-900 mr-4">BBB Rating</div>
          </div>

          <div className="text-center" >
            <div className="text-4xl sm:text-[60px] font-bold text-[#3059E4] mb-5">47</div>
            <div className="text-sm sm:text-[18px] text-gray-900">States Licensed</div>
          </div>
        </div>

        <div className="mt-16 bg-[#F6F9FF] p-6 sm:p-8 rounded-xl flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left"  >
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-[#1947BA] text-sm sm:text-base">
              Join over 10,000+ happy clients
            </p>
          </div>

          <Link
            href="/survey"
            className="mt-4 md:mt-0 flex w-full md:w-auto items-center justify-center md:justify-start space-x-2 bg-[#3059E4] text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors group shadow-md text-center"
          >
            <span>Get Your Free Consultation</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
