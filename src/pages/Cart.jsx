import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen sm:pt-40 bg-[#E8F4E6] px-4 py-16 md:px-16 text-black font-[roboto]">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        Your Shopping Cart
      </motion.h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-xl text-gray-600 mt-20">
          Your cart is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row items-start gap-4"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-red-500 hover:bg-red-100 hover:text-red-700 transition-all z-10"
                  title="Remove item"
                >
                  ✕
                </button>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-green-500 font-medium mt-1">
                    ₹{item.price}
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 bg-gray-200 text-black rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 bg-gray-200 text-black rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* Price */}
                <div className="text-right font-bold text-lg ml-auto sm:ml-0 sm:mt-auto">
                  ₹{item.price * item.quantity}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cart Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow sticky top-24 h-fit"
          >
            <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">FREE</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <Link
              to="/checkout"
              className="mt-6 block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-full transition"
            >
              Proceed to Checkout
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;
