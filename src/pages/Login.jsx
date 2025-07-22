
import React, { useState } from "react";
import { motion } from "framer-motion";
import loginbg from "../assets/videos/klvideo5.mp4"; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen px-3 flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-center sm:object-[center_20%] z-0"
        src={loginbg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 sm:bg-black/50 z-10" />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-20 w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg px-4 sm:px-8 py-10 text-white"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          Welcome to <span className="text-green-400">HALO</span>
        </h2>

        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full text-base bg-transparent border border-gray-400 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full text-base bg-transparent border border-gray-400 rounded-md px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-gray-300 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-2.5 rounded-md transition duration-200"
            >
              Login
            </button>
          </div>
        </form>

        {/* Links */}
        <div className="mt-6 text-sm text-center space-y-2">
          <a href="#" className="text-zinc-400 hover:text-green-400">
            Forgot Password?
          </a>
          <br />
          <span>
            Don’t have an account?{" "}
            <a href="/signup" className="text-green-400 hover:underline">
              Sign Up
            </a>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
