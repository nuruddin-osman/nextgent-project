import React from "react";
import BannerSlider from "./components/Banner";
import Ourprejects from "./components/home/Ourprejects";
import OurAscendance from "./components/home/OurAscendance";
const Home = () => {
  return (
    <div>
      <BannerSlider />
      <Ourprejects />
      <OurAscendance />
    </div>
  );
};

export default Home;
