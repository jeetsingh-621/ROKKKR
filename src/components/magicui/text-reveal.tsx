"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

// Simple classnames joiner
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[130vh]", className)}>
      <div className="sticky top-15 mx-auto flex h-[40%] max-w-6xl items-center bg-transparent px-[0rem] py-[0rem]">
        <span className="flex flex-wrap p-0 sm:p-5 text-2xl font-bold text-[#888888] md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-4xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 lg:mx-1.5">
      {/* Base faded text */}
      <span className="absolute text-[#a0a0a0]">{children}</span>

      {/* Revealed text with opacity mask */}
      <motion.span
        style={{ opacity }}
        className="text-[#111111] font-semibold relative z-10"
      >
        {children}
      </motion.span>
    </span>
  );
};
