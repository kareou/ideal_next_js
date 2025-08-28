import React from "react";
import SurveyForm from "@/pages/forms/SurveyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solve Your IRS Tax Problems",

};

function page() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Image/Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-teal rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-mint-400 rounded-full opacity-30"></div>

        <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              IRS Forgiveness
            </h1>
            <h2 className="text-3xl font-semibold mb-6">
              Solve Your IRS Tax Problems
            </h2>
            <p className="text-xl mb-2">Before Fresh Start Initiative</p>
            <p className="text-xl mb-8">Expires</p>
          </div>

          <div className="mb-8">
            <p className="text-lg mb-6">
              See if you qualify in less than 3 minutes
            </p>

            <div className="flex gap-4">
              <button className="bg-brand-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-teal/90 transition-colors">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 bg-white">
        <SurveyForm />
      </div>
    </div>
  );
}

export default page;
