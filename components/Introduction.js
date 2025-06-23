import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion, useScroll, useSpring } from "framer-motion";

const Introduction = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="w-full h-[30%] flex flex-col justify-start items-start p-4 mt-2">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-yellow-500 origin-left z-50"
      />
      {/* Avatar and Name and country  */}
      <motion.div
        initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full h-[60%] flex items-center justify-start px-4 py-3 gap-4"
      >
        {/* Profile Image */}
        <motion.div
          whileHover={{
            rotateX: 10,
            rotateY: 10,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          style={{ perspective: 1000 }}
          className="flex-shrink-0 select-none"
        >
          <Image
            className="w-25 h-25 rounded-full object-cover border-neutral-300 dark:border-neutral-700"
            src="/profile picture.jpg"
            width={64}
            height={64}
            alt="Avatar"
          />
        </motion.div>
        {/* Name & Location */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-neutral-800 dark:text-white">
            Yash Bishnoi
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 flex gap-1 items-center">
            <FaLocationDot className="text-sm" />
            Uttar Pardesh, India
          </p>
        </div>
      </motion.div>

      {/* About me */}
      <motion.div
        initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex flex-col items-start justify-start px-3 gap-1 rounded-xl mt-2"
      >
        {/* Description */}
        <p className="text-xl text-neutral-200 ">
          <span>Full-Stack Web Developer from India. Open for work.</span>{" "}
          Learning Python and exploring AI. Currently building {""}
          <span className="font-medium hover:text-yellow-600 transition-all duration-200 ease-in-out underline cursor-pointer">
            Project
          </span>
          .
        </p>
        {/* Social Links */}
        <div className="text-lg text-neutral-200 mt-4 flex justify-center items-center gap-[15px]">
          <Link
            className="cursor-pointer"
            href={"https://www.instagram.com/yashss.realm/"}
            target="_blank"
          >
            <FaInstagram className="text-neutral-400 hover:text-white transition-all duration-150 text-xl " />{" "}
          </Link>
          <Link
            className="cursor-pointer"
            href={"https://x.com/Yash_Vishnoi7"}
            target="_blank"
          >
            <FaXTwitter className="text-neutral-400 hover:text-white transition-all duration-150 text-xl " />{" "}
          </Link>

          <Link
            className="cursor-pointer"
            href={"https://github.com/YashVishnoi47"}
            target="_blank"
          >
            <FaGithub className="text-neutral-400 hover:text-white transition-all duration-150 text-xl  " />
          </Link>
          <Link
            className="cursor-pointer"
            href={"mailto:yashvishnoi309@gmail.com"}
            target="_blank"
          >
            <SiGmail className="text-neutral-400 hover:text-white transition-all duration-150 text-xl  " />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Introduction;
