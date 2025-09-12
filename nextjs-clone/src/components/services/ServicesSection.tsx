import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, FileText, Calculator, Users, Clock, CheckCircle, AlertTriangle, Minus, DollarSign, Gavel } from 'lucide-react';
import Link  from 'next/link';

const Services = () => {
  const services = [
    {
      title: "Tax Audits",
      description: "Professional representation and defense during IRS audits to protect your rights and interests.",
      icon: <Shield className="w-8 h-8 text-brand-teal" />,
      link: "/services/tax-audits"
    },
    {
      title: "Wage Garnishments",
      description: "Stop wage garnishments and negotiate payment plans to get your finances back on track.",
      icon: <FileText className="w-8 h-8 text-brand-teal" />,
      link: "/services/wage-garnishments"
    },
    {
      title: "Bank Levy",
      description: "Release bank levies and protect your accounts from IRS seizure actions.",
      icon: <Shield className="w-8 h-8 text-brand-teal" />,
      link: "/services/bank-levy"
    },
    {
      title: "Penalty Abatement",
      description: "Reduce or eliminate IRS penalties through proper documentation and negotiation.",
      icon: <Calculator className="w-8 h-8 text-brand-teal" />,
      link: "/services/penalty-abatement"
    },
    {
      title: "Asset Protection",
      description: "Safeguard your assets from IRS collection actions and seizure attempts.",
      icon: <Shield className="w-8 h-8 text-brand-teal" />,
      link: "/services/asset-protection"
    },
    {
      title: "Installment Agreements",
      description: "Negotiate affordable monthly payment plans with the IRS for tax debt relief.",
      icon: <Clock className="w-8 h-8 text-brand-teal" />,
      link: "/services/installment-agreements-irs-payment-plans"
    },
    {
      title: "Offer in Compromise",
      description: "Settle your tax debt for less than the full amount owed through OIC programs.",
      icon: <CheckCircle className="w-8 h-8 text-brand-teal" />,
      link: "/services/offer-in-compromise"
    },
    {
      title: "Currently Non-Collectible",
      description: "Temporarily halt IRS collection activities when facing financial hardship.",
      icon: <Users className="w-8 h-8 text-brand-teal" />,
      link: "/services/currently-non-collectible-status"
    },
    {
      title: "Innocent Spouse Relief",
      description: "Protection for spouses who shouldn't be held liable for their partner's tax debt.",
      icon: <Shield className="w-8 h-8 text-brand-teal" />,
      link: "/services/innocent-spouse-tax-relief"
    },
    {
      title: "Amending Tax Returns",
      description: "Correct errors on previously filed returns and claim missed deductions.",
      icon: <FileText className="w-8 h-8 text-brand-teal" />,
      link: "/services/amending-tax-returns"
    },
    {
      title: "Back Taxes",
      description: "Comprehensive solutions to resolve back tax debt and get you back on track.",
      icon: <Calculator className="w-8 h-8 text-brand-teal" />,
      link: "/services/back-taxes"
    },
    {
      title: "Seizure",
      description: "Stop IRS asset seizures and protect your property from collection actions.",
      icon: <AlertTriangle className="w-8 h-8 text-brand-teal" />,
      link: "/services/seizure"
    },
    {
      title: "Tax Lien Subordination",
      description: "Reduce the impact of tax liens on your credit and financial opportunities.",
      icon: <FileText className="w-8 h-8 text-brand-teal" />,
      link: "/services/tax-lien-subordination"
    },
    {
      title: "Trust Fund Recovery Penalty",
      description: "Defend against personal liability for business payroll tax penalties.",
      icon: <Shield className="w-8 h-8 text-brand-teal" />,
      link: "/services/trust-fund-recovery-penalty"
    },
    {
      title: "Ideal Tax Protection Plan",
      description: "Comprehensive tax protection services to keep you compliant and protected.",
      icon: <CheckCircle className="w-8 h-8 text-brand-teal" />,
      link: "/services/ideal-tax-protection-plan"
    }
  ];

  const whyChooseUs = [
    "Over 13 years of experience in tax resolution",
    "Licensed tax attorneys and enrolled agents",
    "Hundreds of successful cases resolved monthly",
    "Direct communication with the IRS on your behalf",
    "Personalized solutions for your specific situation",
    "Free initial consultation and case evaluation"
  ];

  return (
    <div className="min-h-screen bg-white">

      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Tax <span className="text-brand-teal">Relief Services</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              From IRS audits to wage garnishments, our experienced team provides 
              professional tax resolution services to help you overcome any tax challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/survey" className="inline-block">
    <Button
      size="lg"
      className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
    >
      Get Free Consultation
    </Button>
  </Link>
              <a href="tel:+18775182860">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-4 px-8 rounded-full transition-all duration-300"
              >
                Call (877) 518-2860
              </Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Tax Resolution Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer a comprehensive range of tax services designed to resolve your 
              tax issues and provide you with the peace of mind you deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-brand-teal transition-all duration-300 hover:shadow-lg group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-mint-50 rounded-full w-fit group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6">
                    {service.description}
                  </CardDescription>
                  <Link href={service.link}>
                    <Button 
                      variant="outline" 
                      className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose IdealTax?
              </h2>
              <p className="text-xl text-gray-700">
                With over a decade of experience, we've helped thousands of taxpayers 
                resolve their tax issues and achieve financial peace of mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-teal rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Resolve Your Tax Issues?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let tax problems control your life. Contact us today for a free consultation 
              and discover how we can help you achieve tax relief.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/survey" className="inline-block">
  <Button
    size="lg"
    className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
  >
    Start Online Now
  </Button>
</Link>
               <a href="tel:+18775182860">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-4 px-8 rounded-full transition-all duration-300"
              >
                Call (877) 518-2860
              </Button></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
