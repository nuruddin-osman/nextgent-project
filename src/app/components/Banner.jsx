"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerIgm_1 from "../assets/images/banner_1.webp";
import BannerIgm_2 from "../assets/images/banner_2.jpg";
import BannerIgm_3 from "../assets/images/banner_3.webp";
import BannerIgm_4 from "../assets/images/banner_3.webp";
import BannerIgm_5 from "../assets/images/banner_3.webp";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RightArrow } from "./icons/RightArrow";
import { LeftArrow } from "./icons/LeftArrow";

const BannerSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const heroSlides = [
    {
      id: 1,
      title: "destination",
      subtitle: "iconic",
      desc: "for business excellence",
      image: BannerIgm_1,
      overlay: "bg-black/20",
    },
    {
      id: 2,
      title: "destination",
      subtitle: "iconic",
      desc: "for business excellence",
      image: BannerIgm_2,
      overlay: "bg-black/20",
    },
    {
      id: 3,
      title: "destination",
      subtitle: "iconic",
      desc: "for business excellence",
      image: BannerIgm_3,
      overlay: "bg-black/20",
    },
    {
      id: 4,
      title: "destination",
      subtitle: "iconic",
      desc: "for business excellence",
      image: BannerIgm_4,
      overlay: "bg-black/20",
    },
    {
      id: 5,
      title: "destination",
      subtitle: "iconic",
      desc: "for business excellence",
      image: BannerIgm_5,
      overlay: "bg-black/20",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  if (!isMounted) {
    return (
      <div className="h-screen bg-gray-200 animate-pulse flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <section className="relative h-screen">
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1500}
        pagination={false}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSlideChange={handleSlideChange}
        onInit={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative h-full">
            <div className="relative h-full w-full overflow-hidden">
              <div className={`absolute inset-0 ${slide.overlay} z-10`}></div>

              {/* Animated Image */}
              <div
                className={`relative w-full h-full ${
                  index === activeIndex
                    ? "animate-slide-in"
                    : "opacity-100 brightness-50"
                } transition-all duration-[1500ms] ease-[cubic-bezier(0.7,0,0.3,1)]`}
              >
                <Image
                  fill
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover"
                  priority={index === 0}
                />

                <div className="absolute bottom-10 left-24 z-10">
                  <h4 className="text-lg font-medium uppercase text-white font-montserrat">
                    {slide.subtitle}
                  </h4>
                  <h2 className="text-8xl font-light uppercase text-white font-montserrat leading-[100px] my-5">
                    {slide.title}
                  </h2>
                  <h5 className="text-lg font-medium uppercase text-white font-montserrat">
                    {slide.desc}
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div
          className={`custom-prev absolute bottom-[8%] right-[12%] -translate-y-1/2 
           flex items-center justify-center w-12 h-12 
           rounded-full cursor-pointer z-50
            transition-all duration-300 group`}
        >
          <LeftArrow />
        </div>
        <div
          className={`custom-next absolute bottom-[8%] right-[6%] -translate-y-1/2 
            flex items-center justify-center w-12 h-12 
            rounded-full cursor-pointer z-50
             transition-all duration-300 group`}
        >
          <RightArrow />
        </div>
      </Swiper>
    </section>
  );
};

export default BannerSlider;
