
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Calculator, Shield } from 'lucide-react';

const TaxPreparationService = () => {
  const services = [
    "Individual tax return preparation",
    "Business tax return filing",
    "Tax planning and strategy",
    "Maximum deduction identification",
    "IRS compliance assurance",
    "Year-round tax support"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tax Preparation <span className="text-brand-teal">Service</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Professional tax preparation services that maximize your refund and ensure 
              full compliance with IRS requirements. Let our experts handle your taxes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Get Tax Preparation Help
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
                Professional Tax Preparation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our certified tax professionals provide comprehensive tax preparation 
                services for individuals and businesses. We ensure accuracy, maximize 
                your refund, and keep you compliant with all tax laws.
              </p>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <FileText className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Preparation</h3>
              <p className="text-gray-700">
                Trust our experienced tax professionals to prepare your returns 
                accurately and efficiently, ensuring you get every deduction you deserve.
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
              Ready for Professional Tax Preparation?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let our experts handle your tax preparation while you focus on what matters most. 
              Get started with professional tax services today.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Start Your Tax Preparation
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TaxPreparationService;
