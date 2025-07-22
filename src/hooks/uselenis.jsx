import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const lenis = new Lenis({
        duration: 1.5,
        smooth: true,
        smoothTouch: true,
        lerp: 0.06,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      let animationFrame;

      const raf = (time) => {
        lenis.raf(time);
        animationFrame = requestAnimationFrame(raf);
      };

      animationFrame = requestAnimationFrame(raf);

      // 🧹 Cleanup
      return () => {
        cancelAnimationFrame(animationFrame);
        lenis.destroy();
      };
    }, 200); 

    return () => clearTimeout(timeout);
  }, []);
};

export default useLenis;
