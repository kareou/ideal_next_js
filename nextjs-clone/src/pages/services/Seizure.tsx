import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  AlertTriangle,
  Shield,
  Home,
  Calendar,
  User,
  ArrowLeft,
  AlertCircle,
  FileText,
  Scale,
  Gavel,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IRS Property Seizure Explained | Ideal Tax",
  description:
    "To seize your property, the IRS only needs to give taxpayers ten days after issuing a notice and demand for payment of taxes owed. After just ten days, the IRS can collect all taxes owed by seizing your property and auctioning it off.",
};

const Seizure = () => {
  const keyTakeaways = [
    "The IRS can seize property to pay tax debts with just 10 days notice after issuing a demand for payment",
    "Asset seizure and asset forfeiture are different processes with distinct legal meanings",
    "Certain types of property are exempt from IRS seizure, including basic necessities and tools of trade",
    "Three types of forfeiture exist: administrative, criminal, and civil forfeiture",
  ];

  const exemptProperties = [
    "Clothing and personal items under $6,250",
    "School books and furniture under $6,250",
    "Trade books and tools under $3,125",
    "Unemployment and disability benefits",
    "Child support payments",
    "Specific pension payments",
  ];

  const forfeitureTypes = [
    {
      title: "Administrative Forfeiture",
      description:
        "In rem action allowing seizure without filing a federal lawsuit, for property valued at $500,000 or less with no claim filed.",
    },
    {
      title: "Criminal Forfeiture",
      description:
        "In personam action requiring criminal conviction, restricted to defendant's property interests including gains from illegal activity.",
    },
    {
      title: "Civil Forfeiture",
      description:
        "Targets property rather than the person, no criminal conviction required, allows government to pursue claims against inaccessible assets.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-brand-teal hover:text-brand-blue transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <div className="mb-6">
              <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                Tax Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Civil Asset Forfeiture Laws: A Comprehensive Guide to Asset
              Seizure and Asset Forfeiture
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Legal Defense Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Emergency Service Available
              </div>
            </div>
            <p className="text-lg text-gray-700">
              Did you know that if you leave your tax debts unpaid without
              reaching an agreement with the IRS, law enforcement can legally
              seize your property to pay debts owed?
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Key Takeaways */}
            <div className="bg-gradient-to-r from-mint-50 to-deep-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3 text-brand-teal" />
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                {keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              To seize your property, the IRS only needs to give taxpayers ten
              days after issuing a notice and demand for payment of taxes owed.
              After just ten days, the IRS can collect all taxes owed by seizing
              your property and auctioning it off.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <p className="text-gray-700">
                When carrying out an asset seizure, the IRS will frequently
                seize real estate property, automobiles, private aircraft, and
                even business assets if they get judged as "ill-gotten gains,"
                or assets obtained by engaging in unlawful activity.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Asset Seizure vs. Asset Forfeiture: What is the Difference?
            </h2>
            <p className="mb-6 text-gray-700">
              Some people, even experts, use the terms asset seizure and asset
              forfeiture interchangeably even though they have separate meanings
              and refer to distinctive processes and concepts.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              What is an Asset?
            </h3>
            <p className="mb-4 text-gray-700">
              An asset can be a piece of property, an item, or any other object
              with value, whether that value comes from the thing itself or the
              value it brings to the owner. Examples include:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Tangible Assets:
                </h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Cash and real estate</li>
                  <li>• Automobiles and motor homes</li>
                  <li>• Structures and acreage</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Intangible Assets:
                </h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Tax refunds</li>
                  <li>• Professional qualifications</li>
                  <li>• Income-generating artwork</li>
                  <li>• Liquor licenses</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-brand-blue mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Asset Seizure
                  </h3>
                </div>
                <p className="text-gray-700">
                  The act of physically seizing an item or transferring it from
                  its owner into government control through law enforcement.
                  This typically occurs during arrests, with search warrants, or
                  in response to forfeiture warrants.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Gavel className="w-6 h-6 text-brand-teal mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Asset Forfeiture
                  </h3>
                </div>
                <p className="text-gray-700">
                  A legal procedure where ownership of an asset is taken away
                  due to improper use, illegal acquisition, or use in committing
                  crimes. The government receives title through civil, criminal,
                  or administrative procedures.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              IRS Asset Seizure Process
            </h2>
            <p className="mb-6 text-gray-700">
              The IRS must follow a distinct three-step process and obtain
              approval from a United States District Court judge prior to
              seizing taxpayer assets:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4 bg-yellow-50 p-4 rounded-lg">
                <div className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Notice of Demand for Payment
                  </h4>
                  <p className="text-gray-700">
                    The IRS sends a formal notice demanding payment to the
                    taxpayer.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-orange-50 p-4 rounded-lg">
                <div className="bg-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Payment Failure
                  </h4>
                  <p className="text-gray-700">
                    The notice is ignored, neglected, or payment fails to be
                    made by the taxpayer.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-red-50 p-4 rounded-lg">
                <div className="bg-red-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Final Notice</h4>
                  <p className="text-gray-700">
                    A Final Notice of Intent to Levy and Notice of Right to a
                    Hearing is delivered, giving the taxpayer 30 days to arrange
                    payment or appeal.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Property Exempt from IRS Seizure
            </h2>
            <p className="mb-4 text-gray-700">
              The IRS exempts specific types of property from seizure to protect
              taxpayers' basic needs:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {exemptProperties.map((property, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg border-l-4 border-green-400"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{property}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Types of Asset Forfeiture
            </h2>
            <p className="mb-6 text-gray-700">
              Three types of forfeiture can occur under federal law, each with
              distinct procedures and requirements:
            </p>

            <div className="space-y-6 mb-12">
              {forfeitureTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-teal/10 p-3 rounded-full">
                      <Scale className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {type.title}
                      </h4>
                      <p className="text-gray-700">{type.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              IRS Asset Seizure Errors
            </h2>
            <p className="mb-6 text-gray-700">
              Despite lengthy required processes, the IRS sometimes makes errors
              that can wrongfully impact taxpayers. The Treasury Inspector
              General for Tax Administration has found instances where the IRS
              did not comply with Internal Revenue Code sections, resulting in
              violations of taxpayers' rights.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-gray-700">
                To help combat these mistakes, the IRS uses pre-seizure planning
                techniques to avoid potentially expensive management or
                safekeeping concerns and ensure proper compliance with seizure
                procedures.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Civil Forfeiture: A Constantly Contested Method
            </h2>
            <p className="mb-6 text-gray-700">
              At both federal and state levels, civil forfeiture faces
              significant scrutiny, resulting in constantly changing processes
              and laws. The modern practices began with the Comprehensive Crime
              Control Act of 1984, establishing the Equitable Sharing Program
              and Assets Forfeiture Fund.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Recent Federal Changes
            </h3>
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  2000: Civil Asset Forfeiture Reform Act
                </h4>
                <p className="text-gray-700">
                  Included procedural tools, time constraints, and broadened
                  forfeiture definitions.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  2015: Federal Adoption Ban
                </h4>
                <p className="text-gray-700">
                  Made it illegal for federal agencies to "adopt" assets seized
                  by state and local agencies.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  2017: Policy Reversal
                </h4>
                <p className="text-gray-700">
                  Allowed federal government to take possession of assets
                  associated with federal crimes and revived the Equitable
                  Sharing Program.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <p className="text-gray-700">
                <strong>Important:</strong> Forfeiture of assets to the IRS
                should only occur as a last resort to satisfy tax debt. The IRS
                aims to find alternative resolutions, including leveraging asset
                equity or agreed-upon repayment plans, and to avoid causing
                significant financial hardship.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Conclusion
            </h2>
            <p className="mb-8 text-gray-700">
              The rules governing seizure and forfeiture give the IRS authority
              to seize property to satisfy tax debt. However, safeguards exist
              to protect taxpayers' rights. Changes to property forfeiture laws
              regularly occur to better address concerns about IRS asset seizure
              procedures.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with Asset Seizures?
              </h3>
              <p className="text-gray-600 mb-4">
                Don't face IRS asset seizure alone. Our experienced legal team
                can help protect your assets and negotiate alternatives to
                seizure.
              </p>
              <Link
                href="/free-tax-consultation"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Get Free Tax Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seizure;
