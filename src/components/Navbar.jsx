
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaLocationArrow } from "react-icons/fa6";
import Rlogo from "../assets/images/r3logo.png";
import { HyperText } from "../components/magicui/hyper-text";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();            
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const links = isAuthPage
    ? ["Home", "About"]                        
    : ["Home", "Shop", "About", "Login"]; 

  return (
    <>
      <nav
        className="fixed top-3 sm:top-12 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-[85%] md:w-[75%] lg:w-[60%] xl:max-w-screen-xl
                   px-4 sm:px-6 py-2 sm:py-2 flex justify-between items-center
                   backdrop-blur-md bg-white/40 text-black rounded-3xl shadow-md"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <Link to="/">
            <img
              className="w-8 h-8 sm:w-14 sm:h-14 object-contain"
              src={Rlogo}
              alt="ROKKR Logo"
            />
          </Link>
          <p className="hidden sm:block text-sm md:text-base font-semibold text-black truncate max-w-[120px] md:max-w-none">
            Where aura meets attitude.
          </p>
        </div>

        <button onClick={toggleMenu} className="text-2xl sm:text-3xl text-black">
          {isOpen ? <RxCross2 /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 backdrop-blur-sm bg-black/20 z-30"
              onClick={toggleMenu}
            />

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="fixed top-[75px] sm:top-[130px] left-1/2 -translate-x-1/2
                         w-[90%] sm:w-[85%] md:w-[75%] lg:w-[60%] xl:max-w-screen-xl
                         bg-[#E8F4E6] rounded-3xl shadow-lg z-40
                         flex flex-col justify-center px-6 sm:px-10 py-8 sm:py-10 text-xl text-black space-y-6"
            >
              {/* Header */}
              <div className="border-b pb-4">
                <h1 className="font-bold text-2xl text-[#528940] sm:text-3xl">
                  METAMAN
                </h1>
                <p className="mt-1 sm:mt-2 text-sm font-semibold sm:text-base text-zinc-700">
                  Fragrance that defines presence.
                </p>
              </div>

              {links.map((item, index) => {
                const path = item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <Link
                    key={item}
                    to={path}
                    onClick={toggleMenu}
                    className="group flex items-center justify-between gap-6 transition-all duration-300"
                  >
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <HyperText
                        shouldAnimate={isOpen}
                        animateOnHover={false}
                        delay={index * 100}
                        className="text-zinc-700 font-[cinzel] text-xl sm:text-[28px] font-medium group-hover:text-black group-hover:font-bold"
                      >
                        {item}
                      </HyperText>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-black">
                      <FaLocationArrow />
                    </span>
                  </Link>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
