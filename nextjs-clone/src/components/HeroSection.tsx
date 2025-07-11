
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mint-50 via-white to-deep-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-brand-blue rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-mint-200 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Main Headline */}
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-gray-900 animate-fade-in delay-300 leading-tight whitespace-nowrap">
                We are tax relief made easy
              </h1>

              {/* Trust Indicators */}
              <div className="flex justify-center lg:justify-start space-x-8 animate-fade-in delay-1000 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-mint-100">
                  <div className="text-3xl font-bold text-brand-teal mb-2">15</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-mint-100">
                  <div className="text-3xl font-bold text-brand-blue mb-2">A+</div>
                  <div className="text-sm text-gray-600">BBB Rating</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-mint-100">
                  <div className="text-3xl font-bold text-brand-teal mb-2">47</div>
                  <div className="text-sm text-gray-600">States Licensed</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="animate-fade-in delay-700">
                <Link
                  href="/survey"
                  className="inline-block bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Find out if you qualify in 2 minutes
                </Link>
              </div>
            </div>

            {/* Right Column - Phone Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in delay-500">
              <div className="relative">
                <Image
                  src="/lovable-uploads/01bdc051-1397-4a38-a397-276163adfccc.png"
                  alt="Mobile phone mockup"
                  width={320}
                  height={480}
                  className="w-80 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 blur-3xl -z-10 scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
