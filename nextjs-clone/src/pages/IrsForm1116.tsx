import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const IrsForm1116 = () => {
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
                Tax Forms
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              IRS Form 1116 Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                International Tax Team
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
              Americans who are working abroad can save money on taxes by
              claiming the foreign tax credit using IRS Form 1116, Foreign Tax
              Credit, which helps prevent double taxation on income earned in
              foreign countries.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Purpose of the Foreign Tax Credit
            </h2>
            <p className="mb-6">
              The foreign tax credit allows U.S. taxpayers to reduce their U.S.
              tax liability by the amount of income tax paid to foreign
              governments. This prevents the same income from being taxed by
              both the United States and a foreign country.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Who Should File Form 1116?
            </h2>
            <p className="mb-6">You should consider filing Form 1116 if you:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Paid income tax to a foreign government</li>
              <li>Had foreign source income</li>
              <li>Want to claim the foreign tax credit</li>
              <li>
                Paid more than $300 in foreign taxes ($600 if married filing
                jointly)
              </li>
              <li>
                Have foreign taxes that don't qualify for the simplified
                election
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Types of Foreign Income
            </h2>
            <p className="mb-6">
              Form 1116 applies to various categories of foreign income:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>General category income (most common)</li>
              <li>Passive category income (dividends, interest, rents)</li>
              <li>Global intangible low-taxed income (GILTI)</li>
              <li>Foreign branch income</li>
              <li>Lump-sum distributions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Qualifying Foreign Taxes
            </h2>
            <p className="mb-6">
              Not all foreign taxes qualify for the credit. Qualifying taxes
              must be:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Imposed on you by a foreign country or U.S. possession</li>
              <li>Based on income (not property, sales, or other taxes)</li>
              <li>Actually paid or accrued during the tax year</li>
              <li>Legal and actual foreign tax liability</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Credit Limitations
            </h2>
            <p className="mb-6">
              The foreign tax credit is subject to limitations to prevent it
              from reducing U.S. tax on U.S. source income. The credit cannot
              exceed the portion of U.S. tax attributable to foreign source
              income.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Carryback and Carryforward
            </h2>
            <p className="mb-6">
              If your foreign tax credit exceeds the limitation, you can carry
              the excess credit back one year or forward up to 10 years to use
              in years when you have excess limitation.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with International Tax Issues?
              </h3>
              <p className="text-gray-600 mb-4">
                Foreign tax credits and international tax compliance can be
                complex. Our international tax specialists can help optimize
                your tax situation.
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

export default IrsForm1116;
