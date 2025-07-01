
import React from 'react';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Easy tax relief
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              If you're experiencing or worried about tax liens, levies, garnishments, or more…
              our experienced team of tax professionals is here to help you navigate through
              your tax challenges with proven solutions.
            </p>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-brand-blue">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-teal to-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <p className="font-medium">Professional Tax Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
