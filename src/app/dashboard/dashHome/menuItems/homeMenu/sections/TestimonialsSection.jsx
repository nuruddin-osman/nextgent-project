"use client";

import React, { useState, useRef, useMemo } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ImageUploads from "@/app/components/ImageUploads";
import { toast } from "react-toastify";

const TestimonialsSection = ({ placeholder }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

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
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const allData = {
        ...data,
        image: imageUrl ? [{ url: imageUrl, alt: data.title }] : [],
      };

      setLoading(true);
      const response = await axios.post(`${BASE_URL}/api/testimonial`, allData);
      if (response.data) {
        console.log(response.data);
        toast.success("Item created successfully!");
        console.log("success");

        reset();
        setImageUrl("");
      }
    } catch (error) {
      console.log(error);
      toast.error("Item is not created");
    } finally {
      setLoading(false);
    }
  };

  // Image upload function
  const handleImageUpload = async (e) => {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);

      setLoading(true);
      const response = await axios.post(`${BASE_URL}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data) {
        console.log(response.data.imageUrl);
        setImageUrl(response.data.imageUrl);
        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Image is not uploads");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("Image not uploads for server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="">
        <div className="w-full bg-white shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-4  flex justify-between items-center">
            <h2 className="text-base md:text-xl font-semibold text-white font-montserrat">
              Testimonials
            </h2>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-2">
            <div className="space-y-2 w-full">
              <label
                htmlFor="desc"
                className="block text-sm font-medium text-gray-700 font-montserrat"
              >
                Description
              </label>
              <div className="relative">
                <textarea
                  {...register("desc", {
                    required: "please Description must fillup",
                  })}
                  type="text"
                  id="desc"
                  name="desc"
                  className={`block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 transition-colors form-control ${
                    errors.desc
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="Description"
                />
              </div>
              {errors.desc && (
                <p className="text-red-600 text-sm font-roboto">
                  {errors.desc.message}
                </p>
              )}
            </div>
            <div className="">
              <ImageUploads
                handleImageUpload={handleImageUpload}
                imageUrl={imageUrl}
                loading={loading}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end items-center">
              {loading ? (
                <button className="w-fit cursor-not-allowed bg-gradient-to-r from-[#FAB12F] to-[#8C1007] py-3 px-4 rounded-lg">
                  <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-fit cursor-pointer bg-gradient-to-r from-[#FAB12F] to-[#8C1007] text-white py-3 px-4 rounded-lg font-semibold hover:from-[#FAB12F]/70 hover:to-[#8C1007]/70 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Save
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
