import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  // 💰 Total calculation with safe defaults
  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * (item.quantity || 1),
    0
  );

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#eafaf1] to-[#f5fffd] px-4 py-8"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl mt-16 p-8 border border-zinc-200">
        <h2 className="text-3xl font-bold text-center text-[#222] mb-6">
          Checkout Summary
        </h2>

        {/* 🛒 Items List */}
        <div className="mb-6 space-y-4 max-h-60 overflow-y-auto border p-4 rounded-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-sm"
            >
              <span>
                {item.name} × {item.quantity || 1}
              </span>
              <span>₹{Number(item.price) * (item.quantity || 1)}</span>
            </div>
          ))}
        </div>

        {/* 📦 Address & Payment Info */}
        <div className="space-y-4 text-zinc-700">
          <div>
            <h4 className="font-semibold">Shipping Address</h4>
            <p className="text-sm mt-1">
              Rahul Sharma, 123 Elegance Street, New Delhi, India
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Payment Method</h4>
            <p className="text-sm mt-1">Credit Card - **** **** **** 4242</p>
          </div>

          {/* 💳 Price Summary */}
          <div className="border-t pt-4">
            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-500">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-2">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>

        {/* 🔘 Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/cart")}
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Back to Cart
          </button>
          <button
            onClick={() => {
              alert("Thanks for your order!");
              navigate("/");
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#00ffc3] hover:bg-[#00cba1] text-black font-semibold transition-all duration-300"
          >
            Place Order
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
