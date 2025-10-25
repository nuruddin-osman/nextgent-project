import React from "react";
import BannerSlider from "./components/Banner";
import Ourprejects from "./components/home/Ourprejects";
import OurAscendance from "./components/home/OurAscendance";
import TheBasis from "./components/home/TheBasis";
import Heven from "./components/home/Heven";
import GoogleMapEmbed from "./components/home/GoogleMapEmbed";
import Dummy from "./components/Dummy";
const Home = () => {
  return (
    <div>
      <BannerSlider />
      <Ourprejects />
      <OurAscendance />
      <TheBasis />
      <Heven />
      <GoogleMapEmbed />
      {/* <Dummy /> */}
    </div>
  );
};

export default Home;
