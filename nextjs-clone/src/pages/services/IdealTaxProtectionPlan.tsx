
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Clock, Users } from 'lucide-react';

const IdealTaxProtectionPlan = () => {
  const features = [
    "Ongoing tax compliance monitoring",
    "Annual tax planning consultation",
    "IRS notice response and resolution",
    "Audit protection and representation",
    "Priority customer support",
    "Quarterly tax strategy reviews"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              IdealTax <span className="text-brand-teal">Protection</span> Plan
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Comprehensive tax protection and ongoing support to keep you compliant 
              and protected from future tax problems. Peace of mind all year long.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Join Protection Plan
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
                Year-Round Tax Protection
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Protection Plan provides ongoing tax support and monitoring to prevent 
                problems before they start. With professional guidance throughout the year, 
                you'll stay compliant and protected from costly tax issues.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <Shield className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Protection</h3>
              <p className="text-gray-700">
                Prevention is better than cure. Our protection plan keeps you ahead of 
                tax problems with proactive monitoring and professional support.
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
              Protect Your Financial Future
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't wait for tax problems to arise. Join our Protection Plan today 
              and enjoy year-round peace of mind with professional tax support.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Get Protected Today
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IdealTaxProtectionPlan;
