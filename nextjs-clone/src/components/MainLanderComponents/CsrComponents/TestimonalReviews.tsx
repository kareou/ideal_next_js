"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonalReviews: React.FC = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  useEffect(() => {
    if (!loading && testimonials.length > 0) {
      let tallest = 0;
      refs.current.forEach((el) => {
        if (el) tallest = Math.max(tallest, el.scrollHeight);
      });
      setMaxHeight(tallest);
    }
  }, [loading, testimonials]);

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
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <section className="bg-[#E7EEF9] py-16 px-4 my-5">
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
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {loading
              ? Array.from({ length: visibleCards }).map((_, idx) => (
                  <div key={idx} className="w-1/3 px-4 py-5">
                    <div className="bg-white rounded-2xl p-8 shadow animate-pulse h-80" />
                  </div>
                ))
              : testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    ref={(el) => (refs.current[index] = el)}
                    className={`flex-shrink-0 px-4 py-5 ${
                      visibleCards === 1
                        ? "w-full"
                        : visibleCards === 2
                        ? "w-1/2"
                        : "w-1/3"
                    }`}
                  >
                    <div
                      className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                      style={{ minHeight: maxHeight }}
                    >
                      <div className="flex mb-6">
                        {renderStars(testimonial.rating)}
                      </div>

                      <div className="text-gray-400 text-base leading-relaxed font-medium mb-4">
                        "{testimonial.text}"
                      </div>

                      <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden relative mr-4">
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
                          <p className="text-gray-500 text-sm">
                            Review on Google
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
