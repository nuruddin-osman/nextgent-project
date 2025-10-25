import React from "react";
import BannerSlider from "./components/Banner";
import Ourprejects from "./components/home/Ourprejects";
import OurAscendance from "./components/home/OurAscendance";
import TheBasis from "./components/home/TheBasis";
import Heven from "./components/home/Heven";
const Home = () => {
  return (
    <div>
      <BannerSlider />
      <Ourprejects />
      <OurAscendance />
      <TheBasis />
      <Heven />
    </div>
  );
};

export default Home;
