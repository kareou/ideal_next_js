"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSlider: React.FC<{ teamMembers: typeof teamMembers }> = ({ teamMembers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="min-w-full text-center bg-[#F9FAFA] px-6 py-10 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden relative mx-auto mb-6">
                <Image
                  src={member.bgColor}
                  alt={member.title}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{member.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex space-x-2 mt-4">
        {teamMembers.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

const ExpertTeam: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const teamMembers = [
    {
      id: 1,
      title: "Faris Khatib - CEO",
      description:
        "Faris sets vision and pace for growth, aligning teams around clear goals. He mentors leaders, refines strategy, and champions a culture of ownership, clarity, and care.",
      bgColor: "/hq_idl/faris.png",
    },
    {
      id: 2,
      title: "Jacky - Sales operations manager",
      description:
        "Jacky turns pipeline chaos into flow, mapping processes, tooling the CRM, and coaching reps. She forecasts reliably and unlocks repeatable revenues with crisp handoffs.",
      bgColor: "/hq_idl/jacky.png",
    },
    {
      id: 3,
      title: "Michelle - Servicing assistant manager",
      description:
        "Michelle keeps service humming: triaging requests, tracking SLAs, and closing loops. She bridges teams, clarifies next steps, and ensures clients feel heard.",
      bgColor: "/hq_idl/michelle.png",
    },
    {
      id: 4,
      title: `Preci - Servicing Director`,
      description:
        "Preci directs servicing at scale, defining standards, improving workflows, and raising quality bars. She tackles tough escalations and turns insight into lasting fixes.",
      bgColor: "/hq_idl/preci.png",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-up">
          <p className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">
            FIELDS EXPERTS
          </p>
          <h2 className="text-[40px] md:text-5xl font-bold text-gray-900 mb-5">Our Expert Team</h2>
          <p className="text-gray-500 text-base md:text-xl max-w-4xl mx-auto leading-relaxed mb-12">
            Our diverse team of tax professionals brings decades of combined experience
            to resolve your tax challenges with expertise and dedication.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/about"
              className="inline-block px-8 py-3 text-gray-700 hover:text-white font-medium rounded-full border border-gray-300 hover:bg-blue-700 transition-colors duration-200"
            >
              About us
            </Link>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="text-center bg-[#F9FAFA] px-6 py-10 rounded-lg max-w-xs mx-auto hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden relative mx-auto mb-6">
                <Image
                  src={member.bgColor}
                  alt={member.title}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{member.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Carousel below 1024px */}
        <div className="lg:hidden">
          <TeamSlider teamMembers={teamMembers} />
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
