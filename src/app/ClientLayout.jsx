"use client";

import React from "react";
import { usePathname } from "next/navigation";
import PageTransition from "./utils/PageTransition";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const ClientLayout = ({ children }) => {
  const pathName = usePathname();
  const isDashboard = pathName.startsWith("/dashboard");
  return (
    <>
      {!isDashboard && <Navbar />}
      <PageTransition />
      {children}
      {!isDashboard && <Footer />}
    </>
  );
};

export default ClientLayout;
