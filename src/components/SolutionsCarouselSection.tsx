import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ImageOff, Zap, Shield, Rocket, Smartphone, Cloud, Code, Palette, Users, Target, Layers, TrendingUp, BarChart3, Layout, PenTool, Award } from "lucide-react";

import heroDashboard from "@/assets/hero-dashboard.jpg";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import projectFinanceflow from "@/assets/project-financeflow.jpg";
import projectHealthtrack from "@/assets/project-healthtrack.jpg";
import projectEdulearn from "@/assets/project-edulearn.jpg";

const solutionsData = [
  {
    id: "web-development",
    label: "Web Development",
    title: "High-Performance",
    subtitle: "Web Platforms",
    description: "Startup, SaaS & enterprise websites. Landing pages, web apps, CMS-based & headless architectures with performance optimization.",
    mobileDescription: "Scalable websites & web apps built for performance.",
    outcome: "Fast, scalable, production-ready web platforms.",
    ctaText: "Start Your Project",
    ctaLink: "/contact",
    bgColor: "#438260",
    image: heroDashboard,
    features: [
      { icon: Zap, text: "Lightning-fast load times" },
      { icon: Shield, text: "Enterprise-grade security" },
      { icon: Rocket, text: "SEO-optimized architecture" },
    ],
  },
  {
    id: "mobile-apps",
    label: "Mobile Apps",
    title: "iOS & Android",
    subtitle: "Development",
    description: "Native & cross-platform apps. MVP apps for startups, SaaS companion apps, performance optimization, and store readiness & deployment support.",
    mobileDescription: "Native & cross-platform apps ready for growth.",
    outcome: "Stable, user-ready mobile applications built for growth.",
    ctaText: "Build Your App",
    ctaLink: "/contact",
    bgColor: "#948149",
    image: heroWorkspace,
    features: [
      { icon: Smartphone, text: "Native iOS & Android builds" },
      { icon: Cloud, text: "Seamless cloud sync" },
      { icon: TrendingUp, text: "Store-ready deployment" },
    ],
  },
  {
    id: "custom-software",
    label: "Custom Software",
    title: "Business Tools &",
    subtitle: "Automation",
    description: "Internal tools, CRM/ERP/workflow platforms, API development & integrations, custom SaaS & enterprise software, and AI-enabled tools when relevant.",
    mobileDescription: "Custom tools & automation for your business.",
    outcome: "Tailor-made software that improves efficiency and operations.",
    ctaText: "Let's Build",
    ctaLink: "/contact",
    bgColor: "#711e1b",
    image: projectFinanceflow,
    features: [
      { icon: Code, text: "Custom API integrations" },
      { icon: Layers, text: "Modular, scalable systems" },
      { icon: BarChart3, text: "Real-time analytics" },
    ],
  },
  {
    id: "ui-ux-design",
    label: "UI/UX Design",
    title: "Product",
    subtitle: "Experience",
    description: "UX research & user journey mapping, wireframes & prototypes, conversion-focused UI design, design systems & component libraries, and usability optimization.",
    mobileDescription: "Intuitive designs that convert users.",
    outcome: "Intuitive, high-converting digital experiences.",
    ctaText: "Design with Us",
    ctaLink: "/contact",
    bgColor: "#894f71",
    image: projectHealthtrack,
    features: [
      { icon: Palette, text: "User-centered design" },
      { icon: Layout, text: "Consistent design systems" },
      { icon: Target, text: "Conversion optimization" },
    ],
  },
  {
    id: "branding",
    label: "Branding",
    title: "Product",
    subtitle: "Positioning",
    description: "Brand identity (logo, color system, typography), messaging & value proposition, startup positioning, pitch decks & storytelling, and design consistency.",
    mobileDescription: "Clear brand identity that stands out.",
    outcome: "A clear, credible, and differentiated brand presence.",
    ctaText: "Build Your Brand",
    ctaLink: "/contact",
    bgColor: "#485c81",
    image: projectEdulearn,
    features: [
      { icon: PenTool, text: "Distinctive visual identity" },
      { icon: Users, text: "Audience-driven messaging" },
      { icon: Award, text: "Memorable brand presence" },
    ],
  },
];

const SolutionsCarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="section-divider py-16 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 text-sm px-4 py-1 font-semibold tracking-wider">
              BUILD
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
              <span className="block font-serif italic font-normal mb-1">
                How We Build the Products
              </span>
              <span className="block font-bold">
                That <span className="text-primary">Power Your Business</span>
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-normal max-w-2xl mx-auto">
              From first idea to scalable systems, we design and engineer digital products that are reliable, secure, and built to grow with your business.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation - Desktop only */}
        <ScrollReveal delay={100}>
          <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
            {solutionsData.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => handleTabClick(index)}
                className={`relative px-2 py-2 text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {solution.label}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeSolutionTab"
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-foreground rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block relative w-full">
        <div className="relative w-full flex justify-center">
          <div className="relative w-[85vw] max-w-[1000px] h-[450px]">
            {solutionsData.map((solution, index) => {
              const isActive = index === activeIndex;
              const offset = index - activeIndex;

              return (
                <motion.div
                  key={solution.id}
                  onClick={() => handleTabClick(index)}
                  initial={false}
                  animate={{
                    x: `${offset * 105}%`,
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 10 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`absolute inset-0 ${!isActive ? "cursor-pointer" : ""}`}
                >
                  <div
                    style={{ backgroundColor: solution.bgColor }}
                    className="w-full h-full rounded-[2.5rem] p-8 md:p-10"
                  >
                    <div className="flex flex-row h-full gap-6">
                      {/* Left - Text Content */}
                      <div className="flex flex-col justify-between w-[45%]">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-1">
                            {solution.title}
                          </h3>
                          <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                            {solution.subtitle}
                          </p>
                          <p className="text-white/80 text-sm max-w-md mb-4">
                            {solution.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <Link to={solution.ctaLink}>
                            <Button className="bg-white text-gray-900 hover:bg-white/90 px-6 py-3 text-base border-0 rounded-full shadow-sm">
                              {solution.ctaText}
                            </Button>
                          </Link>
                          
                          {/* Feature Points */}
                          <div className="space-y-2 pt-2">
                            {solution.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <feature.icon className="w-4 h-4 text-white/70" />
                                <span className="text-white/80 text-sm">{feature.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right - Image */}
                      <div className="hidden md:flex w-[55%] items-center justify-center">
                        {imageErrors[solution.id] ? (
                          <div className="w-full h-full rounded-2xl bg-white/10 flex items-center justify-center">
                            <ImageOff className="w-16 h-16 text-white/40" />
                          </div>
                        ) : (
                          <img
                            src={solution.image}
                            alt={solution.title}
                            className="w-full h-full object-cover rounded-2xl"
                            onError={() => handleImageError(solution.id)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Stacked Cards */}
      <div className="md:hidden px-4 space-y-5">
        {solutionsData.map((solution) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{ backgroundColor: solution.bgColor }}
              className="w-full rounded-[1.5rem] p-4"
            >
              {/* Image Section - Rounded inside card */}
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-5">
                {imageErrors[solution.id] ? (
                  <div className="w-full h-full bg-white/10 flex items-center justify-center">
                    <ImageOff className="w-10 h-10 text-white/40" />
                  </div>
                ) : (
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(solution.id)}
                  />
                )}
              </div>
              
              {/* Content Section */}
              <div className="px-1 pb-2">
                <h3 className="text-2xl font-bold text-white leading-tight mb-2">
                  {solution.title} {solution.subtitle}
                </h3>
                <p className="text-white/80 text-base leading-relaxed mb-4">
                  {solution.mobileDescription || solution.outcome}
                </p>

                <Link to={solution.ctaLink}>
                  <Button className="bg-white text-gray-900 hover:bg-white/90 px-6 py-3 text-base font-medium border-0 rounded-full shadow-sm mb-4">
                    {solution.ctaText}
                  </Button>
                </Link>
                
                {/* Feature Points */}
                <div className="space-y-2 pt-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <feature.icon className="w-4 h-4 text-white/70" />
                      <span className="text-white/80 text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsCarouselSection;
