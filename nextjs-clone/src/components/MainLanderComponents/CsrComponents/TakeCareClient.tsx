"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TakeCareClient = () => {
  useEffect(() => {
    AOS.init({ duration: 300, easing: "ease-out", once: false });
  }, []);

  return (
    <div className="mainContainer min-h-[70vh] w-[100%] flex justify-center">
      <div className="sub_container_ta w-[90%] rounded-[20px] bg-[#F6F7F9] py-[40px]">
        <h2
          data-aos="fade-up"
          className="text-[#1947BA] my-[10px] font-bold text-[16px] text-center"
        >
          WE TAKE CARE OF EVERYTHING
        </h2>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="font-semibold text-[40px] md:text-5xl text-center"
        >
          Easy Tax Relief
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="my-5 text-[16px] md:text-[18px] lg:text-[20px] text-center w-[90%] md:w-[70%] mx-auto text-gray-500"
        >
          If you're experiencing or worried about tax liens, levies, garnishments,
          or more… our experienced team of tax professionals is here to help you
          navigate through your tax challenges with proven solutions.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="img_container relative w-[90%] h-[400px] mx-auto"
        >
          <Image
            src="/takecare.jpg"
            alt="Take Care"
            fill
            className="object-cover rounded-[20px]"
          />
        </div>

        {/* <div className="flex align-center justify-center">

            <Image
            src="/buisenessppl.jpg"
            alt="bzns"
            width={500}
            height={500}
          />

        </div> */}

      </div>
    </div>
  );
};

export default TakeCareClient;
