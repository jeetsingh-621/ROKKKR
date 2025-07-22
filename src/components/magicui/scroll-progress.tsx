"use client";

import React from "react";
import { motion, MotionProps, useScroll } from "framer-motion"; // ✅ fix motion/react
// ⚠️ upar wali line me motion/react nahi, sirf framer-motion hoga

// ✅ `cn` utility yahi define kar diya
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-1 sm:h-1 rounded-4xl origin-left bg-gradient-to-r from-[#A97CF8] via-[#923d62] to-[#e2820d]",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
