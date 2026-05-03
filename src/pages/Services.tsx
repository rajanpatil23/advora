import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  Code,
  FileText,
  Rocket,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import PremiumFAQ from "@/components/PremiumFAQ";
import TechStackSection from "@/components/TechStackSection";
import ServicesShowcaseSection from "@/components/services/ServicesShowcaseSection";
import { usePageSEO } from "@/hooks/usePageSEO";

import serviceHeroImg from "@/assets/serviceheroimg.png";

const Services = () => {
  usePageSEO({
    title: "Services",
    description:
      "Explore Advora Digital's services - web development, mobile apps, UI/UX design, branding, growth marketing, and digital strategy for businesses.",
    canonical: "/services",
  });

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main>
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={serviceHeroImg}
                    alt="Service hero image"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">Expert Solutions</span>
                    <span className="block font-bold text-primary">For Your Business.</span>
                  </h1>

                  <p className="text-muted-foreground text-xl sm:text-lg md:text-xl leading-relaxed">
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
          </div>
        </section>

        <ServicesShowcaseSection />

        <section className="section-divider overflow-hidden bg-foreground py-20 pt-24 text-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
              <motion.span
                className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
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
