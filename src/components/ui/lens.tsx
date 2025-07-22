"use client";

import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

interface LensProps {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  isStatic?: boolean;
  position?: {
    x: number;
    y: number;
  };
  hovering?: boolean;
  setHovering?: (hovering: boolean) => void;
}

 const Lens: React.FC<LensProps> = ({
  children,
  zoomFactor = 1.5,
  lensSize = 200,
  isStatic = false,
  position = { x: 200, y: 150 },
  hovering,
  setHovering,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
  const [localIsHovering, setLocalIsHovering] = useState(false);
  const [actualLensSize, setActualLensSize] = useState(lensSize);

  const isHovering = hovering !== undefined ? hovering : localIsHovering;
  const setIsHovering = setHovering || setLocalIsHovering;

  // 🔁 Responsive lens size for mobile
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setActualLensSize(width < 768 ? 100 : lensSize);
    };

    handleResize(); // Initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [lensSize]);

  // 🧠 Handle mouse/touch movement
  const handleMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    let x = 0,
      y = 0;
    if ("touches" in e) {
      const touch = e.touches[0];
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-lg z-20 touch-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMove}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
      onTouchMove={handleMove}
    >
      {children}

      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.58 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 overflow-hidden"
            style={{
              maskImage: `radial-gradient(circle ${
                actualLensSize / 2
              }px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle ${
                actualLensSize / 2
              }px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
              transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
              zIndex: 50,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `scale(${zoomFactor})`,
                transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Lens;