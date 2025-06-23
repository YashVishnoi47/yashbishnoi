import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = () => {
  const projects = [
    {
      name: "Project",
      disc: "This is a project made by me and I means me This is a project made.",
      githubLink: "",
      LiveLink: "",
      tech: "Nextjs/ Tailwind CSS/ Shadcn UI/ Socket.io",
    },
    {
      name: "Project",
      disc: "This is a project made by me and I means me This is a project made.",
      githubLink: "",
      LiveLink: "",
      tech: "Nextjs/ Tailwind CSS/ Shadcn UI/ Socket.io",
    },
  ];
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-white p-4 w-full h-full flex flex-col justify-start items-center gap-4"
    >
      {projects.map((item, idx) => (
        <motion.div
          initial={{ x:-50, opacity: 0, filter: "blur(8px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.2 }}
          whileHover={{ x: 5 }}
          key={idx}
          className="w-full flex flex-col h-[20%] border-neutral-700 select-none"
        >
          {/* Project Name  and Links */}
          <div className="w-full mb-1 flex justify-between items-center h-[40%]">
            <h1 className="text-xl">{item.name}</h1>
            {/* Links */}
            <div className="w-1/2 h-full flex justify-end items-center">
              <p className="flex justify-center items-center text-neutral-400 hover:text-white transition-all duration-200 ease-in-out gap-2 px-2 rounded-full cursor-pointer">
                <span className="text-md">Live</span>
                <FaExternalLinkAlt className="text-xs" />
              </p>
            </div>
          </div>
          {/* Disc  and Tech-Stack*/}
          <div className="w-full mt-1 flex flex-col justify-between items-start h-[40%]">
            <p className="text-md text-neutral-400 leading-4">{item.disc}</p>
            <p className="text-md text-neutral-500 leading-4">{item.tech}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default projects;
