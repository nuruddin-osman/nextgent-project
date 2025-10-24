// components/CardGrid.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AnimatedCard from "../AnimatedCard";
import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";
import { useEffect, useState } from "react";
import { cardData } from "../dummy-content/Datas";
import AOS from "aos";
import "aos/dist/aos.css";

const CardGrid = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!isMounted) {
    return (
      <div className="h-screen bg-gray-200 animate-pulse flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <section data-aos="fade-up" className="py-20">
      <div className="container mx-auto px-4">
        <section className="relative pb-10">
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 500000,
              disableOnInteraction: false,
            }}
            pagination={false}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-full w-full"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <AnimatedCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div
            className={`custom-next absolute -bottom-16 md:-bottom-24 left-[16%] md:left-[6%] -translate-y-1/2 text-[#f2f0f0]
            flex items-center justify-center w-12 h-12 
            rounded-full cursor-pointer z-80
             transition-all duration-300 group`}
          >
            <RightArrow />
          </div>
          <div
            className={`custom-prev absolute -bottom-16 md:-bottom-24 left-0 -translate-y-1/2 
           flex items-center justify-center w-12 h-12 text-[#f2f0f0]
           rounded-full cursor-pointer z-80
            transition-all duration-300 group`}
          >
            <LeftArrow />
          </div>
        </section>
      </div>
    </section>
  );
};

export default CardGrid;
