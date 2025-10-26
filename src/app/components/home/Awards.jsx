"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import SubHeading from "@/app/utils/SubHeading";
import { companiesLogo } from "../dummy-content/Datas";

const Awards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="bg-[#F2F2F2] py-32">
      <div className="container mx-auto">
        <div
          className="flex flex-col items-center justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <SubHeading
            content="Our Awards and Recognition"
            className="!text-black/70"
          />
          <div className="w-16 h-1 bg-primary"></div>
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 mt-20"
        >
          {companiesLogo.map((item) => (
            <div
              key={item.id}
              className="px-10 py-2 w-full h-[40vh] bg-white shadow-md rounded-sm"
            >
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt="JCX Development Project"
                  className="object-cover w-4/5 h-4/5 hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
