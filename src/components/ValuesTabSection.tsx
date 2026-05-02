import { Target, Award, Users, Heart } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const valuesData = [
  {
    id: "client-focused",
    icon: Target,
    title: "Client-Focused",
    number: "01",
    description: "Your success is our priority. We work closely with you to understand your goals and deliver solutions that exceed expectations.",
    highlight: "150+ projects delivered with 98% client satisfaction rate",
  },
  {
    id: "excellence",
    icon: Award,
    title: "Excellence",
    number: "02",
    description: "We hold ourselves to the highest standards, ensuring every line of code and every design element meets our quality benchmarks.",
    highlight: "Code reviewed, tested, and optimised for peak performance",
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Collaboration",
    number: "03",
    description: "Great products are built together. We believe in transparent communication and partnership throughout the development process.",
    highlight: "Weekly sprints, shared dashboards, and open communication",
  },
  {
    id: "passion",
    icon: Heart,
    title: "Passion",
    number: "04",
    description: "We love what we do. Our enthusiasm for technology drives us to create exceptional digital experiences.",
    highlight: "Constantly learning, experimenting, and pushing boundaries",
  }
];

const ValuesTabSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeValue = valuesData[activeIndex];

  return (
    <section className="section-divider relative bg-[hsl(0_0%_6%)] text-white overflow-hidden py-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50 mb-3 sm:mb-4">
            Our Values
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-[1.1]">
            <span className="font-serif italic text-white/90">
              The principles that shape
            </span>
            <br />
            <span className="font-sans font-bold text-white">
              every decision{" "}
              <span className="text-primary">we make.</span>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/40 mt-4 max-w-md leading-relaxed">
            More than just words: these values drive every line of code and every client relationship.
          </p>
        </div>

        {/* Desktop: Interactive accordion-style layout */}
        <div className="hidden lg:grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
          {/* Left: Expanded detail card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeValue.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-[2.5rem] p-10 lg:p-12 relative overflow-hidden min-h-[360px] flex flex-col justify-between"
            >
              {/* Large background number */}
              <div className="absolute -top-4 -right-2 text-[10rem] font-bold opacity-[0.06] leading-none select-none font-serif">
                {activeValue.number}
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <activeValue.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">{activeValue.title}</h3>
                </div>

                <p className="text-lg leading-relaxed opacity-80 max-w-lg">
                  {activeValue.description}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-sm font-medium opacity-60 italic">
                    {activeValue.highlight}
                  </p>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-2 pt-6 relative z-10">
                {valuesData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === activeIndex ? "w-8 bg-primary" : "w-3 bg-white/20 hover:bg-white/40"
                    )}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Selectable value list */}
          <div className="space-y-3">
            {valuesData.map((value, index) => (
              <motion.button
                key={value.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-full text-left p-5 rounded-2xl border transition-all duration-300 group relative overflow-hidden",
                  activeIndex === index
                    ? "border-primary/40 bg-white/10 shadow-lg shadow-primary/10"
                    : "border-white/10 bg-white/5 hover:border-primary/20 hover:bg-white/[0.07]"
                )}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <span className={cn(
                    "text-3xl font-bold transition-colors duration-300",
                    activeIndex === index ? "text-primary" : "text-white/20"
                  )}>
                    {value.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300",
                        activeIndex === index ? "bg-primary/15" : "bg-white/10"
                      )}>
                        <value.icon className={cn(
                          "w-4 h-4 transition-colors duration-300",
                          activeIndex === index ? "text-primary" : "text-white/50"
                        )} />
                      </div>
                      <h3 className={cn(
                        "text-lg font-semibold transition-colors duration-300",
                        activeIndex === index ? "text-white" : "text-white/50"
                      )}>
                        {value.title}
                      </h3>
                    </div>
                  </div>
                  {/* Active indicator bar */}
                  <div className={cn(
                    "w-1 h-10 rounded-full transition-all duration-300",
                    activeIndex === index ? "bg-primary" : "bg-transparent"
                  )} />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Stacked expandable cards */}
        <div className="lg:hidden space-y-3">
          {valuesData.map((value, index) => (
            <motion.div
              key={value.id}
              className={cn(
                "rounded-2xl border overflow-hidden transition-all duration-300",
                activeIndex === index
                  ? "border-primary/40 bg-white/10 text-white"
                  : "border-white/10 bg-white/5"
              )}
            >
              <button
                onClick={() => setActiveIndex(index)}
                className="w-full p-5 flex items-center gap-4 text-left"
              >
                <span className={cn(
                  "text-2xl font-bold",
                  activeIndex === index ? "text-primary" : "text-white/20"
                )}>
                  {value.number}
                </span>
                <div className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center",
                  activeIndex === index ? "bg-primary/20" : "bg-white/10"
                )}>
                  <value.icon className={cn(
                    "w-4 h-4",
                    activeIndex === index ? "text-primary" : "text-white/50"
                  )} />
                </div>
                <h3 className="text-lg font-semibold flex-1">{value.title}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="opacity-50"
                >
                  ▾
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 space-y-3">
                      <p className="leading-relaxed opacity-80">
                        {value.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <p className="text-xs font-medium opacity-60 italic">
                          {value.highlight}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesTabSection;
