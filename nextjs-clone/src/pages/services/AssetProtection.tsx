
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Lock, AlertTriangle } from 'lucide-react';

const AssetProtection = () => {
  const protectionServices = [
    "Shield assets from IRS seizure",
    "Legal strategies to protect property",
    "Business asset protection planning",
    "Real estate protection methods",
    "Bank account safeguarding",
    "Retirement account protection"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Asset <span className="text-brand-teal">Protection</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Protect your hard-earned assets from IRS collection actions. Our expert team 
              implements legal strategies to safeguard your property, accounts, and investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Protect Your Assets Now
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
                Comprehensive Asset Protection
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The IRS has extensive powers to collect unpaid taxes, including the ability to 
                seize assets, garnish wages, and levy bank accounts. Our asset protection strategies 
                help you legally shield your wealth from these collection actions.
              </p>
              <div className="space-y-3">
                {protectionServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <Lock className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Your Future</h3>
              <p className="text-gray-700">
                Don't let tax debt threaten your financial security. Our proven asset protection 
                strategies help you maintain control of your wealth while resolving tax issues.
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
              Secure Your Assets Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Time is critical when it comes to asset protection. Contact us immediately 
              for a free consultation and learn how to safeguard your wealth.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Get Emergency Protection
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AssetProtection;
