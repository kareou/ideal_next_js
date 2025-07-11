"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'IRS Fresh Start Program', link: '/irs-fresh-start-program' },
    { title: 'Free Tax Consultation', link: '/free-tax-consultation' },
    { title: 'Tax Preparation Service', link: '/tax-preparation-service' },
    { title: 'Tax Debt Relief & IRS Forgiveness', link: '/tax-debt-relief-irs-forgiveness-programv0' },
    { title: 'Amending Tax Returns', link: '/services/amending-tax-returns' },
    { title: 'Asset Protection', link: '/services/asset-protection' },
    { title: 'Back Taxes', link: '/services/back-taxes' },
    { title: 'Bank Levy', link: '/services/bank-levy' },
    { title: 'Currently Non-Collectible Status', link: '/services/currently-non-collectible-status' },
    { title: 'Innocent Spouse Tax Relief', link: '/services/innocent-spouse-tax-relief' },
    { title: 'Installment Agreements', link: '/services/installment-agreements-irs-payment-plans' },
    { title: 'Offer in Compromise', link: '/services/offer-in-compromise' },
    { title: 'Penalty Abatement', link: '/services/penalty-abatement' },
    { title: 'Seizure', link: '/services/seizure' },
    { title: 'Tax Audits', link: '/services/tax-audits' },
    { title: 'Tax Lien Subordination', link: '/services/tax-lien-subordination' },
    { title: 'Trust Fund Recovery Penalty', link: '/services/trust-fund-recovery-penalty' },
    { title: 'Wage Garnishments', link: '/services/wage-garnishments' },
    { title: 'Ideal Tax Protection Plan', link: '/services/ideal-tax-protection-plan' }
  ];

  return (
    <div className="fixed w-full z-50 top-0">
      {/* Contact Bar */}
      <div className="bg-white border-b border-gray-100 py-2 text-sm text-gray-600 text-center">
        (877) 518-2860 | customercare@idealtax.com
      </div>
      
      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="bg-gradient-to-r from-brand-teal to-brand-blue p-2 rounded-lg">
                <Image
                  src="/lovable-uploads/2fba1b84-500b-4f86-8218-2081e703994c.png"
                  alt="IdealTax Logo"
                  width={24}
                  height={24}
                  className="h-6 w-auto"
                  unoptimized
                />
              </div>
            </Link>

            {/* Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">
                Home
              </Link>
              
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-gray-700 hover:text-brand-blue transition-colors font-medium"
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in z-50 max-h-96 overflow-y-auto">
                    <Link
                      href="/services"
                      className="block px-6 py-3 text-gray-700 hover:bg-mint-50 hover:text-brand-teal transition-all font-medium border-b border-gray-100"
                    >
                      All Services
                    </Link>
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.link}
                        className="block px-6 py-3 text-gray-700 hover:bg-mint-50 hover:text-brand-teal transition-all"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/careers" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">
                Careers
              </Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">
                Contact
              </Link>
              <Link href="/reviews" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">
                Reviews
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">
                FAQs
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">
                Blog
              </Link>
              
              {/* CTA Button */}
              <Link
                href="/survey"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
