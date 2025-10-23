"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardGrid from "./CardGrid";

const Ourprejects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="bg-black py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-72 h-[1px] bg-red-700/40 mb-6"></div>
          <h2
            data-aos="fade-up"
            className="text-4xl font-light uppercase text-white font-montserrat leading-8"
          >
            our projects
          </h2>
          <div className="w-16 h-1 bg-red-700"></div>
        </div>
        <div className="">
          <CardGrid />
        </div>
      </div>
    </section>
  );
};

export default Ourprejects;
