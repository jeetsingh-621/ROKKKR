// src/components/ProductCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ Import cart context

const cardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ Get addToCart from context

  // ✅ Function to handle Add to Cart
  const handleAddToCart = () => {
    addToCart(product);      // ✅ Actually adds the item
    navigate("/cart");       // ✅ Then takes to Cart (optional)
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover rounded-lg mb-4"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-green-500 font-medium mt-1">₹{product.price}</p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="px-4 py-2 text-sm rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition"
        >
          View Details
        </button>

        {/* ✅ Fixed Add to Cart button */}
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 text-sm rounded-full bg-green-600 text-white hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
