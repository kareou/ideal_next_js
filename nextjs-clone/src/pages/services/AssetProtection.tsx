import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Shield,
  Lock,
  AlertTriangle,
  Calendar,
  User,
  ArrowLeft,
  Building,
  Users,
  FileText,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Asset Protection Law? | Ideal Tax",
  description:
    "Asset Protection, is a collection of legal techniques to protecting assets from individuals and businesses from civil money judgments",
}

const AssetProtection = () => {
  const keyTakeaways = [
    "Asset protection involves protecting personal and business assets from civil money judgments",
    "Asset protection is similar to bankruptcy: filing for bankruptcy is preferred for those with little assets, whereas asset protection plans are more practical when the debtor has significant assets",
    "The four threshold factors evaluated in each asset protection case include the identity of the person involved in asset protection planning, the claim's nature, the identity of the creditor, and the nature of assets",
    "In the United States, asset protection laws vary across all 50 states",
    "Corporations, partnerships, and trusts are some of the most common legal instruments used to shield assets",
  ];

  const thresholdFactors = [
    {
      title: "The Identity of the Person",
      description:
        "Is the debtor an individual? If so, is the spouse also liable? Is it possible to make a transmutation agreement if the spouse is not liable?",
    },
    {
      title: "The Claim's Nature",
      description:
        "Is there any specific claim or is the asset protection taken to protect yourself from lawsuits? What assets are enumerable by the judgment if the claim is reduced to a judgment?",
    },
    {
      title: "The Identity of the Creditor",
      description:
        "How aggressive is the creditor? Is the creditor a government agency or an individual? Is the taxing authority?",
    },
    {
      title: "The Nature of the Assets",
      description:
        "In what manner are assets exempted from creditors' claims? The homestead exemption and the exemption of assets in qualified plans.",
    },
  ];

  const protectionStrategies = [
    {
      title: "Corporations",
      icon: Building,
      description:
        "Corporations are a great asset-protection tool because they have limited liability for their directors, officers, and shareholders. Corporate principals are not personally liable for corporate debts, breach of contract, or personal injuries to third parties caused by the corporation.",
    },
    {
      title: "S Corporations",
      icon: FileText,
      description:
        "An S corporation is similar in structure to a C corp, except that it can make a tax-exempt special IRS tax choice to allow corporate profits to pass through the company and be taxed at the shareholder level.",
    },
    {
      title: "Limited Liability Corporations",
      icon: Shield,
      description:
        "This entity was created due to the additional formalities that were imposed on S-corporations, providing flexibility while maintaining liability protection.",
    },
    {
      title: "Limited Partnership",
      icon: Users,
      description:
        "A limited partnership consists of one or two general partners as well as one or several limited partners. Limited partners are not personally liable for any debts or obligations of the partnership, other than their contribution to it.",
    },
    {
      title: "Asset Protection Trusts",
      icon: Lock,
      description:
        "An asset protection trust is an agreement between whoever created the trust (the settlor or grantor), and who will manage the assets of that trust (the trustee).",
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
                Asset Protection Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Asset Protection Law
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Asset Protection Team
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
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Asset Protection, also known as Debtor-creditor Law, is a
              collection of legal techniques and a body of law that focuses on
              protecting assets from individuals and businesses from civil money
              judgments. Asset protection planning is designed to protect assets
              from creditors, without perjury and tax avoidance.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Key Takeaways
            </h2>
            <div className="space-y-3 mb-8">
              {keyTakeaways.map((takeaway, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    {takeaway}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What is Asset Protection Law?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Asset protection planning refers to the various methods that can
              be used to protect assets against liabilities from elsewhere. It
              is not to be confused with Limiting Liability. This refers to the
              ability to limit or stop liability for the asset or activity that
              it arises.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Asset protection is similar to bankruptcy. The bankruptcy route is
              preferred if a debtor does not have enough assets. Asset
              protection is more practical if the debtor has substantial assets.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Four Threshold Factors
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These are the four threshold factors, which are either implicitly
              or explicitly analyzed in every asset protection case:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {thresholdFactors.map((factor, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    {factor.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Asset Protection Law in the US
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Certain assets are exempted from creditors by the United States
              federal bankruptcy laws. The laws vary from state to state, but
              often include exclusions for certain equity in personal
              residences, individual retirement accounts, clothing, or other
              personal property.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Some states permit asset protection for self-settled trusts
              (trusts in which the creator or settlor of the trust is included
              as a possible discretionary beneficiary), while others do not.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Domestic vs. Offshore Asset Protection Trusts
              </h3>
              <p className="text-blue-700 mb-4">
                <strong>Domestic asset protection trusts</strong> protect
                significant assets from creditors within the United States legal
                framework.
              </p>
              <p className="text-blue-700">
                <strong>Offshore asset protection trusts</strong> are similar to
                domestic asset protection trusts except they are formed in a
                foreign country. Foreign asset protection trusts require
                creditors to adhere to the laws of the government agencies in
                the country in which the trust was formed.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Asset-Protection Strategies
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Corporations, partnerships, and trusts are some of the most common
              legal instruments used to shield assets. Your assets and the type
              of creditors that are most likely to make claims against them will
              determine the best structure for you.
            </p>

            <div className="space-y-6 mb-8">
              {protectionStrategies.map((strategy, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-teal/10 p-3 rounded-lg">
                      <strategy.icon className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {strategy.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Internal and External Claims on Assets
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-3">
                  Internal Claims
                </h4>
                <p className="text-green-700 text-sm leading-relaxed">
                  Creditors can only sue for internal claims if they have the
                  assets of one entity (e.g., a corporation). If a corporation
                  owns real property, and someone falls on it, the liability of
                  the injured party is to pursue the assets of the corporation.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-red-800 mb-3">
                  External Claims
                </h4>
                <p className="text-red-700 text-sm leading-relaxed">
                  External claims can be made against you as well as the assets
                  of an entity. If you were the owner of a truck belonging to
                  the same corporation and you negligently drove it into
                  pedestrians, you could be sued by the injured as well as the
                  corporation.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">
                    Important Considerations:
                  </h4>
                  <p className="text-yellow-600 mb-2">
                    Providers of personal services are one exception to the
                    limited liability of corporate directors. Personal service
                    liability covers work performed for or on behalf of another
                    person by lawyers, accountants, and financial professionals.
                  </p>
                  <p className="text-yellow-600">
                    A corporation can only offer liability protection if it is a
                    distinct and separate entity from its officers or
                    shareholders. A creditor may try to show that a corporation
                    does not act as a separate entity, but rather as its alter
                    ego or officers.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Importance of Asset Protection Planning
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A comprehensive asset protection plan aims to reduce or eliminate
              risk by protecting your personal and business assets from
              creditors. Many small-business owners don't realize the risks and
              options that could harm their business.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              A plan to protect your assets and deter potential claimants is
              called asset protection and can be put in place before a lawsuit
              or claim. Asset-protection strategies use separate legal
              structures such as corporations and partnerships.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                The Bottom Line
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The creation and implementation of a comprehensive asset
                protection plan can affect almost all aspects of your business.
                The plan's purpose is to safeguard your business assets within
                your business operations. It is possible to protect your
                business by using legal concepts and entities that are honest
                and lawful.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                It is not asset protection planning to deceive other businesses
                or individuals. To create an asset protection plan that is most
                effective for you, consider hiring an asset-protection expert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                href="/survey"
                  className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block text-center"
                >
                  Get Free Consultation
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
                Protect Your Assets Today
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Don't wait until it's too late. Our asset protection experts can
                help you create a comprehensive plan to safeguard your wealth
                and business interests from potential creditors and legal
                challenges.
              </p>
              <Link
                href="/survey"
                className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Start Asset Protection Planning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetProtection;
