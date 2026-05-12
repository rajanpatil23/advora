import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { type Testimonial } from "@/components/TestimonialCard";
import { ArrowRight, DollarSign, HeartPulse, ShoppingCart, GraduationCap, Home, Truck, Film, Layers, Star, X, Monitor, Tablet, Smartphone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";
import projectFinanceFlow from "@/assets/project-financeflow.jpg";
import portfolioHeroShowcase from "@/assets/portfolio-hero-showcase.jpg";
import projectHealthTrack from "@/assets/project-healthtrack.jpg";
import projectRetailHub from "@/assets/project-retailhub.jpg";
import projectTaskMaster from "@/assets/project-taskmaster.jpg";
import projectEduLearn from "@/assets/project-edulearn.jpg";
import projectPropertyPro from "@/assets/project-propertypro.jpg";
import projectLogiTrack from "@/assets/project-logitrack.jpg";
import projectMediConnect from "@/assets/project-mediconnect.jpg";
import projectKrushiConnect from "@/assets/project-krushiconnect.jpg";

const industries = [
  { icon: ShoppingCart, title: "E-commerce", description: "Marketplaces, funnels, stores" },
  { icon: DollarSign, title: "Fintech", description: "Lending, payments, KYC funnels" },
  { icon: HeartPulse, title: "Healthcare", description: "Clinics, apps, patient funnels" },
  { icon: GraduationCap, title: "EdTech", description: "Cohorts, LMS, lead nurture" },
  { icon: Home, title: "Real Estate", description: "Listings, virtual tours, CRM" },
  { icon: Truck, title: "Logistics", description: "Fleet management, tracking" },
  { icon: Film, title: "Media", description: "Streaming, content platforms" },
  { icon: Layers, title: "SaaS", description: "B2B tools, dashboards, APIs" },
];

function IndustriesCarousel() {
  const allIndustries = [...industries, ...industries, ...industries, ...industries];

  return (
    <div className="relative overflow-hidden group">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '5s' }}>
        {allIndustries.map((industry, i) => (
          <div
            key={`${industry.title}-${i}`}
            className="flex-shrink-0 w-64 p-8 rounded-[2rem] bg-primary/10 text-center hover:bg-primary/15 transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4 hover:bg-primary/30 transition-colors">
              <industry.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-1">{industry.title}</h3>
            <p className="text-sm text-muted-foreground">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  usePageSEO({
    title: "Portfolio",
    description: "See Advora Digital's portfolio — case studies in fintech, healthcare, e-commerce, edtech, and logistics software development.",
    canonical: "/portfolio",
  });
  const projects = [
    {
      title: "Connecttly",
      category: "Web Application",
      description: "A comprehensive financial management platform for small businesses with invoicing, expense tracking, and reporting features.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: projectFinanceFlow,
      results: "300% user growth in 6 months"
    },
    {
      title: "TheEduEdge",
      category: "Learning Platform",
      description: "Online education platform with video courses, interactive quizzes, progress tracking, and certificates.",
      tech: ["Vue.js", "Django", "PostgreSQL", "Vimeo API"],
      image: projectEduLearn,
      results: "10,000+ course completions"
    },
    {
      title: "EvolveU",
      category: "Resort",
      description: "Multi-vendor marketplace with advanced inventory management, analytics dashboard, and automated order processing.",
      tech: ["Next.js", "Supabase", "Stripe", "AWS"],
      image: projectRetailHub,
      results: "$2M in transactions processed"
    },
    {
      title: "TheEduOcean",
      category: "SaaS Application",
      description: "Project management tool with real-time collaboration, Gantt charts, and team productivity analytics.",
      tech: ["React", "GraphQL", "MongoDB", "WebSockets"],
      image: projectTaskMaster,
      results: "Used by 200+ teams"
    },
    {
      title: "Tadoba Footprint Resort",
      category: "Mobile App",
      description: "Cross-platform health and fitness tracking app with personalized workout plans and nutrition guidance.",
      tech: ["React Native", "Firebase", "Machine Learning"],
      image: projectHealthTrack,
      results: "50,000 users in first month"
    },
    {
      title: "Wild Spirit Stays",
      category: "Mobile App",
      description: "Real estate listing and management app with virtual tours, mortgage calculator, and agent matching.",
      tech: ["React Native", "Node.js", "MongoDB", "Mapbox"],
      image: projectPropertyPro,
      results: "4.8 star rating on app stores"
    },
    {
      title: "Patel Furniture",
      category: "Enterprise Software",
      description: "Fleet management and logistics optimization system with real-time tracking and route planning.",
      tech: ["React", "Python", "PostgreSQL", "Redis"],
      image: projectLogiTrack,
      results: "30% reduction in delivery times"
    },
    {
      title: "Mamtva Spices",
      category: "Food & Beverage",
      description: "Telemedicine platform connecting patients with healthcare providers for virtual consultations.",
      tech: ["Next.js", "WebRTC", "HIPAA Compliance", "AWS"],
      image: projectMediConnect,
      results: "100,000+ consultations facilitated"
    },
    {
      title: "Krushi Connect",
      category: "Agriculture",
      description: "A mobile platform connecting farmers, traders and service providers with crop listings, contract management, and a service directory.",
      tech: ["React Native", "Node.js", "PostgreSQL", "Maps API"],
      image: projectKrushiConnect,
      results: "Empowering farmers across regions"
    }
  ];

  const categories = ["All", "Web Application", "Mobile App", "Resort", "SaaS Application", "Enterprise Software", "Agriculture"];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      platform: "google",
      title: "Outstanding Digital Transformation",
      rating: 5,
      snippet: "Advora transformed our outdated system into a modern, efficient platform. Their team was professional, communicative, and delivered beyond our expectations.",
      readMoreUrl: "#",
      user: {
        name: "Jennifer Martinez",
        role: "CEO, FinanceFlow",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "2",
      platform: "linkedin",
      title: "Game-Changer for Our Startup",
      rating: 5,
      snippet: "Working with Advora was a game-changer for our startup. They understood our vision and built an app that our users love.",
      readMoreUrl: "#",
      user: {
        name: "David Kim",
        role: "Founder, HealthTrack Pro",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "3",
      platform: "google",
      title: "Technical Excellence",
      rating: 5,
      snippet: "The Advora team's technical expertise and attention to detail made all the difference. Our e-commerce platform handles thousands of transactions daily without issues.",
      readMoreUrl: "#",
      user: {
        name: "Sarah Thompson",
        role: "CTO, RetailHub",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "4",
      platform: "linkedin",
      title: "True Partners in Success",
      rating: 5,
      snippet: "They didn't just build software—they became true partners in our success. The team understood our industry challenges and delivered solutions that made a real impact.",
      readMoreUrl: "#",
      user: {
        name: "Robert Chen",
        role: "COO, LogiTrack",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "5",
      platform: "google",
      title: "Exceeded All Expectations",
      rating: 5,
      snippet: "From initial concept to final deployment, Advora exceeded all expectations. Their attention to UX design resulted in a 40% increase in user engagement.",
      readMoreUrl: "#",
      user: {
        name: "Amanda Foster",
        role: "Product Director, EduLearn",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "6",
      platform: "linkedin",
      title: "Reliable and Innovative",
      rating: 5,
      snippet: "Advora delivered a robust real estate platform that has become essential to our operations. Their innovative approach to virtual tours set us apart from competitors.",
      readMoreUrl: "#",
      user: {
        name: "Michael Torres",
        role: "CEO, PropertyPro",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "7",
      platform: "google",
      title: "Healthcare Expertise",
      rating: 5,
      snippet: "Their understanding of healthcare compliance and patient privacy was impressive. MediConnect has facilitated over 100,000 consultations thanks to their solid architecture.",
      readMoreUrl: "#",
      user: {
        name: "Dr. Emily Watson",
        role: "Medical Director, MediConnect",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        profileUrl: "#"
      }
    },
    {
      id: "8",
      platform: "linkedin",
      title: "Seamless Collaboration",
      rating: 5,
      snippet: "The team integrated seamlessly with our internal developers. Their agile methodology and clear communication made the entire project a pleasure to manage.",
      readMoreUrl: "#",
      user: {
        name: "James Patterson",
        role: "VP Engineering, TaskMaster",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        profileUrl: "#"
      }
    }
  ];

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "4.9", label: "Average Rating" },
    { value: "95%", label: "Client Retention" }
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section - Premium Floating Showcase */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12 overflow-hidden">
              <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
              {/* Hero Showcase Image */}
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="order-2 lg:order-1 rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <div className="aspect-[16/10]">
                  <img
                    src={portfolioHeroShowcase}
                    alt="Advora portfolio showcase featuring laptop, mobile and tablet projects"
                    className="h-full w-full object-contain"
                  />
                </div>
              </motion.div>

              {/* Editorial Content */}
              <motion.div
                className="order-1 lg:order-2 space-y-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  150+ Projects Delivered
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                  <span className="block font-serif italic font-normal text-foreground/90">Work That</span>
                  <span className="block font-bold text-primary">Speaks for</span>
                  <span className="block font-bold text-foreground">Itself.</span>
                </h1>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg">
                  From startups to enterprises, we've helped businesses across industries achieve their digital ambitions with modern, scalable and impactful solutions.
                </p>

                <div className="pt-1">
                  <Link to="/contact">
                    <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 font-medium group">
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Inline proof strip */}
                <div className="flex items-center gap-5 sm:gap-7 pt-4 border-t border-border/60">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-bold text-foreground">4.9</span>
                      <span className="text-xs text-muted-foreground">Rating</span>
                    </div>
                  </div>
                  <div className="h-6 w-px bg-border" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-foreground">95%</span>
                    <span className="text-xs text-muted-foreground">Retention</span>
                  </div>
                  <div className="h-6 w-px bg-border" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-foreground">50+</span>
                    <span className="text-xs text-muted-foreground">Clients</span>
                  </div>
                </div>
              </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-5 py-2 rounded-full bg-card border border-border hover:border-accent/50 hover:bg-accent/10 transition-all text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid - Premium Bento Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[minmax(320px,auto)] gap-5 sm:gap-6">
            {projects.map((project, index) => {
              const span = "";
              const isFeatured = false;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
                  onClick={() => setSelectedProject(index)}
                  className={`${span} group relative isolate flex flex-col overflow-hidden rounded-[15px] border border-[#E6EAF2] bg-gradient-to-b from-white to-[#FAFBFD] shadow-[0_20px_50px_-32px_rgba(15,23,42,0.22)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_30px_70px_-25px_rgba(15,23,42,0.32)] dark:border-border dark:bg-card dark:from-card dark:to-card cursor-pointer`}
                >
                  {/* accent corner glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* image frame - top */}
                  <div className="relative flex-1 min-h-0 overflow-hidden rounded-none bg-transparent p-3 sm:p-4">
                    <div className="relative h-full w-full overflow-hidden rounded-none shadow-[0_15px_35px_-10px_rgba(15,23,42,0.35)]">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="block h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* meta footer - bottom */}
                  <div className="relative z-10 flex items-center justify-between gap-4 px-4 pt-3 pb-4 sm:px-5 sm:pt-4 sm:pb-5">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary truncate">
                        {project.tech.slice(0, isFeatured ? 4 : 3).join(" · ")}
                      </p>
                      <h3 className={`mt-1.5 font-serif font-semibold leading-tight tracking-tight text-foreground ${isFeatured ? "text-2xl sm:text-[1.65rem]" : "text-xl sm:text-[1.4rem]"}`}>
                        {project.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      aria-label={`View ${project.title} details`}
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(index); }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E1E6EF] bg-white text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_10px_24px_-10px_rgba(37,99,235,0.6)] dark:border-border dark:bg-card"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto overlay-scroll rounded-2xl sm:rounded-3xl bg-background border border-border shadow-2xl"
              >
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 backdrop-blur border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <X className="h-5 w-5" />
                </button>

                {(() => {
                  const project = projects[selectedProject];
                  return (
                    <div className="p-6 sm:p-10">
                      {/* Header */}
                      <div className="mb-8 pr-12">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                          {project.category}
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight text-foreground">
                          {project.title}
                        </h2>
                        <p className="mt-3 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
                          {project.description}
                        </p>
                      </div>

                      {/* Hero / Desktop screenshot */}
                      <div className="mb-6 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-muted/40 to-muted/10 p-3 sm:p-5">
                        <div className="flex items-center gap-2 mb-3 px-1">
                          <Monitor className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Desktop View</span>
                        </div>
                        <div className="rounded-lg bg-background shadow-2xl border border-border h-[420px] overflow-y-auto overlay-scroll">
                          <img src={project.image} alt={`${project.title} desktop`} className="block w-full h-auto" />
                        </div>
                      </div>

                      {/* Tablet + Mobile screenshots */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                        <div className="md:col-span-2 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-muted/40 to-muted/10 p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Tablet className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Tablet</span>
                          </div>
                          <div className="rounded-xl border-[6px] border-[#1a1a1a] bg-background shadow-xl mx-auto max-w-md h-[360px] overflow-y-auto overlay-scroll">
                            <img src={project.image} alt={`${project.title} tablet`} className="block w-full h-auto" />
                          </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-muted/40 to-muted/10 p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Smartphone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Mobile</span>
                          </div>
                          <div className="rounded-2xl border-[6px] border-[#1a1a1a] bg-background shadow-xl mx-auto w-[180px] h-[360px] overflow-y-auto overlay-scroll">
                            <img src={project.image} alt={`${project.title} mobile`} className="block w-full h-auto" />
                          </div>
                        </div>
                      </div>

                      {/* Tech & Results */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-2xl border border-border bg-card p-6">
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Tech Stack</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                              <span key={t} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6">
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Key Result</h3>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                            <p className="text-lg font-semibold text-foreground leading-snug">{project.results}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">
                        <Button variant="outline" onClick={() => setSelectedProject(null)} className="rounded-full">
                          Close
                        </Button>
                        <Link to="/contact" onClick={() => setSelectedProject(null)}>
                          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto">
                            Start a Similar Project
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* Case Study Highlight */}
        <section className="section-divider py-20 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-[#0a0a0a] text-white p-8 sm:p-12 md:p-16 overflow-hidden relative">
              {/* Subtle grid background */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              {/* Glow accent */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-primary text-sm font-medium backdrop-blur-sm border border-white/10">
                    Featured Case Study
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight">
                    <span className="block font-serif italic font-normal text-white/90">How We Helped FinanceFlow</span>
                    <span className="block font-bold">Scale to <span className="text-primary">100K Users</span></span>
                  </h2>
                  <p className="text-white/60 leading-relaxed text-lg">
                    FinanceFlow came to us with a legacy system that was struggling to keep up with demand. Through a complete platform redesign and modern technology stack, we helped them achieve 300% user growth in just 6 months.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-2">
                    {[
                      { value: "300%", label: "User Growth" },
                      { value: "50%", label: "Fewer Support Tickets" },
                      { value: "12 wks", label: "Development Time" },
                      { value: "99.9%", label: "Uptime" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-white/40 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl sm:rounded-3xl bg-white/[0.04] backdrop-blur-sm p-8 md:p-10 border border-white/10">
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-xl leading-relaxed mb-8 text-white/80 font-light">
                    "Advora didn't just build us a new platform—they transformed our entire business. The team understood our challenges and delivered a solution that exceeded every expectation."
                  </blockquote>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-bold text-primary text-sm">JM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white/90">Jennifer Martinez</div>
                      <div className="text-white/40 text-sm">CEO, FinanceFlow</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-divider py-20 pt-24">
          <TestimonialsSection testimonials={testimonials} />
        </section>

        {/* Industries Section */}
        <section className="section-divider py-20 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl tracking-tight mb-4">
                <span className="block font-serif italic font-normal">Expertise Across</span>
                <span className="block font-bold text-primary">Industries</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We've shipped growth programs across SaaS, ecommerce, fintech, healthcare, and more.
              </p>
            </div>
            <IndustriesCarousel />
          </div>
        </section>

        <CTASection
          title="Want to be our next success story?"
          description="Let's discuss your project and create something amazing together."
          buttonText="Start Your Project"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
