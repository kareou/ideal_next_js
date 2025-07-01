import React from 'react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Clock, Users } from 'lucide-react';

const FreeTaxConsultation = () => {
  const benefits = [
    "No obligation consultation",
    "Expert tax advice",
    "Personalized solutions",
    "Immediate case evaluation",
    "Professional representation options",
    "Free initial assessment"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Free Tax <span className="text-brand-teal">Consultation</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Get expert tax advice at no cost. Our experienced tax professionals 
              will evaluate your situation and provide personalized solutions for your tax challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Schedule Free Consultation
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
                Expert Tax Guidance at No Cost
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Don't navigate complex tax issues alone. Our free consultation provides 
                you with professional insights and strategic options to resolve your tax 
                problems without any upfront cost or obligation.
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
              <Phone className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Help</h3>
              <p className="text-gray-700">
                Our tax experts are standing by to provide you with the guidance 
                you need. Get started with your free consultation today.
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
              Get Professional Tax Help Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let tax problems overwhelm you. Schedule your free consultation 
              and discover how we can help resolve your tax challenges.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Schedule Your Free Consultation
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FreeTaxConsultation;
