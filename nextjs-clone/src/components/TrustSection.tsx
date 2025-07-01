
import React from 'react';

const TrustSection = () => {
  const partners = [
    { name: "Better Business Bureau", logo: "BBB", rating: "A+" },
    { name: "IRS", logo: "IRS", info: "Authorized" },
    { name: "NAEA", logo: "NAEA", info: "Member" },
    { name: "Best Company", logo: "BEST", info: "Certified" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Accredited & Trusted By:
            </h2>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-brand-teal"
            >
              <div className="text-center">
                {/* Logo/Badge */}
                <div className="w-16 h-16 bg-gradient-to-br from-mint-50 to-deep-blue-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-gray-700">
                    {partner.logo}
                  </span>
                </div>
                
                {/* Partner Name */}
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  {partner.name}
                </h3>
                
                {/* Rating/Info */}
                <p className="text-xs text-brand-teal font-medium">
                  {partner.rating || partner.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
