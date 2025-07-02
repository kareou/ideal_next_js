"use client";
import React from "react";
import Navigation from "../../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const NftTaxGuide = () => {
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
              NFT Tax Guide
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                IdealTax Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                August 28, 2023
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
              While NFTs and cryptocurrencies are hot topics in the news,
              understanding the tax implications of NFT transactions is far from
              clear. If you're involved in buying, selling, or creating NFTs,
              you need to understand how these transactions affect your tax
              obligations.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How the IRS Views NFTs
            </h2>
            <p className="mb-6">
              The IRS treats NFTs as property, similar to other digital assets
              and cryptocurrencies. This classification means that NFT
              transactions can trigger taxable events, including capital gains
              or losses when you buy, sell, trade, or dispose of NFTs.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Taxable NFT Events
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Selling an NFT for more than you paid (capital gains)</li>
              <li>Trading one NFT for another NFT</li>
              <li>Using cryptocurrency to purchase an NFT</li>
              <li>Receiving NFTs as payment for goods or services</li>
              <li>Creating and selling original NFTs</li>
              <li>Gifting NFTs (may trigger gift tax implications)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              NFT Creator Tax Implications
            </h2>
            <p className="mb-6">
              If you create and sell NFTs, the income from these sales is
              generally treated as ordinary business income, not capital gains.
              This means NFT creators may be subject to self-employment taxes in
              addition to regular income taxes.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Record Keeping for NFT Transactions
            </h2>
            <p className="mb-6">
              Maintaining detailed records is crucial for proper NFT tax
              reporting:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Purchase date and price of each NFT</li>
              <li>Sale date and proceeds from NFT sales</li>
              <li>Transaction fees and gas costs</li>
              <li>Fair market value at time of receipt or creation</li>
              <li>Blockchain transaction records</li>
            </ul>
            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with NFT Taxes?
              </h3>
              <p className="text-gray-600 mb-4">
                NFT taxation is complex and evolving. Our crypto tax specialists
                can help you navigate these requirements and ensure compliance.
              </p>
              <Link
                href="/free-tax-consultation"
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

export default NftTaxGuide;
