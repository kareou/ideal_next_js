
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calculator, Shield, Minus } from 'lucide-react';

const PenaltyAbatement = () => {
  const penalties = [
    "Failure to file penalties",
    "Failure to pay penalties",
    "Accuracy-related penalties",
    "Late payment penalties",
    "Estimated tax penalties",
    "Trust fund recovery penalties"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Penalty <span className="text-brand-teal">Abatement</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Facing crushing IRS penalties? Our penalty abatement experts help reduce 
              or eliminate tax penalties, potentially saving you thousands of dollars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Reduce Penalties
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
                Eliminate Costly IRS Penalties
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                IRS penalties can double or triple your tax debt. Our penalty abatement 
                specialists use proven strategies to reduce or eliminate various types 
                of penalties, including reasonable cause and first-time penalty relief.
              </p>
              <div className="space-y-3">
                {penalties.map((penalty, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Minus className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{penalty}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <Calculator className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Significant Savings</h3>
              <p className="text-gray-700">
                Successful penalty abatement can save thousands of dollars and 
                significantly reduce your overall tax liability. Every penalty removed is money back in your pocket.
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
              Stop Paying Unnecessary Penalties
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let IRS penalties destroy your financial future. Contact us today 
              to see how much we can reduce your penalty burden.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Get Penalty Relief
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PenaltyAbatement;
