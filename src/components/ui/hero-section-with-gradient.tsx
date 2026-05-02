"use client";

import React, { useEffect, useRef, ReactNode, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPython,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiGooglecloud,
  SiVercel,
  SiFigma,
  SiGraphql,
  SiJavascript,
  SiVuedotjs,
  SiAngular,
  SiSupabase,
  SiFirebase,
  SiStripe,
  SiGithub,
  SiLinux,
  SiRedis,
} from "react-icons/si";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

// Single orbit ring with all its icons rotating together
const OrbitRing = ({ 
  radius, 
  mobileRadius,
  duration, 
  direction,
  icons,
  isMobile
}: { 
  radius: number; 
  mobileRadius: number;
  duration: number; 
  direction: number;
  icons: { Icon: React.ElementType; startAngle: number; color: string }[];
  isMobile: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeRadius = isMobile ? mobileRadius : radius;
  const iconSize = isMobile ? 10 : 12;
  const containerSize = isMobile ? 36 : 48;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: activeRadius * 2,
        height: activeRadius * 2,
      }}
      animate={{ rotate: direction * 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* All icons on this orbit */}
      {icons.map((iconData, index) => {
        const { Icon, startAngle, color } = iconData;
        const rad = (startAngle * Math.PI) / 180;
        const x = Math.cos(rad) * activeRadius;
        const y = Math.sin(rad) * activeRadius;
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 flex items-center justify-center pointer-events-auto cursor-pointer"
            style={{
              marginLeft: x - (containerSize / 2),
              marginTop: y - (containerSize / 2),
            }}
            // Counter-rotate to keep icon upright
            animate={{ rotate: -direction * 360 }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div 
              className={cn(
                "rounded-full bg-background/95 backdrop-blur-sm border border-border/50 flex items-center justify-center transition-all duration-300",
                isHovered && "scale-125 border-primary/50"
              )}
              style={{
                width: containerSize,
                height: containerSize,
                boxShadow: isHovered 
                  ? `0 0 20px ${color}60, 0 0 40px ${color}30, 0 8px 32px rgba(0,0,0,0.2)` 
                  : "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <Icon 
                className={cn(
                  "transition-all duration-300",
                  isHovered && "scale-110"
                )}
                style={{ 
                  color: isHovered ? color : "hsl(var(--primary))",
                  width: iconSize * 2,
                  height: iconSize * 2,
                }} 
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// Circular orbits with icons component
const CircularOrbits = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsVerySmall(window.innerWidth < 480);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // Define orbits with official tech brand icons and their brand colors
  // Mobile radii are scaled down to fit smaller screens
  const orbits = [
    { 
      radius: 320, 
      mobileRadius: 140,
      duration: 30, 
      direction: 1,
      icons: [
        { Icon: SiReact, startAngle: 0, color: "#61DAFB" },
        { Icon: SiTypescript, startAngle: 90, color: "#3178C6" },
        { Icon: SiNodedotjs, startAngle: 180, color: "#339933" },
        { Icon: SiNextdotjs, startAngle: 270, color: "#000000" },
      ]
    },
    { 
      radius: 450, 
      mobileRadius: 200,
      duration: 40, 
      direction: -1,
      icons: [
        { Icon: SiDocker, startAngle: 0, color: "#2496ED" },
        { Icon: SiGit, startAngle: 60, color: "#F05032" },
        { Icon: SiPostgresql, startAngle: 120, color: "#4169E1" },
        { Icon: SiMongodb, startAngle: 180, color: "#47A248" },
        { Icon: SiGooglecloud, startAngle: 240, color: "#FF9900" },
        { Icon: SiVercel, startAngle: 300, color: "#000000" },
      ]
    },
    { 
      radius: 580, 
      mobileRadius: 260,
      duration: 50, 
      direction: 1,
      icons: isMobile ? [
        { Icon: SiJavascript, startAngle: 0, color: "#F7DF1E" },
        { Icon: SiVuedotjs, startAngle: 72, color: "#4FC08D" },
        { Icon: SiAngular, startAngle: 144, color: "#DD0031" },
        { Icon: SiSupabase, startAngle: 216, color: "#3FCF8E" },
        { Icon: SiFirebase, startAngle: 288, color: "#FFCA28" },
      ] : [
        { Icon: SiJavascript, startAngle: 0, color: "#F7DF1E" },
        { Icon: SiVuedotjs, startAngle: 36, color: "#4FC08D" },
        { Icon: SiAngular, startAngle: 72, color: "#DD0031" },
        { Icon: SiSupabase, startAngle: 108, color: "#3FCF8E" },
        { Icon: SiFirebase, startAngle: 144, color: "#FFCA28" },
        { Icon: SiStripe, startAngle: 180, color: "#635BFF" },
        { Icon: SiGithub, startAngle: 216, color: "#181717" },
        { Icon: SiLinux, startAngle: 252, color: "#FCC624" },
        { Icon: SiRedis, startAngle: 288, color: "#DC382D" },
        { Icon: SiReact, startAngle: 324, color: "#61DAFB" },
      ]
    },
  ];

  // On very small screens, hide orbits entirely for cleaner mobile view
  if (isVerySmall) {
    return null;
  }

  const activeOrbits = isMobile ? orbits.slice(0, 1) : orbits;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-40 md:opacity-100 pt-32 md:pt-44">
      {/* Orbit rings (visual circles) */}
      {activeOrbits.map((orbit, orbitIndex) => (
        <div
          key={`ring-${orbitIndex}`}
          className="absolute rounded-full border border-primary/20"
          style={{
            width: (isMobile ? orbit.mobileRadius : orbit.radius) * 2,
            height: (isMobile ? orbit.mobileRadius : orbit.radius) * 2,
          }}
        />
      ))}

      {/* Orbiting icons - one rotating container per orbit */}
      {activeOrbits.map((orbit, orbitIndex) => (
        <OrbitRing
          key={`orbit-${orbitIndex}`}
          radius={orbit.radius}
          mobileRadius={orbit.mobileRadius}
          duration={orbit.duration}
          direction={orbit.direction}
          icons={orbit.icons}
          isMobile={isMobile}
        />
      ))}

    </div>
  );
};

// Hero Arcade Embed Component
const HeroArcadeEmbed = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 translate-y-[45%] sm:translate-y-[55%] md:translate-y-[58%] flex justify-center px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 md:mb-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[92%] sm:max-w-3xl md:max-w-4xl"
      >
        <div className="relative rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden border-2 border-border bg-background p-3 sm:p-4 shadow-2xl shadow-primary/10">
          <div className="rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden relative" style={{ position: 'relative', paddingBottom: 'calc(43.083333333333336% + 41px)', height: '0', width: '100%' }}>
            <iframe
              src="https://demo.arcade.software/DIF1B3LP6qteCKiQQteB?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
              title="Configure payment gateways, taxes, and account settings"
              frameBorder="0"
              loading="lazy"
              allowFullScreen
              allow="clipboard-write"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function HeroSectionWithGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gradientRef.current) return;
    gsap.fromTo(
      gradientRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.6, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative z-10 min-h-[65vh] sm:min-h-[75vh] md:min-h-[85vh] bg-background pb-32 sm:pb-40 md:pb-48">
      {/* Gradient Background */}
      <div
        ref={gradientRef}
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background"
      />
      

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.08)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem]" />


      {/* Main Content */}
      <div className="relative z-10 flex min-h-[65vh] sm:min-h-[75vh] md:min-h-[85vh] flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedGroup
            preset="blur-slide"
            className="flex flex-col items-center gap-4 sm:gap-6"
          >

            {/* Headline */}
            <motion.h1
              variants={transitionVariants.item}
              className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]"
            >
              <span className="block font-serif italic font-normal">Engineering Digital</span>
              <span className="block font-bold text-foreground">
                <span className="text-primary">Excellence</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={transitionVariants.item}
              className="max-w-xs sm:max-w-xl md:max-w-4xl text-xl sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2"
            >
              <span className="hidden sm:inline">We build scalable software solutions, from web and mobile apps to cloud infrastructure, helping businesses grow with technology that performs.</span>
              <span className="sm:hidden">Scalable web, mobile & cloud solutions that drive business growth.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={transitionVariants.item}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-0 sm:pt-2 pb-8 sm:pb-12 w-full sm:w-auto"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all w-full sm:w-auto"
                >
                  Start Building
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium w-full sm:w-auto"
                >
                  Request a demo
                </Button>
              </Link>
            </motion.div>
          </AnimatedGroup>
        </div>

      </div>

      {/* Overlapping Hero Image Carousel - balanced overlap across devices */}
      <HeroArcadeEmbed />
    </section>
  );
}

export const BrandsGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const brands = [
    {
      name: "loops",
      logo: "https://assets.rapidui.dev/brands/loops.svg",
    },
    {
      name: "pwc",
      logo: "https://assets.rapidui.dev/brands/pwc.svg",
    },
    {
      name: "resend",
      logo: "https://assets.rapidui.dev/brands/resend.svg",
    },
    {
      name: "udio",
      logo: "https://assets.rapidui.dev/brands/udio.svg",
    },
    {
      name: "krea",
      logo: "https://assets.rapidui.dev/brands/krea.svg",
    },
    {
      name: "gopuff",
      logo: "https://assets.rapidui.dev/brands/gopuff.svg",
    },
  ];

  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      <p className="text-center text-sm text-muted-foreground mb-8">
        Trusted by innovative companies worldwide
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-8 sm:h-10 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

BrandsGrid.displayName = "BrandsGrid";

type PresetType =
  | "fade"
  | "slide"
  | "scale"
  | "blur"
  | "blur-slide"
  | "zoom"
  | "flip"
  | "bounce"
  | "rotate"
  | "swing";

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  },
  "blur-slide": {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
  },
  zoom: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 300, damping: 20 },
      },
    },
  },
  flip: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: {
        opacity: 1,
        rotateX: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 20 },
      },
    },
  },
  bounce: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 400, damping: 10 },
      },
    },
  },
  rotate: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -180 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring" as const, stiffness: 200, damping: 15 },
      },
    },
  },
  swing: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -10 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 8 },
      },
    },
  },
};

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
}: AnimatedGroupProps) {
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export { AnimatedGroup };
