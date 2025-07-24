"use client";
import React from "react";
import { motion } from "framer-motion";
import { ComicText } from "../components/magicui/comic-text";

const loaderVariants = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  exit: {
    opacity: 0.8,
    y: "-100%",
    transition: {
      duration: 1.2,
      ease: "easeInOut", // very smooth
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white px-4"
      variants={loaderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Comic-style Halo Pulse Ring */}
      <motion.div
        className="relative w-20 h-20 sm:w-28 sm:h-28"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-[#00ffc3] animate-ping opacity-30" />
        <div className="absolute inset-0 rounded-full border-4 border-[#00ffc3]" />
        <div className="absolute inset-2 rounded-full bg-[#00ffc3] opacity-10 blur-xl" />
      </motion.div>

      {/* Welcome Line */}
      <motion.div
        className="mt-12 sm:mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <ComicText fontSize={3.2}>Welcome to HALO</ComicText>
      </motion.div>

      {/* Subline */}
      <motion.div
        className="mt-3 sm:mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <ComicText fontSize={2}>Your Scented Journey Awaits...</ComicText>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
