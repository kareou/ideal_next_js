import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  CheckCircle,
  PauseCircle,
  FileText,
  Shield,
  Calendar,
  User,
  ArrowLeft,
  AlertTriangle,
  Clock,
  DollarSign,
  Phone,
  XCircle,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Currently Not Collectible status? | Ideal Tax",
  description:
"Currently Not Collectible is the IRS’s decision to conclude that a taxpayer cannot afford their federal income taxes without significant hardship. This status protects taxpayers against the aggressive collection actions by the Internal Revenue Service.",
};

const CurrentlyNonCollectible = () => {
  const keyTakeaways = [
    "The IRS Not-Collectible status temporarily halts the collection of back taxes when a taxpayer cannot afford to pay their federal income taxes without facing significant financial hardship.",
    "Individuals who owe taxes but cannot afford their monthly payments are eligible to apply for CNC status.",
    "You can apply for CNC tax program status by consulting a tax attorney or by directly contacting the IRS using Form 433F, Collection Information Statement.",
    "Delaying the collection of taxes and preventing bank levies can help people afford their monthly expenses.",
    "Accounts with CNC status are still subject to federal tax liens and penalties and interest will continue to accrue on the tax debt owed.",
    "CNC status is temporary and can be removed at any time, without warning.",
    "CNC is one of the available options for the IRS Fresh Start Program.",
  ];

  const requiredDocuments = [
    "Copies of the latest paycheck stubs for each job for the last month",
    "Copies of your most recent statements of monthly income received",
    "Copies of the most current real estate tax bill, for any property owned",
    "Copies of utility bills (electric, water, sewer, and gas)",
    "Copies of the lease or mortgage statement showing monthly rental or mortgage payment",
    "Copies of all credit card statements, including the most recent one",
    "Copies of each car's most recent personal property bill",
    "Documentation of assets, such as stocks and bonds",
    "Documentation of monthly expenses related to food and necessities, daycare and medical expenses",
    "Court-ordered payments like child support or spousal support",
  ];

  const eligibilityReasons = [
    "Death of the taxpayer without any collection potential from the estate",
    "The taxpayer cannot meet his or her ordinary and essential living expenses (hardship)",
    "Expiration partial or total of the statute for limitation for the collection of tax",
    "Unable to contact a taxpayer, even though the address is known",
    "The business cannot pay back taxes, but it can keep current",
    "An exempt organization, corporation, or limited liability company (LLC) is identified as the liable taxpayer that is liquidated in bankruptcy",
  ];

  const additionalFactors = [
    "The taxpayer's employment and age",
    "The number, health, and age of dependents for the taxpayer",
    "Cost of living in the tax-paying area",
    "Extraordinary circumstances, such as medical hardship, special education costs, or natural catastrophes",
    "If the taxpayer is forced to move, how much economic loss would that cause",
  ];

  const prosAndCons = {
    pros: [
      "Delaying the collection of tax debt helps people afford their basic living expenses",
      "You will not be subject to levies while having CNC status",
      "Protection from aggressive IRS collection actions",
      "Temporary relief from financial stress",
    ],
    cons: [
      "A federal tax lien will still apply to your home",
      "CNC status is only temporary and can be removed without warning",
      "Your debt will increase as penalties and interest continues to accrue",
      "IRS will continue to monitor your financial situation",
    ],
  };

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
                Tax Relief Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              IRS Currently Non-Collectible Status
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

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Currently Not Collectible is the IRS's decision to conclude that a
              taxpayer cannot afford their federal income taxes without
              significant hardship. This status protects taxpayers against
              aggressive collection actions by the Internal Revenue Service.
            </p>

            {/* Key Takeaways */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Key Takeaways:
              </h3>
              <ul className="space-y-3">
                {keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-blue-700">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What is IRS Not-Collectible Status?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Simply put, if the IRS receives proof that the taxpayer is unable
              to pay the tax debt and an account is listed as currently
              non-collectible, the IRS will stop trying to collect back taxes.
              Although it does not remove any tax debt owed by the IRS or
              attempt to settle it, CNC status is an important option for
              taxpayers who cannot afford to pay the back taxes they owe when
              filing their income tax return.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              The IRS ceases all collection activities including issuing
              garnishment and levy orders once a taxpayer has been declared CNC,
              but they will apply your tax refunds toward your tax debt. The IRS
              sends a taxpayer an annual statement outlining the tax owed. The
              annual statement is not considered to be a bill.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              How to Obtain Currently Not Collectible Status
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When facing economic hardship, you can apply to be listed as
              currently not-collectible by consulting a tax attorney or by
              contacting the IRS directly using Form 433F, Collection
              Information Statement. You should ask the IRS for an updated tax
              balance, which will include interest and penalties.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">
                    Important Process Note
                  </h4>
                  <p className="text-yellow-600">
                    The IRS will first look at any nest egg you might have, such
                    as a savings account to pay your taxes. The IRS will ask you
                    to show proof of your total positive income and expenses if
                    you don't have assets to pay off the debt. The IRS wants to
                    know if you can make tax payments toward the debt with
                    installment agreements.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Documentation Needed to File Currently Not-Collectible
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To meet CNC eligibility requirements, the following financial
              information and bank statements are required:
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Required Documents
              </h4>
              <ul className="space-y-2">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> If you're married, you must submit the
                  above information for both spouses. This proof of taxpayer's
                  income is only applicable to Social Security benefits,
                  retirement income, pensions, child support, and/or the TANF.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The Pros and Cons of IRS's Currently Not Collectible Status
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Pros
                </h4>
                <ul className="space-y-3">
                  {prosAndCons.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-green-700 text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Cons
                </h4>
                <ul className="space-y-3">
                  {prosAndCons.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-red-700 text-sm">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Who is Eligible for Currently Not-Collectible Status?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you owe taxes and cannot pay monthly payments, you are eligible
              to apply for CNC status. Listed below are some reasons why
              accounts are in uncollectible status:
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Eligibility Reasons
              </h4>
              <ul className="space-y-2">
                {eligibilityReasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <Shield className="w-4 h-4 text-brand-blue mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Additional Factors That Impact Financial Situation
            </h3>
            <ul className="space-y-2 mb-8">
              {additionalFactors.map((factor, index) => (
                <li key={index} className="flex items-start">
                  <DollarSign className="w-4 h-4 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{factor}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">
                Special Verification Requirements
              </h4>
              <p className="text-blue-700 mb-4">
                <strong>For balances under $10,000:</strong> Verification of a
                financial report is not necessary if the taxpayer meets certain
                conditions such as terminal illness, imprisonment, or only
                having Social Security/welfare as income.
              </p>
              <p className="text-blue-700">
                <strong>For balances over $100,000:</strong> Additional
                verification is required including individual credit reports,
                motor vehicle records, and courthouse records checks.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Important Limitations and Considerations
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-red-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-red-700 mb-2">
                    Temporary Status Warning
                  </h4>
                  <p className="text-red-600 mb-2">
                    The main disadvantage of the IRS CNC status is that it is
                    not a permanent solution and usually only lasts from six
                    months to two years. You may be removed from CNC status
                    without warning.
                  </p>
                  <p className="text-red-600">
                    Additionally, even while an account has a CNC status,
                    penalties and interest will continue to accrue, and the IRS
                    will revive the case in collections. The debt will be much
                    higher.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Ongoing IRS Monitoring
              </h4>
              <p className="text-yellow-700 mb-3">
                The IRS will monitor your financial status and review reports
                from other parties, such as banks and employers. If the IRS
                finds that your total positive income has increased
                significantly, you will be removed from your current, not
                collectible status.
              </p>
              <p className="text-yellow-700">
                <strong>Important:</strong> The IRS demands that all future
                taxes be filed and paid on time to avoid being removed from
                uncollectible status. If you're self-employed and have had
                difficulty saving money for taxes in the past, this will make it
                impossible to remain uncollectible.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Ideal Tax for CNC Status?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ideal Tax is a tax settlement service that can help you find the
              most appropriate form of tax relief based on your financial
              condition. Whether your financial situation and tax issue would be
              best resolved with a partial payment installment agreement, offer
              in compromise, or uncollectible status, Ideal Tax can analyze your
              collection information statement detailing your financial
              information and offer further instructions to approach your IRS
              debt.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              With years of experience dealing with the IRS, tax professionals
              at Ideal Tax will provide excellent representation and personal
              attention as they help you navigate your IRS debt and help you
              resolve your tax problems. Ideal Tax's tax attorneys are skilled
              negotiators with a deep understanding of tax laws and IRS manuals.
              We will maximize your chances of being placed in non-collectible
              status.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Get Professional CNC Assistance
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Don't navigate the complex CNC application process alone. Our
                experienced team can help you prepare the necessary
                documentation, present your case effectively to the IRS, and
                maximize your chances of obtaining Currently Non-Collectible
                status.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Link
                  href="/sruvey"
                  className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block text-center"
                >
                  Get Free Tax Consultation
                </Link>
                <a
                  href="tel:877-518-2860"
                  className="flex items-center justify-center bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (877) 518-2860
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-teal to-brand-blue text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Need Relief from IRS Collections?
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                If you're experiencing financial hardship and cannot afford to
                pay your tax debt, Currently Non-Collectible status may provide
                the temporary relief you need. Our experts will evaluate your
                situation and help you pursue the best resolution for your
                circumstances.
              </p>
              <Link
                href="/survey"
                className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Check Your CNC Eligibility Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyNonCollectible;
