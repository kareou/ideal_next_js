import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const IrsAcceptedReturnNotApproved = () => {
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
              IRS Accepted Return But Not Approved Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Filing Experts
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                October 19, 2023
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
              The tax return filing status, "IRS Accepted Return But Not
              Approved," means that the IRS received your tax return and it
              passed initial processing checks, but your refund has not yet been
              approved for payment.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Does "Accepted" Mean?
            </h2>
            <p className="mb-6">
              When the IRS accepts your tax return, it means your return has
              passed the initial automated screening process. The IRS has
              verified that all required fields are completed, calculations
              appear correct, and there are no obvious errors that would prevent
              processing.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Isn't It Approved Yet?
            </h2>
            <p className="mb-6">
              Several factors can cause a delay between acceptance and approval:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                Additional review required for certain tax credits or deductions
              </li>
              <li>Identity verification processes</li>
              <li>Matching third-party documents (W-2s, 1099s)</li>
              <li>Previous year tax issues that need resolution</li>
              <li>High volume during peak filing season</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Should You Do?
            </h2>
            <p className="mb-6">
              In most cases, you simply need to wait. The IRS typically
              processes refunds within 21 days of acceptance. However, you
              should:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                Monitor your refund status using the IRS "Where's My Refund?"
                tool
              </li>
              <li>
                Ensure your bank account information is correct if using direct
                deposit
              </li>
              <li>Keep copies of all tax documents</li>
              <li>Respond promptly to any IRS correspondence</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              When to Be Concerned
            </h2>
            <p className="mb-6">
              Contact the IRS if your refund is significantly delayed beyond the
              normal processing time, especially if you receive notices
              requesting additional information or documentation.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with Your Tax Return?
              </h3>
              <p className="text-gray-600 mb-4">
                If you're experiencing delays or issues with your tax return,
                our tax professionals can help resolve the situation quickly.
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

export default IrsAcceptedReturnNotApproved;
