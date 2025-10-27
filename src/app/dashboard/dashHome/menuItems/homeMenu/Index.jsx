import React from "react";
import BannerItemSection from "./sections/BannerItemSection";
import ProjectItemSection from "./sections/ProjectItemSection";

const HomeMenu = () => {
  return (
    <div className="flex flex-col gap-10">
      <BannerItemSection />
      <ProjectItemSection />
    </div>
  );
};

export default HomeMenu;
