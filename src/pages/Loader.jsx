import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">
      {/* Halo Pulse Ring */}
      <motion.div
        className="relative w-24 h-24"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-[#00ffc3] opacity-30 animate-ping" />
        <div className="absolute inset-0 rounded-full border-4 border-[#00ffc3]" />
        <div className="absolute inset-2 rounded-full bg-[#00ffc3] opacity-10 blur-xl" />
      </motion.div>

      {/* HALO Text */}
      <motion.h1
        className="mt-20 text-4xl font-bold tracking-widest text-[#00ffc3]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        HALO
      </motion.h1>
    </div>
  );
};

export default Loader;
