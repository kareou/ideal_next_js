import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Calculator, Shield , DollarSign, Users, Award } from "lucide-react";

const TaxPreparationService = () => {
  const services = [
    "Individual tax return preparation",
    "Business tax return filing",
    "Tax planning and strategy",
    "Maximum deduction identification",
    "IRS compliance assurance",
    "Year-round tax support",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Ideal Tax provides comprehensive tax preparation services with an individualized approach
            </h1>
            <div className="bg-teal-600 text-white py-4 px-8 rounded-lg inline-block mb-8">
              <p className="text-lg font-semibold">SPEAK TO OUR TAX EXPERTS</p>
              <p className="text-2xl font-bold">(833) 321-1273</p>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Tax preparation looks different for everyone – that's why professional help can ensure you get the most out of filing your tax return
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tax Prep Services Made Easy */}
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white">
              <DollarSign className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tax Prep Services Made Easy</h3>
              <p className="text-gray-700">
                Ideal Tax will guide you through the entire income tax preparation process.
              </p>
            </div>

            {/* Your Go-To Tax Pros */}
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-teal-50 to-white">
              <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Go-To Tax Pros</h3>
              <p className="text-gray-700">
                Our experienced and knowledgeable tax professionals undergo rigorous training to ensure they are equipped with the latest tax laws and regulations to ensure your taxes are filed accurately and on time.
              </p>
            </div>

            {/* Maximum Tax Refund */}
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-white">
              <Calculator className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Maximum Tax Refund</h3>
              <p className="text-gray-700">
                Our research found that 1 in 3 tax returns filed by an individual tax professional have mistakes that make taxpayers receive smaller tax refunds or owe money to the IRS. This is why we designed a system that guarantees a perfect tax return.
              </p>
            </div>

            {/* Optimize Your Tax Return */}
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-white">
              <Shield className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimize Your Tax Return</h3>
              <p className="text-gray-700">
                Our tax professionals are experienced in navigating a variety of tax situations to determine the best way to approach filing tax returns.
              </p>
            </div>

            {/* Superior Customer Service */}
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-white md:col-span-2 lg:col-span-2">
              <Users className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Superior Customer Service</h3>
              <p className="text-gray-700">
                Ensure you achieve all possible tax breaks by working with experienced professionals who treat your case as a priority. We will take care of you this tax season by assisting you through the entire process of preparing your tax return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Tax Team guarantees the highest accuracy while getting the best results
            </h2>
            <div className="bg-white text-teal-600 py-4 px-8 rounded-lg inline-block mb-8">
              <p className="text-lg font-semibold">SPEAK TO OUR TAX EXPERTS</p>
              <p className="text-2xl font-bold">(833) 321-1273</p>
            </div>
            <p className="text-xl text-white/90 mb-8">
              We offer comprehensive tax preparation services to prevent you from going through the daunting process of filing a tax return
            </p>
          </div>
        </div>
      </section>

      {/* Why Hire Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why Hire Us</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* 14 Years Experience */}
              <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <div className="text-6xl font-bold text-teal-600 mb-4">14</div>
                <div className="text-2xl font-semibold text-gray-900 mb-2">Years</div>
                <p className="text-gray-700">
                  For the past 14 years, we have helped taxpayers of all backgrounds optimize their tax return savings.
                </p>
              </div>

              {/* IRS Direct Information */}
              <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <div className="text-lg font-semibold text-gray-900 mb-2">IRS Direct Source</div>
                <p className="text-gray-700">
                  Unlike our competitors, we refer to information directly sourced from the IRS as we prepare returns by pulling transcripts from the past 3 years.
                </p>
              </div>

              {/* Expert Team */}
              <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <Award className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <div className="text-lg font-semibold text-gray-900 mb-2">Expert Tax Team</div>
                <p className="text-gray-700">
                  We assign a Tax Team composed of attorneys and CPAs to prepare and review your returns to achieve a perfect tax return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxPreparationService;
