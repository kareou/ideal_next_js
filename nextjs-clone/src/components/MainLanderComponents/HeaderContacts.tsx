"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Box() {
  const [active, setActive] = useState<"phone" | "mail" | null>(null);

  const toggle = (type: "phone" | "mail") => {
    setActive((prev) => (prev === type ? null : type));
  };

  return (
    <div className="subContainer w-full flex justify-center">
      <div className="w-[99%] rounded-[20px] mt-2 p-4 flex items-center gap-4 bg-[#0d1c3b] overflow-hidden">

        <div className="flex md:hidden items-center gap-4 w-full justify-start">
          <div className="flex items-center gap-2 relative">
            <button
              onClick={() => toggle("phone")}
              className="flex items-center gap-2 text-white text-lg"
            >
              <FontAwesomeIcon icon={faPhone} width={18} className="text-white" />
            </button>

            <div
              className={`overflow-hidden whitespace-nowrap transition-all duration-300 text-white text-sm ml-2 ${
                active === "phone" ? "max-w-[200px]" : "max-w-0"
              }`}
            >
              1 (877) 518-2860
            </div>
          </div>

          <div className="flex items-center gap-2 relative">
            <button
              onClick={() => toggle("mail")}
              className="flex items-center gap-2 text-white text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22px"
                fill="white"
                viewBox="0 0 640 640"
              >
                <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/>
              </svg>
            </button>

            <div
              className={`overflow-hidden whitespace-nowrap transition-all duration-300 text-white text-sm ml-2 ${
                active === "mail" ? "max-w-[220px]" : "max-w-0"
              }`}
            >
              customercare@idealtax.com
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-white text-sm">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} width={14} className="text-white" />
            1 (877) 518-2860
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22px"
              fill="white"
              viewBox="0 0 640 640"
            >
              <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/>
            </svg>
            customercare@idealtax.com
          </div>
        </div>

      </div>
    </div>
  );
}
