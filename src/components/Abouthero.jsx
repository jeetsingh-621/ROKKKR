import React from "react";
import { TextReveal } from "../components/magicui/text-reveal";
import halo1 from "../assets/images/halo1.webp";
import  InteractiveHoverButton  from "../components/magicui/interactive-hover-button";

const Abouthero = () => {
  return (
    <div className="w-full relative px-4 py-12 sm:px-16 sm:py-24 bg-[#E8F4E6]">
      <div className="w-full relative flex flex-col sm:flex-row items-center sm:items-start gap-10">
        {/* LEFT - Image */}
        <div className="w-full sm:w-[35%] text-center sm:text-left">
          <h3 className="font-[roboto] sm:absolute sm:top-80 sm:left-0 mb-4 text-zinc-700 text-lg sm:text-2xl">
            ABOUT US
          </h3>
          <img
            className="sm:w-[25%] w-[90%] sm:absolute sm:bottom-20 sm:left-0 sm:h-auto object-cover rounded-xl mx-auto sm:mx-0"
            src={halo1}
            alt="halo1"
          />
        </div>

        {/* RIGHT - Text */}
        <div className="w-full font-[roboto] text-white text-sm sm:text-2xl leading-relaxed text-center sm:text-left">
          <TextReveal>
            Introducing HALO — where luxury meets emotion. Every bottle holds a
            story, a moment, a memory. Step into your own narrative, one drop at
            a time.
          </TextReveal>

          {/* Button for mobile below content */}
          <div className="mt-8 sm:hidden">
            <InteractiveHoverButton className="px-6 py-3" to="/about">
              View Details
            </InteractiveHoverButton>
          </div>
        </div>
      </div>

      {/* Button for larger screens - center absolute */}
      <div className="hidden sm:block absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <InteractiveHoverButton className="px-10" to="/about">
          View Details
        </InteractiveHoverButton>
      </div>
    </div>
  );
};

export default Abouthero;
