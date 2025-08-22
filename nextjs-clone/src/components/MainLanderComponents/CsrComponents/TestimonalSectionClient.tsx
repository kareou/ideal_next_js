"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialsSlider: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-out",
      once: false, 
      mirror: true, 
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "We pull your IRS transcripts, examine every filing and notice, then assess your financial situation to develop a tailored resolution plan.",
      author: "Richard Seese",
      subtitle: "Review on Google",
      rating: 5,
    },
    {
      id: 2,
      text: "Outstanding service and expertise. They helped me navigate complex tax issues with professionalism and care. Highly recommended!",
      author: "Sarah Johnson",
      subtitle: "Review on Yelp",
      rating: 5,
    },
    {
      id: 3,
      text: "Incredible attention to detail and personalized approach. They made what seemed impossible feel manageable and achievable.",
      author: "Michael Chen",
      subtitle: "Review on Google",
      rating: 5,
    },
    {
      id: 4,
      text: "Professional, reliable, and results-driven. They exceeded my expectations and delivered exactly what they promised.",
      author: "Emily Rodriguez",
      subtitle: "Review on TrustPilot",
      rating: 5,
    },
    {
      id: 5,
      text: "From start to finish, the experience was seamless. Their team is knowledgeable, responsive, and truly cares about client success.",
      author: "David Thompson",
      subtitle: "Review on Google",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1200) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= testimonials.length - visibleCards ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [visibleCards, testimonials.length]);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));

  return (
    <section className="bg-[#E7EEF9] py-16 px-4 my-5" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-[#1B45CE] font-semibold text-sm tracking-wider uppercase mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-[40px] md:text-5xl font-bold text-gray-900">
            What our customers say
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex-shrink-0 px-4 py-5 ${
                  visibleCards === 1 ? "w-full" : visibleCards === 2 ? "w-1/2" : "w-1/3"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 150} // stagger animation
              >
                <div className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div className="flex mb-6">{renderStars(testimonial.rating)}</div>

                  <p className="text-gray-400 text-base leading-relaxed mb-8 font-medium">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 overflow-hidden relative">
                      <Image
                        src="/user.png"
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A1B47] text-[16px]">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-500 text-sm">{testimonial.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
