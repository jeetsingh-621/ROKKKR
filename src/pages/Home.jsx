import React, { lazy, Suspense } from 'react';

// ✅ Lazy loaded components
const HeroSection = lazy(() => import('../components/HeroSection'));
const Abouthero = lazy(() => import('../components/Abouthero'));
const Ourproducts = lazy(() => import('../components/Ourproducts'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Footer = lazy(() => import('../components/Footer'));

// ✅ Optional fallback while chunks load
const SectionLoader = () => (
  <div className="w-full text-center text-white py-10">Loading section...</div>
);

const Home = () => {
  return (
    <main className="min-h-screen w-full">
      <Suspense fallback={<SectionLoader />}>
        <div className="p-0 sm:p-4">
          <HeroSection />
        </div>

        <div>
          <Abouthero />
          <Ourproducts />
          <Testimonials />
          <Footer />
        </div>
      </Suspense>
    </main>
  );
};

export default Home;
