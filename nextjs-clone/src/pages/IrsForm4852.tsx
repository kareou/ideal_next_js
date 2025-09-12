import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const IrsForm4852 = () => {
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
              IRS Form 4852 Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Form Specialists
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                October 18, 2023
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
              IRS Form 4852 is a tax form that can be filed by employees when
              they do not receive or lose their Form W-2 and cannot obtain a
              replacement from their employer in time to file their tax return.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Is Form 4852?
            </h2>
            <p className="mb-6">
              Form 4852, Substitute for Form W-2, Wage and Tax Statement, or
              Form 1099-R, Distributions From Pensions, Annuities, Retirement or
              Profit-Sharing Plans, IRAs, Insurance Contracts, etc., serves as a
              substitute when you cannot obtain the original tax documents from
              your employer or payer.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              When to Use Form 4852
            </h2>
            <p className="mb-6">
              You should use Form 4852 only as a last resort when:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>You haven't received your W-2 or 1099-R by January 31</li>
              <li>
                You've contacted your employer but they haven't provided the
                form
              </li>
              <li>
                The W-2 or 1099-R you received contains incorrect information
              </li>
              <li>
                You need to file your tax return but don't have the required
                forms
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Before Filing Form 4852
            </h2>
            <p className="mb-6">Before using Form 4852, you must:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                Contact your employer to request the missing or corrected form
              </li>
              <li>
                Contact the IRS at 800-829-1040 if you haven't received your W-2
                by February 15
              </li>
              <li>
                Gather all available documentation of your wages and
                withholdings
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Information Required
            </h2>
            <p className="mb-6">
              To complete Form 4852, you'll need to provide:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Your employer's name, address, and EIN</li>
              <li>Your total wages for the year</li>
              <li>Federal income tax withheld</li>
              <li>Social Security and Medicare wages and taxes</li>
              <li>State wages and withholding (if applicable)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Potential Consequences
            </h2>
            <p className="mb-6">
              Using Form 4852 may result in processing delays or additional
              scrutiny from the IRS. If you later receive the actual W-2 or
              1099-R and it differs from your Form 4852, you may need to file an
              amended return.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Missing Tax Documents?
              </h3>
              <p className="text-gray-600 mb-4">
                Our tax professionals can help you handle missing tax documents
                and ensure your return is filed correctly and on time.
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

export default IrsForm4852;
