"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <div
        className={`flex flex-col items-end space-y-3 mb-3 transition-all duration-300 overflow-hidden ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <a
          href="tel:18775182860"
          className="flex items-center gap-2 bg-[#0d1c3b] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          <FontAwesomeIcon icon={faPhone} width={16} />
          <span>1 (877) 518-2860</span>
        </a>
        <a
          href="mailto:customercare@idealtax.com"
          className="flex items-center gap-2 bg-[#0d1c3b] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            fill="white"
            viewBox="0 0 640 640"
          >
            <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
          </svg>
          <span>customercare@idealtax.com</span>
        </a>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white text-xl hover:bg-blue-700 transition-colors"
      >
        <FontAwesomeIcon icon={faPhone} width={20} />
      </button>
    </div>
  );
}
