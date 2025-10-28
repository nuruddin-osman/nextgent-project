import React from "react";

const Loading = () => {
  return (
    <div className="h-screen bg-secondary flex items-center justify-center">
      <div className="">
        <div className="flex gap-8 items-center flex-col md:flex-row px-10">
          <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          <p className="text-white font-montserrat text-3xl">
            Please wait... It may take 5-10 minutes to load the data.
          </p>
        </div>
        <p className="text-xs text-white font-montserrat ml-10 md:ml-20 mt-5">
          Because I use free hosting at Render.com.
        </p>
      </div>
    </div>
  );
};

export default Loading;
