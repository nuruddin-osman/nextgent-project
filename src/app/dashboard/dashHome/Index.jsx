"use client";

import { menuItems } from "@/app/components/dummy-content/Datas";
import React, { useState } from "react";
import HomeMenu from "./menuItems/homeMenu/Index";
import AboutMenu from "./menuItems/AboutMenu";
import PropertiesMenu from "./menuItems/PropertiesMenu";
import ConcernsMenu from "./menuItems/ConcernsMenu";
import LandownerMenu from "./menuItems/LandownerMenu";

const DashHome = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  console.log(activeMenu);

  const handleClick = (item) => {
    setActiveMenu(item.toLowerCase());
  };
  const renderItem = () => {
    switch (activeMenu) {
      case "home":
        return <HomeMenu />;
      case "about":
        return <AboutMenu />;
      case "concerns":
        return <ConcernsMenu />;
      case "landowner":
        return <LandownerMenu />;
      case "properties":
        return <PropertiesMenu />;
      default:
        return <HomeMenu />;
    }
  };

  return (
    <section>
      <div className="grid grid-cols-[1fr_4fr]">
        <aside className="bg-light h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary scrollbar-track-gray-200 w-full shadow-lg border-r border-accent">
          <div className="p-4 border-b border-accent">
            <h1 className="text-2xl font-bold text-primary font-montserrat">
              Admin Authorize
            </h1>
            <p className="text-sm text-secondary mt-1 font-montserrat">
              Control Panel
            </p>
          </div>
          <nav className="py-4">
            <ul className="space-y-1">
              {menuItems.action_menu.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleClick(item)}
                    className={`w-full text-left px-4 py-3 transition-all duration-200 font-montserrat font-medium ${
                      activeMenu === item.toLowerCase()
                        ? "bg-primary text-light shadow-md"
                        : "text-secondary hover:bg-accent hover:text-secondary"
                    }`}
                  >
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary scrollbar-track-gray-200">
          {renderItem()}
        </main>
      </div>
    </section>
  );
};

export default DashHome;
