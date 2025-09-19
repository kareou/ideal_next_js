import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  CheckCircle,
  DollarSign,
  Scale,
  TrendingDown,
  Calendar,
  User,
  ArrowLeft,
  AlertTriangle,
  FileText,
  Calculator,
  CreditCard,
  Building,
  Shield,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offer in Compromise - Ideal Tax",
  description:
"The Offer in Compromise or OIC program is an IRS program that allows individuals with unpaid tax debt liabilities to negotiate a settlement amount that is less than what is owed to clear the IRS tax debt.",
};

const OfferInCompromise = () => {
  const qualifyingConditions = [
    {
      title: "Doubt about Liability",
      description:
        "The debtor can prove that the tax liability has been incorrectly assessed",
      icon: <Scale className="w-6 h-6 text-brand-teal" />,
    },
    {
      title: "Doubt about Collectability",
      description:
        "The debtor can demonstrate that the debt is unlikely to be collected in full by IRS under any circumstances",
      icon: <DollarSign className="w-6 h-6 text-brand-teal" />,
    },
    {
      title: "Effective Tax Administration",
      description:
        "The debtor cannot contest the liability or collectability but can show extenuating circumstances that would make it impossible to collect the debt",
      icon: <Shield className="w-6 h-6 text-brand-teal" />,
    },
  ];

  const paymentOptions = [
    {
      title: "Lump-Sum Cash Offer",
      description:
        "Payments made in five or fewer installments within 5 months of acceptance",
      requirements:
        "Must include 20% of offer amount plus $186 application fee when submitting",
    },
    {
      title: "Periodic Payments",
      description:
        "Monthly payments for less than 24 months but more than 5 months",
      requirements:
        "Must send first monthly payment plus application fee when applying",
    },
  ];

  const relatedServices = [
    {
      title: "Federal/State Tax Investigation",
      description:
        "Obtain all records, transcripts, and supporting documents going back 10 years to construct the most advantageous resolution program",
      link: "/services/tax-audits",
    },
    {
      title: "Installment Agreement (IA)",
      description:
        "Various types of installment agreements available based on income, liability amount, and terms",
      link: "/services/installment-agreements-irs-payment-plans",
    },
    {
      title: "Currently Non-Collectible Status (CNC)",
      description:
        "For individuals experiencing extreme economic hardship - suspends all payments and collection efforts for 2 years",
      link: "/services/currently-non-collectible-status",
    },
    {
      title: "Penalty Abatement",
      description:
        "Motion for penalty reduction that could reduce penalties and fees by up to 40%",
      link: "/services/penalty-abatement",
    },
    {
      title: "Wage Garnishments and Bank Levy Holds",
      description:
        "Immediate garnishment and levy holds to negotiate successful resolution - withheld funds can be returned within 72 hours",
      link: "/services/wage-garnishments",
    },
  ];

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
                Tax Settlement Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Offer in Compromise Program
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Tax Settlement Specialists
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Professional Service
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The Offer in Compromise (OIC) program is an IRS program that
              allows individuals with unpaid tax debt liabilities to negotiate a
              settlement amount that is less than what is owed to clear the IRS
              tax debt. This powerful program can provide significant savings
              for taxpayers who qualify.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What is the Offer in Compromise Program?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A person who owes money but can't afford the full amount due to
              financial hardship may be able to offer the IRS a lower, more
              affordable settlement. This offer could include a lump‑sum payment or a series of payments over several months. The IRS offers a forgiveness
              program for any remaining debt if it accepts the OIC, which
              contrasts with traditional IRS payment plans.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">
                    Important Requirements
                  </h4>
                  <p className="text-yellow-600 mb-2">
                    The OIC program is only available to taxpayers who have:
                  </p>
                  <ul className="text-yellow-600 space-y-1">
                    <li>• Filed all their tax returns</li>
                    <li>• No open bankruptcy case</li>
                    <li>
                      • Ability to make initial payment and pay application fee
                    </li>
                    <li>
                      • Low-income applicants may be exempt from initial fee
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Qualifying Conditions
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To be eligible for an OIC settlement, a taxpayer must meet at
              least one of the following conditions:
            </p>

            <div className="grid md:grid-cols-1 gap-6 mb-8">
              {qualifyingConditions.map((condition, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    {condition.icon}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        {condition.title}
                      </h4>
                      <p className="text-gray-600">{condition.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The OIC Process
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The IRS requires that you submit a formal offer using IRS Form
              656, Offer In Compromise. There is a $186 fee for filing an OIC,
              though you might be exempted if your monthly income falls below
              poverty guidelines.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">
                Required Documentation
              </h4>
              <p className="text-blue-700 mb-4">
                You must submit detailed financial information via:
              </p>
              <ul className="text-blue-700 space-y-2">
                <li>
                  • <strong>Form 433-A:</strong> Collection Statement for
                  individuals
                </li>
                <li>
                  • <strong>Form 433-B:</strong> Collection Statement for
                  businesses
                </li>
                <li>• Pay slips, bank records, vehicle registrations</li>
                <li>
                  • Extensive financial documentation (often boxes of documents)
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What Should You Offer?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To calculate your minimum offer amount, the IRS wants to know your
              collection potential based on your financial disclosures. Your
              offer must equal:
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-green-800 mb-4">
                Calculation Formula
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-green-700 font-medium">
                    Settlement Amount =
                  </p>
                  <p className="text-green-600">
                    Monthly disposable income × number of months + net
                    realizable equity in assets
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-green-700 font-medium">Examples:</p>
                  <div className="mt-2 space-y-2 text-green-600">
                    <p>
                      <strong>Example 1:</strong> Monthly income $5,000,
                      expenses $4,500 = $500 disposable × 12 = $6,000 minimum
                      offer
                    </p>
                    <p>
                      <strong>Example 2:</strong> Monthly income $4,250,
                      expenses $4,500 = $0 disposable income
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Payment Options
            </h2>
            <div className="grid md:grid-cols-1 gap-6 mb-8">
              {paymentOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {option.title}
                    </h4>
                    <CreditCard className="w-6 h-6 text-brand-teal" />
                  </div>
                  <p className="text-gray-600 mb-3">{option.description}</p>
                  <p className="text-sm text-gray-500">{option.requirements}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Important Considerations
            </h2>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-red-800 mb-4">
                Risks and Disadvantages
              </h4>
              <ul className="text-red-700 space-y-2">
                <li>
                  • Interest continues to accrue during the negotiation process
                </li>
                <li>
                  • The IRS can use your submitted financial information to
                  speed up collection efforts if your offer is rejected
                </li>
                <li>
                  • Tax liens remain in effect until the offer is accepted and
                  paid in full
                </li>
                <li>
                  • Failure to make required payments will result in offer
                  rejection with no appeal rights
                </li>
                <li>
                  • The IRS has two years to make a decision on your offer
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Related Tax Resolution Services
            </h2>
            <div className="space-y-4 mb-8">
              {relatedServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <Link
                      href={service.link}
                      className="ml-4 text-brand-teal hover:text-brand-blue font-medium text-sm whitespace-nowrap"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Professional Representation Matters
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Preparing a package that gives the IRS every chance to accept your
              offer in compromise is key to success. The average taxpayer
              doesn't know everything about the IRS or how they work. Having
              experienced tax professionals like Ideal Tax representing you
              significantly increases your chances of approval.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Expert OIC Assistance Available
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Don't navigate the complex OIC process alone. Our experienced
                team at Ideal Tax has helped thousands of clients successfully
                negotiate offers in compromise and resolve their tax problems.
                We can evaluate your situation, prepare your application
                properly, and represent you throughout the entire process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                href="/survey"
                  className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block text-center"
                >
                  Get Free Tax Consultation
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
                Ready to Settle Your Tax Debt for Less?
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                An Offer in Compromise can potentially save you thousands of
                dollars and provide a fresh start. Our experts will determine if
                you qualify and guide you through every step of the process to
                maximize your chances of IRS acceptance.
              </p>
              <Link
                href="/survey"
                className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Check Your OIC Eligibility Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferInCompromise;
