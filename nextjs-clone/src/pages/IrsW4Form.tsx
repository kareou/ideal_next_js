import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const IrsW4Form = () => {
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
                Payroll Tax
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              IRS W4 Form Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Payroll Specialists
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
              In the U.S., employees are required to pay taxes to the IRS on
              their earned income. However, rather than being required to pay
              these taxes in one lump sum at the end of the year, the IRS allows
              for tax withholding from each paycheck using Form W-4.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Purpose of Form W-4
            </h2>
            <p className="mb-6">
              Form W-4, Employee's Withholding Certificate, tells your employer
              how much federal income tax to withhold from your paycheck. The
              amount withheld is based on your filing status, number of
              dependents, and other factors that affect your tax liability.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              When to Complete Form W-4
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>When you start a new job</li>
              <li>When your personal or financial situation changes</li>
              <li>When you want to adjust your tax withholding</li>
              <li>After major life events (marriage, divorce, new child)</li>
              <li>When tax laws change significantly</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Form W-4 Sections
            </h2>
            <p className="mb-6">
              The current Form W-4 includes these key sections:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Step 1:</strong> Personal information (name, address,
                SSN, filing status)
              </li>
              <li>
                <strong>Step 2:</strong> Multiple jobs or spouse works
              </li>
              <li>
                <strong>Step 3:</strong> Claim dependents
              </li>
              <li>
                <strong>Step 4:</strong> Other adjustments (additional income,
                deductions, extra withholding)
              </li>
              <li>
                <strong>Step 5:</strong> Signature and date
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Common W-4 Mistakes
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Not updating the form after life changes</li>
              <li>Claiming too many or too few dependents</li>
              <li>Not accounting for multiple income sources</li>
              <li>Forgetting to sign and date the form</li>
              <li>Using outdated versions of the form</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Withholding Too Much vs. Too Little
            </h2>
            <p className="mb-6">
              Getting your withholding right helps avoid surprises at tax time.
              Withholding too much gives the government an interest-free loan,
              while withholding too little may result in penalties and a large
              tax bill.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with Payroll Tax Issues?
              </h3>
              <p className="text-gray-600 mb-4">
                Proper tax withholding is important for avoiding penalties and
                optimizing your tax situation. Our payroll tax specialists can
                help.
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

export default IrsW4Form;
