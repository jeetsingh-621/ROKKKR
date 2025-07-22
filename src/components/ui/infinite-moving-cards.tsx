"use client";

import React, { useEffect, useRef, useState } from "react";
import { MessageCircleHeart } from "lucide-react";

// ✅ Local utility for className join
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

/**
 * InfiniteMovingCards – horizontally scrolling testimonial cards
 *
 * @param items Testimonial array
 * @param direction Scroll direction (left | right)
 * @param speed Animation speed (slow | normal | fast)
 * @param pauseOnHover Pause animation on hover
 */
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    company: string;
    name: string;
    role: string;
    icon?: React.ReactNode;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    duplicateContent();
  }, []);

  // Duplicate list items so the track loops seamlessly
  function duplicateContent() {
    if (!containerRef.current || !scrollerRef.current) return;

    const children = Array.from(scrollerRef.current.children);
    children.forEach((node) => {
      const clone = node.cloneNode(true);
      scrollerRef.current!.appendChild(clone);
    });

    applyDirection();
    applySpeed();
    setStart(true);
  }

  // CSS custom props – direction
  function applyDirection() {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }

  // CSS custom props – duration
  function applySpeed() {
    if (containerRef.current) {
      const map: Record<string, string> = { slow: "60s", normal: "40s", fast: "20s" };
      containerRef.current.style.setProperty("--animation-duration", map[speed] ?? "40s");
    }
  }

  // Default icon (if none provided)
  const DefaultIcon = <MessageCircleHeart className="w-4 h-4 text-primary" />;

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 mt-10 flex-nowrap gap-10 py-14 bg-[#E8F4E6]",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map(({ quote, company, name, role, icon }, idx) => (
          <li
            key={idx}
            className="relative w-[300px] hover:bg-green-400 duration-300 hover:scale-[1.05] md:w-[380px] shrink-0 rounded-2xl border border-zinc-800 bg-white shadow-md p-6 md:p-8 pt-6 md:pt-12  flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              {icon ?? DefaultIcon}
              <h3 className="text-base font-semibold text-zinc-900">{company}</h3>
            </div>

            {/* Quote */}
            <p className="text-sm  leading-relaxed italic mb-4 md:mb-6 grow">“{quote}”</p>

            {/* Footer */}
            <div>
              <p className="font-semibold mb-1 text-zinc-900">{name}</p>
              <p className="text-xs text-zinc-500">{role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

