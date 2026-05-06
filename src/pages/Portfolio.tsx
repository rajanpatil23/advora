import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { type Testimonial } from "@/components/TestimonialCard";
import { ArrowRight, DollarSign, HeartPulse, ShoppingCart, GraduationCap, Home, Truck, Film, Layers, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { usePageSEO } from "@/hooks/usePageSEO";
import projectFinanceFlow from "@/assets/project-financeflow.jpg";
import projectHealthTrack from "@/assets/project-healthtrack.jpg";
import projectRetailHub from "@/assets/project-retailhub.jpg";
import projectTaskMaster from "@/assets/project-taskmaster.jpg";
import projectEduLearn from "@/assets/project-edulearn.jpg";
import projectPropertyPro from "@/assets/project-propertypro.jpg";
import projectLogiTrack from "@/assets/project-logitrack.jpg";
import projectMediConnect from "@/assets/project-mediconnect.jpg";

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
  usePageSEO({
    title: "Portfolio",
    description: "See Advora Digital's portfolio — case studies in fintech, healthcare, e-commerce, edtech, and logistics software development.",
    canonical: "/portfolio",
  });
  const projects = [
    {
      title: "Invoice Suite",
      category: "Web Application",
      description: "A comprehensive financial management platform for small businesses with invoicing, expense tracking, and reporting features.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: projectFinanceFlow,
      results: "300% user growth in 6 months"
    },
    {
      title: "HealthTrack Pro",
      category: "Healthcare Platform",
      description: "Cross-platform health and fitness tracking app with personalized workout plans and nutrition guidance.",
      tech: ["React Native", "Firebase", "Machine Learning"],
      image: projectHealthTrack,
      results: "50,000 users in first month"
    },
    {
      title: "RetailHub",
      category: "E-commerce Platform",
      description: "Multi-vendor marketplace with advanced inventory management, analytics dashboard, and automated order processing.",
      tech: ["Next.js", "Supabase", "Stripe", "AWS"],
      image: projectRetailHub,
      results: "$2M in transactions processed"
    },
    {
      title: "TaskMaster",
      category: "SaaS Application",
      description: "Project management tool with real-time collaboration, Gantt charts, and team productivity analytics.",
      tech: ["React", "GraphQL", "MongoDB", "WebSockets"],
      image: projectTaskMaster,
      results: "Used by 200+ teams"
    },
    {
      title: "EduLearn",
      category: "Learning Platform",
      description: "Online education platform with video courses, interactive quizzes, progress tracking, and certificates.",
      tech: ["Vue.js", "Django", "PostgreSQL", "Vimeo API"],
      image: projectEduLearn,
      results: "10,000+ course completions"
    },
    {
      title: "PropertyPro",
      category: "Mobile App",
      description: "Real estate listing and management app with virtual tours, mortgage calculator, and agent matching.",
      tech: ["React Native", "Node.js", "MongoDB", "Mapbox"],
      image: projectPropertyPro,
      results: "4.8 star rating on app stores"
    },
    {
      title: "LogiTrack",
      category: "Enterprise Software",
      description: "Fleet management and logistics optimization system with real-time tracking and route planning.",
      tech: ["React", "Python", "PostgreSQL", "Redis"],
      image: projectLogiTrack,
      results: "30% reduction in delivery times"
    },
    {
      title: "MediConnect",
      category: "Healthcare Platform",
      description: "Telemedicine platform connecting patients with healthcare providers for virtual consultations.",
      tech: ["Next.js", "WebRTC", "HIPAA Compliance", "AWS"],
      image: projectMediConnect,
      results: "100,000+ consultations facilitated"
    }
  ];

  const categories = ["All", "Web Application", "Mobile App", "E-commerce Platform", "SaaS Application", "Enterprise Software"];

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
        role: "CEO, Invoice Suite",
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
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 overflow-hidden">
          {/* Subtle ambient backdrop */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-accent/5 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
              {/* Premium Single Device Showcase */}
              <motion.div
                className="relative h-[460px] sm:h-[560px] lg:h-[600px] order-2 lg:order-1 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Soft glow accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[70%] rounded-full bg-primary/15 blur-3xl" />

                {/* Laptop mockup */}
                <motion.div
                  className="relative w-full max-w-[560px] mx-auto"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Screen frame */}
                  <div className="relative rounded-t-2xl bg-foreground/90 p-3 sm:p-4 shadow-2xl shadow-primary/20 border border-border/40">
                    {/* Browser top bar */}
                    <div className="flex items-center gap-1.5 mb-2.5 px-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                      <div className="ml-3 flex-1 h-5 rounded-md bg-background/10" />
                    </div>
                    {/* Screen */}
                    <div className="rounded-lg overflow-hidden bg-card aspect-[16/10]">
                      <img
                        src={projectFinanceFlow}
                        alt="FinanceFlow flagship project preview"
                        className="w-full h-full object-cover block"
                      />
                    </div>
                  </div>
                  {/* Laptop base */}
                  <div className="relative h-3 bg-gradient-to-b from-foreground/80 to-foreground/60 rounded-b-[1.5rem] mx-[-4%]" />
                  <div className="h-1.5 bg-foreground/30 rounded-b-full mx-[20%]" />
                  {/* Reflection */}
                  <div className="absolute inset-x-0 -bottom-6 h-12 bg-gradient-to-b from-foreground/15 to-transparent blur-xl rounded-full mx-8" />
                </motion.div>

                {/* Floating accent — top right metric */}
                <motion.div
                  className="absolute top-[6%] right-[2%] sm:right-[4%] px-4 py-3 rounded-2xl bg-background/85 backdrop-blur-md border border-border shadow-xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Retention</div>
                  <div className="text-lg font-bold text-foreground">95%</div>
                </motion.div>

                {/* Floating accent — bottom left rating */}
                <motion.div
                  className="absolute bottom-[10%] left-[2%] sm:left-[4%] px-3.5 py-2.5 rounded-2xl bg-background/85 backdrop-blur-md border border-border shadow-xl flex items-center gap-2"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground leading-none">Rating</div>
                    <div className="text-sm font-bold text-foreground leading-tight">4.9 / 5</div>
                  </div>
                </motion.div>

                {/* Floating accent — projects badge */}
                <motion.div
                  className="absolute top-[40%] right-[0%] px-3 py-1.5 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-xs font-semibold text-primary">+150 Projects</div>
                </motion.div>
              </motion.div>

              {/* Editorial Content */}
              <motion.div
                className="order-1 lg:order-2 space-y-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  150+ Projects Delivered
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
                  <span className="block font-serif italic font-normal text-foreground/90">Work That</span>
                  <span className="block font-bold text-primary">Speaks for</span>
                  <span className="block font-bold text-foreground">Itself.</span>
                </h1>

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg">
                  From startups to enterprises, we've helped businesses across industries achieve their digital ambitions with modern, scalable and impactful solutions.
                </p>

                <div className="pt-1">
                  <Link to="/contact">
                    <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-7 py-6 font-medium group">
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Inline proof strip */}
                <div className="flex items-center gap-5 sm:gap-7 pt-6 border-t border-border/60">
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

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group rounded-[2rem] bg-card border border-border hover:border-accent/50 overflow-hidden transition-all duration-300 hover:scale-[1.02] animate-slide-up stagger-${(index % 6) + 1}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                  <div className="p-3 rounded-xl bg-muted/50 mb-4">
                    <p className="text-sm font-medium text-primary">{project.results}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-full bg-muted text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
