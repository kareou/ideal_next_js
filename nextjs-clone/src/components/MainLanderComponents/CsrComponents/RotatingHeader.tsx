// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const words = [
//   "everyday americans",
//   "irs debt",
//   "peace of mind",
//   "small business owners",
//   "wage garnishments",
//   "families in debt",
//   "financial freedom"
// ];

// export default function RotatingHeader() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % words.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full flex flex-col items-center md:items-center">
//       <h1
//         className="font-[500] text-gray-900 leading-tight text-center md:text-center"
//         style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
//       >
//         Tax relief for
//       </h1>

//       <h2
//         className="font-[500] text-gray-900 leading-tight mt-1 text-center md:text-center"
//         style={{ fontSize: "clamp(1.8rem, 4vw, 4.5rem)" }}
//       >
//         <span className="relative inline-flex items-center" style={{ lineHeight: 1.1 }}>
//           <AnimatePresence mode="wait">
//             <motion.span
//               key={words[index]}
//               initial={{ width: 0, opacity: 1 }}
//               animate={{ width: "auto", opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//               className="inline-block overflow-hidden text-left"
//               style={{ whiteSpace: "nowrap", paddingBottom: "0.05em" }}
//             >
//               <span className="bg-gradient-to-r from-[#2f55ba] to-[#4c74ff] bg-clip-text text-transparent">
//                 {words[index]}
//               </span>
//             </motion.span>
//              <motion.span
//             animate={{ opacity: [1, 0, 1] }}
//             transition={{ repeat: Infinity, duration: 0.8 }}
//             className="text-[#2f55ba] font-[500]"
//             style={{ marginLeft: "4px", alignSelf: "center" }}
//           >
//             |
//           </motion.span>
//           </AnimatePresence>

         
//         </span>
//       </h2>
//     </div>
//   );
// }



"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans} from "next/font/google";

const poppins = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "500" });
// const poppins = Oxanium({ subsets: ["latin"], weight: "500" });

const words = [
  "everyday americans",
  "irs debt",
  "peace of mind",
  "small business owners",
  "wage garnishments",
  "families in debt",
  "financial freedom"
];

export default function RotatingHeader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center md:items-center pt-[100px] ">
      <h1
        className={`text-gray-900 leading-tight text-center md:text-center sm:mr-5 sm:text-[40px] ${poppins.className}`}
        style={{ fontSize: "clamp(3.8rem, 9vw, 8rem)" }}
      >
        tax relief for
      </h1>

      <h2
        className="font-[500] text-gray-900 leading-tight mt-4 text-center md:text-center"
        style={{ fontSize: "clamp(2.1rem, 4vw, 5.5rem)" }}
      >
        <span className="relative inline-flex items-center" style={{ lineHeight: 1.1 }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ width: 0, opacity: 1 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="inline-block overflow-hidden text-left"
              style={{ whiteSpace: "nowrap", paddingBottom: "0.05em" }}
            >
              <span className={`bg-gradient-to-r from-[#2f55ba] to-[#4c74ff] bg-clip-text text-transparent text-weight-600 ${poppins.className}`}>
                {words[index]}
              </span>
            </motion.span>
            </AnimatePresence>
             <AnimatePresence mode="wait">
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-[#2f55ba] font-[500]"
              style={{ marginLeft: "4px", alignSelf: "center" }}
            >
              |
            </motion.span></AnimatePresence>
          
        </span>
      </h2>
    </div>
  );
}
