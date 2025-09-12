import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
   const quickLinks = ["About us", "Services", "Contact us", "Careers", "Reviews"];
  const legalLinks = ["Terms", "Privacy", "SMS Terms & Conditions", "Sales & Refunds", "FAQ"];
  const socials = [
  { href: "https://www.facebook.com/idealtaxsolution", file: "facebook.svg", alt: "facebook" },
  { href: "https://x.com/idealtax_", file: "twitter.svg", alt: "x" },
  { href: "https://www.instagram.com/idealtax_/", file: "instagram.svg", alt: "instagram" },
  { href: "https://www.linkedin.com/company/idealtax/", file: "linkedin.svg", alt: "linkedin" },
];
  const routesMap: Record<string, string> = {
    "About us": "/about",
    "Services": "/services",
    "Contact us": "/contact-us",
    "Careers": "/careers",
    "Reviews": "/reviews",
    "Terms": "/terms-of-use",
    "Privacy": "/privacy-policy",
    "SMS Terms & Conditions": "/sms-terms-conditions",
    "Sales & Refunds": "/sales-and-refunds",
    "FAQ": "/faq",
  };
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image src="/logoblack.png" alt="Logo" width={131} height={50} />
            </div>
            <p className="text-gray-500 text-sm">Tax Relief Made Easy</p>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#5874EA]" />
                <span>
                  240 Progress Suite 250
                  <br />
                  Irvine, CA 92618
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#5874EA]" />
                <span>customercare@idealtax.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#5874EA]" />
                <span>877-518-2860</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-4">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={routesMap[link]}
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={routesMap[link]}
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Idealtax
            </div>



            <div className="flex justify-center space-x-6">
      {socials.map((s, i) => (
        <Link
          key={i}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <div className="w-5 h-5 relative">
            <Image
              src={`/socials/${s.file}`}
              alt={s.alt}
              fill
              className="object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
