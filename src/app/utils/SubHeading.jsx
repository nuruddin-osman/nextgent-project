"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SubHeading = ({ className, content }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <h2
        data-aos="fade-up"
        className={`text-4xl font-light uppercase text-white font-montserrat leading-8 ${className}`}
      >
        {content}
      </h2>
    </>
  );
};

export default SubHeading;
