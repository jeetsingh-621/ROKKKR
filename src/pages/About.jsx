import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Boxes } from "../components/ui/background-boxes";
import klrahul from "../assets/images/hlokl.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.55, 1]);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerStagger}
      className="w-full bg-[#E8F4E6] text-black"
    >
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden bg-black text-white flex items-center justify-center px-4 sm:px-8">
        <Boxes />
        <motion.div
          variants={fadeUp}
          className="relative z-10 mt-10 sm:mt-14 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            We help brands <br />
            & <span className="text-green-400">products succeed.</span>
          </h1>
        </motion.div>
      </div>

      {/* Scroll-Animated Image Section */}
      <div className="w-full py-20 sm:py-28 flex items-center justify-center px-4 md:px-10">
        <motion.div
          ref={imageRef}
          style={{ scale, willChange: "transform" }}
          className="transition-transform duration-700"
        >
          <img
            src={klrahul}
            alt="KL Rahul"
            loading="lazy"
            className="rounded-xl shadow-2xl w-[90vw] sm:w-[80vw] md:w-[60vw] max-w-[700px] object-cover"
          />
        </motion.div>
      </div>

      {/* Brand Philosophy */}
      <motion.div
        variants={fadeUp}
        className="px-6 md:px-16 py-12 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Philosophy</h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed">
          At HALO, we believe in blending innovation, nature, and technology to craft experiences that
          not only smell amazing but also reflect who you truly are. Our goal is to build a brand that
          connects emotionally and aesthetically with the next generation.
        </p>
      </motion.div>

      {/* Core Values Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-16 py-10"
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {["Innovation", "Luxury", "Sustainability", "Emotion", "Authenticity", "Performance"].map(
          (value, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-green-500 mb-2">{value}</h3>
              <p className="text-sm text-gray-600">
                HALO is committed to delivering {value.toLowerCase()} through every product we design.
              </p>
            </motion.div>
          )
        )}
      </motion.div>

      {/* KL Rahul Quote */}
      <motion.div
        variants={fadeUp}
        className="bg-black text-white text-center py-16 px-4 sm:px-12"
      >
        <p className="text-xl sm:text-2xl font-semibold italic max-w-3xl mx-auto">
          "Fragrance has the power to define moments. With HALO, I wanted to create something truly
          personal, something that speaks without saying a word." —{" "}
          <span className="font-bold text-green-400">KL Rahul</span>
        </p>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={fadeUp}
        className="text-center py-16 px-6"
      >
        <h3 className="text-2xl font-semibold mb-4">Discover the HALO experience</h3>
        <Link
          to="/shop"
          className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          Explore Our Products
        </Link>
      </motion.div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default About;
