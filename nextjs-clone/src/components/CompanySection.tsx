import React from 'react';
import Link from 'next/link';

const CompanySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-brand-blue bg-clip-text text-transparent">
              Our Company
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Ideal Tax is a premier tax resolution company dedicated to helping individuals 
                and businesses resolve their tax problems with the IRS and state tax agencies. 
                With over 13 years of experience in the industry, we have built a reputation 
                for delivering exceptional results and outstanding customer service.
              </p>
              
              <p>
                Our company maintains an A+ rating with the Better Business Bureau and is 
                headquartered in Orange County, California. We are licensed to practice 
                in 48 states, allowing us to serve clients across the nation with their 
                tax resolution needs.
              </p>
              
              <p>
                At Ideal Tax, we understand that dealing with tax problems can be overwhelming 
                and stressful. That's why our mission is to make tax relief accessible, 
                straightforward, and effective for every client we serve.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-mint-100">
                <div className="text-2xl font-bold text-brand-teal mb-2">A+</div>
                <div className="text-sm text-gray-600">BBB Rating</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-deep-blue-100">
                <div className="text-2xl font-bold text-brand-blue mb-2">48</div>
                <div className="text-sm text-gray-600">States Licensed</div>
              </div>
            </div>

            {/* About Us Link */}
            <div className="pt-4">
              <Link href="#" className="inline-flex items-center text-brand-teal hover:text-brand-blue font-semibold text-lg transition-colors">
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Google Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-4 shadow-xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.1234567890!2d-117.8211234!3d33.6666234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde0000000000%3A0x1234567890abcdef!2s240%20Progress%20Dr%20Suite%20250%2C%20Irvine%2C%20CA%2092618!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ideal Tax Office Location"
              ></iframe>
            </div>
            
            {/* Address overlay */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <h3 className="font-bold text-gray-800 text-sm">
                Orange County Headquarters
              </h3>
              <p className="text-gray-600 text-xs">
                240 Progress Suite 250<br />
                Irvine, CA 92618
              </p>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-teal opacity-20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-brand-blue opacity-20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
