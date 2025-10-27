// components/CardGrid.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";
import { useEffect, useState } from "react";
import { basisData } from "../dummy-content/Datas";
import AOS from "aos";
import "aos/dist/aos.css";
import SubHeading from "@/app/utils/SubHeading";
import TestimonialsCard from "../TestimonialsCard";
import axios from "axios";
import { toast } from "react-toastify";

const Testimonials = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [testi, setTesti] = useState([]);
  console.log(testi);

  const getTestiData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/testimonial`);
      if (response.data) {
        setTesti(response.data?.data);
        console.log("Project data get success");
      }
    } catch (error) {
      console.log(error);
      toast.error("Project data is not found");
    }
  };

  useEffect(() => {
    setIsMounted(true);
    AOS.init({ duration: 1000, once: true });
    getTestiData();
  }, []);

  if (!isMounted) {
    return (
      <div className="h-screen bg-gray-200 animate-pulse flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <section data-aos="fade-up" className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-3">
        <div
          className="flex flex-col items-center justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <SubHeading content="testimonials" />
          <div className="w-16 h-1 bg-red-700"></div>
        </div>
        <div className="relative pb-10">
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2000,
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
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {testi?.map((item, index) => (
              <SwiperSlide key={item._id}>
                <TestimonialsCard item={item} index={index} />
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
