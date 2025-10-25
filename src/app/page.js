import React from "react";
import BannerSlider from "./components/Banner";
import Ourprejects from "./components/home/Ourprejects";
import OurAscendance from "./components/home/OurAscendance";
import TheBasis from "./components/home/TheBasis";
const Home = () => {
  return (
    <div>
      <BannerSlider />
      <Ourprejects />
      <OurAscendance />
      <TheBasis />
    </div>
  );
};

export default Home;
