import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceWhyUsSection from "@/components/services/ServiceWhyUsSection";
import ServiceProcessSection from "@/components/services/ServiceProcessSection";
import ServiceToolStackSection from "@/components/services/ServiceToolStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Layout, Zap, Search, Shield } from "lucide-react";
import serviceWebDev from "@/assets/webdev-hero.png";
import { usePageSEO } from "@/hooks/usePageSEO";
import { serviceDetails } from "@/data/serviceDetails";
import { homepageTestimonials } from "@/data/testimonials";

const data = serviceDetails["web-development"];

const WebDevelopment = () => {
  usePageSEO({
    title: "Web Development Services",
    description: "Custom web development by Advora Digital — responsive, SEO-optimized, fast-loading websites and web apps built with modern frameworks.",
    canonical: "/services/web-development",
  });

  const editorialFeatures = [
    {
      icon: Layout,
      tag: "Structure",
      title: "Premium digital foundations",
      description: "A polished web presence built on clear architecture, purposeful content flow, and refined interaction rhythm.",
      outcome: "Result: a polished online experience that feels curated, modern, and unmistakably premium.",
    },
    {
      icon: Zap,
      tag: "Performance",
      title: "Fast, reliable experiences",
      description: "We optimize every page, asset, and interaction so your site feels immediate and dependable on every device.",
      outcome: "Result: confident visitors, higher engagement, and fewer friction points throughout the journey.",
    },
    {
      icon: Shield,
      tag: "Trust",
      title: "Built for visibility and confidence",
      description: "SEO-ready structure, secure delivery, and thoughtful messaging that supports discovery and business credibility.",
      outcome: "Result: more qualified attention and a stronger platform for growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="relative">
                  <img src={serviceWebDev} alt="Web Development" className="w-full h-auto object-contain" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">Web Development</span>
                  </div>
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">Custom Web</span>
                    <span className="block font-bold text-primary">Solutions</span>
                  </h1>
                  <p className="text-muted-foreground text-xl sm:text-lg md:text-xl leading-relaxed">
                    From responsive websites to complex web applications, we build digital experiences that engage users and grow your business.
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

        {/* Service Details */}
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4">
                <span className="font-serif italic font-normal">What We</span>{" "}
                <span className="font-bold text-primary">Deliver</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Three distinctive focus areas that communicate structure, speed, and trust without feeling like a standard feature grid.
              </p>
            </div>

            <div className="space-y-10 divide-y divide-border/70">
              {editorialFeatures.map((item, index) => {
                const isReversed = index % 2 === 1;

                return (
                  <div
                    key={item.title}
                    className={`group grid gap-8 py-10 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center ${
                      isReversed ? "lg:grid-cols-[0.95fr_1.05fr]" : ""
                    }`}
                  >
                    <div className={`${isReversed ? "lg:order-2" : ""} space-y-4`}> 
                      <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary/90">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/30">
                          <item.icon className="h-5 w-5" />
                        </span>
                        <span>{item.tag}</span>
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">{item.title}</h3>
                      <p className="max-w-xl text-muted-foreground leading-8">{item.description}</p>
                      <p className="text-sm text-foreground/70">{item.outcome}</p>
                    </div>

                    <div className={`relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-slate-50/75 px-6 py-8 transition-colors duration-300 group-hover:bg-slate-50/95 ${
                      isReversed ? "lg:order-1" : ""
                    }`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/75 to-transparent" />
                      <div className="relative mx-auto h-[18rem] max-w-[24rem]">
                        <div className="absolute left-6 top-6 h-px w-20 rounded-full bg-primary/25 transition-all duration-300 group-hover:w-28" />
                        <div className="absolute right-6 top-10 h-px w-14 rounded-full bg-primary/20" />
                        <div className="absolute left-10 top-24 h-px w-28 rounded-full bg-primary/15" />
                        <div className="absolute right-10 top-28 h-px w-20 rounded-full bg-primary/20" />
                        <div className="absolute left-8 top-14 h-3 w-3 rounded-full bg-primary/80" />
                        <div className="absolute right-8 top-16 h-3 w-3 rounded-full bg-slate-400/60" />
                        <div className="absolute right-12 bottom-20 h-3 w-3 rounded-full bg-primary/40" />
                        <div className="absolute left-14 bottom-16 h-3 w-3 rounded-full bg-slate-400/40" />
                        <div className="absolute left-10 top-32 h-12 w-24 rounded-full border border-primary/15 bg-white/90" />
                        <div className="absolute right-10 bottom-10 h-16 w-16 rounded-[1.35rem] border border-primary/15 bg-white/90" />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-28 rounded-full bg-primary/10" />
                        <div className="absolute left-1/2 top-[58%] -translate-x-1/2 h-0.5 w-16 rounded-full bg-primary/20" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ServiceWhyUsSection {...data.whyUs} />
        <section className="section-divider">
          <TestimonialsSection
            testimonials={homepageTestimonials}
            headingLine1="What Clients"
            headingHighlight="Say"
            subtitle="Real results from real web development projects."
            titleVariant="service"
          />
        </section>
        <ServiceProcessSection {...data.process} />
        <ServiceToolStackSection {...data.toolStack} />

        <CTASection 
          title="Ready to Build Your Website?"
          description="Let's discuss your project and create something amazing together."
          buttonText="Get Started"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default WebDevelopment;
