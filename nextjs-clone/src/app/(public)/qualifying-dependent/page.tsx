"use client";
import React from "react";
import Navigation from "../../../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const QualifyingDependent = () => {
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
                Tax Tips
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Is A Qualifying Dependent?
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Tax Experts
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
              A qualifying dependent is defined by the Internal Revenue Service
              as a child under the age of 19, a full-time student under 24, or a
              permanently disabled individual of any age who meets specific
              relationship and support requirements.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Understanding Qualifying Dependents
            </h2>
            <p className="mb-6">
              Claiming dependents on your tax return can significantly reduce
              your tax liability through various deductions and credits.
              However, the IRS has strict rules about who qualifies as a
              dependent for tax purposes.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Types of Qualifying Dependents
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Qualifying Child
            </h3>
            <p className="mb-4">
              A qualifying child must meet all of the following tests:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Relationship:</strong> Your child, stepchild, foster
                child, sibling, or descendant of any of these
              </li>
              <li>
                <strong>Age:</strong> Under 19 at the end of the tax year, or
                under 24 if a full-time student
              </li>
              <li>
                <strong>Residency:</strong> Lived with you for more than half
                the year
              </li>
              <li>
                <strong>Support:</strong> Did not provide more than half of
                their own support
              </li>
              <li>
                <strong>Joint Return:</strong> Did not file a joint return with
                their spouse
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Qualifying Relative
            </h3>
            <p className="mb-4">
              A qualifying relative must meet all of these requirements:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Relationship:</strong> Related to you or lived with you
                all year as a household member
              </li>
              <li>
                <strong>Gross Income:</strong> Had gross income less than the
                exemption amount for the tax year
              </li>
              <li>
                <strong>Support:</strong> You provided more than half of their
                total support
              </li>
              <li>
                <strong>Joint Return:</strong> Did not file a joint return with
                their spouse
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Tax Benefits for Dependents
            </h2>
            <p className="mb-6">
              Claiming qualifying dependents can provide several tax benefits:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Child Tax Credit (up to $2,000 per qualifying child)</li>
              <li>Additional Child Tax Credit (refundable portion)</li>
              <li>Child and Dependent Care Credit</li>
              <li>Earned Income Tax Credit (with qualifying children)</li>
              <li>Head of Household filing status (if eligible)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Not meeting the support test requirements</li>
              <li>Incorrectly calculating residency time</li>
              <li>Multiple taxpayers claiming the same dependent</li>
              <li>Not keeping proper documentation</li>
            </ul>
            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Maximize Your Tax Savings
              </h3>
              <p className="text-gray-600 mb-4">
                Understanding dependent rules can help you claim all eligible
                tax benefits. Our tax professionals can help ensure you're
                maximizing your deductions and credits.
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

export default QualifyingDependent;
