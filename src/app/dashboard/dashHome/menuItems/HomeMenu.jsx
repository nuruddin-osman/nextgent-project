"use client";

import React, { useState, useRef, useMemo } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ImageUploads from "@/app/components/components/ImageUploads";

const HomeMenu = ({ placeholder }) => {
  const [imageUrl, setImageUrl] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "",
    }),
    [placeholder]
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const allData = {
        ...data,
        image: imageUrl ? [{ url: imageUrl, alt: data.title }] : [],
      };

      const response = await axios.post(
        `http://localhost:4000/api/banner`,
        allData
      );
      if (response.data) {
        console.log(response.data);
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Image upload function
  const handleImageUpload = async (e) => {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);

      const response = await axios.post(
        `http://localhost:4000/api/banner/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data) {
        console.log(response.data.imageUrl);
        setImageUrl(response.data.imageUrl);
        alert("Image uploaded successfully!");
      } else {
        alert("Image upload failed");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      alert("Image upload error");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 font-inter">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FAB12F] to-[#8C1007] p-6  flex justify-between items-center">
            <h2 className="text-base md:text-xl font-semibold text-white font-open-sans">
              New Account Create
            </h2>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
            {/* Full Name */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="space-y-2 w-full md:w-1/2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 font-open-sans"
                >
                  title
                </label>
                <div className="relative">
                  <input
                    {...register("title", {
                      required: "please title must fillup",
                    })}
                    type="text"
                    id="title"
                    name="title"
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors form-control ${
                      errors.title
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    }`}
                    placeholder="Title"
                  />
                </div>
                {errors.title && (
                  <p className="text-red-600 text-sm font-roboto">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-2 w-full md:w-1/2">
                <label
                  htmlFor="subtitle"
                  className="block text-sm font-medium text-gray-700 font-open-sans"
                >
                  subtitle
                </label>
                <div className="relative">
                  <input
                    {...register("subtitle", {
                      required: "please phone must fillup",
                    })}
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors form-control ${
                      errors.subtitle
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    }`}
                    placeholder="subtitle"
                  />
                </div>
                {errors.subtitle && (
                  <p className="text-red-600 text-sm font-roboto">
                    {errors.subtitle.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2  w-full">
              <label
                htmlFor="desc"
                className="block text-sm font-medium text-gray-700 font-open-sans"
              >
                description
              </label>
              <div className="relative">
                <textarea
                  {...register("desc")}
                  type="text"
                  id="desc"
                  name="desc"
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors  ${
                    errors.desc
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="description here"
                />
              </div>
            </div>
            <div className="">
              <ImageUploads
                handleImageUpload={handleImageUpload}
                imageUrl={imageUrl}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end items-center">
              <button
                type="submit"
                className="w-fit cursor-pointer bg-gradient-to-r from-[#FAB12F] to-[#8C1007] text-white py-3 px-4 rounded-lg font-semibold hover:from-[#FAB12F]/70 hover:to-[#8C1007]/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomeMenu;
