import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Heart,
  Shield,
  Scale,
  Calendar,
  User,
  ArrowLeft,
  AlertCircle,
  FileText,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innocent Spouse Tax Relief - Ideal Tax",
  description:
    "When spouses file a joint tax return, both parties are equally responsible for paying the balance owed in the case of an audit. Innocent spouse relief is a form of IRS tax relief that can be utilized when individuals decide",
};

const InnocentSpouseRelief = () => {
  const keyTakeaways = [
    "Innocent spouse tax debt relief allows the tax liability of a joint return to be placed on one spouse because of an understatement of tax due to erroneous items reported.",
    "To qualify, the requesting spouse must be partially or fully unaware of the understatement of taxes erroneously reported on their joint return.",
    "The IRS must determine that it would be unfair to place responsibility on the requesting spouse given the circumstances.",
    "An erroneous item includes unreported income, incorrect tax deductions or credits, or false property basis claims.",
    "There are three types of innocent spouse tax relief: innocent spouse relief, relief by separation of liability, and equitable relief.",
    "CNC is one of the available options for the IRS Fresh Start Program.",
  ];

  const filingStatuses = [
    {
      title: "Single Filing Status",
      description:
        "If you are unmarried or legally separated from your spouse on the last day of the year, you may not qualify for any other type of filing status.",
    },
    {
      title: "Married Filing Jointly",
      description:
        "If you and your spouse decide to file a joint return, you will report your combined income and deduct your combined allowable expenses.",
    },
    {
      title: "Married Filing Separately",
      description:
        "If you are married, you and your spouse can choose to file separate tax returns. This may be beneficial if you only want to be responsible for your individual tax liabilities.",
    },
    {
      title: "Head of Household",
      description:
        "If you are unmarried, pay at least half of the living expenses for a household, and a qualifying person lives with you in the home.",
    },
    {
      title: "Qualifying Widow(er) with Dependent Child",
      description:
        "For two years following the death of your spouse, you may qualify to file as a qualifying widow(er) with a dependent child.",
    },
  ];

  const reliefTypes = [
    {
      title: "Innocent Spouse Relief",
      description:
        "Complete relief from responsibility for paying tax, interest, and penalties when your spouse made errors you were unaware of.",
      icon: Shield,
    },
    {
      title: "Relief by Separation of Liability",
      description:
        "The IRS divides the tax debt between you and your spouse for separate payment, often used in cases of domestic abuse.",
      icon: Scale,
    },
    {
      title: "Equitable Relief",
      description:
        "Relief when you don't qualify for the other types, based on fairness and specific circumstances of your situation.",
      icon: Heart,
    },
  ];

  const applicationSteps = [
    "Qualify for one of the three forms of innocent spouse relief",
    "Apply for innocent spouse relief using Form 8857",
    "Comply with the IRS investigation process",
    "Appeal with the IRS if necessary using Form 12509",
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
              Innocent Spouse Tax Relief
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Tax Resolution Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Professional Service
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              When spouses file a joint tax return, both parties are equally
              responsible for paying the balance owed. Innocent spouse relief
              protects you from tax liability caused by your spouse's errors or
              fraud.
            </p>

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

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Is Innocent Spouse Tax Relief?
            </h2>
            <p className="mb-6">
              Innocent spouse relief is a form of IRS tax relief that can be
              utilized when individuals file a joint tax return but are later
              held liable for taxes owed due to erroneous items reported by
              their current or former spouse. Even if you divorce or are
              separated, the IRS will go after both spouses when attempting to
              collect unpaid taxes.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                You may qualify if:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Your spouse operated a separate business independently from
                  you
                </li>
                <li>
                  You did not personally benefit from the extra money that
                  resulted from the tax deficiency
                </li>
                <li>
                  You did not share bank accounts or have access to the money
                  generated from the activity
                </li>
              </ul>
            </div>

            {/* Filing Statuses */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Types of Filing Statuses
            </h2>
            <p className="mb-6">
              Your filing status can impact your tax liability for that tax
              year. There are five main filing statuses:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {filingStatuses.map((status, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {status.title}
                  </h3>
                  <p className="text-gray-600">{status.description}</p>
                </div>
              ))}
            </div>

            {/* When to Apply */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              When Should You Apply for Innocent Spouse Tax Relief?
            </h2>
            <p className="mb-6">
              In general, there are three main qualifications when requesting
              innocent spouse relief:
            </p>
            <ol className="list-decimal list-inside mb-8 space-y-3 text-gray-700">
              <li>
                When you filed a joint return with your spouse, there was an
                understatement of tax due to erroneous errors attributable only
                to your current or former spouse.
              </li>
              <li>
                When you filed the joint return, you did not know and had no
                reason to know about the understatement of tax.
              </li>
              <li>
                Given the specific circumstances, it would be unfair to hold you
                liable for your spouse's understatement of taxes.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What is Considered an "Erroneous Item"?
            </h2>
            <p className="mb-6">
              Erroneous items include unreported income, incorrect deductions or
              credits, or false property basis claims that are reported on a tax
              return. An innocent spouse may qualify for complete relief if they
              were fully unaware of the erroneous item, or partial relief if
              they were unaware of only a portion.
            </p>

            {/* Types of Relief */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              3 Types of Innocent Spouse Tax Relief
            </h2>
            <div className="grid md:grid-cols-1 gap-8 mb-12">
              {reliefTypes.map((type, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 flex items-start"
                >
                  <type.icon className="w-8 h-8 text-brand-teal mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {type.title}
                    </h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Application Process */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              How To Request Innocent Spouse Relief
            </h2>
            <p className="mb-6">
              If you think you may be eligible to request innocent spouse
              relief, there are four main steps:
            </p>
            <div className="space-y-4 mb-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-blue/10 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-brand-blue" />
                Important Forms
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Form 8857:</strong> Request for Innocent Spouse Relief
                </li>
                <li>
                  <strong>Form 12509:</strong> Statement of Disagreement (for
                  appeals)
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Professional Representation Matters
            </h2>
            <p className="mb-6">
              The IRS denies many innocent spouse relief requests, but with
              proper representation, you can significantly improve your chances
              of success. Our experienced tax professionals understand the
              complexities of these cases and know how to present your situation
              effectively to the IRS.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3 text-brand-teal" />
                Get Expert Help with Innocent Spouse Relief
              </h3>
              <p className="text-gray-600 mb-4">
                Don't face the IRS alone. Our tax resolution specialists can
                evaluate your case, determine your eligibility, and guide you
                through the entire innocent spouse relief process.
              </p>
              <Link
                href="/free-tax-consultation"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnocentSpouseRelief;
