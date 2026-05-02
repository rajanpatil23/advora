import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

interface FlipImageCarouselProps {
  items: CarouselItem[];
}

export default function FlipImageCarousel({ items }: FlipImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentItem = items[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
    }),
  };

  return (
    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
      {/* Left side - Flipping Image */}
      <div className="relative lg:col-span-3">
        {/* Decorative frame - contained within bounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-[2rem]" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
        
        <div className="relative p-4 sm:p-6">
          <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden" style={{ perspective: "1000px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover rounded-[2rem]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent rounded-[2rem]" />
            </motion.div>
          </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Right side - Content */}
      <div className="space-y-6 lg:col-span-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-3xl md:text-4xl font-bold">{currentItem.title}</h3>
            <p className="text-lg text-primary font-medium">{currentItem.subtitle}</p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {currentItem.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Feature highlights */}
        <div className="pt-4 border-t border-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-accent">150+</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">50+</p>
              <p className="text-sm text-muted-foreground">Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">5+</p>
              <p className="text-sm text-muted-foreground">Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
