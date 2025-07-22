import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 👈 important

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string; // 👈 extra prop for route
}

 const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, to, ...props }, ref) => {
  const navigate = useNavigate(); // 👈 get navigate function

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (to) {
      e.preventDefault();
      navigate(to); // 👈 navigate to target route
    }

    if (props.onClick) props.onClick(e); // 👈 still call user's click handler
  };

  return (
    <button
      ref={ref}
      onClick={handleClick} // 👈 hook attached here
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full border border-zinc-800 bg-black px-6 py-3 text-white font-semibold transition-all duration-300 group hover:bg-white hover:text-black",
        className
      )}
      {...props}
    >
      <span className="transition-all duration-300 group-hover:-translate-x-4 group-hover:opacity-0">
        {children}
      </span>

      <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4">
        <span>{children}</span>
        <ArrowRight className="w-4 h-4" />
      </span>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;