
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, PauseCircle, FileText, Shield } from 'lucide-react';

const CurrentlyNonCollectible = () => {
  const benefits = [
    "Temporary halt to IRS collection activities",
    "Protection from wage garnishments",
    "Prevention of bank levies and asset seizure",
    "Relief from collection notices and calls",
    "Time to improve your financial situation",
    "Professional representation with the IRS"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Currently <span className="text-brand-teal">Non-Collectible</span> Status
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Facing financial hardship? Our experts help you qualify for Currently Non-Collectible 
              status to temporarily halt IRS collection activities while you recover financially.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Apply for CNC Status
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
                Financial Hardship Relief
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Currently Non-Collectible (CNC) status provides temporary relief when you're 
                unable to pay your tax debt due to financial hardship. This status stops 
                most IRS collection activities while you work to improve your financial situation.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <PauseCircle className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Temporary Relief</h3>
              <p className="text-gray-700">
                CNC status provides breathing room when you're facing genuine financial hardship. 
                Our experts help you qualify and maintain this protected status.
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
              Get the Relief You Deserve
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let financial hardship destroy your future. Contact us today to see 
              if you qualify for Currently Non-Collectible status and get the relief you need.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Check Your Eligibility
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CurrentlyNonCollectible;
