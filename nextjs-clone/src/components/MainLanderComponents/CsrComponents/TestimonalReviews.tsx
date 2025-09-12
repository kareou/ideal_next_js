"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonalReviews: React.FC = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    AOS.init({ duration: 300, easing: "ease-in-out", once: false, mirror: true });
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        if (data.reviews) setTestimonials(data.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

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
    const interval = setInterval(() => handleNext(), 4000);
    return () => clearInterval(interval);
  }, [visibleCards, testimonials]);

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCards : prev - 1
    );

  const handleNext = () =>
    setCurrentIndex((prev) =>
      prev >= testimonials.length - visibleCards ? 0 : prev + 1
    );

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext(); // swipe left
    if (diff < -50) handlePrev(); // swipe right
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));

  const SkeletonCard = () => (
    <div className={`flex-shrink-0 px-4 py-5 ${visibleCards === 1 ? "w-full" : visibleCards === 2 ? "w-1/2" : "w-1/3"}`}>
      <div className="bg-white rounded-2xl p-8 shadow animate-pulse h-80 flex flex-col justify-between">
        <div className="flex mb-6 space-x-1">{Array.from({ length: 5 }).map((_, i) => (<div key={i} className="w-4 h-4 bg-gray-300 rounded"></div>))}</div>
        <div className="flex-1 space-y-2 mb-6">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
        <div className="flex items-center mt-auto">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <div className="space-y-1 flex-1">
            <div className="h-4 bg-gray-300 rounded w-32"></div>
            <div className="h-3 bg-gray-300 rounded w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#E7EEF9] py-16 px-4 my-5" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/lovable-uploads/94e75b00-ab1b-4ef1-a8e8-821863a6bc8d.png"
              alt="Google Reviews"
              width={180}
              height={55}
              className="h-15 object-contain"
              unoptimized
            />
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See what our clients are saying about us on Google.
          </p>
        </div>
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex items-stretch transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {loading
              ? Array.from({ length: visibleCards }).map((_, idx) => <SkeletonCard key={idx} />)
              : testimonials.map((testimonial, index) => {
                  const isExpanded = expanded[index] || false;
                  const reviewText = testimonial.text || "";

                  return (
                    <div
                      key={index}
                      ref={(el) => (refs.current[index] = el)}
                      className={`flex-shrink-0 px-4 py-5 ${visibleCards === 1 ? "w-full" : visibleCards === 2 ? "w-1/2" : "w-1/3"}`}
                      data-aos="fade-up"
                      data-aos-delay={index * 150}
                    >
                      <div className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                        <div className="flex mb-6">{renderStars(testimonial.rating)}</div>

                        <div
                          className="text-gray-400 text-base leading-relaxed font-medium mb-4 overflow-hidden transition-[max-height] duration-500 ease-in-out"
                          style={{
                            maxHeight: isExpanded ? refs.current[index]?.scrollHeight + 30 : 100,
                          }}
                        >
                          "{reviewText}"
                        </div>

                        {reviewText.length > 120 && (
                          <div className="flex justify-end mt-2">
                            <button
                              onClick={() =>
                                setExpanded((prev) => ({
                                  ...prev,
                                  [index]: !isExpanded,
                                }))
                              }
                              className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition"
                            >
                              {isExpanded ? "Show less" : "Read more"}
                            </button>
                          </div>
                        )}

                        <div className="flex items-center mt-auto">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 overflow-hidden relative">
                            <Image
                              src={testimonial.profile_photo_url || "/user.png"}
                              alt={testimonial.author_name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0A1B47] text-[16px]">
                              {testimonial.author_name}
                            </h4>
                            <p className="text-gray-500 text-sm">Review on Google</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>

          {!loading && (
            <>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition z-20"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>

              <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition z-20"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonalReviews;
