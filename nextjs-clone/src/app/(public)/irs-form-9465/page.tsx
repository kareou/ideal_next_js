"use client";
import React from "react";
import Navigation from "../../../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const IrsForm9465 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-brand-teal hover:text-brand-blue transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="mb-6">
              <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                Tax Filing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              IRS Form 9465 Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Filing Experts
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                August 17, 2023
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Article Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-8">
              IRS Form 9465, Installment Agreement Request, is a tax form that
              individuals can file to request a monthly payment plan when they
              cannot pay their full tax liability by the due date.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              When to Use Form 9465
            </h2>
            <p className="mb-6">Form 9465 should be used when:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>You cannot pay your full tax liability by the due date</li>
              <li>You need more time to pay your taxes</li>
              <li>You want to avoid more serious collection actions</li>
              <li>You can afford monthly payments but not a lump sum</li>
              <li>
                You owe $50,000 or less in combined tax, penalties, and interest
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Types of Installment Agreements
            </h2>
            <p className="mb-6">
              The IRS offers several types of payment plans:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Short-term payment plan:</strong> Pay within 120 days
                (no setup fee)
              </li>
              <li>
                <strong>Long-term payment plan:</strong> Monthly payments over
                more than 120 days
              </li>
              <li>
                <strong>Direct debit installment agreement:</strong> Automatic
                bank withdrawals
              </li>
              <li>
                <strong>Payroll deduction agreement:</strong> Payments through
                employer
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Eligibility Requirements
            </h2>
            <p className="mb-6">To be eligible for an installment agreement:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>You must have filed all required tax returns</li>
              <li>
                You owe $50,000 or less in combined tax, penalties, and interest
              </li>
              <li>You must be able to pay the full amount within 72 months</li>
              <li>
                You haven't had an installment agreement in the past 5 years
              </li>
              <li>You must stay current on all future tax obligations</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Fees and Costs
            </h2>
            <p className="mb-6">Installment agreement fees vary by type:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Setup fee: $31-$225 depending on agreement type</li>
              <li>Low-income taxpayers may qualify for reduced fees</li>
              <li>
                Interest and penalties continue to accrue during the payment
                period
              </li>
              <li>Direct debit agreements have lower setup fees</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Benefits of Installment Agreements
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Stops most IRS collection actions</li>
              <li>Provides time to pay without immediate financial hardship</li>
              <li>Helps avoid wage garnishments and bank levies</li>
              <li>Allows you to maintain good standing with the IRS</li>
            </ul>
            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with Payment Plans?
              </h3>
              <p className="text-gray-600 mb-4">
                Setting up an installment agreement requires careful
                consideration of your financial situation. Our tax professionals
                can help you navigate the process.
              </p>
              <Link
                href="/survey"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrsForm9465;
