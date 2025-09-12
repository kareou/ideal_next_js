import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const IrsForm2848 = () => {
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
              IRS Form 2848 Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Legal Team
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
              IRS Form 2848, Power of Attorney and Declaration of
              Representative, is a tax form used to authorize another person to
              represent you before the IRS and handle your tax matters on your
              behalf.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Purpose of Form 2848
            </h2>
            <p className="mb-6">
              Form 2848 grants legal authority to a qualified representative to
              act on your behalf in tax matters. This includes communicating
              with the IRS, accessing your tax information, and making decisions
              regarding your tax account.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Who Can Be Your Representative?
            </h2>
            <p className="mb-6">
              Only certain qualified individuals can represent you before the
              IRS:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Attorneys licensed to practice law</li>
              <li>Certified Public Accountants (CPAs)</li>
              <li>Enrolled Agents (EAs)</li>
              <li>
                Enrolled Retirement Plan Agents (for specific retirement plan
                matters)
              </li>
              <li>Enrolled Actuaries (for specific actuarial matters)</li>
              <li>
                Annual Filing Season Program participants (limited
                representation)
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Powers Can You Grant?
            </h2>
            <p className="mb-6">
              Form 2848 allows you to specify what actions your representative
              can take:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Receive and inspect confidential tax information</li>
              <li>Sign agreements, consents, and similar documents</li>
              <li>
                Perform acts related to tax matters (excluding signing returns)
              </li>
              <li>Represent you in audits and appeals</li>
              <li>Receive copies of notices and communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Key Components of Form 2848
            </h2>
            <p className="mb-6">The form requires specific information:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Part I:</strong> Taxpayer information and representative
                details
              </li>
              <li>
                <strong>Part II:</strong> Matters and tax periods covered
              </li>
              <li>
                <strong>Part III:</strong> Additional acts authorized
              </li>
              <li>
                <strong>Part IV:</strong> Retention/revocation of prior powers
                of attorney
              </li>
              <li>
                <strong>Signatures:</strong> Both taxpayer and representative
                must sign
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Duration and Revocation
            </h2>
            <p className="mb-6">Form 2848 remains in effect until:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>The taxpayer revokes it in writing</li>
              <li>The representative withdraws</li>
              <li>A new Form 2848 is filed for the same matters</li>
              <li>The IRS determines it's no longer valid</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Alternative: Form 8821
            </h2>
            <p className="mb-6">
              If you only need someone to receive information (not represent
              you), consider Form 8821, Tax Information Authorization, which is
              simpler but provides more limited authority.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Professional Representation?
              </h3>
              <p className="text-gray-600 mb-4">
                Having qualified representation can be crucial for complex tax
                matters. Our enrolled agents and CPAs can provide expert
                representation before the IRS.
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

export default IrsForm2848;
