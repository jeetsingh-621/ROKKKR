import React from "react";
import halohero from "../assets/images/halohero1.webp";   // Desktop
import halohero2 from "../assets/images/halohero2.webp";  // Mobile

const HeroSection = () => {
  return (
    <section
      className="relative w-full
      sm:min-h-screen flex flex-col justify-center items-center text-center overflow-hidden
      px-0 sm:px-0
      pt-0 sm:pt-24
      rounded-none rounded-b-[1.5rem] sm:rounded-[3rem]"
    >
      {/* ✅ Mobile Background */}
      <div className="relative w-full block sm:hidden">
        <img
          src={halohero2}
          alt="Mobile Halo Background"
          width={750} // Set to actual dimensions of your mobile image
          height={1000}
          className="w-full h-auto object-cover block"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* ✅ Desktop Background */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <img
          src={halohero}
          alt="Desktop Halo Background"
          width={1920} // Set to actual dimensions of your desktop image
          height={1080}
          className="w-full h-full object-cover object-[center_top]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

    
    </section>
  );
};

export default HeroSection;
