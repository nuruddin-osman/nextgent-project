"use client";

import SubHeading from "@/app/utils/SubHeading";
import Image from "next/image";
import React, { useEffect } from "react";
import project_slide_1 from "../../assets/images/project_slide_1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { RightArrow } from "../icons/RightArrow";

const OurAscendance = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // scroll up/down both animation
      mirror: true, // scroll down animation show
    });
  }, []);

  return (
    <section>
      <div className="container mx-auto py-32 px-3">
        <div
          className="flex flex-col items-center justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <SubHeading content="OUR ASCENDANCE" className="!text-secondary" />
          <div className="w-16 h-1 bg-primary"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-20">
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <div className="order-2 md:order-1">
              <article
                className="text-sm font-normal text-secondary font-montserrat leading-6 mb-6"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                JCX Developments Ltd embarked on the Real Estate journey with
                the commitment to bring contemporary design and develop
                large-scale Residential, Commercial, and Condominium projects in
                Bangladesh with Japanese collaboration and experience.
              </article>
              <article
                className="text-sm font-normal text-secondary font-montserrat leading-6"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                We will strive to deliver precise, exquisite solutions to our
                client's wishes and requirements so that their aspirations
                become a reality. This will be accomplished by introducing
                state-of-the-art innovative Japanese technologies with the
                partnership with Creed Group from Japan.
              </article>
              <div className="flex items-center gap-4 mt-5">
                <button className="text-base uppercase font-normal text-primary font-montserrat">
                  Read more
                </button>
                <span className="text-primary">
                  <RightArrow />
                </span>
              </div>
            </div>

            <div
              className="relative w-full h-[70vh] mt-20 order-1 md:order-2"
              data-aos="fade-down"
              data-aos-delay="400"
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

          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            <div className="w-full flex gap-5 items-end">
              <div
                className="relative w-1/2 h-[40vh]"
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
              <div
                className="relative w-1/2 h-[50vh]"
                data-aos="fade-up"
                data-aos-delay="600"
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
            <div
              className="relative w-full h-[50vh] mt-10"
              data-aos="fade-down"
              data-aos-delay="700"
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

export default OurAscendance;
