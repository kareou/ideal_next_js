import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  CheckCircle,
  Calendar,
  DollarSign,
  Clock,
  User,
  ArrowLeft,
  AlertTriangle,
  CreditCard,
  FileText,
  Phone,
  Building,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installment Agreements & IRS Payment Plans - Ideal Tax",
  description:
    "Installment Agreements & IRS Payments Plans​ In 2020, the Internal Revenue Service (IRS) reported that it was owed over $114 billion in back taxes, penalties, and interest. If you are one of the millions of Americans that owe money to the IRS, it’s best to get that debt paid as quickly as possible.The IRS has",
};

const InstallmentAgreements = () => {
  const paymentOptions = [
    {
      title: "Short-Term Payment Plan",
      duration: "180 days or less",
      setupFee: "$0",
      eligibility: "Individual taxpayers only",
      description:
        "Pay your tax debt in full within 6 months with no setup fees",
    },
    {
      title: "Long-Term Payment Plan (Direct Debit)",
      duration: "More than 6 months",
      setupFee: "$31 online / $107 other methods",
      eligibility: "Individuals and businesses",
      description:
        "Automatic monthly payments from your bank account with lower fees",
    },
    {
      title: "Long-Term Payment Plan (Standard)",
      duration: "More than 6 months",
      setupFee: "$130 online / $225 other methods",
      eligibility: "Individuals and businesses",
      description: "Manual monthly payments with higher setup fees",
    },
  ];

  const eligibilityRequirements = [
    "Have filed all required tax returns",
    "Owe $50,000 or less (individuals) or $25,000 or less (businesses for online applications)",
    "Able to pay the full amount within 72 months",
    "No installment agreement in the past 5 years",
    "Stay current on all future tax obligations",
  ];

  const penaltyTypes = [
    {
      type: "Failure-to-Pay Penalty",
      rate: "0.5% per month (reduced to 0.25% with active installment agreement)",
      cap: "25% maximum",
      description: "Applied when you don't pay taxes owed by the due date",
    },
    {
      type: "Failure-to-File Penalty",
      rate: "5% per month",
      cap: "25% maximum",
      description: "Applied when you don't file your tax return on time",
    },
    {
      type: "Interest Charges",
      rate: "6% per year (as of Q3 2022)",
      cap: "No cap",
      description: "Federal short-term rate plus 3%, compounded daily",
    },
  ];

  const avoidDefaultTips = [
    "Make payments on or before the due date",
    "Pay more than the minimum when possible",
    "File future returns on time",
    "Update banking information immediately if it changes",
    "Contact the IRS immediately if you can't make a payment",
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
                IRS Payment Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Installment Agreements & IRS Payment Plans
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Tax Resolution Specialists
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
              In 2020, the IRS reported being owed over $114 billion in back
              taxes, penalties, and interest. If you're among the millions of
              Americans with tax debt, an installment agreement can provide a
              manageable path to resolution while protecting you from aggressive
              collection actions.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">
                    Why Timely Payment Matters
                  </h4>
                  <p className="text-yellow-600">
                    The IRS doesn't take delinquent payments lightly. Late
                    payments are subject to interest and penalty fees, and a
                    history of late filing could disqualify you from payment
                    plan options.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What is an IRS Installment Agreement?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              An IRS installment agreement is a payment plan that allows
              individuals and businesses to pay their tax debt over time through
              manageable monthly payments. This debt forgiveness option helps
              you navigate the collection process while avoiding more severe
              consequences like asset seizure.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Payment Plan Options
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
                    <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                      {option.setupFee}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Duration</p>
                      <p className="font-medium text-gray-800">
                        {option.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Eligibility</p>
                      <p className="font-medium text-gray-800">
                        {option.eligibility}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Setup Fee</p>
                      <p className="font-medium text-gray-800">
                        {option.setupFee}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Eligibility Requirements
            </h2>
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-green-800 mb-4">
                To qualify for an installment agreement:
              </h4>
              <div className="space-y-3">
                {eligibilityRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-green-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              How to Apply
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold text-blue-800 mb-3">
                  Online Application
                </h4>
                <p className="text-blue-700 mb-4">
                  <strong>Individuals:</strong> Owe $50,000 or less
                  <br />
                  <strong>Businesses:</strong> Owe $25,000 or less in payroll
                  taxes
                </p>
                <p className="text-blue-600 text-sm">
                  Lowest setup fees - apply online when possible
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <Phone className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-lg font-semibold text-purple-800 mb-3">
                  Other Methods
                </h4>
                <p className="text-purple-700 mb-4">
                  Apply by phone, mail, or in-person for any amount owed
                </p>
                <p className="text-purple-600 text-sm">
                  Higher setup fees but available for all debt amounts
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Interest Rates & Penalties
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-red-800 mb-4">
                Important: The IRS is not a lending institution
              </h4>
              <p className="text-red-700 mb-4">
                Only the "pay now" option avoids additional costs. All payment
                plans accrue penalties and interest during the repayment period.
              </p>
              <div className="space-y-4">
                {penaltyTypes.map((penalty, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded border border-red-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-red-800">
                        {penalty.type}
                      </h5>
                      <span className="text-red-600 font-medium">
                        {penalty.rate}
                      </span>
                    </div>
                    <p className="text-red-600 text-sm mb-1">
                      Cap: {penalty.cap}
                    </p>
                    <p className="text-red-700 text-sm">
                      {penalty.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Special Considerations
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <Building className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-lg font-semibold text-green-800 mb-3">
                  Business Eligibility
                </h4>
                <p className="text-green-700">
                  Small businesses are eligible for installment agreements with
                  minor differences in stipulations and application processes
                  compared to individual taxpayers.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold text-blue-800 mb-3">
                  Low-Income Taxpayers
                </h4>
                <p className="text-blue-700">
                  If your income is at or below 250% of the federal poverty
                  level, you may qualify for reduced or waived setup fees.
                  Submit Form 13844 if not automatically identified.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What if I Miss a Payment?
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">
                    30-Day Grace Period
                  </h4>
                  <p className="text-yellow-600 mb-4">
                    You have 30 days to make a missed payment and keep your
                    agreement active. However, this doesn't delay your next
                    payment, and after 30 days, the IRS can cancel your
                    agreement.
                  </p>
                  <p className="text-yellow-600">
                    <strong>Consequences of default:</strong> Reinstatement at
                    IRS discretion, additional fees, potential asset seizure, or
                    forced bankruptcy.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              How to Avoid Default
            </h2>
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-green-800 mb-4">
                Best Practices:
              </h4>
              <div className="space-y-3">
                {avoidDefaultTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-green-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Modifying Your Agreement
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Use the Online Payment Agreement Tool to modify your existing
              installment agreement:
            </p>
            <ul className="list-disc list-inside mb-8 space-y-2 text-gray-600">
              <li>
                <strong>Payment Amount:</strong> Increase or decrease monthly
                payments (within limits)
              </li>
              <li>
                <strong>Payment Due Date:</strong> Change to better align with
                your budget
              </li>
              <li>
                <strong>Direct Debit:</strong> Switch to automatic payments for
                convenience
              </li>
              <li>
                <strong>Banking Information:</strong> Update account details to
                avoid missed payments
              </li>
              <li>
                <strong>Reinstatement:</strong> Restore defaulted agreements
                (fees may apply)
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Disadvantages to Consider
            </h2>
            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-red-800 mb-4">
                Important Limitations:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-red-700">
                <li>
                  You'll pay significantly more due to accumulated penalties and
                  interest
                </li>
                <li>No protection from federal tax liens or asset seizure</li>
                <li>
                  Contractually binding - default can have severe consequences
                </li>
                <li>
                  Future tax refunds will be applied to your remaining balance
                </li>
              </ul>
            </div>

            <div className="bg-brand-teal/10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Expert Help Available
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Navigating tax debt can feel overwhelming, but you're not alone.
                Our experienced team at Ideal Tax has helped thousands of
                clients successfully establish installment agreements and
                resolve their tax problems. We can evaluate your situation, help
                prepare your application, and determine if you qualify for
                alternative IRS Fresh Start Programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sruvey"
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
                Ready to Resolve Your Tax Debt?
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Don't let tax debt control your life. With the right installment
                agreement, you can transform overwhelming debt into manageable
                monthly payments while stopping IRS collection activities. Our
                experts are here to guide you through every step of the process.
              </p>
              <Link
                  href="/sruvey"
                className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Start Your Payment Plan Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallmentAgreements;
