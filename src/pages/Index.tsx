import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSectionWithGradient from "@/components/ui/hero-section-with-gradient";

import { Zap, Shield, Users } from "lucide-react";
import { ShoppingCart, Database, Bot, Smartphone, Globe, BarChart3, Workflow, Cloud } from "lucide-react";

import TestimonialsSection from "@/components/TestimonialsSection";
import { usePageSEO } from "@/hooks/usePageSEO";
import { type Testimonial } from "@/components/TestimonialCard";
import ResourcesTabSection from "@/components/ResourcesTabSection";
import CTASection from "@/components/CTASection";
import SolutionsCarouselSection from "@/components/SolutionsCarouselSection";
import DigitalServicesCarouselSection from "@/components/DigitalServicesCarouselSection";
import WhatMakesUsDifferentSection from "@/components/WhatMakesUsDifferentSection";
import BookingFlowSection from "@/components/BookingFlowSection";

const serviceCategories = [
  { name: "E-commerce", icon: ShoppingCart, color: "#E44D26", bg: "#E44D26" },
  { name: "Custom CRM", icon: Database, color: "#7C3AED", bg: "#7C3AED" },
  { name: "AI Chatbots", icon: Bot, color: "#10B981", bg: "#10B981" },
  { name: "Mobile Apps", icon: Smartphone, color: "#3B82F6", bg: "#3B82F6" },
  { name: "Web Portals", icon: Globe, color: "#F59E0B", bg: "#F59E0B" },
  { name: "Analytics", icon: BarChart3, color: "#EC4899", bg: "#EC4899" },
  { name: "Automation", icon: Workflow, color: "#06B6D4", bg: "#06B6D4" },
  { name: "Cloud Apps", icon: Cloud, color: "#8B5CF6", bg: "#8B5CF6" },
];

const Index = () => {
  usePageSEO({
    title: "Software & Web Development Agency",
    description: "Advora Digital transforms your ideas into powerful software solutions. Expert web development, mobile apps, and custom software for growing businesses in Pune, India.",
    canonical: "/",
  });

  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Support" }
  ];

  const features = [
    { icon: Zap, title: "Fast Delivery", description: "Agile development for quick turnaround" },
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security standards" },
    { icon: Users, title: "Dedicated Team", description: "Expert developers assigned to your project" }
  ];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      platform: "google",
      title: "Our hiring platform finally works!",
      rating: 5,
      snippet: "Advora built our recruitment and networking platform from scratch. The candidate matching system and employer dashboard they designed have completely streamlined how we connect talent with opportunities. Truly understood the HR-tech space.",
      readMoreUrl: "#",
      user: {
        name: "Neeraj Yadav",
        role: "Founder, Connecttly",
        avatar: "https://ui-avatars.com/api/?name=Neeraj+Yadav&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "2",
      platform: "google",
      title: "Our certification platform looks professional!",
      rating: 5,
      snippet: "We run an education certification platform and needed a site that feels credible and professional. Advora built us a clean, user-friendly portal where students can browse courses, enroll, and track their certifications seamlessly. Enrolments picked up right away.",
      readMoreUrl: "#",
      user: {
        name: "Karamveer Singh",
        role: "Founder, Theduocean",
        avatar: "https://ui-avatars.com/api/?name=Karamveer+Singh&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "3",
      platform: "google",
      title: "Direct bookings keep growing!",
      rating: 5,
      snippet: "Running a resort near Tadoba Tiger Reserve, we needed a site that showcases the wildlife experience and makes booking effortless. Advora delivered exactly that — we've seen a steady increase in direct bookings since the new website went live.",
      readMoreUrl: "#",
      user: {
        name: "Soni Patel",
        role: "Owner, Tadoba Footprint Resort",
        avatar: "https://ui-avatars.com/api/?name=Soni+Patel&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "4",
      platform: "google",
      title: "Guests find us so easily now!",
      rating: 5,
      snippet: "Advora redesigned our entire online presence for Wild Spirit Stays. The new site beautifully highlights our homestay experiences and the SEO work means travellers actually find us on Google now. Worth every rupee.",
      readMoreUrl: "#",
      user: {
        name: "Jaideep Ojha",
        role: "Founder, Wild Spirit Stays",
        avatar: "https://ui-avatars.com/api/?name=Jaideep+Ojha&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "5",
      platform: "google",
      title: "Online appointments went up!",
      rating: 5,
      snippet: "As a dentist, I wanted a clean and trustworthy website where people can learn about our treatments and book appointments easily. Advora delivered exactly that for Vidhan Dental Clinic — we now get far more appointment requests online than before.",
      readMoreUrl: "#",
      user: {
        name: "Dr. Rinni Raichandani",
        role: "Founder, Vidhan Dental Clinic",
        avatar: "https://ui-avatars.com/api/?name=Rinni+Raichandani&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "6",
      platform: "google",
      title: "They understand growth strategy!",
      rating: 5,
      snippet: "As a growth consulting firm, we needed a digital partner who understands B2B marketing. Advora built us a sharp, conversion-focused website and CRM integration that reflects the quality we deliver to our own clients. Highly recommend.",
      readMoreUrl: "#",
      user: {
        name: "Rohini Patel",
        role: "Founder, Focus Growth Consulting",
        avatar: "https://ui-avatars.com/api/?name=Rohini+Patel&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
    {
      id: "7",
      platform: "google",
      title: "Best decision for our lodge!",
      rating: 5,
      snippet: "TNT Lodging needed a modern booking website that travellers trust. Advora delivered a fast, mobile-friendly site with a smooth reservation system. Our walk-in dependency has reduced and online bookings keep growing month over month.",
      readMoreUrl: "#",
      user: {
        name: "Jaywant Warghane",
        role: "Founder, TNT Lodging",
        avatar: "https://ui-avatars.com/api/?name=Jaywant+Warghane&background=6366f1&color=fff&bold=true",
        profileUrl: "#",
      },
    },
  ];

  // JSON-LD structured data
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Advora Digital",
      "url": "https://advora.in",
      "logo": "https://advora.in/favicon.png",
      "description": "Advora Digital transforms your ideas into powerful software solutions. Expert web development, mobile apps, and custom software.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7219860213",
        "contactType": "sales",
        "email": "advora.in@gmail.com",
        "availableLanguage": "English"
      },
      "sameAs": []
    };
    let script = document.querySelector('script[data-jsonld="org"]') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-jsonld", "org");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
    return () => { script?.remove(); };
  }, []);


  return (
    <>
      <div className="min-h-screen animate-fade-in bg-background">
        <Header />
        
        <main>
          {/* New Hero Section with Gradient */}
          <HeroSectionWithGradient />

          {/* Trusted By Section - Marquee */}
          <section className="section-divider py-8 sm:py-12 pt-44 sm:pt-52 md:pt-60 overflow-hidden relative z-0 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">What We Build</p>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
              
              <div className="flex animate-marquee hover:[animation-play-state:paused]">
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="flex items-center gap-10 sm:gap-14 md:gap-20 px-5 sm:px-7">
                    {serviceCategories.map((item) => (
                      <div key={`${setIndex}-${item.name}`} className="hover:scale-110 transition-all duration-300 flex-shrink-0 flex items-center gap-2.5">
                        <item.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: item.color }} />
                        <span className="text-sm sm:text-base font-semibold text-foreground/80 whitespace-nowrap">{item.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reorderable sections wrapper for mobile/tablet */}
          <div className="flex flex-col">
            {/* Tech Services Carousel Section - order 1 on all */}
            <div className="order-1">
              <SolutionsCarouselSection />
            </div>

            {/* What Makes Us Different Section - order 2 on mobile/tablet, order 3 on desktop */}
            <div className="order-2 lg:order-3">
              <WhatMakesUsDifferentSection />
            </div>

            {/* Digital Services Carousel Section - order 3 on mobile/tablet, order 2 on desktop */}
            <div className="order-3 lg:order-2">
              <DigitalServicesCarouselSection />
            </div>
          </div>

          {/* Testimonials Section */}
          <section className="section-divider">
            <TestimonialsSection testimonials={testimonials} />
          </section>

          {/* Booking Flow Section */}
          <BookingFlowSection />

          {/* Resources Tab Section */}
          <ResourcesTabSection />

          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
