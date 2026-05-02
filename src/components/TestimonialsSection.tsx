import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";

type Filter = "all" | "google";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  headingLine1?: string;
  headingLine2?: string;
  headingHighlight?: string;
  subtitle?: string;
  titleVariant?: "home" | "service";
}

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setCount(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return count;
}

export default function TestimonialsSection({
  testimonials,
  headingLine1 = "Trusted by Teams",
  headingLine2 = "Who Care About",
  headingHighlight = "Results",
  subtitle = "Hear directly from clients about their experience working with us - from product delivery to measurable business outcomes.",
  titleVariant = "home",
}: TestimonialsSectionProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = useMemo(
    () => (filter === "all" ? testimonials : testimonials.filter((t) => t.platform === filter)),
    [filter, testimonials],
  );

  const visible = useVisibleCount();
  const [idx, setIdx] = useState(0);
  const n = filtered.length;

  const wrap = (i: number) => (n === 0 ? 0 : (i + n) % n);
  const next = () => setIdx((i) => wrap(i + 1));
  const prev = () => setIdx((i) => wrap(i - 1));

  const page = Array.from({ length: Math.min(visible, n) }, (_, k) => filtered[wrap(idx + k)]);
  const centerRel = Math.floor(page.length / 2);
  const isServiceTitle = titleVariant === "service";

  // Auto-advance carousel
  useEffect(() => {
    if (n <= visible) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [n, visible]);

  return (
    <div className={cn("w-full", isServiceTitle ? "py-16 sm:py-20" : "py-0 lg:py-16 lg:pt-20")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12">
            {!isServiceTitle && (
              <Badge variant="outline" className="mb-4 text-sm px-4 py-1 font-semibold tracking-wider">
                TESTIMONIALS
              </Badge>
            )}
            {isServiceTitle ? (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4">
                <span className="font-serif italic font-normal">{headingLine1}</span>{" "}
                <span className="font-bold text-primary">{headingHighlight}</span>
              </h2>
            ) : (
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
                <span className="block font-serif italic font-normal mb-1">{headingLine1}</span>
                <span className="block font-bold">
                  {headingLine2} <span className="text-primary">{headingHighlight}</span>
                </span>
              </h2>
            )}
            <p className={cn(
              "text-muted-foreground font-normal mx-auto",
              isServiceTitle ? "text-lg sm:text-xl max-w-3xl" : "text-base md:text-lg max-w-2xl",
            )}>
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="overflow-hidden pt-8 pb-6 -mt-8 -mb-6 px-4 -mx-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6"
                style={{ gridTemplateColumns: `repeat(${visible}, 1fr)` }}
              >
                {page.map((t, i) => (
                  <TestimonialCard key={t.id} t={t} highlight={i === centerRel} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          {n > visible && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full border border-border bg-card hover:bg-muted transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-full border border-border bg-card hover:bg-muted transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
