
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, DollarSign, Shield, StopCircle } from 'lucide-react';

const WageGarnishments = () => {
  const solutions = [
    "Immediate wage garnishment release",
    "Negotiate affordable payment plans",
    "Protect essential living expenses",
    "Prevent future garnishment actions",
    "Financial hardship evaluation",
    "Direct IRS communication and representation"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Wage <span className="text-brand-teal">Garnishment</span> Relief
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              IRS taking money from your paycheck? Our wage garnishment experts provide 
              immediate relief and negotiate solutions to stop garnishments and protect your income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Stop Garnishment Now
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
                Stop Wage Garnishments Fast
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Wage garnishments can take up to 25% of your disposable income, creating 
                immediate financial hardship. Our experienced team works quickly to release 
                garnishments and establish payment arrangements that protect your livelihood.
              </p>
              <div className="space-y-3">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <StopCircle className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <DollarSign className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Protect Your Paycheck</h3>
              <p className="text-gray-700">
                Don't let wage garnishments destroy your ability to pay for basic necessities. 
                Our experts can often stop garnishments within 24-48 hours.
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
              Take Back Control of Your Income
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Every day you wait, the IRS takes more of your hard-earned money. 
              Contact us immediately for wage garnishment relief.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Stop Garnishment Today
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WageGarnishments;
