"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const GoogleMapEmbed = () => {
  const [overlay, setOverlay] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const location = {
    lat: 23.2554,
    lng: 90.8502,
  };

  return (
    <section className="relative h-[90vh]">
      <div className="relative w-full h-full overflow-hidden group">
        {/* Map Section */}
        <div className="w-full h-full">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d371253.2969576185!2d90.6214155474261!3d23.32722674249527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754f70d17000a7b%3A0xb088cd1c3df72010!2sChandpur%20District!5e1!3m2!1sen!2sbd!4v1761397094856!5m2!1sen!2sbd${location.lat},${location.lng}&zoom=12`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-500">
            <button
              onClick={() => setOverlay(false)}
              className="mt-4 px-6 py-2 border-t-2 border-b-2 border-white text-lg font-normal capitalize text-white hover:text-black hover:bg-white transition-all duration-500 font-montserrat"
            >
              click to load the map
            </button>
          </div>
        )}

        {!overlay && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-blue-600 text-5xl"
            onClick={() => setShowModal(true)}
          >
            <FaLocationDot />
          </motion.div>
        )}
      </div>

      {/* Image Modal */}

      <AnimatePresence>
        {showModal && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="hidden md:block absolute top-0 right-0 bg-black z-40"
              onClick={() => setShowModal(false)}
            ></motion.div>

            {/* Sliding Modal */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5 }}
              className="hidden  absolute right-0 top-0 w-[400px] h-full bg-white shadow-2xl z-50 md:flex flex-col items-center justify-center p-6"
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                onClick={() => setShowModal(false)}
              >
                <IoMdClose />
              </button>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Haziganj_Upazila.jpg"
                alt="Hajiganj"
                className="rounded-xl shadow-lg mb-4"
              />
              <h2 className="text-xl font-semibold font-montserrat">
                Hajiganj, Chandpur
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore vitae expedita ea, doloribus suscipit veniam, magnam ad
                architecto et earum consectetur autem quod, a quam nobis
                accusamus vero aut aliquid?
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GoogleMapEmbed;
