import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const W9Form = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-brand-teal hover:text-brand-blue transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="mb-6">
              <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                Tax Forms
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              W9 Form Explained
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
              Independent contractors, freelancers, gig workers, and other
              self-employed individuals use the IRS W9 Form, known as a Request
              for Taxpayer Identification Number and Certification, to provide
              their tax information to businesses that pay them.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Purpose of Form W-9
            </h2>
            <p className="mb-6">
              Form W-9 serves as a way for businesses to collect essential tax
              information from contractors and service providers. This
              information is used to prepare Form 1099-NEC at year-end to report
              payments made to non-employees.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Who Needs to Complete Form W-9?
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Independent contractors and freelancers</li>
              <li>Consultants and professional service providers</li>
              <li>Gig economy workers (Uber, DoorDash, etc.)</li>
              <li>Landlords receiving rent payments</li>
              <li>Anyone receiving non-employee compensation</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Information Required on Form W-9
            </h2>
            <p className="mb-6">
              The form requires the following key information:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Legal name and business name (if different)</li>
              <li>Business entity classification</li>
              <li>Address (where tax documents should be mailed)</li>
              <li>Taxpayer Identification Number (SSN or EIN)</li>
              <li>Certification and signature</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Backup Withholding
            </h2>
            <p className="mb-6">
              If you don't provide a correct TIN or fail to complete Form W-9,
              the payor may be required to withhold 24% of payments for backup
              withholding. This can be avoided by providing accurate information
              promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                Providing incorrect or mismatched name and TIN information
              </li>
              <li>Forgetting to sign and date the form</li>
              <li>Using an outdated version of the form</li>
              <li>Providing incomplete address information</li>
              <li>Not updating information when business details change</li>
            </ul>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with Tax Forms?
              </h3>
              <p className="text-gray-600 mb-4">
                Proper completion of tax forms is essential for compliance. Our
                tax professionals can help ensure your forms are completed
                correctly.
              </p>
              <Link
                href="/survey"
                className="no-underline bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
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

export default W9Form;
