"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo } from "../components/icons/Logo";
import { IoCall } from "react-icons/io5";
import MenuBar from "../components/icons/MenuBar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastY = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY && currentY > 200) {
        setIsVisible(false);
      } else if (currentY < lastY || currentY < 100) {
        setIsVisible(true);
      }

      setIsScrolled(currentY > 50);

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-5
      transition-all duration-1000 ease-in-out
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      ${
        isScrolled ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent"
      }
    `}
    >
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="uppercase text-white font-montserrat font-semibold text-base flex items-center gap-36">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <Link
                  className="hover:text-white/40 transition-all duration-500"
                  href="#"
                >
                  Residential
                </Link>
                <span className="h-7 w-[2px] bg-white"></span>
                <Link
                  className="hover:text-white/40 transition-all duration-500"
                  href="#"
                >
                  Commercial
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <span className="">
                  <IoCall />
                </span>
                <Link
                  className="hover:text-white/40 transition-all duration-500"
                  href="#"
                >
                  16777
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <Link
                className="hover:text-white/40 transition-all duration-500"
                href="#"
              >
                menu
              </Link>
              <button className="">
                <MenuBar />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
