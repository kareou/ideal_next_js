import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const Irs1099Form = () => {
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
              IRS 1099 Form Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Form Specialists
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
              A 1099 form, also referred to as an information return, is a tax
              form used to report various types of income other than wages,
              salaries, and tips that are reported on Form W-2.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Types of 1099 Forms
            </h2>
            <p className="mb-6">
              There are several types of 1099 forms, each reporting different
              types of income:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>1099-NEC:</strong> Non-employee compensation
                (contractors, freelancers)
              </li>
              <li>
                <strong>1099-INT:</strong> Interest income from banks and
                financial institutions
              </li>
              <li>
                <strong>1099-DIV:</strong> Dividends and distributions from
                investments
              </li>
              <li>
                <strong>1099-MISC:</strong> Miscellaneous income (rent,
                royalties, prizes)
              </li>
              <li>
                <strong>1099-R:</strong> Distributions from retirement accounts
              </li>
              <li>
                <strong>1099-G:</strong> Government payments (unemployment, tax
                refunds)
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Who Receives 1099 Forms?
            </h2>
            <p className="mb-6">
              You should receive a 1099 form if you received:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>$600 or more in non-employee compensation</li>
              <li>$10 or more in interest or dividend payments</li>
              <li>
                $600 or more in rent, prizes, or other miscellaneous income
              </li>
              <li>Any amount from retirement account distributions</li>
              <li>$600 or more in government payments</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Filing Requirements
            </h2>
            <p className="mb-6">
              Businesses and organizations that make payments must:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Send 1099 forms to recipients by January 31</li>
              <li>
                File copies with the IRS by January 31 (or February 28 if filing
                on paper)
              </li>
              <li>Ensure accurate recipient information using Form W-9</li>
              <li>Include all required payment information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Recipients Should Do
            </h2>
            <p className="mb-6">When you receive a 1099 form:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Verify all information is correct</li>
              <li>Report the income on your tax return</li>
              <li>Keep copies for your records</li>
              <li>Contact the issuer if there are errors</li>
              <li>Remember that copies are also sent to the IRS</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Missing 1099 Forms
            </h2>
            <p className="mb-6">
              Even if you don't receive a 1099 form, you're still required to
              report all income on your tax return. Contact the payor if you
              believe you should have received a form but didn't.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with 1099 Issues?
              </h3>
              <p className="text-gray-600 mb-4">
                Whether you need to issue 1099 forms or have questions about
                reporting 1099 income, our tax professionals can help ensure
                compliance.
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

export default Irs1099Form;
