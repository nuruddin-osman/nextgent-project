// components/Footer.jsx
"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="font-montserrat bg-gray-900 text-white">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Residential Commercial</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  Home
                </p>
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  About
                </p>
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  Management Team
                </p>
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  Properties
                </p>
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  Concerns
                </p>
              </div>
              <div className="space-y-2">
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  Landowner
                </p>
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  Buyer
                </p>
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  Blogs
                </p>
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  News & Events
                </p>
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  Gallery
                </p>
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  Contact
                </p>
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  CSR
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">JCX Business Tower</h3>
            <p className="text-sm mb-6 leading-relaxed">
              Plot 1136/A, Japan Street, Block #1,
              <br />
              Bashundhara R/A, Dhaka -1229, Bangladesh.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <FaFacebookF size={14} />
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <FaTwitter size={14} />
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors cursor-pointer">
                <FaLinkedinIn size={14} />
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                <FaInstagram size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-2 md:mb-0">
              © 2025 JCXBD | All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-xs text-gray-500">Activate Windows</p>
              <button className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition-colors">
                Go to Settings to activate Windows
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
