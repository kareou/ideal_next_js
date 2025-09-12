import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const W2Form = () => {
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
              W-2 Form Explained
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
              Employers must fill out a copy of the IRS W-2 Form, Wage and Tax
              Statement, for every employee who earned $600 or more during the
              tax year, reporting wages paid and taxes withheld.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Purpose of Form W-2
            </h2>
            <p className="mb-6">
              Form W-2 serves multiple purposes: it reports an employee's annual
              wages and the amount of taxes withheld from their paychecks to the
              IRS, Social Security Administration, and state/local tax
              authorities. Employees use this form to complete their individual
              tax returns.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Key Information on Form W-2
            </h2>
            <p className="mb-6">
              The W-2 form contains several important boxes with specific
              information:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Box 1:</strong> Federal wages, tips, and other
                compensation
              </li>
              <li>
                <strong>Box 2:</strong> Federal income tax withheld
              </li>
              <li>
                <strong>Box 3:</strong> Social Security wages
              </li>
              <li>
                <strong>Box 4:</strong> Social Security tax withheld
              </li>
              <li>
                <strong>Box 5:</strong> Medicare wages and tips
              </li>
              <li>
                <strong>Box 6:</strong> Medicare tax withheld
              </li>
              <li>
                <strong>Boxes 12-14:</strong> Various codes for benefits,
                deductions, and other items
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Employer Deadlines
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>W-2s must be provided to employees by January 31</li>
              <li>
                Copy A must be filed with the Social Security Administration by
                January 31
              </li>
              <li>
                State copies must be filed according to state-specific deadlines
              </li>
              <li>Corrections can be made using Form W-2c</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Employees Should Do
            </h2>
            <p className="mb-6">When you receive your W-2:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Review all information for accuracy</li>
              <li>Compare it to your final paystub</li>
              <li>Contact your employer immediately if there are errors</li>
              <li>Keep copies for your records</li>
              <li>Use the information to complete your tax return</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Missing or Incorrect W-2
            </h2>
            <p className="mb-6">
              If you don't receive your W-2 by early February or if it contains
              errors, contact your employer first. If they don't respond, you
              can contact the IRS for assistance or use Form 4852 as a
              substitute.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with W-2 Issues?
              </h3>
              <p className="text-gray-600 mb-4">
                Whether you're an employer needing help with W-2 preparation or
                an employee with W-2 problems, our payroll specialists can
                assist.
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

export default W2Form;
