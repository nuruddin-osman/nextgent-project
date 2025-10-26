// components/Footer.jsx
"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="font-montserrat bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="w-1/2">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
            <ul className="flex flex-col gap-5">
              <li className="text-accent font-medium text-xs">
                <Link href="#">Gallery</Link>
              </li>
              <li className="text-accent font-medium text-xs">
                <Link href="#">Video</Link>
              </li>
              <li className="text-accent font-medium text-xs">
                <Link href="#">privacy policy</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-5">
              <li className="text-accent font-medium text-xs">
                <Link href="#">Career</Link>
              </li>
              <li className="text-accent font-medium text-xs">
                <Link href="#">CSR</Link>
              </li>
              <li className="text-accent font-medium text-xs">
                <Link href="#">Contact</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-5">
              <li className="text-accent font-medium text-xs">
                <Link href="#">Construction Status</Link>
              </li>
              <li className="text-accent font-medium text-xs">
                <Link href="#">News & Events</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex lg:items-center flex-col lg:flex-row gap-10 lg:justify-between mt-32">
          <ul className="flex flex-col lg:flex-row lg:justify-between gap-5 ">
            <li className="text-accent font-medium text-xs">
              © 2025 JCX BD | All Rights Reserved.
            </li>
            <li className="text-accent font-medium text-xs">
              Designed & Developed by Dcastalia
            </li>
          </ul>
          <ul className="flex gap-5 items-center">
            <li className="bg-white rounded-full h-10 w-10 flex items-center justify-center text-secondary text-xl">
              <Link href="#">
                <FaFacebookF />
              </Link>
            </li>
            <li className="bg-white rounded-full h-10 w-10 flex items-center justify-center text-secondary text-xl">
              <Link href="#">
                <FaLinkedin />
              </Link>
            </li>
            <li className="bg-white rounded-full h-10 w-10 flex items-center justify-center text-secondary text-xl">
              <Link href="#">
                <FaYoutube />
              </Link>
            </li>
            <li className="bg-white rounded-full h-10 w-10 flex items-center justify-center text-secondary text-xl">
              <Link href="#">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
