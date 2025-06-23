import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion, useScroll, useSpring } from "framer-motion";

const Introduction = ({ theme }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const socials = [
    {
      name: "Instagram",
      icon: (
        <FaInstagram className="text-neutral-400 hover:text-white transition-all duration-150 text-xl" />
      ),
      link: "https://www.instagram.com/yashss.realm/",
    },
    {
      name: "X",
      icon: (
        <FaXTwitter className="text-neutral-400 hover:text-white transition-all duration-150 text-xl" />
      ),
      link: "https://x.com/Yash_Vishnoi7",
    },
    {
      name: "Github",
      icon: (
        <FaGithub className="text-neutral-400 hover:text-white transition-all duration-150 text-xl" />
      ),
      link: "https://github.com/YashVishnoi47",
    },
    {
      name: "G-Main",
      icon: (
        <SiGmail className="text-neutral-400 hover:text-white transition-all duration-150 text-xl" />
      ),
      link: "mailto:yashvishnoi309@gmail.com",
    },
  ];
  return (
    <div className="w-full min-h-[35%] flex flex-col items-start justify-start p-4 mt-2">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-yellow-500 origin-left z-50"
      />

      {/* Avatar, Name, and Location */}
      <motion.div
        initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex flex-col md:flex-row items-center md:items-center gap-4 px-4 py-3"
      >
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
            Uttar Pradesh, India
          </p>
        </div>
      </motion.div>

      {/* About Me */}
      <motion.div
        initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex flex-col md:items-start justify-start px-3 gap-3 mt-2"
      >
        <p className="text-base md:text-xl text-neutral-200">
          <span>Full-Stack Web Developer from India. Open for work.</span>{" "}
          Learning Python and exploring AI. Currently building{" "}
          <span className="font-medium underline cursor-pointer hover:text-yellow-600 transition">
            Project
          </span>
          .
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-lg text-neutral-400 mt-3">
          {socials.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              className="cursor-pointer"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Introduction;
