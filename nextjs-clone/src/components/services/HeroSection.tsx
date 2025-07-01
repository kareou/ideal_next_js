import React from "react";
import Image from "next/image";
function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 bg-gradient-to-br from-mint-50 via-white to-deep-blue-50">
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-sm">
          Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          The professionals at Ideal Tax provide solutions and methods for even
          the most unique tax problems. Our experienced staff will guide you
          through a brief and free consultation to evaluate your tax issue and
          identify areas for relief.
        </p>
        <p className="text-base md:text-lg text-gray-500">
          Using specialized training and proprietary software, we analyze your
          tax debt and suggest the best course of action, providing you with
          realistic expectations. Don't wait to exercise your right to
          professional tax representation and get the help you deserve.
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center max-w-md w-full">
        <Image
          width={500}
          height={500}
          src="/services/tax-consultant.jpg"
          alt="Tax consultant at desk illustration"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default HeroSection;
