import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation & Discovery",
    description: "We discuss your vision, goals, and requirements in detail to understand your needs.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "We create a comprehensive plan and technical roadmap tailored to your project.",
  },
  {
    number: "03",
    title: "Design & Development",
    description: "Our team builds your solution with regular updates and collaborative feedback.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support for continued success.",
  },
];

function Step({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof steps)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Each step becomes "active" as scroll progress crosses its threshold.
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(progress, [start - 0.05, start, end], [0.35, 1, 1]);
  const y = useTransform(progress, [start - 0.05, start], [30, 0]);
  const scale = useTransform(progress, [start - 0.05, start], [0.96, 1]);
  const borderOpacity = useTransform(progress, [start - 0.02, start], [0, 1]);

  return (
    <motion.div style={{ opacity, y, scale }} className="group relative">
      <motion.div
        style={{ borderColor: `hsl(var(--primary) / ${0})` }}
        className="relative h-full bg-card border border-border rounded-[2rem] p-6 sm:p-8 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
      >
        <motion.div
          style={{ opacity: borderOpacity }}
          className="pointer-events-none absolute inset-0 rounded-[2rem] border-2 border-primary"
          aria-hidden
        />
        <div className="absolute top-4 right-4 text-[4rem] sm:text-[5rem] font-bold text-muted-foreground/10 leading-none select-none transition-colors duration-300 group-hover:text-primary/20">
          {step.number}
        </div>
        <div className="relative z-10 pt-4">
          <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
            {step.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HowWeWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.3 });
  const progressWidth = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="section-divider py-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/15 dark:bg-primary/20 rounded-[3rem] p-8 sm:p-12 lg:p-16">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[1.75rem] sm:text-3xl md:text-5xl tracking-tight leading-[1.15] mb-4">
              <span className="block font-serif italic font-normal">From Vision to Reality</span>
              <span className="block font-bold text-primary">Our Proven Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent, four-step journey designed to transform your ideas into exceptional digital experiences
            </p>
          </div>

          {/* Progress bar reflecting scroll position through the section */}
          <div className="relative mb-10 h-1.5 w-full rounded-full bg-primary/15 overflow-hidden">
            <motion.div
              style={{ width: progressWidth }}
              className="absolute inset-y-0 left-0 bg-primary rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <Step
                key={step.number}
                step={step}
                index={index}
                total={steps.length}
                progress={smooth}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
