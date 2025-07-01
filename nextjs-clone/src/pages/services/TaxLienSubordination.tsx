
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, ArrowUp, Home } from 'lucide-react';

const TaxLienSubordination = () => {
  const benefits = [
    "Subordinate tax lien to allow refinancing",
    "Enable property sales and transfers",
    "Improve credit rating and loan eligibility",
    "Facilitate business financing opportunities",
    "Reduce lien priority for other creditors",
    "Professional IRS negotiation services"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tax Lien <span className="text-brand-teal">Subordination</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Need to refinance or sell property with a tax lien? Our lien subordination 
              experts help you move your tax lien to a lower priority position.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Subordinate Tax Lien
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
                Lien Subordination Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A federal tax lien can prevent you from refinancing your home or selling property. 
                Lien subordination allows other creditors to move ahead of the IRS lien, 
                making it possible to complete financial transactions while the lien remains in place.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ArrowUp className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <Home className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Unlock Your Property</h3>
              <p className="text-gray-700">
                Don't let a tax lien prevent important financial transactions. 
                Subordination can open doors to refinancing, selling, or leveraging your property.
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
              Don't Let Tax Liens Block Your Plans
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you need to refinance, sell, or access equity in your property, 
              lien subordination can provide the solution you need.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Get Subordination Help
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TaxLienSubordination;
