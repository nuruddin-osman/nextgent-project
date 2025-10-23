"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ImageGallary from "./ImageGallary";
import AOS from "aos";
import "aos/dist/aos.css";

const NavMenu = ({ handleClose }) => {
  const menuItems = {
    action_menu: [
      "Home",
      "About",
      "Management Team",
      "Properties",
      "Concerns",
      "Landowner",
      "Buyer",
      "Blogs",
      "News & Events",
      "Gallery",
      "Contact",
      "CSR",
    ],
    blog_menu: ["Residential", "Commercial"],
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section data-aos="fade-up">
      <div className="flex justify-end">
        <div className="w-2/5 hidden md:block">
          <ImageGallary />
        </div>
        <div className="bg-[#2D2D2D] w-4/5 md:w-3/5 py-6 md:py-10 px-10 md:px-16 lg:px-24 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#F4991A] scrollbar-track-gray-200">
          <div className="flex justify-end">
            <button
              onClick={handleClose}
              className="h-16 w-16 rounded-full border-2 border-white/70 text-white flex items-center justify-center text-xl cursor-pointer"
            >
              <IoCloseOutline />
            </button>
          </div>
          <div className="flex w-full flex-col lg:flex-row gap-16">
            <ul className="w-full lg:w-1/2 flex flex-col gap-5 order-2 lg:order-1">
              {menuItems.blog_menu.map((item) => (
                <Link
                  key={item}
                  className="relative uppercase text-[#f7f3f0] font-montserrat font-normal text-base md:text-2xl
                            w-fit transition-all duration-500 ease-in-out
                            after:content-[''] after:absolute after:left-0 after:bottom-0 
                            after:h-[2px] after:w-0 after:bg-[#f7f3f0] after:transition-all after:duration-500 after:ease-in-out
                            hover:after:w-full pb-1.5"
                  href={`#${item.replace(/\s+/g, "-")}`}
                >
                  {item}
                </Link>
              ))}
            </ul>
            <ul className="w-full lg:w-1/2 flex flex-col gap-5 order-1 lg:order-2">
              {menuItems.action_menu.map((item) => (
                <Link
                  key={item}
                  className="relative uppercase text-[#f7f3f0] font-montserrat font-normal text-base md:text-2xl
                            w-fit transition-all duration-500 ease-in-out
                            after:content-[''] after:absolute after:left-0 after:bottom-0 
                            after:h-[2px] after:w-0 after:bg-[#f7f3f0] after:transition-all after:duration-500 after:ease-in-out
                            hover:after:w-full pb-1.5"
                  href={`#${item.replace(/\s+/g, "-")}`}
                >
                  {item}
                </Link>
              ))}
            </ul>
          </div>

          <div className="text-[#f7f3f0]/60 font-montserrat pt-10">
            <h3 className="text-sm font-semibold text-[#f7f3f0]">
              JCX Business Tower
            </h3>
            <p>Plot 1136/A, Japan Street, Block # I,</p>
            <p>Bashundhara R/A, Dhaka -1229, Bangladesh.</p>
            <p className="mt-4">© 2025 JCXBD | All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavMenu;
