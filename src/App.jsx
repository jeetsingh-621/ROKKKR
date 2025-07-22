import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useLenis from '../src/hooks/uselenis';

// Lazy Components
const Navbar = lazy(() => import('./components/Navbar'));
const Mainroutes = lazy(() => import('./routes/Mainroutes'));

// Non-lazy components
import { ScrollProgress } from "../src/components/magicui/scroll-progress";
import { SmoothCursor } from "../src/components/ui/smooth-cursor";
import ScrollToTop from './components/ScrollToTop';

// Loader
import Loader from './pages/Loader';

const App = () => {
  useLenis();
  const location = useLocation();
  const hideNavbarOnRoutes = ["/404"];
  const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);

  const [loading, setLoading] = useState(true);

  // Simulate font/assets load
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // can reduce to 1500ms if fast

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="relative font-[cinzel] bg-black text-white min-h-screen">
      <ScrollToTop />
      <SmoothCursor />
      <ScrollProgress />

      {/* Page wrapper with max width */}
      <div className="max-w-[2560px] mx-auto px-0">
        <Suspense fallback={<Loader />}>
          {!shouldHideNavbar && <Navbar />}
          <Mainroutes />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
