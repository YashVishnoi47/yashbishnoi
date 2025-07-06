import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const projects = () => {
  const projects = [
    {
      name: "Snipppet",
      disc: "A real-time coding platform with multi-language support, and live collaboration.",
      githubLink:
        "https://github.com/YashVishnoi47/Collabrative-code-Editor-Restart",
      LiveLink: "https://snipppet.vercel.app/",
      tech: "Nextjs/ React/ Framer-Motion/ Next-Auth/ Tailwind CSS/ Shadcn UI/ Socket.io ",
    },
    {
      name: "wecanmeet",
      disc: "A minimalist web-app for organising your meetings.",
      githubLink: "https://github.com/YashVishnoi47/wecanmeet.git",
      LiveLink: "https://wecanmeet.vercel.app/",
      tech: "Nextjs/ React/ Framer-Motion/ Tailwind CSS/ Shadcn UI/ React-day-picker",
    },
    // {
    //   name: "Tools Bucket",
    //   disc: "A collection of handy tools for fast and secure file conversions.",
    //   githubLink: "https://github.com/YashVishnoi47/Tools-Bucket",
    //   LiveLink: "https://toolsbucket.vercel.app/",
    //   tech: "Nextjs/ React/ Tailwind CSS/ Shadcn UI",
    // },
    {
      name: "Portfolio",
      disc: "This is my Portfolio",
      githubLink: "https://github.com/YashVishnoi47/yashbishnoi",
      LiveLink: "https://yashbishnoi.vercel.app/",
      tech: "Nextjs/ React/ Framer-Motion/ Tailwind CSS/ Shadcn UI",
    },
  ];
  return (
    <motion.div className="text-white p-4 w-full h-auto flex flex-col items-center gap-6">
      {projects.map((item, idx) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          key={idx}
          className="w-full hover:translate-x-[5px] flex flex-col h-[20%] select-none transition-all duration-200"
        >
          {/* Project Name  and Links */}
          <div className="w-full mb-1 flex justify-between items-center h-[40%]">
            <h1 className="text-xl">{item.name}</h1>
            {/* Links */}
            <div className="w-1/2 h-full flex justify-end items-center">
              {item.LiveLink && (
                <Link
                  target="_blank"
                  href={item.LiveLink}
                  className="flex justify-center items-center text-neutral-400 hover:text-yellow-500 transition-all duration-200 ease-in-out gap-2 px-2 rounded-full cursor-pointer"
                >
                  <span className="text-md">Live</span>
                  <FaExternalLinkAlt className="text-xs" />
                </Link>
              )}
              {item.githubLink && (
                <Link
                  target="_blank"
                  href={item.githubLink}
                  className="flex justify-center items-center text-neutral-400 hover:text-yellow-500 transition-all duration-200 ease-in-out gap-2 px-2 rounded-full cursor-pointer"
                >
                  <span className="text-md">Github</span>
                  <FaExternalLinkAlt className="text-xs" />
                </Link>
              )}
            </div>
          </div>
          {/* Disc  and Tech-Stack*/}
          <div className="w-full mt-1 flex flex-col gap-1 justify-between items-start h-[40%]">
            <p className="text-md text-neutral-400 leading-4">{item.disc}</p>
            <p className="text-md text-neutral-500 leading-4">{item.tech}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default projects;
