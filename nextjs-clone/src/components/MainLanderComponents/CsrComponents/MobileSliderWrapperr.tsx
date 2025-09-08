import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function MobileBadgeSlider({ badges }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % badges.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [badges.length]);

  return (
    <div className="sm:hidden w-full flex flex-col items-center">
      {/* Slider cards */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {badges.map((badge, i) => (
            <div
              key={i}
              className="min-w-full flex flex-col bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[length:20px_20px] justify-center items-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={badge.src}
                  alt={badge.title}
                  width={badge.src === "/naea.png" ? 142 : 57}
                  height={badge.src === "/naea.png" ? 60 : 88}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 font-medium mb-1">{badge.title}</p>
              <p className="text-blue-600 font-bold text-xl">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots below cards */}
      <div className="flex space-x-2 mt-4">
        {badges.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
