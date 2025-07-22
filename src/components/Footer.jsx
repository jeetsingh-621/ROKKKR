import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/metaman.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="w-full text-white bg-[linear-gradient(to_right,_black_0%,_#0c0f1a_45%,_#0c0f1a_55%,_black_100%)] px-4 md:px-16 pb-4 pt-16"
    >
      {/* Logo */}
      <motion.div variants={item} className="flex justify-center md:justify-start mb-10">
        <Link to="/">
          <img src={logo} alt="Metaman logo" className="w-40" />
        </Link>
      </motion.div>

      {/* Sections */}
      <motion.div variants={container} className="flex flex-col md:flex-row md:justify-between gap-12 font-[roboto]">
        <motion.section variants={item} className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-5">Quick Links</h2>
          <ul className="space-y-3 text-lg">
            {currentPath !== "/" && (
              <li>
                <Link to="/" className="hover:underline hover:text-green-400 duration-200">Home</Link>
              </li>
            )}
            {currentPath !== "/about" && (
              <li>
                <Link to="/about" className="hover:underline hover:text-green-400 duration-200">About us</Link>
              </li>
            )}
            {currentPath !== "/shop" && (
              <li>
                <Link to="/shop" className="hover:underline hover:text-green-400 duration-200">Shop All</Link>
              </li>
            )}
            {currentPath !== "/contact" && (
              <li>
                <Link to="/contact" className="hover:underline hover:text-green-400 duration-200">Contact us</Link>
              </li>
            )}
          </ul>
        </motion.section>

        {/* Legal Info */}
        <motion.section variants={item} className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-5">Legal information</h2>
          <ul className="space-y-3 text-lg">
            <li className="hover:underline hover:text-green-400 duration-200">Privacy policy</li>
            <li className="hover:underline hover:text-green-400 duration-200">Cancellation policy</li>
            <li className="hover:underline hover:text-green-400 duration-200">Refund policy</li>
            <li className="hover:underline hover:text-green-400 duration-200">Shipping policy</li>
            <li className="hover:underline hover:text-green-400 duration-200">Terms of service</li>
          </ul>
        </motion.section>

        {/* Newsletter */}
        <motion.section variants={item} className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-5">Newsletter</h2>
          <p className="text-sm mb-4">
            Subscribe to get special offers, free giveaways, and once‑in‑a‑lifetime deals.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Email"
              className="flex-1 p-2 bg-transparent border-b border-white outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="px-5 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
            >
              Join
            </button>
          </form>

          <p className="mt-4 text-xs leading-snug">
            This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.
          </p>
        </motion.section>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
