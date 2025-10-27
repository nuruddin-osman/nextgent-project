import React from "react";
import DashHome from "./dashHome/Index";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <>
      <DashHome />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="light"
      />
    </>
  );
};

export default page;
