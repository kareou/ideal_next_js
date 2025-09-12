"use client";

import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Award } from "lucide-react";
import TestimonalReviews from "../components/MainLanderComponents/CsrComponents/TestimonalReviews";
import { Button } from "@/components/ui/button";
import { Star, Quote, CheckCircle } from "lucide-react";
import Link from "next/link";

import Image from 'next/image';

const Reviews = () => {

  return (
    <div className="min-h-screen bg-white">
      <section className=" pt-32 pb-20">
      {/* <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20"> */}
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Client <span className="text-brand-teal">Reviews</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Don't just take our word for it. Read what our satisfied clients
              have to say about their experience with IdealTax's professional
              tax resolution services.
            </p>
           
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/survey"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Get Your Success Story
              </Link>
              <Link
                variant="outline"
                href="tel:+18775182860"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-4 px-8 rounded-full transition-all duration-300"
              >
                Call (877) 518-2860
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold text-brand-teal mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
{/* 
      <section className="py-20 bg-gradient-to-br from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/lovable-uploads/8fc7ce39-0634-4bb1-a33b-bedadbf45ba9.png"
                alt="Trustpilot"
                width={250}
                height={250}
                className="h-12 object-contain"
                unoptimized
              />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trustpilot Reviews
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real stories from real people who have achieved tax relief with
              IdealTax.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustpilotReviews.map((review, index) => (
              <ReviewCard key={index} review={review} platform="Trustpilot" />
            ))}
          </div>
        </div>
      </section> */}
{/* 
<section className="py-20 bg-white">
  <div className="container  px-6">
    <div className="text-center mb-16">
      <div className="flex items-center justify-center mb-6">
        <Image
          src="/lovable-uploads/94e75b00-ab1b-4ef1-a8e8-821863a6bc8d.png"
          alt="Google Reviews"
          width={180}
          height={55}
          className="h-15 object-contain"
          unoptimized
        />
      </div>
      
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        See what our clients are saying about us on Google.
      </p>
    </div>

    {loadingGoogle ? (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow animate-pulse bg-gray-100"
          >
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mt-4"></div>
          </div>
        ))}
      </div>
    ) : googleReviews.length === 0 ? (
      <p className="text-center text-gray-600">No reviews available at the moment.</p>
    ) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {googleReviews.map((review, index) => (
          <ReviewCard key={index} review={review} platform="Google" />
        ))}
      </div>
    )}

  </div>
</section> */}
    <TestimonalReviews/>


      <section className="py-16 bg-white w-full flex justify-center">
      <div className="max-w-[90%] w-full mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <div className="mb-8" >
          <div className="inline-flex items-center justify-center w-[100%] mx-auto">
             <Image
                src="/bbbb.png"
                alt="bbbb"
                width={150}      
                height={80}     
              />  
          </div>
        </div>

        <h2 className="text-[40px] md:text-5xl font-bold text-gray-900 mb-20"  >
          Our BBB Success Rate
        </h2>

      
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24 mb-16">
          <div className="text-center sm:border-r sm:border-gray-200 sm:pr-12 mb-8 sm:mb-0"  >
            <div className="text-4xl sm:text-[45px] font-bold text-[#3059E4] mb-5">Accredited</div>
            <div className="text-sm sm:text-[18px] text-gray-900">Business</div>
          </div>

          <div className="text-center sm:border-r sm:border-gray-200 sm:pr-12 mb-8 sm:mb-0"  >
            <div className="text-4xl sm:text-[45px] font-bold text-[#3059E4] mb-5">A+</div>
            <div className="text-sm sm:text-[18px] text-gray-900 mr-4">BBB Rating</div>
          </div>

          <div className="text-center" >
            <div className="text-4xl sm:text-[45px] font-bold text-[#3059E4] mb-5">Less Than 1%</div>
            <div className="text-sm sm:text-[18px] text-gray-900">Complaint Rate</div>
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

      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue"  >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied clients who have achieved tax relief
              with IdealTax. Your success story could be next.
            </p>
            <Link
              href="/survey"
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Start Your Journey Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
