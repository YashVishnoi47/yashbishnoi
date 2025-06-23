"use client";
import React, { useState } from "react";
import Introduction from "./Introduction";

const MainComponent = () => {
  const [theme, settheme] = useState("dark");
  return (
    <div
      className={`w-full h-full flex justify-center items-center ${
        theme === "dark" ? "bg-[#0c0c04] text-white" : "bg-white text-black"
      }`}
    >
      {/* Center Part */}
      <div
        className={`h-full w-[40%]  flex flex-col ${
          theme === "dark"
            ? "bg-[#0c0c04] text-white"
            : "bg-white text-[#0c0c04]"
        }`}
      >
        <Introduction />
      </div>
    </div>
  );
};

export default MainComponent;
