"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import axios from "axios";

const Confirmation = ({ data }: { data: any }) => {


  return (
    <div className="min-h-screen bg-background">
      {/* Header with decorative elements */}
      <div className="relative bg-gradient-to-br from-brand-blue via-brand-blue to-brand-teal overflow-hidden py-8 ">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Decorative geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-32 h-32 bg-brand-teal/30 rounded-full"></div>
          <div className="absolute top-8 left-16 w-24 h-24 bg-mint-400/40 rounded-full"></div>
          <div className="absolute top-12 left-32 w-16 h-16 bg-deep-blue-300/30 rounded-full"></div>
          <div className="absolute top-4 right-4 w-28 h-28 bg-brand-teal/25 rounded-full"></div>
          <div className="absolute top-8 right-16 w-20 h-20 bg-mint-300/35 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-center text-white">
            <h1 className="text-2xl font-bold">IRS Forgiveness</h1>
            <div className="text-right">
              <p className="text-sm">Get your free consultation now</p>
              <p className="text-lg font-semibold">(877) 518-2860</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Success message */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Application has been received!
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Good News sfsfd! Based on our preliminary assessment, you are
              likely a good candidate for IRS relief.
            </p>
          </div>

          {/* Next Steps section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Next Steps
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Your assigned Tax Analyst will be reaching out to you within the
              next business day to go over your results and the enrollment
              process.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Below is some important information to remember:
            </p>

            {/* Information card */}
            <Card className="bg-gray-900 text-white mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border-b md:border-b-0 md:border-r border-gray-700 pb-4 md:pb-0 md:pr-4">
                    <div className="text-sm text-gray-300 mb-1">
                      Confirmation Id:
                    </div>
                    <div className="font-semibold">{data?._id.slice(0, 6)}</div>
                  </div>
                  <div className="border-b md:border-b-0 md:border-r border-gray-700 pb-4 md:pb-0 md:pr-4">
                    <div className="text-sm text-gray-300 mb-1">
                      Case Number:
                    </div>
                    <div className="font-semibold">{data?.caseid}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-300 mb-1">
                      Assigned Agent:
                    </div>
                    <div className="font-semibold">{data?.officerName}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-gray-700 leading-relaxed">
              Questions? Call us at{" "}
              <a
                href="tel:+18775182860"
                className="text-brand-blue hover:text-brand-teal font-semibold underline"
              >
                (877) 518-2860
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              General Disclaimer
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Estimates based on prior results; individual results will vary
              based on circumstances, including your ability to provide IRS
              Forgiveness with information that is accurate and timely. We do
              not guarantee that your taxes owed will be lowered by a specific
              amount or percentage, that your taxes owed will be paid off within
              a specific period of time or guarantee that our services will
              yield any particular result.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
