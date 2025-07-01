
import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      title: "Tax Consultants",
      description: "Our experienced tax consultants provide initial assessments and guide you through the resolution process with personalized strategies tailored to your unique situation.",
      avatar: "👨‍💼",
      color: "brand-teal"
    },
    {
      title: "Enrolled Agents",
      description: "IRS-licensed professionals who can represent you before the IRS. Our enrolled agents handle complex negotiations and ensure your rights are protected throughout the process.",
      avatar: "👩‍💼",
      color: "brand-blue"
    },
    {
      title: "Case Managers",
      description: "Dedicated case managers keep you informed every step of the way, coordinating between different departments and ensuring your case progresses smoothly toward resolution.",
      avatar: "👨‍🏫",
      color: "brand-teal"
    },
    {
      title: "Tax Attorneys",
      description: "Our licensed tax attorneys handle the most complex cases, including criminal tax matters, appeals, and high-stakes negotiations with federal and state tax agencies.",
      avatar: "⚖️",
      color: "brand-blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-brand-blue bg-clip-text text-transparent">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of tax professionals brings decades of combined experience 
            to resolve your tax challenges with expertise and dedication.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-brand-teal relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-mint-50 to-deep-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{member.avatar}</span>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-4 text-gray-800 group-hover:text-${member.color} transition-colors text-center`}>
                  {member.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center text-sm">
                  {member.description}
                </p>

                {/* Hover Overlay */}
                <div className="absolute w-full inset-0 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <button className="text-gray-800 font-semibold border-brand-teal border-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
