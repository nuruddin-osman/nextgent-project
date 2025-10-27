"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RightArrow } from "./icons/RightArrow";
import { LeftArrow } from "./icons/LeftArrow";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "./Loading";

const BannerSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const getBannerData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/api/banner`);
      if (response.data) {
        setBannerData(response.data?.data);
        console.log("Banner data get success");
      }
    } catch (error) {
      console.log(error);
      toast.error("Banner data is not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    getBannerData();
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  if (!isMounted) {
    return (
      <div className="h-screen bg-black flex items-center justify-center"></div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
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
          {bannerData?.map((slide, index) => (
            <SwiperSlide key={slide._id} className="relative h-full">
              <div className="relative h-full w-full overflow-hidden">
                <div className={`absolute inset-0 bg-black/20 z-10`}></div>

                {/* Animated Image */}
                <div
                  className={`relative w-full h-full ${
                    index === activeIndex
                      ? "animate-slide-in"
                      : "opacity-100 brightness-50"
                  } transition-all duration-[1500ms] ease-[cubic-bezier(0.7,0,0.3,1)]`}
                >
                  {slide?.image?.[0]?.url && (
                    <Image
                      fill
                      src={`${BASE_URL}${slide.image[0].url}`}
                      alt={slide.image[0].alt}
                      className="object-cover"
                      priority={index === 0}
                      unoptimized={true}
                    />
                  )}

                  <div className="absolute bottom-10 left-10 md:left-24 z-10">
                    <h4 className="text-sm lg:text-lg font-medium uppercase text-white font-montserrat">
                      {slide.subtitle}
                    </h4>
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-light uppercase text-white font-montserrat md:leading-[100px] my-3 md:my-5">
                      {slide.title}
                    </h2>
                    <h5 className="text-sm lg:text-lg font-medium uppercase text-white font-montserrat">
                      {slide.desc}
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div
            className={`custom-prev absolute bottom-[2%] md:bottom-[8%] right-[20%] md:right-[12%] -translate-y-1/2 text-[#f2f0f0]
           flex items-center justify-center w-12 h-12 
           rounded-full cursor-pointer z-50
            transition-all duration-300 group`}
          >
            <LeftArrow />
          </div>
          <div
            className={`custom-next absolute bottom-[2%] md:bottom-[8%] right-[6%] -translate-y-1/2 
            flex items-center justify-center w-12 h-12 text-[#f2f0f0]
            rounded-full cursor-pointer z-50
             transition-all duration-300 group`}
          >
            <RightArrow />
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default BannerSlider;
