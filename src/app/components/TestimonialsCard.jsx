"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const TestimonialsCard = ({ item, index }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div className="w-full  relative  flex items-center  mt-10">
      <div className="w-1/2">
        <div
          className="relative h-[60vh]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {item?.image?.[0]?.url && (
            <Image
              fill
              src={`http://localhost:4000${item.image[0].url}`}
              alt={item.image[0].alt}
              className="object-cover"
              priority={index === 0}
              unoptimized={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
      </div>
      <div
        className="w-[55%] bg-secondary px-6 md:px-16 py-6 absolute z-10 top-2/5 right-0"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <div
          className="text-white text-sm font-montserrat leading-6 transition-all duration-500"
          data-aos="fade-up"
        >
          {item.desc}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
