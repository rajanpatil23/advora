import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  Code,
  FileText,
  Rocket,
  Search,
  Sparkles,
  Layers,
  Zap,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import PremiumFAQ from "@/components/PremiumFAQ";
import TechStackSection from "@/components/TechStackSection";
import ServicesShowcaseSection from "@/components/services/ServicesShowcaseSection";
import { usePageSEO } from "@/hooks/usePageSEO";

import serviceHeroImg from "@/assets/serviceheroimg.webp";

const Services = () => {
  usePageSEO({
    title: "Services",
    description:
      "Explore Advora Digital's services - web development, mobile apps, UI/UX design, branding, growth marketing, and digital strategy for businesses.",
    canonical: "/services",
  });

  const heroStats = [
    { icon: Layers, value: "10+", label: "Service Pillars" },
    { icon: Award, value: "150+", label: "Projects Shipped" },
    { icon: Zap, value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main>
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12 overflow-hidden">
              {/* Decorative orbs */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

              <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden group">
                  <img
                    src={serviceHeroImg}
                    alt="Service hero image"
                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating badge on image */}
                  <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur border border-border rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight">End-to-End Delivery</div>
                      <div className="text-[10px] text-muted-foreground">From idea to launch</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-medium border border-primary/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    Our Services
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">Expert Solutions</span>
                    <span className="block font-bold text-primary">For Your Business.</span>
                  </h1>

                  <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
                    From custom web and mobile development to cloud infrastructure and UI/UX design, we deliver digital solutions that drive growth, efficiency, and long-term impact.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        Explore Services
                      </Button>
                    </Link>
                    <Link to="/portfolio" className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full sm:w-auto rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium">
                        View Our Work
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium stats strip */}
            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-6">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card/80 backdrop-blur p-3 sm:px-6 sm:py-5 flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-4 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-base sm:text-2xl font-bold text-foreground leading-tight">{stat.value}</div>
                    <div className="text-[10px] sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ServicesShowcaseSection />

        <section className="section-divider relative overflow-hidden bg-foreground py-20 pt-24 text-background">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


            <div className="mb-20 text-center">
              <motion.span
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 backdrop-blur px-4 py-1.5 text-sm font-semibold text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                How We Work
              </motion.span>
              <motion.h2
                className="mb-4 text-3xl md:text-5xl tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="block font-serif italic font-normal">Our Development</span>
                <span className="block font-bold text-primary">Process</span>
              </motion.h2>
              <motion.p
                className="mx-auto max-w-2xl text-lg text-background/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                A proven methodology for delivering successful projects
              </motion.p>
            </div>

            <div className="relative mx-auto max-w-5xl">
              <div className="absolute bottom-0 left-8 top-0 w-px bg-gradient-to-b from-primary via-primary/50 to-primary/20 md:left-1/2" />

              {[
                {
                  step: "01",
                  title: "Discovery",
                  icon: Search,
                  description:
                    "Deep dive into your business goals, target audience, and requirements through comprehensive research.",
                },
                {
                  step: "02",
                  title: "Planning",
                  icon: FileText,
                  description:
                    "Architect solutions with detailed specifications, wireframes, and project roadmaps.",
                },
                {
                  step: "03",
                  title: "Development",
                  icon: Code,
                  description:
                    "Build your solution using agile sprints with regular demos and feedback loops.",
                },
                {
                  step: "04",
                  title: "Launch",
                  icon: Rocket,
                  description:
                    "Smooth deployment with ongoing maintenance, monitoring, and dedicated support.",
                },
              ].map((phase, index, arr) => (
                <motion.div
                  key={phase.step}
                  className={`relative mb-20 flex items-start gap-8 last:mb-0 md:gap-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="absolute left-8 z-10 -translate-x-1/2 md:left-1/2">
                    <motion.div
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/25"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <phase.icon className="h-7 w-7 text-primary-foreground" />
                    </motion.div>
                  </div>

                  {index < arr.length - 1 ? (
                    <motion.div
                      className="absolute left-8 top-20 flex -translate-x-1/2 flex-col items-center gap-1 md:left-1/2"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    >
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-primary/60"
                        animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-primary/50"
                        animate={{ y: [0, 4, 0], opacity: [0.3, 0.8, 0.3] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-primary/40"
                        animate={{ y: [0, 4, 0], opacity: [0.2, 0.6, 0.2] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      />
                      <motion.div
                        animate={{ y: [0, 3, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ChevronRight className="h-4 w-4 rotate-90 text-primary/60" />
                      </motion.div>
                    </motion.div>
                  ) : null}

                  <div
                    className={`flex-1 pl-24 md:pl-0 ${
                      index % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div className="mb-2 inline-flex items-center gap-3">
                      <span
                        className={`text-5xl font-bold text-primary/20 md:text-6xl ${
                          index % 2 === 0 ? "md:order-2" : ""
                        }`}
                      >
                        {phase.step}
                      </span>
                    </div>
                    <h3 className="mb-3 text-3xl md:text-4xl font-bold text-background">
                      {phase.title}
                    </h3>
                    <p className="inline-block max-w-md text-base leading-relaxed text-background/70 md:text-lg">
                      {phase.description}
                    </p>
                  </div>

                  <div className="hidden flex-1 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TechStackSection
          badgeLabel="Tool Stack"
          title="Technologies We Use"
          subtitle="Modern tools for modern solutions"
          showTwoRows={true}
        />

        <PremiumFAQ />

        <CTASection
          title="Ready to get started?"
          description="Tell us about your project and we'll provide a free consultation and detailed quote."
          buttonText="Contact Us"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
