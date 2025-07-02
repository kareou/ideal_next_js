import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const IrsForm3949A = () => {
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
              IRS Form 3949-A Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                IdealTax Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                October 30, 2023
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
              IRS Form 3949-A, Information Referral, is a tax form used to
              inform the IRS about alleged tax fraud or non-compliance by
              individuals or businesses.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Is IRS Form 3949-A?
            </h2>
            <p className="mb-6">
              IRS Form 3949-A is an information referral form that allows
              taxpayers to report suspected tax law violations. This form serves
              as a whistleblower tool, enabling concerned citizens to report
              individuals or businesses they believe are not complying with
              federal tax laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              When Should You Use Form 3949-A?
            </h2>
            <p className="mb-6">
              You should consider filing Form 3949-A when you have knowledge of:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Unreported income or fraudulent tax returns</li>
              <li>False exemptions or deductions being claimed</li>
              <li>Kickbacks, bribes, or other illegal income</li>
              <li>Organized tax fraud schemes</li>
              <li>Failure to file required tax returns</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How to Complete Form 3949-A
            </h2>
            <p className="mb-6">
              When completing Form 3949-A, provide as much detailed information
              as possible, including:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Name and address of the person or business</li>
              <li>
                Social Security Number or Employer Identification Number if
                known
              </li>
              <li>Description of the alleged violation</li>
              <li>Best time and method to contact the subject</li>
              <li>Supporting documentation if available</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Confidentiality and Protection
            </h2>
            <p className="mb-6">
              The IRS treats information referrals confidentially. Your identity
              as the person making the referral is protected by law, and the IRS
              will not disclose your identity to the subject of the
              investigation.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with Tax Issues?
              </h3>
              <p className="text-gray-600 mb-4">
                If you're dealing with tax compliance issues or need assistance
                with IRS forms, our team of tax professionals is here to help.
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

export default IrsForm3949A;
