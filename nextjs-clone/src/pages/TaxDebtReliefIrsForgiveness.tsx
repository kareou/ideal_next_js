
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Phone, Clock, Users, Shield, Calculator, DollarSign, FileText, UserCheck } from 'lucide-react';
import Link  from 'next/link';
import { Button } from '@/components/ui/button';

const TaxDebtReliefIrsForgiveness = () => {
  const programs = [
    {
      icon: Clock,
      title: "Installment Agreement Payment Plan",
      description: "Pay your tax debt in monthly installments if you can't afford the total amount upfront. Typical repayment period is 72 months, available if you owe more than $50,000 in combined debt, interest, and penalties."
    },
    {
      icon: Calculator,
      title: "Offer In Compromise",
      description: "A settlement option that qualifies you to pay far less than the amount you owe to the IRS, therefore directly lowering your tax debt."
    },
    {
      icon: Shield,
      title: "Currently Not Collectible Status",
      description: "Relief program for taxpayers who can't pay their taxes. If approved, the IRS won't collect or seize their assets or property."
    },
    {
      icon: FileText,
      title: "IRS Penalty Abatement",
      description: "You might qualify for the IRS penalty waiver under the forgiveness plan. Fill in Form 843 to claim a refund and request penalty abatement."
    }
  ];

  const eligibilityCriteria = [
    "No history of late payments to the IRS",
    "Prove that paying your tax liability would cause financial hardship",
    "Being up to date with their tax obligations for the present tax year"
  ];

  const successStories = [
    {
      name: "Fusco's Financial Journey",
      debt: "$20,000",
      solution: "Currently Non-Collectible Status",
      result: "Immediate relief from debt collection"
    },
    {
      name: "Sysol's Debt Relief",
      debt: "$88,533",
      solution: "Offer In Compromise",
      result: "Debt reduced to just $100"
    },
    {
      name: "Heron's Financial Victory",
      debt: "$48,259",
      solution: "Currently Non-Collectible Status",
      result: "IRS will never attempt to collect unless financial situation improves"
    }
  ];

  const whyChooseReasons = [
    "Over 13 years of experience in tax and financial issues",
    "Professional team acts as buffer between you and the IRS",
    "Diverse team of tax attorneys, enrolled agents, and skilled accountants",
    "Handle hundreds of cases every month with proven expertise",
    "70% of clients are behind on IRS tax filing - we specialize in this"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              IRS <span className="text-brand-teal">Forgiveness Program</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              If you still owe money to the IRS and you can't pay it right away, this situation can be stressful. 
              We'll simplify this so you can determine if you'll be able to benefit from the IRS Forgiveness program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/survey" passHref>
  <Button
    size="lg"
    className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal 
               text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 
               hover:shadow-lg transform hover:scale-105"
  >
    Get Free Debt Analysis
  </Button>
</Link>
            <a href="call:+18775182860">  <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-4 px-10 rounded-full transition-all duration-300"
              >
                Call (877) 518-2860
              </Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* What is IRS Forgiveness Program */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is the IRS Forgiveness Program?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The IRS forgiveness program enables tax forgiveness credits against your earned income 
              helping to reduce the overall amount annually.
            </p>
          </div>
        </div>
      </section>

      {/* Main Forms Section */}
      <section className="py-20 bg-gradient-to-br from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                IRS Debt Forgiveness Program Main Forms
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The main forms of tax debt relief offered through the IRS Debt Forgiveness program include the following:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <IconComponent className="w-12 h-12 text-brand-teal mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                IRS Forgiveness Program Eligibility Criteria
              </h2>
              <p className="text-xl text-gray-600">
                To be considered eligible for the IRS Tax Forgiveness Program, taxpayers must meet the following criteria:
              </p>
            </div>
            
            <div className="space-y-6">
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-mint-50 to-deep-blue-50 rounded-xl">
                  <UserCheck className="w-6 h-6 text-brand-teal mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">{criteria}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Success Stories: Real Stories, Real Relief
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understand the life-changing impact that the IRS Forgiveness Program had on our clients' lives.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <DollarSign className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                    <div className="text-3xl font-bold text-red-600 mb-2">{story.debt}</div>
                    <div className="text-sm text-gray-600 mb-4">Original Debt</div>
                  </div>
                  <div className="border-t pt-6">
                    <div className="text-brand-teal font-semibold mb-2">Solution:</div>
                    <p className="text-gray-700 mb-4">{story.solution}</p>
                    <div className="text-green-600 font-semibold mb-2">Result:</div>
                    <p className="text-gray-700">{story.result}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                These stories are real representations of the countless clients who found solace and resolution 
                through the IRS Forgiveness Program. There are many options within the program, which makes it 
                flexible and suitable for taxpayers no matter their financial situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ideal Tax */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Ideal Tax?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                For over 13 years, IdealTax has been in service for those dealing with financial and tax issues. 
                Our professional team will help you get the best results from the IRS.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseReasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-mint-50 to-deep-blue-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-brand-teal mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{reason}</span>
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
              Ready to Resolve Your Tax Debt?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              To all taxpayers struggling to pay their debts, the IRS Forgiveness Program is meant for you! 
              Our experts are ready to take your case and work on it day and night until your financial problems disappear.
            </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
  <Link
    href="/survey"
    className="w-full sm:w-auto text-center bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 inline-block"
  >
    Get Free Consultation
  </Link>
  <a href="call:+18775182860" className="w-full sm:w-auto">
    <Button 
      variant="outline" 
      size="lg"
      className="w-full sm:w-auto border-2 border-white text-brand-teal hover:bg-white hover:text-brand-blue py-7 px-8 rounded-full transition-all duration-300"
    >
      Call Now: (877) 518-2860
    </Button>
  </a>
</div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TaxDebtReliefIrsForgiveness;
