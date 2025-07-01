
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, DollarSign, Shield, TrendingDown } from 'lucide-react';

const TaxDebtRelief = () => {
  const programs = [
    "IRS Fresh Start Program",
    "Offer in Compromise",
    "Installment Agreements",
    "Currently Non-Collectible status",
    "Penalty Abatement",
    "Innocent Spouse Relief"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tax Debt Relief & <span className="text-brand-teal">IRS Forgiveness</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Struggling with overwhelming tax debt? Our proven debt relief programs can 
              help you settle your IRS debt for less than you owe and get a fresh start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Get Debt Relief Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-4 px-8 rounded-full transition-all duration-300"
              >
                Call (877) 518-2860
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Tax Debt Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Don't let tax debt destroy your financial future. Our experienced team 
                specializes in IRS debt relief programs that can significantly reduce 
                or eliminate your tax obligations through legitimate government programs.
              </p>
              <div className="space-y-3">
                {programs.map((program, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{program}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <TrendingDown className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Significant Savings</h3>
              <p className="text-gray-700">
                Our clients typically save thousands of dollars through our proven 
                debt relief strategies. Let us help you achieve financial freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Stop Tax Debt From Destroying Your Life
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take control of your tax situation today. Our debt relief experts are ready 
              to help you find the best solution for your unique circumstances.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Get Your Debt Relief Plan
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TaxDebtRelief;
