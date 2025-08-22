"use client"; 
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

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
      title: "Tax Consultants",
      description:
        "Our experienced tax consultants provide initial assessments and guide you through the resolution process with personalized strategies tailored to your unique situation.",
      bgColor: "/team/test1.png",
    },
    {
      id: 2,
      title: "Enrolled Agents",
      description:
        "IRS-licensed professionals who can represent you before the IRS. Our enrolled agents handle complex negotiations and ensure your rights are protected throughout the process.",
      bgColor: "/team/test2.jpg",
    },
    {
      id: 3,
      title: "Case Managers",
      description:
        "Dedicated case managers keep you informed every step of the way, coordinating between different departments and ensuring your case progresses smoothly toward resolution.",
      bgColor: "/team/test3.png",
    },
    {
      id: 4,
      title: "Tax Attorneys",
      description:
        "Our licensed tax attorneys handle the most complex cases, including criminal tax matters, appeals, and high-stakes negotiations with federal and state tax agencies.",
      bgColor: "/team/test4.png",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-up">
          <p className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">
            FIELDS EXPERTS
          </p>
          <h2 className="text-[40px] md:text-5xl font-bold text-gray-900 mb-5">
            Our Expert Team
          </h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="text-center bg-[#F9FAFA] px-6 py-10 rounded-lg max-w-xs mx-auto hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150} // stagger animation
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

              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {member.title}
              </h3>

              <p className="text-gray-500 text-base leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
