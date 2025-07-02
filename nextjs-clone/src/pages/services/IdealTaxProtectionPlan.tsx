import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  CheckCircle,
  Shield,
  Clock,
  Users,
  Calendar,
  User,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideal Tax Protection Plan - Ideal Tax",
  description:
    "Protection Plan Get Protected and Stay Protected Today! Get in touch with an expert today. Ideal Tax has the experience and knowledge to handle the most serious of tax audits. Our expert Tax Attorneys and Enrolled Agents will negotiate with the IRS on your behalf and ensure that your taxpayer rights are protected and that",
};

const IdealTaxProtectionPlan = () => {
  const features = [
    "Ongoing tax compliance monitoring",
    "Annual tax planning consultation",
    "IRS notice response and resolution",
    "Audit protection and representation",
    "Priority customer support",
    "Quarterly tax strategy reviews",
  ];

  const protectionBenefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Complete Protection",
      description:
        "Comprehensive coverage against tax problems before they start",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Year-Round Support",
      description:
        "24/7 professional guidance and monitoring throughout the year",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description:
        "Access to our team of experienced tax professionals and attorneys",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Logo and Main Title */}
      <div className="pt-32 pb-8 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* IdealTax Logo */}
            <div className="flex justify-center items-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-teal to-brand-blue rounded"></div>
                <span className="text-2xl font-bold text-gray-800">
                  IdealTax
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-brand-teal mb-8">
              Get Protected and Stay Protected Today!
            </h1>
          </div>
        </div>
      </div>

      {/* Main CTA Section with Gradient Background */}
      <div className="py-16 bg-gradient-to-r from-deep-blue-500 via-blue-500 to-mint-500">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in touch with an expert today.
            </h2>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Ideal Tax has the experience and knowledge to handle the most
              serious of tax audits. Our expert Tax Attorneys and Enrolled
              Agents will negotiate with the IRS on your behalf and ensure that
              your taxpayer rights are protected and that the IRS auditor is
              playing on a level field. Call us today to discuss the IRS Fresh
              Start Program and IRS forgiveness program options and how we can
              develop a strategy that will allow you to address the audit and
              resolve tax relief options with better than acceptable results.
            </p>

            <Link
              href="/contact"
              className="bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded transition-colors duration-300 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Protection Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                IdealTax Protection Plan Features
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive year-round tax protection and professional support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {protectionBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                >
                  <div className="text-brand-teal mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                What's Included in Your Protection Plan
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose IdealTax Protection?
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-mint-50 to-deep-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Prevention is Better Than Cure
                </h3>
                <p className="text-gray-700">
                  Our Protection Plan keeps you ahead of tax problems with
                  proactive monitoring and professional support. Rather than
                  waiting for issues to arise, we work continuously to ensure
                  your tax compliance and protect you from costly penalties and
                  audits.
                </p>
              </div>

              <div className="bg-gradient-to-r from-deep-blue-50 to-mint-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Complete Peace of Mind
                </h3>
                <p className="text-gray-700">
                  With our year-round protection plan, you'll have access to
                  expert tax professionals whenever you need them. From handling
                  IRS notices to providing strategic tax planning, we're here to
                  support you every step of the way.
                </p>
              </div>
            </div>

            <div className="bg-brand-teal/10 p-8 rounded-lg mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Protect Your Financial Future Today
              </h3>
              <p className="text-gray-600 mb-6">
                Don't wait for tax problems to arise. Join our Protection Plan
                today and enjoy year-round peace of mind with professional tax
                support from IdealTax's experienced team.
              </p>
              <Link
                href="/free-tax-consultation"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Get Protected Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdealTaxProtectionPlan;
