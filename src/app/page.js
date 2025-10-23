import React from "react";
import BannerSlider from "./components/Banner";
import Ourprejects from "./components/home/Ourprejects";
import NavMenu from "./layouts/NavMenu";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <Ourprejects />
      <NavMenu />
    </div>
  );
};

export default Home;
