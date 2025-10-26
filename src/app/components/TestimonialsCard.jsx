"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const TestimonialsCard = ({ item }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div className="w-full  relative  flex items-center justify-end mt-10">
      <div
        className="w-3/5 bg-secondary px-6 md:px-16 py-6 absolute z-10 top-2/5 left-0"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <div
          className="text-white text-sm font-montserrat leading-6 transition-all duration-500"
          data-aos="fade-up"
        >
          {item.description}
        </div>
      </div>
      <div className="w-1/2">
        <div
          className="relative h-[60vh]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Image
            src={item.image}
            alt="JCX Development Project"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
