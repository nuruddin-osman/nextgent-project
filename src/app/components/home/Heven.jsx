"use client";
import React, { useEffect } from "react";
import HeavebBg from "../../assets/images/cta.webp";

const Heven = () => {
  return (
    <section
      className="py-32 bg-cover bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage: `url(${HeavebBg.src})`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-sm lg:text-lg font-medium uppercase text-white font-montserrat">
            A LITTLE PIECE OF
          </h4>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-light uppercase text-white font-montserrat md:leading-[100px] my-3 md:my-5">
            HEAVEN
          </h2>
          <button className="mt-16 px-6 py-2 border-t-2 border-b-2 border-white text-sm lg:text-lg font-normal capitalize text-white font-montserrat">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Heven;
