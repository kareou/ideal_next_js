
import React from 'react';
import Link from 'next/link';

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title and Button */}
            <div className="text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
                The Ideal Process
              </h2>
              <div>
                <Link
                  href="/survey"
                  className="inline-block bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Qualify for a program
                </Link>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="text-left">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Investigation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We pull your IRS transcripts, examine every filing and notice, 
                  then assess your financial situation to develop a tailored 
                  resolution plan.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Resolution</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our Tax Preparers file all required returns, and our Tax 
                  Professionals negotiate your qualified relief program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
