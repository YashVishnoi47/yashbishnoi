import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Tools = () => {
  const skills = [
    {
      name: "HTML",
      icon: "/tools/html.svg",
    },
    {
      name: "CSS",
      icon: "/tools/css.svg",
    },
    {
      name: "JavaScript",
      icon: "/tools/javascript.svg",
    },
    {
      name: "React.JS",
      icon: "/tools/react.svg",
    },
    {
      name: "MongoDB",
      icon: "/tools/mongodb.svg",
    },
    {
      name: "NEXT.JS",
      icon: "/tools/next-js.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "/tools/tailwindcss.svg",
    },
    {
      name: "Framer Motion",
      icon: "/tools/framer.svg",
    },
    {
      name: "Vercel",
      icon: "/tools/vercel.svg",
    },
    {
      name: "Node.JS",
      icon: "/tools/node.svg",
    },
    {
      name: "Socket.io",
      icon: "/tools/socketio.svg",
    },
    {
      name: "Python",
      icon: "/tools/python.svg",
    },
  ];
  return (
    <div className="w-full flex mt- flex-wrap items-center justify-center bg-transparent text-white  rounded-lg">
      <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-5 px-3 sm:px-6 py-6 bg-transparent text-white rounded-lg">
        {skills.map((item, idx) => (
          <Tooltip key={idx} delayDuration={200}>
            <TooltipTrigger>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-3 w-[140px] sm:w-[160px] h-[60px] border-neutral-700 rounded-2xl bg-neutral-900 hover:bg-yellow-500/20 transition-colors duration-200 ease-in-out select-none"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={25}
                  height={25}
                  className="object-contain"
                  loading="lazy"
                />
                <p className="text-sm sm:text-base text-neutral-300 font-medium truncate">
                  {item.name}
                </p>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent
              className={"text-md bg-black/20 backdrop-blur-lg w-/12"}
            >
              <p>{item.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Tools;
