// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [animateIn, setAnimateIn] = useState(false);

//   let hoverTimeout: any;
//   const handleMouseEnter = () => {
//     clearTimeout(hoverTimeout);
//     setServicesOpen(true);
//   };
//   const handleMouseLeave = () => {
//     hoverTimeout = setTimeout(() => setServicesOpen(false), 150); 
//   };

//   useEffect(() => {
//     if (open) {
//       setAnimateIn(false);
//       const id = requestAnimationFrame(() => setAnimateIn(true));
//       return () => cancelAnimationFrame(id);
//     } else {
//       setAnimateIn(false);
//     }
//   }, [open]);

//   const services = [
//     { title: 'IRS Fresh Start Program', link: '/irs-fresh-start-program' },
//     { title: 'Free Tax Consultation', link: '/free-tax-consultation' },
//     { title: 'Tax Preparation Service', link: '/tax-preparation-service' },
//     { title: 'Tax Debt Relief & IRS Forgiveness', link: '/tax-debt-relief-irs-forgiveness-programv0' },
//     { title: 'Amending Tax Returns', link: '/services/amending-tax-returns' },
//     { title: 'Asset Protection', link: '/services/asset-protection' },
//     { title: 'Back Taxes', link: '/services/back-taxes' },
//     { title: 'Bank Levy', link: '/services/bank-levy' },
//     { title: 'Currently Non-Collectible Status', link: '/services/currently-non-collectible-status' },
//     { title: 'Innocent Spouse Tax Relief', link: '/services/innocent-spouse-tax-relief' },
//     { title: 'Installment Agreements', link: '/services/installment-agreements-irs-payment-plans' },
//     { title: 'Offer in Compromise', link: '/services/offer-in-compromise' },
//     { title: 'Penalty Abatement', link: '/services/penalty-abatement' },
//     { title: 'Seizure', link: '/services/seizure' },
//     { title: 'Tax Audits', link: '/services/tax-audits' },
//     { title: 'Tax Lien Subordination', link: '/services/tax-lien-subordination' },
//     { title: 'Trust Fund Recovery Penalty', link: '/services/trust-fund-recovery-penalty' },
//     { title: 'Wage Garnishments', link: '/services/wage-garnishments' },
//     { title: 'Ideal Tax Protection Plan', link: '/services/ideal-tax-protection-plan' }
//   ];

//   return (
//     <nav className="pt-safe-top flex items-center justify-between px-6 pt-4 py-2 relative">
//       <div className="flex items-center space-x-2">
//        <a href="/"> <Image src="/logoblack.png" alt="Logo" width={131} height={50} /></a>
//       </div>

//       <div className="hidden lg:flex items-center space-x-2 rounded-full px-2 py-2 shadow-sm bg-white">
//         <a
//           href="/"
//           className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium text-sm"
//         >
//           Home
//         </a>

//         <div
//           className="relative"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
//             <span>Services</span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform duration-200 ${
//                 servicesOpen ? "rotate-180" : "rotate-0"
//               }`}
//             />
//           </div>

//             {servicesOpen && (
//   <div
//     className="absolute top-full left-0 mt-2 w-48 shadow-lg rounded-xl py-2 z-50 
//                flex flex-col bg-white max-h-64 overflow-y-auto"
//   >
//     {services.map((service) => (
//       <a
//         key={service.title}
//         href={service.link}
//         className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm transition-colors duration-200"
//       >
//         {service.title}
//       </a>
//     ))}
//   </div>
// )}
//         </div>

//       <Link
//   href="/careers"
//   className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200"
// >
//   Careers
// </Link>

// <Link
//   href="/contact-us"
//   className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200"
// >
//   Contact
// </Link>

// <Link
//   href="/reviews"
//   className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200"
// >
//   Reviews
// </Link>

// <Link
//   href="/faq"
//   className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200"
// >
//   FAQs
// </Link>

// {/* <Link
//   href="/blog"
//   className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200"
// >
//   Blog
// </Link> */}
//       </div>

//       <Link
//       href="/survey"
//       className="hidden lg:inline-block bg-[#3059E4] text-white border-[5px] border-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors text-sm text-center"
//     >
//       Get started
//     </Link>

     
//       <div className="flex lg:hidden">
//         <button
//           onClick={() => setOpen(!open)}
//           className="text-gray-700 focus:outline-none"
//         >
//           <div className="p-2 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer">
//   {open ? (
//     <X className="w-6 h-6 text-gray-800" />
//   ) : (
//     <Menu className="w-6 h-6 text-gray-800" />
//   )}
// </div>

//         </button>
//       </div>

//       {open && (
//         <div
//           className={`flex lg:hidden absolute top-full left-0 w-[100%] shadow-md rounded-b-xl mt-2 flex-col items-center space-y-2 py-4 z-50
//             transition-all duration-300 ease-out origin-top transform bg-white
//             ${animateIn ? "opacity-100 translate-y-0 scale-y-100" : "opacity-0 -translate-y-2 scale-y-95"}`}
//         >
//           <Link
//   href="/"
//             className="px-6 py-2 bg-[#3059E4] text-white rounded-full font-medium text-sm"
//           >
//             Home
//           </Link>

//           <div className="w-full">
//             <div
//               onClick={() => setServicesOpen(!servicesOpen)}
//               className="flex items-center justify-center px-6 py-2 text-gray-700 cursor-pointer rounded-full hover:bg-gray-50 text-sm"
//             >
//               <span>Services</span>
//               <ChevronDown
//                 className={`w-4 h-4 transition-transform ${
//                   servicesOpen ? "rotate-180" : "rotate-0"
//                 }`}
//               />
//             </div>
//             {servicesOpen && (
//               <div className="flex flex-col w-full px-6 mt-1 space-y-1">
//                 {services.map((service) => (
//                   <a
//                     key={service.title}
//                     href={service.link}
//                     className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm transition-colors duration-200"
//                   >
//                     {service.title}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>

//                 <Link
//   href="/careers"
//             className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full"
//           >
//             Careers
//           </Link>
//           <Link href="contact-us"
//             className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full"
//           >
//             Contact
//           </Link>
//           <Link href="reviews"
//             className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full"
//           >
//             Reviews
//           </Link>
//           <Link href="faq"
//             className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full"
//           >
//             FAQs
//           </Link>
//           {/* <Link href="blog"
//             className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full"
//           >
//             Blog
//           </Link> */}
//            <Link
//       href="/survey"
//       className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors text-sm mt-2 text-center"
//     >
//       Get started
//     </Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [animateIn, setAnimateIn] = useState(false);
//   const [isFixed, setIsFixed] = useState(false);

//   // Fix navbar on scroll past top
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsFixed(currentScrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Dropdown animation
//   useEffect(() => {
//     if (open) {
//       setAnimateIn(false);
//       const id = requestAnimationFrame(() => setAnimateIn(true));
//       return () => cancelAnimationFrame(id);
//     } else {
//       setAnimateIn(false);
//     }
//   }, [open]);

//   let hoverTimeout: any;
//   const handleMouseEnter = () => {
//     clearTimeout(hoverTimeout);
//     setServicesOpen(true);
//   };
//   const handleMouseLeave = () => {
//     hoverTimeout = setTimeout(() => setServicesOpen(false), 150);
//   };

//   const services = [
//     { title: 'IRS Fresh Start Program', link: '/irs-fresh-start-program' },
//     { title: 'Free Tax Consultation', link: '/free-tax-consultation' },
//     { title: 'Tax Preparation Service', link: '/tax-preparation-service' },
//     { title: 'Tax Debt Relief & IRS Forgiveness', link: '/tax-debt-relief-irs-forgiveness-programv0' },
//     { title: 'Amending Tax Returns', link: '/services/amending-tax-returns' },
//     { title: 'Asset Protection', link: '/services/asset-protection' },
//     { title: 'Back Taxes', link: '/services/back-taxes' },
//     { title: 'Bank Levy', link: '/services/bank-levy' },
//     { title: 'Currently Non-Collectible Status', link: '/services/currently-non-collectible-status' },
//     { title: 'Innocent Spouse Tax Relief', link: '/services/innocent-spouse-tax-relief' },
//     { title: 'Installment Agreements', link: '/services/installment-agreements-irs-payment-plans' },
//     { title: 'Offer in Compromise', link: '/services/offer-in-compromise' },
//     { title: 'Penalty Abatement', link: '/services/penalty-abatement' },
//     { title: 'Seizure', link: '/services/seizure' },
//     { title: 'Tax Audits', link: '/services/tax-audits' },
//     { title: 'Tax Lien Subordination', link: '/services/tax-lien-subordination' },
//     { title: 'Trust Fund Recovery Penalty', link: '/services/trust-fund-recovery-penalty' },
//     { title: 'Wage Garnishments', link: '/services/wage-garnishments' },
//     { title: 'Ideal Tax Protection Plan', link: '/services/ideal-tax-protection-plan' }
//   ];

//   return (
//     <nav className={`pt-safe-top flex items-center justify-between px-6 py-2 transition-all duration-300 ${isFixed ? 'fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md' : 'relative bg-transparent'}`}>
//       <div className="flex items-center space-x-2">
//         <Link href="/"><Image src="/logoblack.png" alt="Logo" width={131} height={50} /></Link>
//       </div>

//       {/* Desktop Links */}
//       <div className="hidden lg:flex items-center space-x-2 rounded-full px-2 py-2 shadow-sm bg-white ml-[90px]">
//         <a href="/" className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium text-sm">Home</a>

//         <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//           <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
//             <span>Services</span>
//             <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : "rotate-0"}`} />
//           </div>
//           {servicesOpen && (
//             <div className="absolute top-full left-0 mt-2 w-48 shadow-lg rounded-xl py-2 z-50 flex flex-col bg-white max-h-64 overflow-y-auto">
//               {services.map(service => (
//                 <a key={service.title} href={service.link} className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm transition-colors duration-200">
//                   {service.title}
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>

//         <Link href="/careers" className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">Careers</Link>
//         <Link href="/contact-us" className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">Contact</Link>
//         <Link href="/reviews" className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">Reviews</Link>
//         <Link href="/faq" className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">FAQs</Link>
//       </div>

//       {/* Call Now + Get Started */}
//       <div className="hidden lg:flex items-center space-x-2">
//         <a href="tel:+1234567890" className="px-6 py-2 bg-white text-blue-600 rounded-full font-medium border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-sm">Call Now</a>
//         <Link href="/survey" className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-sm">Get Started</Link>
//       </div>

//       {/* Mobile menu toggle */}
//       <div className="flex lg:hidden">
//         <button onClick={() => setOpen(!open)} className="text-gray-700 focus:outline-none">
//           <div className="p-2 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer">
//             {open ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
//           </div>
//         </button>
//       </div>

//       {/* Mobile dropdown */}
//       {open && (
//         <div className={`flex lg:hidden absolute top-full left-0 w-full shadow-md rounded-b-xl mt-2 flex-col items-center space-y-2 py-4 z-50 transition-all duration-300 ease-out origin-top transform bg-white ${animateIn ? "opacity-100 translate-y-0 scale-y-100" : "opacity-0 -translate-y-2 scale-y-95"}`}>
//           <Link href="/" className="px-6 py-2 bg-[#3059E4] text-white rounded-full font-medium text-sm">Home</Link>

//           <div className="w-full">
//             <div onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-center px-6 py-2 text-gray-700 cursor-pointer rounded-full hover:bg-gray-50 text-sm">
//               <span>Services</span>
//               <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`} />
//             </div>
//             {servicesOpen && (
//               <div className="flex flex-col w-full px-6 mt-1 space-y-1">
//                 {services.map(service => (
//                   <a key={service.title} href={service.link} className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm transition-colors duration-200">
//                     {service.title}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link href="/careers" className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full">Careers</Link>
//           <Link href="/contact-us" className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full">Contact</Link>
//           <Link href="/reviews" className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full">Reviews</Link>
//           <Link href="/faq" className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full">FAQs</Link>

//           <div className="flex space-x-2 mt-2">
//             <a href="tel:+1234567890" className="px-6 py-2 bg-white text-blue-600 rounded-full font-medium border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-sm">Call Now</a>
//             <Link href="/survey" className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-sm">Get Started</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsFixed(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      setAnimateIn(false);
      const id = requestAnimationFrame(() => setAnimateIn(true));
      return () => cancelAnimationFrame(id);
    } else {
      setAnimateIn(false);
    }
  }, [open]);

  let hoverTimeout: any;
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setServicesOpen(true);
  };
  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setServicesOpen(false), 150);
  };

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
    <nav className={`pt-safe-top flex items-center justify-between px-6 py-2 transition-all duration-0 ${isFixed ? 'fixed top-0 left-0 w-full z-50 bg-white/0 backdrop-blur-md shadow-md' : 'fixed top-0 left-0 w-full z-50 bg-white/0 backdrop-blur-md shadow-md'} w-full`}>
      <div className="flex items-center space-x-2">
        <Link href="/"><Image src="/logoblack.png" alt="Logo" width={131} height={50} /></Link>
      </div>

      <div className="hidden lg:flex items-center space-x-2 rounded-full px-2 py-2 shadow-sm bg-white ml-[90px]">
        <a href="/" className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium text-sm">Home</a>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
            <span>Services</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : "rotate-0"}`} />
          </div>
          {servicesOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 shadow-lg rounded-xl py-2 z-50 flex flex-col bg-white max-h-64 overflow-y-auto">
              {services.map(service => (
                <a key={service.title} href={service.link} className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm transition-colors duration-200">
                  {service.title}
                </a>
              ))}
            </div>
          )}
        </div>

        <Link href="/careers" className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">Careers</Link>
        <Link href="/contact-us" className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">Contact</Link>
        <Link href="/reviews" className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">Reviews</Link>
        <Link href="/faq" className="text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">FAQs</Link>
      </div>

      <div className="hidden lg:flex items-center space-x-2">
        <a href="tel:+18775182860" className="px-6 py-2 bg-white text-blue-600 rounded-full font-medium border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-sm">Call Now</a>
        <Link href="/survey" className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-sm">Get Started</Link>
      </div>

      <div className="flex lg:hidden">
        <button onClick={() => setOpen(!open)} className="text-gray-700 focus:outline-none">
          <div className="p-2 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer">
            {open ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </div>
        </button>
      </div>

      {open && (
        <div className={`flex lg:hidden absolute top-full left-0 w-full shadow-md rounded-b-xl mt-2 flex-col items-center space-y-2 py-4 z-50 transition-all duration-300 ease-out origin-top transform bg-white ${animateIn ? "opacity-100 translate-y-0 scale-y-100" : "opacity-0 -translate-y-2 scale-y-95"}`}>
          <Link href="/" className="px-6 py-2 bg-[#3059E4] text-white rounded-full font-medium text-sm">Home</Link>

          <div className="w-full">
            <div onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-center px-6 py-2 text-gray-700 cursor-pointer rounded-full hover:bg-gray-50 text-sm">
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`} />
            </div>
            {servicesOpen && (
              <div className="flex flex-col w-full px-6 mt-1 space-y-1">
                {services.map(service => (
                  <a key={service.title} href={service.link} className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm transition-colors duration-200">
                    {service.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link href="/careers" className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full">Careers</Link>
          <Link href="/contact-us" className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full">Contact</Link>
          <Link href="/reviews" className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full">Reviews</Link>
          <Link href="/faq" className="text-gray-700 text-sm px-6 py-2 hover:bg-gray-50 rounded-full">FAQs</Link>

          <div className="flex space-x-2 mt-2">
            <a href="tel:+18775182860" className="px-6 py-2 bg-white text-blue-600 rounded-full font-medium border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-sm">Call Now</a>
            <Link href="/survey" className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-sm">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}