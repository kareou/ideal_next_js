import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const ResidentialEnergyCredit = () => {
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
                Tax Credits
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Residential Energy Credit Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Energy Tax Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                August 11, 2023
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
              It is unsurprising to most people that non-renewable energy
              sources can only support our residential, commercial, and
              industrial power needs for a limited time. The Residential Energy
              Credit helps homeowners offset the costs of installing renewable
              energy systems and energy-efficient improvements.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Types of Residential Energy Credits
            </h2>
            <p className="mb-6">
              There are two main categories of residential energy credits:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Residential Clean Energy Credit:</strong> For renewable
                energy systems (solar, wind, geothermal)
              </li>
              <li>
                <strong>Energy Efficient Home Improvement Credit:</strong> For
                qualifying energy-efficient improvements
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Residential Clean Energy Credit
            </h2>
            <p className="mb-6">
              This credit covers renewable energy systems installed in your
              primary or secondary residence:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Solar electric panels and solar water heating systems</li>
              <li>Wind turbines</li>
              <li>Geothermal heat pumps</li>
              <li>Fuel cells powered by renewable resources</li>
              <li>
                Battery storage systems (when installed with qualifying solar
                panels)
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Credit Percentages and Timeline
            </h2>
            <p className="mb-6">
              The Residential Clean Energy Credit rates are:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>30% for systems installed 2022-2032</li>
              <li>26% for systems installed in 2033</li>
              <li>22% for systems installed in 2034</li>
              <li>Credit expires after 2034 (unless extended by Congress)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Energy Efficient Home Improvement Credit
            </h2>
            <p className="mb-6">
              This credit covers various energy-efficient improvements with
              specific limits:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Heat pumps, central air conditioning, and water heaters</li>
              <li>Furnaces and hot water boilers</li>
              <li>Biomass stoves and boilers</li>
              <li>Insulation and air sealing materials</li>
              <li>Windows, doors, and skylights</li>
              <li>Home energy audits</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Credit Limitations
            </h2>
            <p className="mb-6">Important limitations to be aware of:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                Energy Efficient Home Improvement Credit capped at $1,200
                annually
              </li>
              <li>Specific limits for different types of improvements</li>
              <li>Credits are non-refundable but can be carried forward</li>
              <li>Must be your primary or secondary residence</li>
              <li>Original use requirement for most equipment</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Required Documentation
            </h2>
            <p className="mb-6">Keep detailed records including:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                Receipts and invoices for all equipment and installation costs
              </li>
              <li>Manufacturer certification statements</li>
              <li>Energy efficiency ratings and specifications</li>
              <li>Installation dates and contractor information</li>
            </ul>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with Energy Credits?
              </h3>
              <p className="text-gray-600 mb-4">
                Maximizing residential energy credits requires understanding
                complex qualification requirements. Our tax professionals can
                help ensure you claim all eligible credits.
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

export default ResidentialEnergyCredit;
