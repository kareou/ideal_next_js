import React from "react";
import {
  Calendar,
  User,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";  

export const metadata: Metadata = {
  title: "Tax Audits - Ideal Tax",
  description:
    "An IRS tax audit is when the IRS conducts a close analysis of your tax return to verify the accuracy of the details you have provided regarding income and deductions.",
};

const TaxAudits = () => {
  const services = [
    "Complete audit representation",
    "Document preparation and organization",
    "IRS communication on your behalf",
    "Audit defense strategies",
    "Negotiation of audit findings",
    "Appeals process representation",
  ];

  const keyTakeaways = [
    "An IRS tax audit is when the IRS conducts a close analysis of your tax return to verify the accuracy of the details you have provided regarding income and deductions.",
    'The IRS randomly selects individuals for tax audits to develop "norms" for similar tax returns.',
    "The IRS may issue an audit letter when an individual's tax return involves issues or transactions with other taxpayers who are being audited.",
    "You may also receive an audit notice if you report irregular income, have substantial income, possess foreign assets, or are involved with a cash-intensive business.",
    "The IRS will never contact you by telephone, but will always contact you by mail.",
  ];

  const auditTypes = [
    {
      title: "Correspondence Audit or Mail Audit",
      description:
        "The simplest type of audit that can usually be resolved by sending documentation by mail without meeting an IRS auditor in person.",
    },
    {
      title: "Office Audit",
      description:
        "An in-person audit at a local IRS office where the IRS officer takes a more in-depth look at your tax return information.",
    },
    {
      title: "Field Audit",
      description:
        "The most thorough type of audit that takes place at your home or business location and covers most or all items on your tax return.",
    },
    {
      title: "Taxpayer Compliance Measurement Program Audit",
      description:
        "Conducted using randomly-selected tax returns to evaluate compliance with tax laws and estimate revenue lost due to non-compliance.",
    },
  ];

  const preparationSteps = [
    "Understand the scope of your audit",
    "Prepare your response to the IRS letter",
    "Respond to the IRS request accordingly",
    "Appeal your audit, if you disagree",
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
              Tax Audit Defense
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What is an IRS tax audit?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              You may have heard of the term "audit" across other areas of your
              life. But when it comes to taxes, a tax audit is when
              the Internal Revenue Service takes a closer look at your tax
              return and analyzes the accuracy of the details you provided. Usually, the IRS decides to audit an individual when
              there are details in your tax return that are out of the ordinary.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              If you ever find yourself subject to an IRS tax audit, educating
              yourself on the reasons for receiving IRS audits and the different
              types of tax audits can help you prepare for any complications you
              may face. Additionally, consulting with a professional IRS audit
              attorney at Ideal Tax can help individual taxpayers resolve tax
              issues when they owe money to the IRS. Taxpayers may qualify for
              one of several IRS forgiveness programs.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mb-8">
              <Link
                href="/survey"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Free Audit Consultation
              </Link>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Key Takeaways:
            </h3>
            <ul className="list-disc list-inside mb-8 space-y-3 text-gray-600">
              {keyTakeaways.map((takeaway, index) => (
                <li key={index} className="leading-relaxed">
                  {takeaway}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Who gets selected for an IRS audit?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              There is more than one reason that an individual may be selected
              for an IRS tax audit, and just because you receive an audit letter
              does not mean that there are complicated tax issues that must be
              resolved. However, there are instances in which you may be at
              fault. While a large number of taxpayers who are selected for an
              audit are chosen randomly, there are some factors that can
              increase the likelihood of being audited.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              How Far Back Can The IRS Audit?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The IRS generally has three years to audit a return, although
              there are some exceptions. For example, if the IRS believes that a
              taxpayer has intentionally underreported their income, they have
              up to six years to audit the return. Additionally, if a taxpayer
              fails to file a return, the IRS has an indefinite period of time
              to audit the return.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Types of IRS Audits
            </h3>
            <div className="space-y-6 mb-8">
              {auditTypes.map((type, index) => (
                <div key={index} className="border-l-4 border-brand-teal pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {type.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              How to prepare for an IRS audit.
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You can prepare for an IRS audit by being diligent about keeping
              detailed bookkeeping records and organizing your financial and tax
              documentation. When you keep detailed documentation of your
              financial records throughout the tax year, you will be more likely
              to accurately fill out your tax return and determine the amount of
              taxes owed to the IRS.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              What To Do When You Are Audited By The Internal Revenue Service
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              In the case that you are audited by the IRS, you don't need to
              panic about what to do. There are just a few steps that you need
              to follow to take care of your IRS audits once and for all.
            </p>

            <div className="space-y-4 mb-8">
              {preparationSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-brand-teal text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {step}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {index === 0 &&
                        "Read the entire audit letter to understand what the IRS is requesting from you, including deadlines and required documentation."}
                      {index === 1 &&
                        "Gather all requested documentation and prepare for possible questioning about items on your tax return."}
                      {index === 2 &&
                        "Respond to the IRS by their requested date with the required information to advocate your tax return positions."}
                      {index === 3 &&
                        "If you disagree with the IRS findings, you can request an appeal within the 30-day deadline listed on your audit letter."}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Do I need to hire a tax attorney for an IRS audit?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Navigating the nuances of the United States tax law can be
              confusing for the average taxpayer, but if you are facing an
              auditing situation from the Internal Revenue Service, hiring a
              licensed tax attorney can give you the confidence you need to
              resolve your IRS audits without the stress. The Taxpayer Bill of
              Rights describes an individual's right to hire representation when
              receiving an audit.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Audit Defense Services
            </h3>
            <ul className="list-disc list-inside mb-8 space-y-2 text-gray-600">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Audit Defense?
              </h3>
              <p className="text-gray-600 mb-4">
                Don't face an audit alone. Get expert help from our experienced
                audit defense team.
              </p>
              <Link
                href="/survey"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Free Audit Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxAudits;
