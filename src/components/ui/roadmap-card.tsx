"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status?: "done" | "in-progress" | "upcoming";
}

export interface RoadmapCardProps {
  title?: string;
  description?: string;
  items: RoadmapItem[];
  autoPlay?: boolean;
  interval?: number;
}

export function RoadmapCard({
  description = "Upcoming features and releases",
  items,
  autoPlay = true,
  interval = 2500,
}: RoadmapCardProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  // Auto-progression through steps - 1 second per step, restart from beginning
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveStep((prev) => {
          const nextStep = (prev + 1) % items.length;
          // Increment cycle key when resetting to start
          if (nextStep === 0) {
            setCycleKey((k) => k + 1);
          }
          return nextStep;
        });
        setIsTransitioning(false);
      }, 200);
    }, 1000); // 1 second per step

    return () => clearTimeout(timer);
  }, [autoPlay, items.length, activeStep]);

  // Calculate progress percentage - fill to dot position, or 100% for the last step
  const progressPercentage = activeStep === items.length - 1 
    ? 100 
    : ((activeStep + 0.5) / items.length) * 100;

  // Determine status based on active step
  const getStepStatus = (index: number) => {
    if (index < activeStep) return "done";
    if (index === activeStep) return "in-progress";
    return "upcoming";
  };

  return (
    <Card className="w-full mx-auto rounded-[2.5rem] sm:rounded-[3rem]">
      <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-6 sm:px-10">
        {description && (
          <CardDescription className="text-center mb-8">{description}</CardDescription>
        )}
        <div className="relative">
          {/* Vertical Timeline Line for Mobile */}
          <div className="absolute top-0 bottom-0 left-3 w-1 bg-muted-foreground/20 rounded-full overflow-hidden md:hidden">
            <motion.div 
              key={`mobile-${cycleKey}`}
              className="w-full bg-primary rounded-full"
              initial={{ height: "0%" }}
              animate={{ height: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Horizontal Timeline Line - Desktop only */}
          <div className="hidden md:block absolute top-3 left-0 right-0 h-1 bg-muted-foreground/20 rounded-full overflow-hidden">
            <motion.div 
              key={`desktop-${cycleKey}`}
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Mobile: Single column, Desktop: 4 columns */}
          <div className="flex flex-col gap-6 md:grid md:grid-cols-4 md:gap-6">
            {items.map((item, index) => {
              const status = getStepStatus(index);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center pl-10 md:pl-0 md:pt-10"
                >
                  {/* Timeline Dot - Left on mobile, Top on desktop */}
                  <div className="absolute left-0 top-1 md:top-0 md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      animate={{ 
                        scale: status === "in-progress" ? 1.1 : 1,
                        backgroundColor: status === "done" || status === "in-progress" 
                          ? "hsl(var(--primary))" 
                          : "hsl(var(--background))"
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-7 h-7 rounded-full border-[3px] ${
                        status === "done"
                          ? "border-primary"
                          : status === "in-progress"
                          ? "border-primary"
                          : "border-muted-foreground/40"
                      }`}
                    >
                      {status === "in-progress" && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-[3px] border-primary"
                          animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    {/* Quarter Badge */}
                    <Badge 
                      variant={status === "done" || status === "in-progress" ? "default" : "secondary"} 
                      className={`mb-2 md:mb-3 w-fit transition-colors duration-300 ${status === "done" || status === "in-progress" ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}
                    >
                      {item.quarter}
                    </Badge>

                    {/* Title + Description */}
                    <h4 className={`font-semibold leading-tight mb-1 transition-colors duration-300 ${status === "in-progress" ? "text-foreground" : status === "done" ? "text-foreground" : "text-muted-foreground"}`}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
