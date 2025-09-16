import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const WinLossStatementTaxes = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-brand-teal hover:text-brand-blue transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="mb-6">
              <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                Tax Tips
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Win/Loss Statement Taxes Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Tax Experts
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                August 28, 2025
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
              Taxpayers are required to report all gambling wins to the IRS as
              additional income, but the good news is that if you have gambling
              losses, you may be able to deduct them to offset your winnings.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Understanding Gambling Income
            </h2>
            <p className="mb-6">
              All gambling winnings are taxable income and must be reported on
              your tax return, regardless of the amount. This includes winnings
              from casinos, lotteries, horse races, sports betting, and online
              gambling platforms.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What is a Win/Loss Statement?
            </h2>
            <p className="mb-6">
              A win/loss statement is a document provided by casinos and other
              gambling establishments that summarizes your gambling activity for
              the tax year. It shows your total winnings and losses, which can
              be helpful for tax reporting purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Deducting Gambling Losses
            </h2>
            <p className="mb-6">
              You can deduct gambling losses as an itemized deduction, but only
              up to the amount of your gambling winnings. Key restrictions
              include:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Losses cannot exceed winnings reported as income</li>
              <li>You must itemize deductions to claim gambling losses</li>
              <li>Detailed records are required to substantiate losses</li>
              <li>Losses are claimed on Schedule A</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Record Keeping Requirements
            </h2>
            <p className="mb-6">
              The IRS requires detailed documentation for gambling activities:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Date and type of gambling activity</li>
              <li>Name and location of gambling establishment</li>
              <li>Names of other people present</li>
              <li>Amounts won and lost</li>
              <li>Win/loss statements from casinos</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Professional vs. Casual Gambling
            </h2>
            <p className="mb-6">
              The tax treatment differs between professional and casual
              gamblers. Professional gamblers can deduct losses as business
              expenses, while casual gamblers are limited to itemized deductions
              that cannot exceed winnings.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with Gambling Tax Issues?
              </h3>
              <p className="text-gray-600 mb-4">
                Gambling income and loss reporting can be complex. Our tax
                professionals can help ensure you properly report your gambling
                activities.
              </p>
              <Link
                href="/survey"
                className="no-underline bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
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

export default WinLossStatementTaxes;
