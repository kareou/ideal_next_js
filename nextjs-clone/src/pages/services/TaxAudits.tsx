
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileSearch, Shield, Users } from 'lucide-react';

const TaxAudits = () => {
  const services = [
    "Complete audit representation",
    "Document preparation and organization",
    "IRS communication on your behalf",
    "Audit defense strategies",
    "Negotiation of audit findings",
    "Appeals process representation"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tax <span className="text-brand-teal">Audit</span> Defense
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Facing an IRS audit? Don't go it alone. Our experienced audit defense team 
              provides professional representation to protect your rights and minimize liability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Get Audit Defense
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
                Professional Audit Representation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                An IRS audit can be intimidating and complex. Our experienced tax professionals 
                handle all aspects of your audit, from initial response through resolution, 
                ensuring your rights are protected throughout the process.
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
              <FileSearch className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Audit Defense</h3>
              <p className="text-gray-700">
                Our audit specialists know IRS procedures inside and out. We'll handle 
                all communications and work to achieve the best possible outcome for your case.
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
              Don't Face an Audit Alone
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Professional audit representation can make the difference between a successful 
              resolution and costly penalties. Get expert help today.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Get Audit Help Now
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TaxAudits;
