"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface Step {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.15, 
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const OurProcessSectionClient: React.FC = () => {
  const steps: Step[] = [
    {
      title: "Investigation",
      desc: "We pull your IRS transcripts, examine every filing and notice, then assess your financial situation to develop a tailored resolution plan.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 7.09326C12 6.0324 11.5786 5.01498 10.8284 4.26483C10.0783 3.51469 9.06087 3.09326 8 3.09326H2V18.0933H9C9.79565 18.0933 10.5587 18.4093 11.1213 18.9719C11.6839 19.5346 12 20.2976 12 21.0933M12 7.09326V21.0933M12 7.09326C12 6.0324 12.4214 5.01498 13.1716 4.26483C13.9217 3.51469 14.9391 3.09326 16 3.09326H22V18.0933H15C14.2044 18.0933 13.4413 18.4093 12.8787 18.9719C12.3161 19.5346 12 20.2976 12 21.0933"
        />
      ),
    },
    {
      title: "Resolution",
      desc: "Our Tax Preparers file all required returns, and our Tax Professionals negotiate your qualified relief program.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  ];

  return (
<div className="main_con_pr w-full flex justify-center flex-col min-h-[65vh] items-center space-y-10 mt-[50px] lg:mt-[0px] mb-[80px]">
     <motion.div
  key={Math.random()} 
  className="first_line_container w-[90%]"
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
>
  <h2 className="text-[#1947BA] font-bold text-[16px]">OUR PROCESS</h2>
  <h1 className="font-semibold text-[36px]">The Ideal Process</h1>
  <p className="text-gray-500 text-[20px]">
    Refined over 15 years of proven experience in the business
  </p>
</motion.div>

     <div className="cards_container flex flex-col sm:flex-row justify-between w-[90%] gap-6">
  {steps.map((step, i) => (
    <motion.div
      key={i}
      className="process_card space-y-3 w-full sm:w-[49%] rounded-[20px] bg-[#F6F7F9] hover:bg-[#205BEE] px-5 py-5 transition-all duration-500 ease-in-out cursor-pointer group shadow-sm"
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="w-12 h-12 bg-[#205BEE] rounded-full flex items-center justify-center group-hover:bg-[#A1BAF8] transition-colors duration-300">
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
        >
          {step.icon}
        </svg>
      </div>
      <p className="text-[20px] font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
        {step.title}
      </p>
      <p className="text-[14px] text-gray-500 group-hover:text-white transition-colors duration-300">
        {step.desc}
      </p>
    </motion.div>
  ))}
</div>

    </div>
  );
};

export default OurProcessSectionClient;
