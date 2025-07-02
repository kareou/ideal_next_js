import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const Form1040 = () => {
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
              Form 1040 Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Filing Experts
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
              IRS Form 1040, U.S. Individual Income Tax Return, is the tax
              document individuals use to report their annual income and
              calculate their federal income tax liability or refund.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Is Form 1040?
            </h2>
            <p className="mb-6">
              Form 1040 is the standard federal income tax return form used by
              U.S. taxpayers to file their annual tax returns. It's used to
              report income from all sources, claim deductions and credits, and
              calculate the final tax owed or refund due.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Key Sections of Form 1040
            </h2>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Filing Information
            </h3>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Personal information and filing status</li>
              <li>Dependents and qualifying children</li>
              <li>Presidential Election Campaign Fund designation</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Income Section
            </h3>
            <p className="mb-4">Report all sources of income including:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Wages, salaries, and tips</li>
              <li>Interest and dividend income</li>
              <li>Business income or loss</li>
              <li>Capital gains and losses</li>
              <li>Retirement income</li>
              <li>Other income sources</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Deductions
            </h3>
            <p className="mb-6">
              Choose between taking the standard deduction or itemizing
              deductions such as mortgage interest, state and local taxes,
              charitable contributions, and medical expenses.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Tax Credits
            </h3>
            <p className="mb-6">
              Claim eligible tax credits that directly reduce your tax
              liability, including the Child Tax Credit, Earned Income Tax
              Credit, and education credits.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Filing Requirements
            </h2>
            <p className="mb-6">
              Most U.S. citizens and residents must file Form 1040 if their
              income exceeds certain thresholds, which vary based on filing
              status, age, and type of income.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Supporting Schedules
            </h2>
            <p className="mb-6">
              You may need to attach additional schedules to Form 1040 for
              specific situations, such as Schedule A for itemized deductions,
              Schedule C for business income, or Schedule D for capital gains
              and losses.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help Filing Form 1040?
              </h3>
              <p className="text-gray-600 mb-4">
                Our tax professionals can help ensure your Form 1040 is
                completed accurately and you claim all eligible deductions and
                credits.
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

export default Form1040;
