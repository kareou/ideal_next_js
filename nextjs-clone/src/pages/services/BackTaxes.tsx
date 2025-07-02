import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Calculator,
  Clock,
  DollarSign,
  Calendar,
  User,
  ArrowLeft,
  AlertCircle,
  FileText,
  CreditCard,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is amending tax returns? | Ideal Tax",
  description:
    "Amending tax returns is a form that you use to correct or amend your tax return. It shows the IRS the changes you made to your tax return.",
};

const BackTaxes = () => {
  const keyTakeaways = [
    "Back taxes refer to the taxes a taxpayer owes to the IRS for a previous tax year.",
    "Owing back taxes to the IRS can lead to serious tax consequences, such as penalties, interest accumulation, tax liens, tax levies, or wage garnishments.",
    "Taxpayers can pay back taxes to the IRS by filing the federal income tax returns associated with the unpaid taxes or by applying for tax debt relief through the IRS Fresh Start Program.",
  ];

  const consequences = [
    "Failure-To-Pay Penalty",
    "Failure-To-File Penalty",
    "Failure-To-Deposit Penalty",
    "Interest Accumulation",
    "Tax Lien",
    "Tax Levies",
    "Wage Garnishment",
  ];

  const reliefOptions = [
    {
      title: "IRS Installment Agreement Payment Plan",
      description:
        "Pay back taxes over time through monthly installments with short-term (under 120 days) or long-term payment plans.",
    },
    {
      title: "Offer in Compromise",
      description:
        "Settle tax debts for less than what was initially owed if you cannot afford to pay or it would create financial hardship.",
    },
    {
      title: "Currently Not Collectible Status",
      description:
        "Temporarily exempt from paying taxes if your financial situation qualifies, though debt doesn't disappear.",
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
              Back Taxes Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Tax Resolution Team
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="w-4 h-4 mr-2" />
                Updated September 2023
              </div>
            </div>
            <p className="text-lg text-gray-700">
              Back taxes are the taxes you owe to the Internal Revenue Service
              that were wholly or partially unpaid the year they were due.
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
              In our content about back taxes, we cover all the steps, and a
              clear description of everything you need to know about back taxes,
              tax collection, and the government-installed tax relief programs
              that can help people manage their tax debt.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Tax Debt and Back Taxes
            </h2>
            <p className="mb-6 text-gray-700">
              When an individual files a tax return, they can see how much they
              owe in taxes for the year or how much the government owes them in
              a tax refund if they have overpaid in taxes. Tax debt is
              accumulated when an individual fails to pay the tax balance
              presented on their federal income tax return by the filing due
              date.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-gray-700">
                If you fail to pay what you owe in taxes, the IRS can place
                penalties and seek other options for securing payment for the
                tax debt you owe, so it is best to understand and pay your tax
                liability to avoid accumulating tax debt and back taxes.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Are Back Taxes?
            </h2>
            <p className="mb-6 text-gray-700">
              Back taxes refer to the taxes an individual or company owes for a
              prior tax year. There are several reasons people can intentionally
              and unintentionally accumulate back taxes, such as failing to
              report an income stream or the total amount of income earned
              during that year, filing a tax return or W-2 tax form without
              paying their tax liability, and neglecting to file a tax return.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Consequences of Owing Back Taxes
            </h2>
            <p className="mb-4 text-gray-700">
              Filing a tax return every year to pay your tax liability is the
              most efficient method of avoiding back taxes and the penalties of
              accumulating debt, but if a taxpayer learns that there are back
              taxes owed to the IRS, here are some of the consequences:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {consequences.map((consequence, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-400"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {consequence}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How To Pay Back Taxes
            </h2>
            <p className="mb-6 text-gray-700">
              The financial burden of paying taxes can be challenging enough
              without the added build-up of back taxes and the penalties
              associated with tax debt. You can file a tax return from a
              previous year to pay your back taxes, but there are consequences
              for waiting too long.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Paying Back Taxes Without Tax Relief
            </h3>
            <div className="space-y-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Within 3 Years:
                </h4>
                <p className="text-gray-700">
                  You can pay off your back taxes and potentially receive any
                  tax refund you might have coming.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-gray-800 mb-2">3-6 Years:</h4>
                <p className="text-gray-700">
                  You can pay off your back taxes and be considered in good
                  standing with the IRS, but you will not be eligible for
                  incoming tax refunds.
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Over 6 Years:
                </h4>
                <p className="text-gray-700">
                  You can still pay off your back taxes, but you may not be
                  considered in "good standing" with the IRS anymore.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Paying Back Taxes With Tax Relief
            </h3>
            <p className="mb-6 text-gray-700">
              Although catching up on tax payments can be challenging, many
              government-installed tax relief programs assist people in paying
              taxes and managing their tax debt. Looking for tax relief? Make
              sure to check out the IRS Fresh Start program.
            </p>

            <div className="space-y-6 mb-12">
              {reliefOptions.map((option, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-teal/10 p-3 rounded-full">
                      {index === 0 && (
                        <CreditCard className="w-6 h-6 text-brand-teal" />
                      )}
                      {index === 1 && (
                        <DollarSign className="w-6 h-6 text-brand-teal" />
                      )}
                      {index === 2 && (
                        <Shield className="w-6 h-6 text-brand-teal" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {option.title}
                      </h4>
                      <p className="text-gray-700">{option.description}</p>
                      {index === 0 && (
                        <p className="text-sm text-gray-600 mt-2">
                          Note: Being approved for an installment agreement will
                          not remove penalties and interest, and you'll still be
                          responsible for paying all accrued interest until your
                          tax balance is zero.
                        </p>
                      )}
                      {index === 1 && (
                        <p className="text-sm text-gray-600 mt-2">
                          Note: You must be up to date on all tax return filings
                          and prove you cannot afford to pay or that paying
                          would create financial hardship.
                        </p>
                      )}
                      {index === 2 && (
                        <p className="text-sm text-gray-600 mt-2">
                          Note: This status doesn't make you immune to tax liens
                          or levies, nor does it make your tax debt disappear.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-gray-700">
                Being in debt is stressful and scary, especially when you owe
                back taxes that are accruing penalties and interest as the tax
                liability continues to go unpaid. While many IRS-installed tax
                relief programs can assist taxpayers in managing their unpaid
                taxes, if you are looking for direct help in resolving tax debt,
                consider consulting with us here at Ideal Tax to help you
                navigate the application process and get your tax issues under
                control.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Help With Back Taxes
            </h2>
            <p className="mb-6 text-gray-700">
              Ideal Tax is a tax relief business with the experience and
              knowledge to handle the most serious tax audits, including those
              involving back taxes. Our tax audit attorneys and enrolled agents
              will negotiate with the IRS on your behalf and ensure that your
              taxpayer rights are protected and that the IRS auditor is playing
              on a level field.
            </p>

            <p className="mb-8 text-gray-700">
              The tax code may differ depending on your state, city, or local
              area, and our tax professionals have all the resources and tools
              to make your filing successful and offer a free first
              consultation. Instead of using tax software, actual tax help from
              an agency can reduce the overall tax bill, like costs in the
              application fee, penalties, and interest.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with Back Taxes?
              </h3>
              <p className="text-gray-600 mb-4">
                Set up a free consultation with us today to see if you qualify
                for IRS debt forgiveness or to ask any questions about tax
                preparation. Don't let back taxes control your financial future.
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

export default BackTaxes;
