"use client";
import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { cardData } from "../components/dummy-content/Datas";

const ImageGallary = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const images = cardData.map((item) => ({
    original: item.image.src,
  }));

  console.log(images);

  return (
    <div
      className="relative w-full h-screen overflow-hidden group"
      data-aos="fade-up"
    >
      {/* Image Gallery */}
      <ImageGallery
        items={images}
        infinite={true}
        lazyLoad={true}
        showNav={false}
        showThumbnails={false}
        showFullscreenButton={false}
        useTranslate3D={true}
        showPlayButton={false}
        autoPlay={true}
        slideInterval={2000}
        slideDuration={800}
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-lg font-semibold">
        <span className="tracking-wide"></span>
      </div>
    </div>
  );
};

export default ImageGallary;
