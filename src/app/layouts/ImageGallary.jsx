"use client";

import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import Loading from "../components/Loading";
import axios from "axios";

const ImageGallary = () => {
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
    getBannerData();
  }, []);

  const images = bannerData?.map((item) => ({
    original: BASE_URL + item?.image[0]?.url,
  }));
  console.log(images);

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
