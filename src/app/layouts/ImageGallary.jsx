"use client";
import React from "react";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import { cardData } from "../components/dummy-content/Datas";

const ImageGallary = () => {
  const images = cardData.map((item) => ({
    original: item.image.src,
  }));

  return (
    <div className="relative w-full h-screen overflow-hidden group">
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
