
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { CheckCircle, Phone, Clock, Users, Calendar, DollarSign, FileText, Shield } from 'lucide-react';

const FreeTaxConsultation = () => {
  const freshStartPrograms = [
    {
      title: "Installment Agreement",
      description: "IRS installment agreements allow qualified taxpayers to tackle their tax debt by making monthly payments, or installments, that allow them to pay back their tax liability in a manner that does not cause them additional financial hardship"
    },
    {
      title: "Offer in Compromise",
      description: "An offer in compromise is a form of tax relief in which the IRS agrees to settle the tax debt for less than what is owed instead of requiring payment for the full tax liability."
    },
    {
      title: "Currently Non-Collectible Status",
      description: "When taxpayers are approved to have their accounts listed as currently non-collectible, they are temporarily excluded from tax collection efforts until they are more financially stable."
    },
    {
      title: "Penalty Abatement",
      description: "Penalty abatement is a tax relief option in which the IRS removes penalties and fees from a taxpayer's account that were accumulated from failing to file their tax return or being late to make a tax payment."
    }
  ];

  const informationNeeded = [
    "The amount of your total tax debt.",
    "Which government entity your tax debt is owed to, whether it is a state or federal government or the Internal Revenue Service (IRS).",
    "Your salary, wage rate, or monthly income.",
    "Your estimated monthly expenses.",
    "Which assets you own, including property and vehicles."
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Free Tax <span className="text-brand-teal">Consultation</span>
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Are you ready to meet with a licensed tax professional,
            </p>
            <p className="text-2xl font-bold text-brand-teal mb-4">
              COMPLETELY FREE OF CHARGE,
            </p>
            <p className="text-xl text-gray-700 mb-8">
              to ask them all of your burning questions about taxes?
            </p>
            <a href="tel:+18775182860" className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-white py-4 px-8 rounded-lg inline-block mb-8">
              <p className="text-lg font-semibold">SPEAK TO OUR TAX EXPERTS</p>
              <p className="text-2xl font-bold">(877) 518-2860</p>
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <Calendar className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <p className="text-gray-700">
                  Schedule your free tax consultation with us today to learn if our services can help you save money when you file your taxes.
                </p>
              </div>
              <div className="text-center p-6">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-700">
                  Our tax pros will alleviate the stress of an unmanaged tax burden and provide tangible advice about how you can move forward to optimize your outcome this tax season.
                </p>
              </div>
              <div className="text-center p-6">
                <DollarSign className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700">
                  A free tax consultation with Ideal Tax requires zero investment and zero commitment.
                </p>
              </div>
            </div>

            <div className="text-center mb-8">
              <FileText className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <p className="text-lg text-gray-700">
                Learn if we can help you resolve your tax problems by filling out our survey.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <p className="text-lg text-gray-700 mb-6">
                When taxpayers are facing the stress of accumulated tax liability, they may feel unsure about how to climb out of their tax debt or if investing in professional tax help would be beneficial in resolving their financial burdens.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The major benefit of Ideal Tax's free tax consultation is that taxpayers can learn more about their standing with the IRS based on their current tax situation and whether or not they would qualify for tax relief programs through the IRS, such as the Fresh Start Initiative, without making an additional investment.
              </p>
              <p className="text-lg text-gray-700">
                By providing a free tax consultation, you can learn if the tax services provided by Ideal Tax would be worth the money, and risk-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">The Consultation Process</h2>
            
            {/* Before Consultation */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Before Your Free Tax Consultation</h3>
              <p className="text-lg text-gray-700 mb-4">
                A tax consultation with Ideal Tax will establish a clear plan for how you should approach your tax burden this tax season. Still, there are some steps to take before your free tax consultation, including answering a pre-consultation survey.
              </p>
              <p className="text-lg text-gray-700">
                This pre-qualification questionnaire allows our team to establish a tax resolution plan.
              </p>
            </div>

            {/* During Consultation */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">During Your Free Tax Consultation</h3>
              <p className="text-lg text-gray-700 mb-6">
                The initial tax consultation is one of the most important steps in the tax filing process, as it allows our tax consultants to evaluate your tax situation and offer a realistic plan to manage your taxes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The experts at Ideal Tax will analyze all of the details you listed in the pre-consultation survey to gain an idea of which tax relief options may be most appropriate for resolving your tax problems.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Then, during your free consultation phone call, you will be provided with a clear plan of action as well as the estimated costs associated with moving forward with the Ideal Tax.
              </p>

              <div className="bg-white p-6 rounded-lg mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Information You Should Be Expected to Provide:</h4>
                <ul className="space-y-3">
                  {informationNeeded.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-4">
                The goal of this free tax consultation is to gather all of the information required to determine your eligibility for tax relief through the IRS Forgiveness Program.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                To ensure the tax resolution strategy is tailored specifically to your tax problem, the experts at Ideal Tax will ask you questions about your lifestyle to learn how you acquired tax debt and get to know your situation.
              </p>
              <p className="text-lg text-gray-700">
                By the end of this free consultation, you will have a clear idea of which tax relief programs you may be a good candidate for and be directed on the next steps to take to resolve your tax issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <a href="tel:+18775182860" className="bg-gradient-to-r from-brand-teal to-brand-blue text-white hover:from-brand-blue hover:to-brand-teal rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105  py-4 px-8 rounded-lg inline-block mb-8">
              <p className="text-lg font-semibold">SPEAK TO OUR TAX EXPERTS</p>
              <p className="text-2xl font-bold">(877) 518-2860</p>
            </a>
          </div>
        </div>
      </section>

      {/* After Consultation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">After Your Free Tax Consultation</h2>
            <p className="text-lg text-gray-700 mb-12">
              Following your free tax consultation with a tax professional at Ideal Tax, you will know if you do or do not qualify for the IRS Fresh Start Program
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Qualifying Taxpayers for the Fresh Start Program</h3>
                <p className="text-gray-700 mb-4">
                  If the professional tax preparers determine that you qualify for the IRS Fresh Start Program following your free consultation, it will be time to begin the process of actually resolving your tax burdens.
                </p>
                <p className="text-gray-700 mb-4">
                  First, our team will ensure that you have submitted all of the necessary tax documents and paperwork to us so we can prepare your case for tax resolution.
                </p>
                <p className="text-gray-700">
                  Next, the case manager will analyze the information and prepare a plan for resolution before submitting it to a tax attorney and tax accountant at Ideal Tax to verify the accuracy of the plan and ensure the best approach is selected for your tax situation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">If You Don't Qualify</h3>
                <p className="text-gray-700 mb-4">
                  If following your free tax consultation with Ideal Tax, you learn that you do not qualify for the Fresh Start Program, we will still help you with the next steps in your tax resolution process.
                </p>
                <p className="text-gray-700 mb-4">
                  The tax consultant will be honest about whether the investment in the Ideal Tax tax relief services would save them more money than they owe based on how much tax debt they have.
                </p>
                <p className="text-gray-700">
                  Contacting the IRS directly to seek out tax relief options will be a beneficial next step in achieving tax relief if they do not qualify for the Fresh Start Program.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center mb-16">
              <Users className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <p className="text-lg text-gray-700 mb-8">
                You can take all of the stress away from the tax season by hiring the professionals at Ideal Tax to prepare and file your tax return on your behalf. Whether you need help with filing an individual tax return or a tax return for your business or company, our tax preparers are experienced at optimizing filing outcomes for a variety of tax situations.
              </p>
              <a href="tel:+18775182860" className="bg-gradient-to-r from-brand-teal to-brand-blue text-white hover:from-brand-blue hover:to-brand-teal rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105  py-4 px-8 rounded-lg inline-block mb-8">
              <p className="text-lg font-semibold">SPEAK TO OUR TAX EXPERTS</p>
              <p className="text-2xl font-bold">(877) 518-2860</p>
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Cost of Tax Services</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl font-bold text-teal-600 mb-4">1</div>
                <p className="text-gray-700">
                  Following a free consultation with Ideal Tax in which you learn that you qualify for the Fresh Start Program, you will receive a detailed quote from your case manager about the estimated costs of moving forward with the tax preparation services.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-4">2</div>
                <p className="text-gray-700">
                  Unfortunately, due to the fact that every tax situation is different and may require various levels of depth and time it would take to achieve a tax resolution, Ideal Tax cannot provide a price quote without learning more about your tax history.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-4">3</div>
                <p className="text-gray-700">
                  The cost for tax services is established on a case-by-case basis, often being impacted by the amount of tax debt the person owes and which tax relief program they may qualify for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Start Initiative Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">About The IRS Fresh Start Initiative</h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              The IRS Fresh Start Initiative is a tax relief program instated by the IRS in 2011 to help taxpayers manage the financial burden of tax debt. During your free consultation with a tax specialist, they will go over the different tax relief options within the Fresh Start Initiative and describe which programs you may be eligible for.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {freshStartPrograms.map((program, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-700">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Schedule Your Free Tax Consultation
            </h2>
            <p className="text-xl text-white/90 mb-8">
              If you are interested in hiring a tax debt relief company to file your tax return during this tax season, taking the first step of scheduling a free tax consultation will ensure the tax preparation services you are inquiring about would be an appropriate investment for your tax situation.
            </p>
            <Button
  asChild
  size="lg"
  className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
>
  <Link href="/survey">
    Schedule Your Free Consultation Today
  </Link>
</Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600">
              We provide professional guidance to people whose lives have been affected by tax problems. To evaluate your specific tax issue and determine if you qualify for tax relief and the fresh start program, please contact us for a free consultation. We are COVID-19 prepared, we will work with you over the phone and via e-mail. The content of this post does not replace the advice of a licensed tax professional. Consult a qualified tax professional for questions specific to your circumstances.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FreeTaxConsultation;
