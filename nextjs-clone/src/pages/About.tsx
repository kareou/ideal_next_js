import React from "react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Shield } from "lucide-react";
import Image from 'next/image';
import Link from "next/link"


const About = () => {
  const stats = [
    { number: "13+", label: "Years of Experience" },
    { number: "10,000+", label: "Clients Helped" },
    { number: "$50M+", label: "Tax Debt Resolved" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet <span className="text-brand-teal">The Team</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our experienced professionals are dedicated to providing
              exceptional tax resolution services and ensuring complete client
              satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/survey">
  <Button
    size="lg"
    className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
  >
    Get Started Today
  </Button>
</Link>
             <a
  href="tel:+18775182860"
  className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-4 px-8 rounded-full transition-all duration-300 inline-block text-center"
>
  Call (877) 518-2860
</a>

            </div>
          </div>
        </div>
      </section>

      {/* Team Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Faris Khatib - CEO */}
            <div className="bg-gradient-to-br from-mint-50 to-deep-blue-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/lovable-uploads/d3abf245-55a4-4475-80e5-4f2cc24413ef.png"
                    alt="Faris Khatib - CEO"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Faris Khatib
                </h3>
                <p className="text-brand-teal font-semibold text-lg">CEO</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                With over a decade of expertise in nurturing and managing tax
                resolution firms, Faris contributes a wealth of knowledge in the
                industry. Playing a pivotal role as a founding member of Ideal
                Tax, his primary objective is to deliver optimal client service
                coupled with the finest tax relief solutions available. Faris
                holds the belief that the essential factor in ensuring complete
                client satisfaction with the services rendered lies in the
                thorough ongoing training of our employees.
              </p>
            </div>

            {/* Preciosa Vidal - Servicing Director */}
            <div className="bg-gradient-to-br from-deep-blue-50 to-mint-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/lovable-uploads/6519c4ea-b868-4581-be6d-f4a96e2399e4.png"
                    alt="Preciosa Vidal - Servicing Director"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Preciosa Vidal
                </h3>
                <p className="text-brand-blue font-semibold text-lg">
                  Servicing Director
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Preciosa possesses a wealth of experience exceeding over 15
                years in the realm of tax consultancy, serving as both a
                seasoned Tax Preparer and Enrolled Agent. In her role, she takes
                charge of supervising all tax investigations on behalf of our
                clients. Collaborating closely with her team of Tax
                Investigation Specialist, she leads the charge of examining and
                evaluating financial records and IRS transcripts, aiming to
                discern the optimal course of action for resolving our clients'
                tax issues.
              </p>
            </div>
          </div>

          {/* Our Team Description */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Professional Team
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Servicing Team is composed of self-motivated, energetic,
              caring, and compassionate customer service professionals. They
              work hard each day to ensure that we keep clients informed and are receiving the best representation before
              the IRS.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our independent tax attorneys and enrolled agents continually expand their knowledge to provide innovative ways to help clients resolve their burdensome tax
              problems. We also embrace the differences and uniqueness between
              our clients and their needs, and we work hard to develop an
              individualized relationship with each of our clients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We also offer professional tax preparation for clients who have already retained us for other services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to helping taxpayers
              achieve financial freedom.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-brand-teal mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience the IdealTax Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied clients who have achieved tax relief
              with our help. Contact us today for your free consultation.
            </p>
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
