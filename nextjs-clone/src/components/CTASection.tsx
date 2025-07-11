
import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-mint-50 via-white to-deep-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
            Ready to Join Our Success Stories?
          </h2>
          
          <div>
            <Link
              href="/survey"
              className="inline-block bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Qualify now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
