import React from "react";
import BannerItemSection from "./sections/BannerItemSection";
import ProjectItemSection from "./sections/ProjectItemSection";
import TestimonialsSection from "./sections/TestimonialsSection";

const HomeMenu = () => {
  return (
    <div className="flex flex-col gap-10">
      <BannerItemSection />
      <ProjectItemSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomeMenu;
