"use client";
import React from "react";

const MenuBar = () => {
  return (
    <div className="group cursor-pointer flex flex-col justify-center gap-1.5">
      <span className="h-[1px] w-[40px] bg-white rounded-full transition-all duration-700 ease-in-out group-hover:w-[40px] group-hover:translate-x-0"></span>

      <span className="h-[1px] w-[40px] bg-white rounded-full transition-all duration-700 ease-in-out group-hover:w-[30px] group-hover:translate-x-2.5"></span>

      <span className="h-[1px] w-[40px] bg-white rounded-full transition-all duration-700 ease-in-out group-hover:w-[20px] group-hover:translate-x-5"></span>
    </div>
  );
};

export default MenuBar;
