import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const IrsForm4361 = () => {
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
              IRS Form 4361 Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Form Specialists
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
              IRS Form 4361, Application for Exemption From Self-Employment Tax
              for Use by Ministers, Members of Religious Orders, and Christian
              Science Practitioners, allows eligible religious workers to
              request exemption from self-employment taxes.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Who Can Use Form 4361?
            </h2>
            <p className="mb-6">Form 4361 is specifically designed for:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Ordained, commissioned, or licensed ministers</li>
              <li>
                Members of religious orders who have taken a vow of poverty
              </li>
              <li>Christian Science practitioners</li>
              <li>Religious workers performing ministerial duties</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Eligibility Requirements
            </h2>
            <p className="mb-6">
              To qualify for self-employment tax exemption, applicants must meet
              strict requirements:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                Conscientiously opposed to public insurance for religious
                reasons
              </li>
              <li>Never received Social Security or Medicare benefits</li>
              <li>Waive all rights to Social Security and Medicare benefits</li>
              <li>
                File Form 4361 by the due date of the tax return for the second
                year of ministerial earnings
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Important Considerations
            </h2>
            <p className="mb-6">
              Before filing Form 4361, consider these significant implications:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>The exemption is irrevocable once approved</li>
              <li>
                You permanently waive rights to Social Security and Medicare
                benefits
              </li>
              <li>
                The exemption applies only to ministerial income, not other
                earnings
              </li>
              <li>
                Spouses and dependents are not affected by your exemption status
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Filing Requirements
            </h2>
            <p className="mb-6">Form 4361 must be filed timely and include:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Detailed explanation of religious objections</li>
              <li>Documentation of ministerial status</li>
              <li>Statement of understanding regarding benefit waiver</li>
              <li>Supporting documentation from religious organization</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Alternative: Form 2031
            </h2>
            <p className="mb-6">
              Ministers who don't qualify for or don't want the complete
              exemption under Form 4361 may consider Form 2031, which allows
              exemption from self-employment tax only for services performed in
              the exercise of ministry.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with Form 4361?
              </h3>
              <p className="text-gray-600 mb-4">
                Form 4361 involves permanent decisions about your Social
                Security benefits. Our tax professionals can help you understand
                the implications and ensure proper filing.
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

export default IrsForm4361;
