import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useLenis from '../src/hooks/uselenis';
import { AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

const Navbar = lazy(() => import('./components/Navbar'));
const Mainroutes = lazy(() => import('./routes/Mainroutes'));

import { ScrollProgress } from "../src/components/magicui/scroll-progress";
import { SmoothCursor } from "../src/components/ui/smooth-cursor";
import ScrollToTop from './components/ScrollToTop';
import Loader from './pages/Loader';

const App = () => {
  useLenis();
  const location = useLocation();
  const hideNavbarOnRoutes = ["/404"];
  const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative font-[cinzel] bg-black text-white min-h-screen">
      <ScrollToTop />
      <SmoothCursor />
      <ScrollProgress />

      <ToastContainer 
        position="top-right" 
        autoClose={2500} 
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="dark"
      />

      {/* AnimatePresence handles loader exit animation */}
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Main content after loader */}
      {!loading && (
        <div className="max-w-[2560px] mx-auto px-0">
          <Suspense fallback={<Loader />}>
            {!shouldHideNavbar && <Navbar />}
            <Mainroutes />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default App;
