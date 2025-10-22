"use client";
import { useState } from "react";

export const RightArrow = () => {
  const [hover, setHover] = useState(false);

  return (
    <svg
      width="41"
      height="21"
      viewBox="0 0 41 21"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="cursor-pointer"
    >
      {/* Shaft */}
      <line
        x1={0}
        y1={10.5}
        x2={40}
        y2={10.5}
        stroke="#f2f0f0"
        strokeWidth="1.2"
        strokeLinecap="round"
        className={`transition-transform duration-500 ease-in-out origin-right ${
          hover ? "scale-x-[0.70]" : "scale-x-100"
        }`}
      />

      {/* Arrowhead */}

      <line
        x1={25}
        y1={5}
        x2={40}
        y2={10.5}
        stroke="#f2f0f0"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1={25}
        y1={16}
        x2={40}
        y2={10.5}
        stroke="#f2f0f0"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};
