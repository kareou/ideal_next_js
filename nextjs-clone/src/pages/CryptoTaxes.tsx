import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const CryptoTaxes = () => {
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
                Crypto Tax
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Crypto Taxes Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Crypto Tax Team
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
              Crypto taxes are an IRS tax that must be paid when an individual
              earns a profit through cryptocurrency transactions, including
              trading, selling, or using crypto for purchases.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Understanding Cryptocurrency Taxation
            </h2>
            <p className="mb-6">
              The IRS treats cryptocurrency as property, not currency, for tax
              purposes. This means that every time you sell, trade, or use
              cryptocurrency, you potentially trigger a taxable event that must
              be reported on your tax return.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Taxable Crypto Events
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Selling cryptocurrency for fiat currency (USD, EUR, etc.)</li>
              <li>Trading one cryptocurrency for another</li>
              <li>Using cryptocurrency to purchase goods or services</li>
              <li>Receiving cryptocurrency as payment for services</li>
              <li>Mining cryptocurrency rewards</li>
              <li>Staking rewards and DeFi yield farming</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Capital Gains vs. Ordinary Income
            </h2>
            <p className="mb-6">
              Cryptocurrency gains are generally treated as capital gains, with
              the tax rate depending on how long you held the crypto before
              disposing of it. Short-term gains (held for one year or less) are
              taxed as ordinary income, while long-term gains receive
              preferential tax rates.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Record Keeping Requirements
            </h2>
            <p className="mb-6">
              Proper record keeping is essential for crypto tax compliance. You
              must track:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Date of each transaction</li>
              <li>Fair market value at time of transaction</li>
              <li>Purpose of the transaction</li>
              <li>Wallet addresses and exchange information</li>
              <li>Cost basis for each crypto holding</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Common Crypto Tax Mistakes
            </h2>
            <p className="mb-6">
              Many taxpayers make costly mistakes when reporting cryptocurrency
              transactions, including failing to report all transactions,
              incorrectly calculating cost basis, and not understanding the
              difference between various types of crypto income.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with Crypto Taxes?
              </h3>
              <p className="text-gray-600 mb-4">
                Cryptocurrency taxation can be complex. Our tax professionals
                specialize in crypto tax compliance and can help ensure you meet
                all IRS requirements.
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

export default CryptoTaxes;
