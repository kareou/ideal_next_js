
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Clock, Shield } from 'lucide-react';

const AmendingTaxReturns = () => {
  const benefits = [
    "Correct errors on previously filed returns",
    "Claim missed deductions and credits",
    "Reduce tax liability through proper amendments",
    "Professional review of original returns",
    "Expert guidance through the amendment process",
    "Protection from IRS penalties and interest"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Amending <span className="text-brand-teal">Tax Returns</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Made mistakes on your tax return? Our expert team helps you file amended returns 
              to correct errors, claim missed deductions, and potentially reduce your tax liability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Get Free Consultation
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
                Why Amend Your Tax Return?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Tax returns can contain errors that cost you money. Whether you missed deductions, 
                made calculation mistakes, or received additional tax documents after filing, 
                amending your return can help you recover overpaid taxes or properly report income.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <FileText className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Amendment Service</h3>
              <p className="text-gray-700">
                Our experienced tax professionals will review your original return and prepare 
                accurate amendments to maximize your refund or minimize additional taxes owed.
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
              Ready to Amend Your Tax Return?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let tax mistakes cost you money. Contact us today for a free consultation 
              and discover how much you could save with properly amended returns.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Start Your Amendment Today
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AmendingTaxReturns;
