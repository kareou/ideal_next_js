"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileBadgeSlider from "./MobileSliderWrapperr";

export default function OurCompanyClient() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-out",
      once: false,
      mirror: true, 
    });
  }, []);

  const badges = [
    { src: "/bbb.png", title: "Better Business Bureau", subtitle: "A+" },
    { src: "/irs.png", title: "IRS", subtitle: "Authorized" },
    { src: "/naea.png", title: "NAEA", subtitle: "Member" },
    { src: "/bestcompany.png", title: "Best Company", subtitle: "Certified" },
  ];

  return (
    <section className="relative bg-white py-16 px-4 overflow-hidden">
      <div className="w-full flex justify-center">
        <div className="w-[90%] ">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <div className="space-y-4" data-aos="fade-up">
                <p className="text-[#1947BA] font-semibold text-sm tracking-wider uppercase">
                  IdealTax
                </p>
                <h2 className="text-[40px] md:text-5xl font-bold text-gray-900">
                  Our Company
                </h2>
              </div>

              <div
                className="space-y-4 text-gray-500 text-base md:text-[16px] lg:text-[18px] leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  Idealtax is a leading tax resolution company with over 15 years of
                  experience, specializing in helping individuals and businesses resolve
                  tax issues with the IRS and state agencies. Known for exceptional results
                  and customer service, the company holds an A+ rating with the Better
                  Business Bureau and is headquartered in Orange County, California.
                </p>
                <p>
                  Licensed to operate in 48 states, Ideal Tax provides nationwide service.
                  Their mission is to make tax relief accessible, simple, and effective,
                  alleviating the stress often associated with tax problems.
                </p>
              </div>

              <div className="pt-4" data-aos="fade-up" data-aos-delay="200">
                <Link
                  href="/qualifying-dependent"
                  className="inline-flex bg-[#3059E4] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 items-center space-x-2 shadow-md w-auto justify-center"
                >
                  <span>Qualify for a program</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col  lg:flex-row items-center lg:items-stretch gap-12">
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
  {badges.map((badge, i) => (
    <div
      key={i}
      className="relative rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow duration-200 flex flex-col justify-center items-center"
      data-aos="zoom-in"
      data-aos-delay={i * 100}
    >
                  <div className="absolute inset-0 rounded-xl -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[length:20px_20px]" />
                  <div className="flex justify-center items-center mb-4">
                    <Image
                      src={badge.src}
                      alt={badge.title}
                      width={badge.src === "/naea.png" ? 142 : 57}
                      height={badge.src === "/naea.png" ? 60 : 88}
                      className="object-contain"
                      style={{ height: "auto" }}
                    />
                  </div>
                  <p className="text-gray-700 font-medium mb-1">{badge.title}</p>
                  <p className="text-blue-600 font-bold text-xl">{badge.subtitle}</p>
                </div>
              ))}
            </div>


                <MobileBadgeSlider badges={badges} />


            <div
              className="flex-1 flex w-[90%] justify-center lg:justify-end items-center relative"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="relative w-full h-[400px] lg:h-full overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10850.102595081278!2d-117.76358013296375!3d33.67590113361527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd27559f01dc85%3A0xb8698d9b1d086b4c!2sIdeal%20Tax!5e0!3m2!1sen!2sus!4v1755804049426!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ideal Tax Office Location"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <h3 className="font-bold text-gray-800 text-sm">Ideal Tax</h3>
                  <p className="text-gray-600 text-xs">
                    240 Progress Suite 250
                    <br />
                    Irvine, CA 92618
                  </p>
                </div>

                <div className="absolute top-0 right-0 md:-top-4 md:-right-4 w-16 h-16 bg-[#00c6b8] opacity-20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 left-0 md:-bottom-4 md:-left-4 w-12 h-12 bg-[#3059e4] opacity-20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
