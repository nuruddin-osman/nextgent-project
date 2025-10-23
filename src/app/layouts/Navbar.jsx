"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo } from "../components/icons/Logo";
import { IoCall } from "react-icons/io5";
import MenuBar from "../components/icons/MenuBar";
import NavMenu from "./NavMenu";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 py-5
      transition-all duration-1000 ease-in-out
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      ${
        isScrolled ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent"
      }
    `}
      >
        <div className="container mx-auto md:py-4 px-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <div className="uppercase text-white font-montserrat font-semibold text-base flex items-center md:gap-10 lg:gap-36">
              <div className="hidden md:flex items-center gap-7 lg:gap-10">
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
                <button onClick={handleOpen} className="">
                  <MenuBar />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed top-0 left-0 z-50">
        {isOpen && <NavMenu handleClose={handleClose} />}
      </div>
      {/* Animated NavMenu Overlay */}
      {/* <div
        className={`fixed inset-0 transition-all duration-700 ease-in-out ${
          isOpen
            ? "opacity-100 visible scale-100 z-[9999]"
            : "opacity-0 invisible scale-95 z-[9999]"
        }`}
      >
        <div className="w-full h-screen transition-all duration-700 ease-in-out">
          <NavMenu handleClose={handleClose} />
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
