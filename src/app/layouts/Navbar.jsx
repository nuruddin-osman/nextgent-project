// components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll down - hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Scroll up - show navbar
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      // Background color change
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full z-50 
      transition-all duration-500 ease-in-out
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }
    `}
    >
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className={`
              text-2xl font-bold transition-colors duration-300
              ${isScrolled ? "text-gray-900" : "text-white"}
            `}
            >
              YourLogo
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Portfolio", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`
                  font-medium transition-all duration-300 hover:text-blue-600
                  ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }
                `}
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* CTA Button */}
          <button
            className={`
            px-6 py-2 rounded-full font-medium transition-all duration-300
            ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
            }
          `}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
