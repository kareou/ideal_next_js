"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Box1() {
  const [open, setOpen] = useState(false);

  return (
    <div className="subContainer w-full flex justify-center">
      <div className="w-[99%] rounded-[20px] mt-2 px-4 py-3 bg-[#0d1c3b] text-white">
        {/* Mobile View */}
        <div className="flex flex-col md:hidden">
          <div className="flex items-center justify-between">
            <FontAwesomeIcon icon={faPhone} width={16} className="text-white" />
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base">Contact support</span>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="white"
                viewBox="0 0 24 24"
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
          </div>

          {/* Collapsible Content */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              open ? "max-h-40 mt-3" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-3 text-sm">
                <a href="tel:8775182860">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  width={14}
                  className="text-white"
                />
                <span>1 (877) 518-2860</span>
              </div> </a>
              <a href="mailto:customercare@idealtax.com">
                <div className="flex items-center gap-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="white"
                    viewBox="0 0 640 640"
                    >
                    <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
                    </svg>
                    <span>customercare@idealtax.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="tel:8775182860">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} width={14} className="text-white" />
            1 (877) 518-2860
          </div></a>
          <a href="mailto:customercare@idealtax.com">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              fill="white"
              viewBox="0 0 640 640"
            >
              <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
            </svg>
            customercare@idealtax.com
          </div></a>
        </div>
      </div>
    </div>
  );
}
