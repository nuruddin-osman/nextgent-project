// components/AnimatedCard.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const AnimatedCard = ({ card, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
  const cardVariants = {
    initial: {
      y: 0,
    },
    hover: {
      y: 0,
    },
  };

  const imageVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="text-white hover:text-white/60 transition-all duration-500">
      <motion.div
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ originX: 0.5, originY: 0.5 }}
        className="relative w-full h-[70vh] overflow-hidden cursor-pointer group"
      >
        {/* Background Image */}
        <motion.div className="absolute inset-0" variants={imageVariants}>
          {card?.image?.[0]?.url && (
            <Image
              fill
              src={`http://localhost:4000${card.image[0].url}`}
              alt={card.image[0].alt}
              className="object-cover"
              priority={index === 0}
              unoptimized={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          {/* Black Overlay on Hover */}
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.5 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <div className="w-full h-full absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-[1.5s] p-6">
          {/* Features List */}
          {card?.list?.length > 0 && (
            <ul className="space-y-2">
              {card.list[0].split(",").map((item, index) => (
                <li
                  key={index}
                  className="text-sm font-normal capitalize text-white font-montserrat flex items-center gap-3"
                >
                  <span className="w-1 h-1 bg-white"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA Button */}
          <button className="mt-4 px-6 py-2 border-t-2 border-b-2 border-white text-lg font-normal capitalize text-white font-montserrat">
            Learn More
          </button>
        </div>
      </motion.div>
      <div className="mt-4">
        <span className="text-sm font-normal capitalize  font-montserrat ">
          {card.subtitle}
        </span>
        <h6 className="text-xl font-normal capitalize  font-montserrat ">
          {card.title}
        </h6>
        <span className="text-sm font-normal capitalize font-montserrat ">
          {card.area}
        </span>
      </div>
    </div>
  );
};

export default AnimatedCard;
