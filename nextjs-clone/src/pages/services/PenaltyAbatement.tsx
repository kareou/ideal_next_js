import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Calculator,
  Shield,
  Minus,
  Calendar,
  User,
  ArrowLeft,
  AlertTriangle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Penalty Abatement - Ideal Tax",
  description:
    "Penalty Abatement What is Penalty Abatement?The IRS issues billions of dollars in penalties each year and intends to collect on all of it. That being said, it means to the individual taxpayer that they may be willing to strike a deal for IRS debt forgiveness based on their ability to pay. While the IRS wants",

};

const PenaltyAbatement = () => {
  const penalties = [
    "Failure to file penalties - 14% of all penalties",
    "Failure to pay penalties - 56% of all penalties",
    "Failure to deposit penalties - 4% of all penalties",
    "Accuracy-related penalties",
    "Late payment penalties",
    "Estimated tax penalties",
    "Trust fund recovery penalties",
  ];

  const commonPenalties = [
    {
      title: "Failure to Pay Penalty",
      percentage: "56%",
      description: "Imposed if you don't pay taxes on time",
    },
    {
      title: "Failure to File Penalty",
      percentage: "14%",
      description: "Imposed if you don't file a return on time",
    },
    {
      title: "Failure to Deposit Penalty",
      percentage: "4%",
      description: "Imposed if a business doesn't pay employment taxes on time",
    },
  ];

  const abatementReasons = [
    {
      title: "Statutory Exception",
      description:
        "Used when you can prove a specific authoritative exclusion to the penalty. Examples include disaster relief or combat zone relief.",
    },
    {
      title: "IRS Error",
      description:
        "You need to show documentation that the mistake resulted from reliance on IRS advice. Requires documented erroneous advice from the IRS.",
    },
    {
      title: "Reasonable Cause",
      description:
        "When you can provide a valid reason that you could not comply based on your specific facts and circumstances.",
    },
    {
      title: "Administrative Waiver",
      description:
        "Taking advantage of provisions designed to provide relief under certain conditions, including First-Time Penalty Abatement (FTA).",
    },
  ];

  const dosAndDonts = {
    dos: [
      "Always utilize First-Time Abatement (FTA) for eligible penalties",
      "Appeal adverse determinations - many IRS determinations don't consider all circumstances",
      "Include specific circumstances outside your control in reasonable cause requests",
      "Show prior compliance history - weighs heavily in favor of reasonable cause relief",
      "Always follow up on abatement requests as they can get lost in the IRS system",
    ],
    donts: [
      "Don't pay your penalty before requesting reasonable cause - removes critical IRS appeals avenue",
      "Don't use tax professional or financial hardship excuses for failure to file penalties",
      "Don't expect immediate results - reasonable cause requests take 2-3 months for initial determination",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-brand-teal hover:text-brand-blue transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <div className="mb-6">
              <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                Tax Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Penalty Abatement
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Tax Resolution Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Professional Service
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The IRS issues billions of dollars in penalties each year, but not
              all taxpayers have to pay them. Our penalty abatement experts help
              reduce or eliminate tax penalties, potentially saving you
              thousands of dollars through proven strategies.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What is Penalty Abatement?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The IRS issues billions of dollars in penalties each year and
              intends to collect on all of it. However, they realize that some
              people can't or shouldn't have to pay, and removing those cases
              from their books allows them to pursue those taxpayers who can and
              should pay.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Not all taxpayers will qualify for penalty abatement. It depends
              on the particular financial circumstances of that individual and
              the type of penalty being assessed. Every case is unique and the
              IRS will decide each case by either approving or denying the
              abatement request based on the information you provide.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Why Does the IRS Charge Penalties?
              </h3>
              <p className="text-gray-600 mb-4">
                The IRS charges penalties on top of your tax debts because
                they're designed to encourage you to follow the rules and remain
                in compliance with federal tax laws. Every year, the IRS
                assesses tens of millions of penalties for taxpayers that total
                billions of dollars.
              </p>
              <p className="text-gray-600">
                However, the IRS does provide several options to get your
                penalties removed or abated if you're able to qualify for
                penalty abatement.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Most Common IRS Penalties
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Did you know that there are about 150 penalties in the Internal
              Revenue Code? However, only a few of the most common penalties
              make up 74% of all the penalties charged every year:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {commonPenalties.map((penalty, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                >
                  <div className="text-2xl font-bold text-brand-teal mb-2">
                    {penalty.percentage}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {penalty.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{penalty.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Four Primary Reasons for Penalty Relief
            </h2>
            <div className="space-y-6 mb-8">
              {abatementReasons.map((reason, index) => (
                <div key={index} className="border-l-4 border-brand-teal pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">
                    Important Note:
                  </h4>
                  <p className="text-yellow-600">
                    First-Time Penalty Abatement (FTA) is the easiest of all
                    available penalty relief options. You can use FTA to
                    decrease failure to deposit, failure to file, and failure to
                    pay penalties for one tax period if you have a clean
                    compliance history for the past three years.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Do's and Don'ts of Penalty Relief
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  DO's
                </h3>
                <ul className="space-y-3">
                  {dosAndDonts.dos.map((item, index) => (
                    <li
                      key={index}
                      className="text-green-700 text-sm leading-relaxed"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  DON'Ts
                </h3>
                <ul className="space-y-3">
                  {dosAndDonts.donts.map((item, index) => (
                    <li
                      key={index}
                      className="text-red-700 text-sm leading-relaxed"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Timeline for Penalty Abatement
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <Calculator className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">
                    Processing Times:
                  </h4>
                  <ul className="text-blue-600 space-y-2">
                    <li>
                      • First-Time Penalty Abatement: Approved by phone
                      instantly
                    </li>
                    <li>
                      • Reasonable Cause Requests: 2-3 months for initial
                      determination
                    </li>
                    <li>• Appeals Process: Additional 6-12 months if needed</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Expert Representation Matters
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              It is important to have expert representation on your side for
              this process. Our mediation experts will prepare your request and
              submit it to the IRS on your behalf. We tailor and prepare a
              customized request that has offered proven results with past
              clients.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              The information we gather from the client assists us in preparing
              a comprehensive and complete abatement request, which results in
              the best chance that your penalty abatement request will get
              approved.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                How We Help You Save Money
              </h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Custom tailor tax services to fit your unique needs</li>
                <li>
                  • Examine every option to save you as much money as possible
                </li>
                <li>
                  • Ensure you receive the best possible settlement every time
                </li>
                <li>• Navigate the complicated process of tax debt relief</li>
                <li>• Provide guidance to live tax debt free</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/survey"
                  className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block text-center"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+18775182860"
                  className="flex items-center justify-center bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (877) 518-2860
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-teal to-brand-blue text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Stop Paying Unnecessary Penalties
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Don't let IRS penalties destroy your financial future. Our tax
                specialists have the experience and expertise to walk you
                through the entire penalty forgiveness application, identify
                which solution is best for you, and help you solve your tax
                problems once and for all.
              </p>
              <Link
                href="/survey"
                className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Start Your Penalty Relief Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenaltyAbatement;
