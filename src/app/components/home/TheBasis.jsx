"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SubHeading from "@/app/utils/SubHeading";
import Image from "next/image";
import project_slide_1 from "../../assets/images/Right-Choice.webp";

const TheBasis = () => {
  const [activeValue, setActiveValue] = useState("TRUST");

  const renderItems = [
    {
      id: "TRUST",
      title: "TRUST",
      description:
        "Trustworthiness is one of our most prized values. Ensuring a culture that naturalizes the sense of reliability among the people involved enhances productivity, respect and helps strengthen the bond between the clients and us.",
    },
    {
      id: "CLOSENESS",
      title: "CLOSENESS",
      description:
        "Maintaining long-term, rewarding relationships with our clients is one of the principal things we transgress. Their happiness is our advancement towards success, and we make it happen by paying attention to the tiniest details.",
    },
    {
      id: "UNIQUENESS",
      title: "UNIQUENESS",
      description:
        "Here at JCX, we do things differently. All of our building projects portray uniqueness in their own accord. With the touch of modern architectural concepts used in the structures, state-of-the-art technology, and finally with large amounts of sustainability, all infuse together and produce results that mesmerize.",
    },
    {
      id: "INTEGRITY",
      title: "INTEGRITY",
      description:
        "Integrity is a fundamental value that characterizes us. We demonstrate integrity in our work and garner trust from our clients by accumulating accomplishments and success over the new course of our journey.",
    },
  ];

  const activeItem = renderItems.find((item) => item.id === activeValue);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // scroll up/down both animation
      mirror: true, // scroll down animation show
    });
  }, []);
  return (
    <section className="bg-black">
      <div className="container mx-auto py-32 px-3">
        <div
          className="flex flex-col items-center justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <SubHeading content="THE BASIS OF OUR BELIEFS" />
          <div className="w-16 h-1 bg-red-700"></div>
        </div>
        <div className="w-full relative  flex items-center justify-end mt-20">
          <div
            className="w-3/5 bg-secondary px-24 py-12 absolute z-10 top-2/5  left-0"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {/* Values Navigation */}
            <div className="flex mb-5">
              {renderItems.map((value) => (
                <button
                  key={value.id}
                  onClick={() => setActiveValue(value.id)}
                  className={`relative px-5 py-3  group  ${
                    activeValue === value.id ? "text-white" : "text-white/60"
                  }`}
                >
                  <span className="group-hover:text-white text-sx font-montserrat font-normal uppercase transition-all duration-300">
                    {value.title}
                  </span>

                  <div className="w-full h-[1px] bg-white/60 absolute bottom-0 left-0"></div>

                  <div
                    className={`absolute bottom-0 left-0 w-full transition-all duration-300 hover:bg-white hover:h-[3px] ${
                      activeValue === value.id
                        ? "bg-white h-[3px]"
                        : "bg-white/60 h-[1px] group-hover:bg-white group-hover:h-[3px]"
                    }`}
                  ></div>
                </button>
              ))}
            </div>

            {/* Active Content */}

            <div
              className="text-white text-sm font-montserrat leading-6 transition-all duration-500"
              data-aos="fade-up"
            >
              {activeItem?.description}
            </div>
          </div>
          <div className="w-1/2">
            <div
              className="relative h-[60vh]"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Image
                src={project_slide_1}
                alt="JCX Development Project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheBasis;
