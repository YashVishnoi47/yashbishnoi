import React from "react";
import { motion } from "framer-motion";

const Tools = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-white p-4"
    >
      Tools
    </motion.div>
  );
};

export default Tools;
