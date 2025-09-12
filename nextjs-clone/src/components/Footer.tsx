import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

import { Linkedin } from 'lucide-react';

const Footer = () => {
  const socials = [
  { href: "https://www.facebook.com/idealtaxsolution", file: "facebook.svg", bg: "bg-brand-teal/10", hover: "hover:bg-brand-teal/20", color: "text-brand-teal" },
  { href: "https://x.com/idealtax_", file: "twitter.svg", bg: "bg-brand-blue/10", hover: "hover:bg-brand-blue/20", color: "text-brand-blue" },
  { href: "https://www.instagram.com/idealtax_/", file: "instagram.svg", bg: "bg-brand-teal/10", hover: "hover:bg-brand-teal/20", color: "text-brand-teal" },
  { href: "https://www.linkedin.com/company/idealtax/", file: "linkedin.svg", bg: "bg-brand-blue/10", hover: "hover:bg-brand-blue/20", color: "text-brand-blue" },
];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      {/* Upper Footer */}
      <div className="bg-gradient-to-r from-mint-50 to-deep-blue-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            We Are Tax Relief Made Easy
          </h2>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
  {socials.map((s, i) => (
    <Link
      key={i}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${s.bg} ${s.hover} w-12 h-12 rounded-full flex items-center justify-center transition-colors`}
    >
      <div className="w-6 h-6 relative">
        <Image
          src={`/socials/${s.file}`}
          alt={s.file.split(".")[0]}
          fill
          className="object-contain"
        />
      </div>
    </Link>
  ))}
</div>

        </div>
      </div>

      {/* Lower Footer */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Navigation Links */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-brand-teal transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-brand-teal transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-brand-teal transition-colors">Services</Link></li>
                <li><Link href="/careers" className="text-gray-600 hover:text-brand-teal transition-colors">Careers</Link></li>
                <li><Link href="/contact-us" className="text-gray-600 hover:text-brand-teal transition-colors">Contact Us</Link></li>
                <li><Link href="/reviews" className="text-gray-600 hover:text-brand-teal transition-colors">Reviews</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-brand-blue transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-use" className="text-gray-600 hover:text-brand-blue transition-colors">Terms of Use</Link></li>
                <li><Link href="/sms-terms-conditions" className="text-gray-600 hover:text-brand-blue transition-colors">SMS Terms & Conditions</Link></li>
                <li><Link href="/sales-and-refunds" className="text-gray-600 hover:text-brand-blue transition-colors">Sales & Refunds</Link></li>
                <li><Link href="/faq" className="text-gray-600 hover:text-brand-blue transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
          <div>
  <h4 className="font-bold text-gray-800 mb-4">Contact Information</h4>
  <div className="space-y-3">
    {/* Address */}
    <div className="flex items-start">
      <div className="w-6 h-6 bg-brand-teal/10 rounded-full flex items-center justify-center mr-3 mt-1">
        <MapPin className="w-3.5 h-3.5 text-brand-teal" />
      </div>
      <div className="text-gray-600">
        240 Progress Suite 250<br />
        Irvine, CA 92618
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-center">
      <div className="w-6 h-6 bg-brand-blue/10 rounded-full flex items-center justify-center mr-3">
        <Phone className="w-3.5 h-3.5 text-brand-blue" />
      </div>
      <a href="tel:+18775182860" className="text-gray-600 hover:text-brand-blue transition-colors">
        877-518-2860
      </a>
    </div>

    {/* Email */}
    <div className="flex items-center">
      <div className="w-6 h-6 bg-brand-teal/10 rounded-full flex items-center justify-center mr-3">
        <Mail className="w-3.5 h-3.5 text-brand-teal" />
      </div>
      <a href="mailto:info@idealtax.com" className="text-gray-600 hover:text-brand-teal transition-colors">
        info@idealtax.com
      </a>
    </div>
  </div>
</div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              © 2025 Ideal Tax. All rights reserved. Licensed in 48 states.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
