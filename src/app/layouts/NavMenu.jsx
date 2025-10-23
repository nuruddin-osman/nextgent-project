import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import ImageGallary from "./ImageGallary";

const NavMenu = () => {
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
  return (
    <section>
      <div className="flex">
        <div className="w-2/5">
          <ImageGallary />
        </div>
        <div className="bg-[#2D2D2D] w-3/5 py-10 px-24 h-screen overflow-y-auto">
          <div className="flex justify-end">
            <div className="h-16 w-16 rounded-full border-2 border-white/70 text-white flex items-center justify-center text-xl cursor-pointer">
              <IoCloseOutline />
            </div>
          </div>
          <div className="flex w-full">
            <ul className="w-1/2 flex flex-col gap-5">
              {menuItems.blog_menu.map((item) => (
                <Link
                  key={item}
                  className="relative uppercase text-[#f7f3f0] font-montserrat font-normal text-2xl
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
            <ul className="w-1/2 flex flex-col gap-5">
              {menuItems.action_menu.map((item) => (
                <Link
                  key={item}
                  className="relative uppercase text-[#f7f3f0] font-montserrat font-normal text-2xl
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
