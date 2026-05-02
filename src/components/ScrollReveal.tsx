import { ReactNode } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur";
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollReveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out, filter ${duration}ms ease-out`,
      transitionDelay: `${delay}ms`,
    };

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return { ...baseStyles, opacity: 0, transform: "translateY(30px)" };
        case "fade-down":
          return { ...baseStyles, opacity: 0, transform: "translateY(-30px)" };
        case "fade-left":
          return { ...baseStyles, opacity: 0, transform: "translateX(30px)" };
        case "fade-right":
          return { ...baseStyles, opacity: 0, transform: "translateX(-30px)" };
        case "scale":
          return { ...baseStyles, opacity: 0, transform: "scale(0.9)" };
        case "blur":
          return { ...baseStyles, opacity: 0, filter: "blur(10px)" };
        default:
          return { ...baseStyles, opacity: 0 };
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: "translateY(0) translateX(0) scale(1)",
      filter: "blur(0)",
    };
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;