// src/pages/ProductDetails.jsx
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/products";
import { useCart } from "../context/CartContext"; 
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 
  const product = products.find((p) => p.id === id);

  if (!product)
    return (
      <div className="p-10 text-center text-xl text-red-600">
        Product Not Found
      </div>
    );

  const handleAddToCart = () => {
    addToCart(product); // 
    navigate("/cart");  // 
  };

  return (
    <div>
    <div className="min-h-screen w-full pt-50 bg-[#E8F4E6] text-black px-4 py-20 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow-xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-green-600 text-2xl font-semibold mb-6">₹{product.price}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

          <ul className="mb-6 space-y-1">
            {product.notes?.map((note, i) => (
              <li key={i} className="text-sm text-gray-600">• {note}</li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => navigate("/shop")}
              className="px-6 py-3 rounded-full border border-green-600 text-green-600 hover:bg-green-100 transition"
            >
              Back to Shop
            </button>
          </div>
        </motion.div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
