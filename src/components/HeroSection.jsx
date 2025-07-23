import React, { useEffect, useState } from "react";
import halohero from "../assets/images/halohero1.webp";   // Desktop
import halohero2 from "../assets/images/halohero2.webp";  // Mobile

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section
      className="relative w-full sm:min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-0 sm:px-0 pt-0 sm:pt-24 rounded-none rounded-b-[1.5rem] sm:rounded-[3rem] will-change-transform"
    >
      {/* ✅ Mobile Background */}
      {isMobile && (
        <div className="relative w-full block">
          <img
            src={halohero2}
            alt="Mobile Halo Background"
            width={750}
            height={1000}
            className="w-full h-auto object-cover block rounded-b-[1.5rem]"
            loading="eager"
            fetchPriority="high"
            style={{ transform: "translateZ(0)" }}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      )}

      {/* ✅ Desktop Background */}
      {!isMobile && (
        <div className="hidden sm:block absolute inset-0 z-0">
          <img
            src={halohero}
            alt="Desktop Halo Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-[center_top] rounded-b-[3rem]"
            loading="eager"
            fetchPriority="high"
            style={{ transform: "translateZ(0)" }}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      )}

      {/* ❗️Aap yahan scroll-down indicator ya hero text chahein to add kar sakte ho */}
    </section>
  );
};

export default HeroSection;
