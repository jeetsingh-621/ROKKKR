import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

import p1 from '../assets/images/products/alpha1.jpg';
import p2 from '../assets/images/products/alpha2.jpg';
import p3 from '../assets/images/products/date1.jpg';
import p4 from '../assets/images/products/date2.jpg';
import p5 from '../assets/images/products/day3.jpg';
import p6 from '../assets/images/products/day4.jpg';
import p7 from '../assets/images/products/night1.jpg';
import p8 from '../assets/images/products/night2.jpg';
import p9 from '../assets/images/products/sports1.jpg';
import p10 from '../assets/images/products/sports2.jpg';
import Footer from "../components/Footer";

const products = [
  {
    id: "halo-aura-1",
    name: "HALO Aura",
    price: "1299",
    image: p1,
    description: "A refreshing and bold fragrance with citrus top notes and warm woody undertones.",
    notes: ["Top: Lemon Zest", "Heart: Jasmine", "Base: Amber Musk"]
  },
  {
    id: "halo-nightfall-1",
    name: "HALO Nightfall",
    price: "1499",
    image: p2,
    description: "Mystical and enchanting with spicy cardamom and deep vanilla for elegance.",
    notes: ["Top: Cardamom", "Heart: Vanilla", "Base: Cedarwood"]
  },
  {
    id: "halo-pulse-1",
    name: "HALO Pulse",
    price: "999",
    image: p3,
    description: "Vibrant energy in a bottle, for those who make bold statements.",
    notes: ["Top: Bergamot", "Heart: Neroli", "Base: Tonka Bean"]
  },
  {
    id: "halo-drift-1",
    name: "HALO Drift",
    price: "1799",
    image: p4,
    description: "A calming, smooth fragrance perfect for laid-back evenings.",
    notes: ["Top: Lavender", "Heart: Sandalwood", "Base: White Musk"]
  },
  {
    id: "halo-aura-2",
    name: "HALO Aura",
    price: "1299",
    image: p5,
    description: "Same vibe, different bottle – freshness redefined.",
    notes: ["Top: Citrus", "Heart: Rose", "Base: Cedar"]
  },
  {
    id: "halo-nightfall-2",
    name: "HALO Nightfall",
    price: "1499",
    image: p6,
    description: "Sensual and smooth, perfect for night outs.",
    notes: ["Top: Pepper", "Heart: Amber", "Base: Vanilla"]
  },
  {
    id: "halo-pulse-2",
    name: "HALO Pulse",
    price: "999",
    image: p7,
    description: "Bold vibes all day long.",
    notes: ["Top: Lemon", "Heart: Geranium", "Base: Musk"]
  },
  {
    id: "halo-drift-2",
    name: "HALO Drift",
    price: "1799",
    image: p8,
    description: "Float with a soft scent that lingers.",
    notes: ["Top: Apple", "Heart: Sage", "Base: Vetiver"]
  },
  {
    id: "halo-pulse-3",
    name: "HALO Pulse",
    price: "999",
    image: p9,
    description: "Everyday fragrance with a sporty punch.",
    notes: ["Top: Mint", "Heart: Green Tea", "Base: Patchouli"]
  },
  {
    id: "halo-drift-3",
    name: "HALO Drift",
    price: "1799",
    image: p10,
    description: "Let your senses drift into comfort.",
    notes: ["Top: Marine", "Heart: Iris", "Base: Musk"]
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const Shop = () => {
  return (
    <div>
    <div className="w-full bg-[#E8F4E6] min-h-screen py-4 md:py-20 px-6 md:px-16 text-black">
      <div className="text-center mt-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Our Signature Scents
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 max-w-xl mx-auto"
        >
          Discover HALO's exclusive range of fragrances crafted for bold personalities.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default Shop;
