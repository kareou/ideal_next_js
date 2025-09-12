"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TeamMember {
  id: number;
  title: string;
  description: string;
  bgColor: string;
}

const teamMembers = [
    {
      id: 1,
      title: "Faris Khatib",
      subTitle : "Chief Executive Officer",
      description:
        "Faris sets vision and pace for growth, aligning teams around clear goals. He mentors leaders, refines strategy, and champions a culture of ownership, clarity, and care.",
      bgColor: "/hq_idl/faris.png",
    },
    {
      id: 2,
      title: "Jaquelyn Stenbakken",
      subTitle : "Sales Operations Manager",
      description:
        "Jacky turns pipeline chaos into flow, mapping processes, tooling the CRM, and coaching reps. She forecasts reliably and unlocks repeatable revenues with crisp handoffs.",
      bgColor: "/hq_idl/jacky.png",
    },
    {
      id: 3,
      title: "Michelle Martinez",
      subTitle : "Servicing Assistant Manager",
      description:
        "Michelle keeps service humming: triaging requests, tracking SLAs, and closing loops. She bridges teams, clarifies next steps, and ensures clients feel heard.",
      bgColor: "/hq_idl/michelle.png",
    },
    {
      id: 4,
      title: `Preciosa Vidal`,
      subTitle : "Servicing Director",
      description:"Preci directs servicing at scale, defining standards, improving workflows, and raising quality bars. She tackles tough escalations and turns insight into lasting fixes.",
      bgColor: "/hq_idl/preci.png",
    },
  ];

const About = () => {

  const stats = [
    { number: "13+", label: "Years of Experience" },
    { number: "10,000+", label: "Clients Helped" },
    { number: "$50M+", label: "Tax Debt Resolved" },
    { number: "95%", label: "Success Rate" },
  ];
  return (<>
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet <span className="text-brand-teal">The Team</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our experienced professionals are dedicated to providing
              exceptional tax resolution services and ensuring complete client
              satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/survey">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Get Started Today
                </Button>
              </Link>
              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  <a href="tel:+18775182860">Call (877) 518-2860</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pt-20 pb-10 bg-white">
        <div className="container mx-auto px-6">
          {/* Desktop: Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-12 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="text-center bg-[#F9FAFA] px-6 py-10 rounded-lg hover:shadow-lg transition-shadow duration-300"
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
               <h3 className="text-[18px] font-semibold text-blue-600 mb-2">{member.title}</h3>
              <p className="text-[15px] text-blue-500 mb-4">{member.subTitle}</p>
              <p className="text-gray-500 text-base leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{ clickable: true }}
              // navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="text-center bg-[#F9FAFA] px-6 py-10 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <div className="w-28 h-28 rounded-full overflow-hidden relative mx-auto mb-6">
                      <Image
                        src={member.bgColor}
                        alt={member.title}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>
                   <h3 className="text-[18px] font-semibold text-blue-600 mb-2">{member.title}</h3>
              <p className="text-[15px] text-blue-500 mb-4">{member.subTitle}</p>
              <p className="text-gray-500 text-base leading-relaxed">{member.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      
    </div>
    <section className="pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Professional Team
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Servicing Team is composed of self-motivated, energetic,
              caring, and compassionate customer service professionals. They
              work hard each day to ensure that our clients are being
              communicated with and are receiving the best representation before
              the IRS.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our staff of independent Tax Attorneys and Enrolled Agents
              continue to expand their knowledge so to provide new and
              innovative ways in helping clients resolve their burdensome tax
              problems. IT also embraces the differences and uniqueness between
              our clients and their needs, and we work hard to develop an
              individualized relationship with each of our clients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We also offer professional tax preparation for clients who already
              have retained us for other services.
            </p>
          </div>
        </div>
      </section>          
    <section className="py-20 bg-gradient-to-br from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to helping taxpayers
              achieve financial freedom.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-brand-teal mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection /></>
  );
};

export default About;
