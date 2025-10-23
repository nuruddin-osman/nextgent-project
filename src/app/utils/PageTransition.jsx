"use client";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Step 1: Start overlay on mount (page load)
    const timer1 = setTimeout(() => setShow(false), 2000); // 1s down + 1s up total 2s
    return () => clearTimeout(timer1);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black z-[9999]
        transition-transform duration-[1000ms] ease-in-out
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    ></div>
  );
}
