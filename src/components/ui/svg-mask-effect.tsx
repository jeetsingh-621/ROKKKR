import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

 const SvgMaskEffect = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updateMousePosition = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // sm < 768px
    };

    handleResize(); // Run once on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile) return;

    container.addEventListener("mousemove", updateMousePosition);
    return () => {
      container.removeEventListener("mousemove", updateMousePosition);
    };
  }, [isMobile]);

  const maskSize = isHovered ? (isMobile ? 200 : 200) : 0;

  return (
    <motion.div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Masked Content */}
      <motion.div
        className={`absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-black text-white transition-all duration-300 ease-out ${
          isMobile
            ? ""
            : "[mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-position:center] [mask-size:0px] [webkit-mask-image:url(/mask.svg)] [webkit-mask-repeat:no-repeat] [webkit-mask-position:center] [webkit-mask-size:0px]"
        }`}
        animate={
          isMobile
            ? {}
            : {
                maskPosition: `${mousePosition.x - maskSize / 2}px ${
                  mousePosition.y - maskSize / 2
                }px`,
                WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
                  mousePosition.y - maskSize / 2
                }px`,
                maskSize: `${maskSize}px`,
                WebkitMaskSize: `${maskSize}px`,
              }
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="text-center px-4">
          <div className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </div>
          <div className="text-sm sm:text-lg md:text-xl font-light mt-2">
            {subtitle}
          </div>
        </div>
      </motion.div>

      {/* Background Image */}
      <img
        src={image}
        className="absolute inset-0 h-full w-full object-cover"
        alt="Background"
      />
    </motion.div>
  );
};
export default SvgMaskEffect;