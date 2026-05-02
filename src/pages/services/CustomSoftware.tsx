import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { type Testimonial } from "@/components/TestimonialCard";

import TechStackSection from "@/components/TechStackSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Layers, Shield, Brain } from "lucide-react";
import serviceWebDev from "@/assets/service-web-dev.jpg";
import { usePageSEO } from "@/hooks/usePageSEO";
import { serviceDetails } from "@/data/serviceDetails";

const data = serviceDetails["custom-software"];

function ProcessTimeline({ steps, subtitle }: { steps: typeof data.process.steps; subtitle: string }) {
  const total = steps.length;
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    // Total cycle: each step lights up for 1s, then 1s pause at end before restart
    const cycleDuration = (total + 1) * 1000;
    let startTime = Date.now();

    const tick = () => {
      const elapsed = (Date.now() - startTime) % cycleDuration;
      const stepIndex = Math.floor(elapsed / 1000);
      setActiveIndex(stepIndex < total ? stepIndex : -1);
    };

    const interval = setInterval(tick, 100);
    tick();
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="w-full bg-foreground text-background py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4">
            <span className="font-serif italic font-normal">Our</span>{" "}
            <span className="font-bold text-primary">Process</span>
          </h2>
          <p className="text-background/60 text-lg sm:text-xl max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative">
          {/* Central vertical line — fills progressively */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-background/10 hidden md:block" />
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-primary hidden md:block transition-all duration-700 ease-out"
            style={{
              height: activeIndex >= 0 ? `${((activeIndex + 1) / total) * 100}%` : "0%",
            }}
          />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isActive = index <= activeIndex;
              const isCurrent = index === activeIndex;

              return (
                <div key={index} className="relative">
                  {/* Center node */}
                  <div
                    className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 w-12 h-12 rounded-full items-center justify-center z-10 transition-all duration-500 ${
                      isActive ? "bg-primary scale-110" : "bg-background/10"
                    } ${isCurrent ? "shadow-[0_0_20px_hsl(203_98%_47%/0.4)]" : ""}`}
                  >
                    <span className={`text-sm font-bold transition-colors duration-500 ${isActive ? "text-primary-foreground" : "text-background/40"}`}>
                      {step.step}
                    </span>
                  </div>

                  {/* Content — alternating */}
                  <div className="md:grid md:grid-cols-2 md:gap-16">
                    <div className={`${isLeft ? "md:text-right md:pr-8" : "hidden md:block"}`}>
                      {isLeft && (
                        <div className={`transition-all duration-500 ${isActive ? "opacity-100 translate-y-0" : "opacity-30 translate-y-2"}`}>
                          <div className="md:hidden flex items-center gap-4 mb-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isActive ? "bg-primary" : "bg-background/10"}`}>
                              <span className={`text-sm font-bold ${isActive ? "text-primary-foreground" : "text-background/40"}`}>{step.step}</span>
                            </div>
                            <h3 className="text-lg font-semibold">{step.title}</h3>
                          </div>
                          <h3 className="hidden md:block text-xl font-semibold mb-3">{step.title}</h3>
                          <p className="text-background/50 text-sm sm:text-base leading-relaxed">{step.description}</p>
                        </div>
                      )}
                    </div>

                    <div className={`${!isLeft ? "md:pl-8" : "hidden md:block"}`}>
                      {!isLeft && (
                        <div className={`transition-all duration-500 ${isActive ? "opacity-100 translate-y-0" : "opacity-30 translate-y-2"}`}>
                          <div className="md:hidden flex items-center gap-4 mb-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isActive ? "bg-primary" : "bg-background/10"}`}>
                              <span className={`text-sm font-bold ${isActive ? "text-primary-foreground" : "text-background/40"}`}>{step.step}</span>
                            </div>
                            <h3 className="text-lg font-semibold">{step.title}</h3>
                          </div>
                          <h3 className="hidden md:block text-xl font-semibold mb-3">{step.title}</h3>
                          <p className="text-background/50 text-sm sm:text-base leading-relaxed">{step.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const customSoftwareTestimonials: Testimonial[] = [
  {
    id: "cs-1",
    platform: "google",
    title: "Automated 80% of our manual processes",
    rating: 5,
    snippet: "Their ERP system completely transformed our operations. What used to take our team days of manual data entry now runs automatically. The integration with our legacy systems was handled flawlessly — zero downtime during migration.",
    readMoreUrl: "#",
    user: {
      name: "Vikram Singh",
      role: "COO, MediConnect",
      avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=0078D4&color=fff",
      profileUrl: "#",
    },
  },
  {
    id: "cs-2",
    platform: "google",
    title: "Handles 5,000+ properties seamlessly",
    rating: 5,
    snippet: "The property management system they built is rock-solid. Our entire portfolio runs on it now. The custom reporting module alone saves our team 15 hours per week. Their architecture decisions were spot-on for our scale.",
    readMoreUrl: "#",
    user: {
      name: "Lisa Thompson",
      role: "Director of Ops, PropertyPro",
      avatar: "https://ui-avatars.com/api/?name=Lisa+Thompson&background=0078D4&color=fff",
      profileUrl: "#",
    },
  },
  {
    id: "cs-3",
    platform: "google",
    title: "Legacy migration without a single day of downtime",
    rating: 5,
    snippet: "Advora modernized our decade-old system with an impeccable migration strategy. The new platform is faster, more secure, and our developers actually enjoy working with it. Their technical depth is genuinely impressive.",
    readMoreUrl: "#",
    user: {
      name: "James Carter",
      role: "VP Technology, TechCorp",
      avatar: "https://ui-avatars.com/api/?name=James+Carter&background=0078D4&color=fff",
      profileUrl: "#",
    },
  },
];

const CustomSoftware = () => {
  usePageSEO({
    title: "Custom Software Development",
    description: "Bespoke software solutions by Advora Digital — process automation, API integration, and scalable enterprise applications.",
    canonical: "/services/custom-software",
  });

  const capabilities = [
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Custom-built microservices and modular codebases that evolve with your business. Designed for maintainability, testability, and independent deployments.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Role-based access control, encrypted data at rest and in transit, audit logging, and compliance-ready infrastructure tailored to your industry requirements.",
    },
    {
      icon: Brain,
      title: "Workflow & Process Automation",
      description: "Replace manual operations with intelligent automation. Custom ERP modules, approval workflows, and system integrations that eliminate bottlenecks.",
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main>
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img src={serviceWebDev} alt="Custom Software Development" className="w-full h-auto object-cover aspect-[4/3]" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary">
                    <Code className="w-4 h-4" />
                    <span className="text-sm font-medium">Custom Software</span>
                  </div>
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">Enterprise</span>
                    <span className="block font-bold text-primary">Software Solutions</span>
                  </h1>
                  <p className="text-muted-foreground text-xl sm:text-lg md:text-xl leading-relaxed">
                    Bespoke software solutions designed to automate processes, improve efficiency, and solve your unique business challenges.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/portfolio" className="w-full sm:w-auto">
                      <Button variant="outline" className="rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">View Our Work</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24 sm:py-32" style={{ background: "linear-gradient(180deg, hsl(210 40% 98%) 0%, hsl(0 0% 100%) 100%)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4">
                <span className="font-serif italic font-normal">Built for Your</span>{" "}
                <span className="font-bold text-primary">Unique Workflows</span>
              </h2>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto">
                Off-the-shelf tools fall short. We engineer custom systems that fit your exact operations, compliance needs, and growth trajectory.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="group relative p-8 sm:p-10 rounded-[1.25rem] sm:rounded-[1.5rem] bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                  style={{
                    boxShadow: "0 0 0 1px hsl(0 0% 0% / 0.03), 0 2px 4px hsl(0 0% 0% / 0.02), 0 8px 24px hsl(0 0% 0% / 0.03)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 0 1px hsl(0 0% 0% / 0.04), 0 8px 24px hsl(0 0% 0% / 0.05), 0 24px 48px hsl(0 0% 0% / 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 0 1px hsl(0 0% 0% / 0.03), 0 2px 4px hsl(0 0% 0% / 0.02), 0 8px 24px hsl(0 0% 0% / 0.03)";
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/[0.07] flex items-center justify-center mb-7 group-hover:bg-primary/[0.12] transition-colors duration-300">
                    <cap.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight mb-3">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.7]">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
              {/* Left — Narrative */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
                  <span className="font-serif italic font-normal">Why Teams</span>{" "}
                  <span className="font-bold text-primary">Choose Us</span>
                </h2>
                <p className="text-foreground text-lg sm:text-xl font-medium leading-snug mb-4">
                  We don't just write code. We engineer systems that become the operational backbone of your business.
                </p>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  With deep expertise in enterprise architecture, legacy modernization, and process automation, our engineering team delivers software that reduces operational overhead, scales with your growth, and integrates seamlessly into your existing infrastructure.
                </p>
              </div>

              {/* Right — 2x2 Metrics Grid */}
              <div className="grid grid-cols-2 gap-5 sm:gap-6">
                {data.whyUs.items.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 sm:p-7 rounded-[1.25rem] sm:rounded-[1.5rem] bg-card transition-all duration-300"
                    style={{
                      boxShadow: "0 0 0 1px hsl(0 0% 0% / 0.03), 0 2px 4px hsl(0 0% 0% / 0.02), 0 8px 24px hsl(0 0% 0% / 0.03)",
                    }}
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1.5 tracking-tight">{item.stat}</div>
                    <div className="text-sm font-semibold text-foreground mb-2">{item.label}</div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <TestimonialsSection
          testimonials={customSoftwareTestimonials}
          headingLine1="What Clients"
          headingLine2=""
          headingHighlight="Say"
          subtitle="Real results from real custom software projects."
        />
        <ProcessTimeline steps={data.process.steps} subtitle={data.process.subtitle} />
        <TechStackSection title="Our Tool Stack" subtitle="Robust technologies for scalable, secure enterprise applications" showTwoRows={true} />

        <CTASection title="Ready to Transform Your Business?" description="Let's build custom software that drives your success." buttonText="Get Started" />
      </main>
      <Footer />
    </div>
  );
};

export default CustomSoftware;
