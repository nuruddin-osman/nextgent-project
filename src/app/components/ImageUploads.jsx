"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

const ImageUploads = ({ handleImageUpload, imageUrl }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Image
      </label>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        {/* Upload image */}
        <label className="flex flex-col items-center justify-center w-full sm:w-1/2 h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <FaPlus className="w-10 h-10 mb-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
            <p className="mb-1 text-sm text-gray-600 font-medium">
              Click to upload image
            </p>
            <p className="text-xs text-gray-400">
              SVG, PNG, JPG or GIF (max 5MB)
            </p>
          </div>
          <input
            type="file"
            name="image"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>

        {/* Preview Box */}
        {imageUrl && (
          <div className="flex flex-col items-center justify-center w-full sm:w-1/2 h-40 bg-white border border-gray-200 rounded-xl px-20 py-2 shadow-sm">
            <div className="relative w-full h-full">
              <Image
                src={`${BASE_URL}${imageUrl}`}
                alt="Preview"
                className="object-cover rounded-lg border border-gray-300"
                fill
                unoptimized={true}
              />
            </div>
            <span className="text-green-600 text-xs font-medium mt-2">
              Image Uploaded Successfully!
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploads;
