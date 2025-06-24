"use client";
import React, { useState } from "react";
import Introduction from "./Introduction";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Project = dynamic(() => import("./projects"));
const Tools = dynamic(() => import("./Tools"));

const MainComponent = () => {
  const [theme, settheme] = useState("dark");
  const [tab, setTab] = useState("projects");
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`w-full h-full flex justify-center items-center ${
        theme === "dark" ? "bg-[#0c0c04] text-white" : "bg-white text-black"
      }`}
    >
      {/* Center Part */}
      <div
        className={`h-full w-full md:w-[80%] lg:w-[60%] xl:w-[40%] flex flex-col items-center ${
          theme === "dark"
            ? "bg-[#0c0c04] text-white"
            : "bg-white text-[#0c0c04]"
        }`}
      >
        <Introduction theme={theme} />

        {/* Buttons */}
        <motion.div className="w-full px-4 min-h-[5%] flex items-center md:justify-between justify-center md:mt-3 mt-10 select-none">
          <div className="flex items-center gap-3">
            <p
              onClick={() => setTab("projects")}
              className={`text-base sm:text-lg px-2 cursor-pointer text-gray-300 hover:text-white transition duration-200 ${
                tab === "projects" ? "text-white underline" : "text-gray-300"
              }`}
            >
              Projects
            </p>
            <p
              onClick={() => setTab("tools")}
              className={`text-base sm:text-lg px-2 cursor-pointer  hover:text-white transition duration-200 ${
                tab === "tools" ? "text-white underline" : "text-gray-300"
              }`}
            >
              Tools
            </p>
          </div>
          <div className="hidden sm:block w-[75%] h-[1px] bg-neutral-400"></div>
        </motion.div>

        {/* Tabs */}
        <div className="w-full flex-1  min-h-[65%] px-2 sm:px-4">
          {tab === "projects" ? <Project /> : <Tools />}
        </div>
      </div>
    </motion.div>
  );
};

export default MainComponent;
