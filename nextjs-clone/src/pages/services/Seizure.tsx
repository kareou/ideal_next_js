
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertTriangle, Shield, Home } from 'lucide-react';

const Seizure = () => {
  const protections = [
    "Immediate seizure release assistance",
    "Asset protection strategies",
    "Negotiation with IRS collection officers",
    "Prevention of future seizure actions",
    "Emergency financial hardship claims",
    "Professional legal representation"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Asset <span className="text-brand-teal">Seizure</span> Defense
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              IRS threatening to seize your assets? Our emergency response team provides 
              immediate protection and works to release seized property and prevent future seizures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Stop Seizure Now
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
                Emergency Asset Protection
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                IRS asset seizure is one of the most serious collection actions. The IRS can 
                seize your home, car, business assets, and personal property. Our experienced 
                team provides immediate intervention to protect your assets and negotiate alternatives.
              </p>
              <div className="space-y-3">
                {protections.map((protection, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{protection}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <AlertTriangle className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Time-Critical Situation</h3>
              <p className="text-gray-700">
                Asset seizure requires immediate action. Every moment counts when 
                protecting your home, business, and personal property from IRS seizure.
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
              Don't Let the IRS Take Your Assets
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Protect your home, business, and personal property from IRS seizure. 
              Contact our emergency response team for immediate assistance.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Get Emergency Help
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Seizure;
