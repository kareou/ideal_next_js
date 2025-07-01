
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Building, AlertTriangle, Shield } from 'lucide-react';

const TrustFundRecoveryPenalty = () => {
  const defenses = [
    "Challenge responsible person determination",
    "Prove lack of willful non-payment",
    "Demonstrate financial inability to pay",
    "Negotiate payment arrangements",
    "Appeal IRS penalty assessments",
    "Provide comprehensive legal representation"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Trust Fund Recovery <span className="text-brand-teal">Penalty</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Facing personal liability for business payroll taxes? Our TFRP defense experts 
              protect business owners from devastating trust fund recovery penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Defend Against TFRP
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
                Defend Against Personal Liability
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The Trust Fund Recovery Penalty (TFRP) can make business owners personally 
                liable for unpaid payroll taxes. This penalty can destroy personal finances 
                and assets. Our experienced team provides aggressive defense strategies.
              </p>
              <div className="space-y-3">
                {defenses.map((defense, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{defense}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <Building className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Owner Protection</h3>
              <p className="text-gray-700">
                Don't let payroll tax problems destroy your personal finances. 
                Our TFRP defense strategies can protect your assets and future earnings.
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
              Protect Your Personal Assets
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Trust Fund Recovery Penalties can be financially devastating. 
              Get expert defense representation to protect your personal wealth.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Get TFRP Defense
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TrustFundRecoveryPenalty;
