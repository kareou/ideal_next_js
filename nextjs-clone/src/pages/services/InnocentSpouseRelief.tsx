
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart, Shield, Scale } from 'lucide-react';

const InnocentSpouseRelief = () => {
  const qualifications = [
    "Joint tax return was filed",
    "Understatement of tax due to spouse's error",
    "You had no knowledge of the understatement",
    "It would be unfair to hold you liable",
    "You qualify for separation of liability",
    "You meet equitable relief requirements"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Innocent <span className="text-brand-teal">Spouse</span> Relief
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Not responsible for your spouse's tax debt? Our expert team helps you qualify 
              for Innocent Spouse Relief to protect you from unfair tax liability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Apply for Relief
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
                Protection from Unfair Tax Liability
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                When you file a joint tax return, both spouses are typically responsible for 
                the entire tax liability. However, Innocent Spouse Relief can protect you 
                from tax debt that rightfully belongs to your spouse or former spouse.
              </p>
              <div className="space-y-3">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Scale className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <Heart className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fair Tax Treatment</h3>
              <p className="text-gray-700">
                You shouldn't be held responsible for tax problems you didn't create. 
                Our experts help you navigate the complex process of obtaining innocent spouse relief.
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
              Protect Yourself from Unfair Tax Debt
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let your spouse's tax mistakes ruin your financial future. 
              Contact us today to explore your options for innocent spouse relief.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Get Protection Now
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InnocentSpouseRelief;
