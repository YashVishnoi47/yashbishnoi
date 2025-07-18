import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MessageBox from "./MessageBox";

const Introduction = ({ theme }) => {
  const socials = [
    {
      name: "Instagram",
      icon: (
        <FaInstagram className="text-neutral-400 hover:text-yellow-500 transition-all duration-200 text-xl" />
      ),
      link: "https://www.instagram.com/yashss.realm/",
    },
    {
      name: "Twitter",
      icon: (
        <FaXTwitter className="text-neutral-400 hover:text-yellow-500 transition-all duration-200 text-xl" />
      ),
      link: "https://x.com/Yash_Vishnoi7",
    },
    {
      name: "Github",
      icon: (
        <FaGithub className="text-neutral-400 hover:text-yellow-500 transition-all duration-200 text-xl" />
      ),
      link: "https://github.com/YashVishnoi47",
    },
    {
      name: "G-Mail",
      icon: (
        <SiGmail className="text-neutral-400 hover:text-yellow-500 transition-all duration-200 text-xl" />
      ),
      link: "mailto:yashvishnoi309@gmail.com",
    },
  ];

  return (
    <div className="w-full min-h-[37%] flex flex-col items-start justify-start p-4 mt-2">
      {/* Avatar, Name, and Location */}
      <motion.div className="w-full flex flex-col md:flex-row items-center md:items-center gap-4 px-4 py-3">
        {/* Profile Image */}
        <motion.div
          whileHover={{ rotateX: 10, rotateY: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          style={{ perspective: 1000 }}
          className="flex-shrink-0 select-none"
        >
          <Image
            className="w-25 h-25 md:w-25 md:h-25 rounded-full object-cover"
            src="/profile picture.jpg"
            width={64}
            height={64}
            alt="Avatar"
          />
        </motion.div>

        {/* Name & Location */}
        <div className="flex flex-col justify-center md:items-start items-center w-full">
          <h1
            className={`text-2xl md:text-3xl font-semibold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Yash Bishnoi
          </h1>
          <p
            className={`text-sm md:text-lg flex items-center gap-2 ${
              theme === "dark" ? "text-neutral-400" : "text-black"
            }`}
          >
            <FaLocationDot className="text-base" />
            India
          </p>
        </div>
      </motion.div>

      {/* About Me */}
      <motion.div className="w-full flex flex-col md:items-start justify-start px-3 gap-3 mt-2">
        <p className="text-base md:text-xl text-neutral-200">
          <span>Full-Stack Web Developer from India. Open for work.</span>{" "}
          Learning Python and exploring AI. Currently building{" "}
          <span className="font-medium underline cursor-pointer hover:text-yellow-600 transition">
            <Link target="_blank" href={"https://snipppet.vercel.app/"}>
              Snipppet
            </Link>
          </span>{" "}
          and{" "}
          <span className="font-medium underline cursor-pointer hover:text-yellow-600 transition">
            <Link target="_blank" href={"https://wecanmeet.vercel.app/"}>
              wecanmeet
            </Link>
          </span>
          .
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-lg text-neutral-400 md:mt-4">
          {socials.map((item) => (
            <Tooltip key={item.name} delayDuration={200}>
              <TooltipTrigger>
                <Link
                  href={item.link}
                  target="_blank"
                  className="cursor-pointer"
                >
                  {item.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className={"text-md bg-black/20 backdrop-blur-lg w-/12"}
              >
                {item.name}
              </TooltipContent>
            </Tooltip>
          ))}
          <MessageBox />
        </div>
      </motion.div>
    </div>
  );
};

export default Introduction;
