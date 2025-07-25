import React, { lazy, Suspense, useEffect, useState } from "react";
import combo from "../assets/images/homep4.jpg";

// ✅ Lazy components
const ContainerScroll = lazy(() => import("../components/ui/container-scroll-animation"));
const PerfumeCanvas = lazy(() => import("./perfumemodels/Perfumemodel1"));
const PerfumeCanvas2 = lazy(() => import("./perfumemodels/Perfumemodel2"));
const Overmaskmaker = lazy(() => import("../components/Ourmaskmaker"));
const TextGenerateEffect = lazy(() => import("../components/ui/text-generate-effect"));
const Lens = lazy(() => import("../components/ui/lens"));
const InteractiveHoverButton = lazy(() => import("../components/magicui/interactive-hover-button"));

// ✅ Loader
const SectionLoader = () => (
  <div className="w-full text-center text-white text-xl py-10">Loading...</div>
);

// ✅ Delayed load helper (loads after mount)
const useDelayed = (delay = 500) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, []);
  return show;
};

const Ourproducts = () => {
  const show3D1 = useDelayed(200); // First 3D
  const show3D2 = useDelayed(800); // Second 3D
  const showLens = useDelayed(1200); // Lens image
  const showMask = useDelayed(2000); // Mask animation
  const showButton = useDelayed(1000); // CTA

  return (
    <div className="w-full py-0 pt-20 md:pt-30 px-4 md:px-16 bg-gradient-to-r from-black via-[#008c7a] to-black text-white relative will-change-transform">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16 mb-24">
        <h1 className="w-full md:w-1/2 text-center text-4xl md:text-6xl font-bold leading-tight">
          Our Products
        </h1>
        <div className="w-full md:w-1/2 text-center text-md md:text-2xl text-white font-semibold">
          <p>
            Crafted for those who lead with presence. HALO blends elegance,
            emotion, and excellence in every bottle
          </p>
        </div>
      </div>

      {/* HERO VIDEO */}
      <Suspense fallback={<SectionLoader />}>
        <div className="min-h-[80vh]  md:min-h-screen translate-z-0">
          <ContainerScroll
            titleComponent={
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-15 text-center">
                Introducing <span className="text-green-400"> HALO</span>
              </h1>
            }
          >
            <video
              className="h-full w-full object-cover object-[center_40%] rounded-xl will-change-transform"
              src={"/videos/halovideo4.mp4"} 
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              loading="lazy"
            />
          </ContainerScroll>
        </div>
      </Suspense>

      {/* Perfume 1 */}
      {show3D1 && (
        <Suspense fallback={<SectionLoader />}>
          <div className="p-4 flex flex-col-reverse md:flex-row justify-between items-center gap-8 my-0">
            <div className="w-full md:w-[60%] text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-semibold">
                Paco <span className="text-green-400"> Rabanne</span>
              </h2>
              <div className="text-lg md:text-3xl my-2 font-semibold text-white md:w-[80%] mx-auto md:mx-0">
                <TextGenerateEffect words="Manage your orders effortlessly with a sleek, intuitive dashboard for seamless tracking." />
              </div>
            </div>
            <div className="w-full md:w-[40%] h-[17rem] md:h-[30rem]">
              <PerfumeCanvas2 />
            </div>
          </div>
        </Suspense>
      )}

      {/* Perfume 2 */}
      {show3D2 && (
        <Suspense fallback={<SectionLoader />}>
          <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-8 my-0">
            <div className="w-full md:w-[40%] h-[16rem] md:h-[30rem]">
              <PerfumeCanvas />
            </div>
            <div className="w-full md:w-[60%] text-center md:text-right">
              <h2 className="text-4xl md:text-6xl font-semibold">
                Dior <span className="text-green-400"> Sauvage</span>
              </h2>
              <div className="text-xl md:text-3xl my-4 font-semibold text-zinc-300">
                <TextGenerateEffect words="Experience the bold freshness and rich heritage of Dior Sauvage, crafted for the modern legend." />
              </div>
            </div>
          </div>
        </Suspense>
      )}

      {/* Perfume 3 */}
      {showLens && (
        <Suspense fallback={<SectionLoader />}>
          <div className="p-0 flex sm:mt-24 flex-col md:flex-row justify-between items-center gap-8 my-12">
            <div className="w-full md:w-[50%] text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-semibold">
                Halo <span className="text-green-400"> Pack of 5</span>
              </h2>
              <div className="text-xl md:text-3xl my-4 font-semibold text-zinc-300">
                <TextGenerateEffect words="Experience the full range of Halo’s exclusive fragrances with our Pack of 5..." />
              </div>
            </div>
            <div className="w-full md:w-[40%] h-[20rem] md:h-[35rem] rounded-xl overflow-hidden">
              <Lens zoomFactor={2} lensSize={200}>
                <img
                  src={combo}
                  alt="Halo combo pack"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-xl"
                />
              </Lens>
            </div>
          </div>
        </Suspense>
      )}

      {/* CTA Button */}
      {showButton && (
        <Suspense fallback={null}>
          <div className="mt-12 sm:mt-30 mx-auto flex justify-center">
            <InteractiveHoverButton className="px-6 sm:px-10 py-3" to="/shop">
              View Products
            </InteractiveHoverButton>
          </div>
        </Suspense>
      )}

      {showMask && (
        <Suspense fallback={null}>
          <Overmaskmaker />
        </Suspense>
      )}
    </div>
  );
};

export default Ourproducts;
