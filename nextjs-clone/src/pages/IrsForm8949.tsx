import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const IrsForm8949 = () => {
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
                Tax Forms
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              IRS Form 8949 Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Capital Gains Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                September 15, 2023
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
              IRS Form 8949, Sales and Other Dispositions of Capital Assets, is
              a tax form used to report capital gains and losses from the sale
              of stocks, bonds, cryptocurrency, and other capital assets.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Is Form 8949?
            </h2>
            <p className="mb-6">
              Form 8949 is used to report detailed information about each
              capital asset transaction during the tax year. The information
              from Form 8949 is then summarized on Schedule D of your tax
              return.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              When Do You Need Form 8949?
            </h2>
            <p className="mb-6">You must file Form 8949 if you:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Sold stocks, bonds, or other capital assets</li>
              <li>Sold cryptocurrency or other digital assets</li>
              <li>Received a Form 1099-B that doesn't show basis</li>
              <li>Need to make adjustments to your cost basis</li>
              <li>Have transactions not reported on Form 1099-B</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Parts of Form 8949
            </h2>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Part I - Short-Term Transactions
            </h3>
            <p className="mb-4">
              Report sales of capital assets held for one year or less.
              Short-term capital gains are taxed as ordinary income.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Part II - Long-Term Transactions
            </h3>
            <p className="mb-6">
              Report sales of capital assets held for more than one year.
              Long-term capital gains receive preferential tax treatment.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Required Information
            </h2>
            <p className="mb-6">For each transaction, you must provide:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Description of the property sold</li>
              <li>Date acquired and date sold</li>
              <li>Proceeds from the sale</li>
              <li>Cost basis (what you paid for the asset)</li>
              <li>Adjustments to gain or loss (if any)</li>
              <li>Realized gain or loss</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Failing to report all capital asset transactions</li>
              <li>Incorrectly calculating the holding period</li>
              <li>Using incorrect cost basis information</li>
              <li>Not accounting for stock splits or dividends</li>
              <li>Mixing up short-term and long-term transactions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Connection to Schedule D
            </h2>
            <p className="mb-6">
              The totals from Form 8949 are transferred to Schedule D, which
              calculates your overall capital gain or loss and determines the
              tax impact on your return.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with Form 8949?
              </h3>
              <p className="text-gray-600 mb-4">
                Properly completing Form 8949 requires detailed record-keeping
                and tax knowledge. Our professionals can ensure accurate
                reporting of your capital gains and losses.
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

export default IrsForm8949;
