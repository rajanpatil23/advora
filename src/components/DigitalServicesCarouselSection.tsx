import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ImageOff,
  Globe,
  TrendingUp,
  Target,
  Megaphone,
  BarChart3,
  Users,
  Wallet,
  Mail,
  LineChart,
  Gauge,
  Puzzle,
} from "lucide-react";

import heroDashboard from "@/assets/grow-digital-presence.png";
import heroWorkspace from "@/assets/grow-growth-marketing.png";
import projectFinanceflow from "@/assets/grow-sales-revenue.png";
import projectHealthtrack from "@/assets/grow-strategy-scaling.png";

const digitalServicesData = [
  {
    id: "digital-presence",
    label: "Digital Presence",
    title: "Demand",
    subtitle: "Foundation",
    description:
      "Website & app ecosystem strategy, SEO & performance optimization, content structure & publishing framework, social presence strategy, and authority building.",
    mobileDescription: "Build a strong online presence that attracts the right audience.",
    outcome: "A strong digital presence that attracts and qualifies the right audience.",
    ctaText: "Build Presence",
    ctaLink: "/contact",
    bgColor: "#2d5a7b",
    image: heroDashboard,
    features: [
      { icon: Globe, text: "Multi-channel visibility" },
      { icon: TrendingUp, text: "SEO-driven traffic growth" },
      { icon: Target, text: "Targeted audience reach" },
    ],
  },
  {
    id: "growth-marketing",
    label: "Growth Marketing",
    title: "Acquisition",
    subtitle: "Engine",
    description:
      "Growth marketing roadmap, paid ads strategy (Google, Meta, LinkedIn), funnel & campaign architecture, content & inbound marketing, and conversion rate optimization.",
    mobileDescription: "Predictable traffic, leads, and customer acquisition.",
    outcome: "Predictable traffic, leads, and customer acquisition.",
    ctaText: "Drive Growth",
    ctaLink: "/contact",
    bgColor: "#5a4a3a",
    image: heroWorkspace,
    features: [
      { icon: Megaphone, text: "Multi-platform ad campaigns" },
      { icon: BarChart3, text: "Continuous optimization" },
      { icon: Users, text: "Lead generation at scale" },
    ],
  },
  {
    id: "sales-revenue",
    label: "Sales & Revenue",
    title: "Revenue",
    subtitle: "Systems",
    description:
      "Lead funnel design (B2B/B2C), CRM selection & automation, email, WhatsApp & outbound systems, sales pipeline optimization, and marketing → sales handover.",
    mobileDescription: "Automated systems that convert leads into revenue.",
    outcome: "A scalable, automated system that converts leads into revenue.",
    ctaText: "Boost Revenue",
    ctaLink: "/contact",
    bgColor: "#6b4c5a",
    image: projectFinanceflow,
    features: [
      { icon: Wallet, text: "Revenue pipeline automation" },
      { icon: Mail, text: "Outbound & email sequences" },
      { icon: Gauge, text: "Sales process optimization" },
    ],
  },
  {
    id: "growth-strategy",
    label: "Strategy & Scaling",
    title: "Analytics &",
    subtitle: "Scaling",
    description:
      "Market analysis, product-market fit validation, monetization strategy, KPI frameworks, GA4/Mixpanel dashboards, process optimization, and automation systems.",
    mobileDescription: "Data-driven insights for efficient scaling.",
    outcome: "Data-driven growth, operational efficiency, and scale readiness.",
    ctaText: "Scale Smart",
    ctaLink: "/contact",
    bgColor: "#3a6b5a",
    image: projectHealthtrack,
    features: [
      { icon: LineChart, text: "Real-time KPI dashboards" },
      { icon: Puzzle, text: "Process automation" },
      { icon: TrendingUp, text: "Scalable growth frameworks" },
    ],
  },
];

const DigitalServicesCarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="section-divider py-16 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 text-sm px-4 py-1 font-semibold tracking-wider">
              GROW & SCALE
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
              <span className="block font-serif italic font-normal mb-1">How We Drive Growth</span>
              <span className="block font-bold">
                That <span className="text-primary">Actually Scales</span>
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-normal max-w-2xl mx-auto">
              We help you increase visibility, acquire customers, and build revenue systems that scale predictably -
              backed by data, not guesswork.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation - Desktop only */}
        <ScrollReveal delay={100}>
          <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
            {digitalServicesData.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => handleTabClick(index)}
                className={`relative px-2 py-2 text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeIndex === index ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {solution.label}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeDigitalTab"
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
            {digitalServicesData.map((solution, index) => {
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
                    <div className="flex flex-col md:flex-row h-full gap-6">
                      {/* Image (top on tablet, left on desktop) */}
                      <div className="flex w-full md:w-[55%] items-center justify-center">
                        <div className="w-full h-48 sm:h-56 md:h-full rounded-2xl overflow-visible flex items-center justify-center relative">
                          {imageErrors[solution.id] || !solution.image ? (
                            <ImageOff className="w-16 h-16 text-white/40" />
                          ) : (
                            <img
                              src={solution.image}
                              alt={solution.title}
                              className="w-[120%] max-w-none h-auto object-contain scale-110"
                              onError={() => handleImageError(solution.id)}
                            />
                          )}
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex flex-col justify-between w-full md:w-[45%]">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-1">
                            {solution.title}
                          </h3>
                          <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                            {solution.subtitle}
                          </p>
                          <p className="text-white/80 text-sm max-w-md mb-4">{solution.description}</p>
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
        {digitalServicesData.map((solution) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ backgroundColor: solution.bgColor }} className="w-full rounded-[1.5rem] p-4">
              {/* Image Section - Rounded inside card */}
              <div className="w-full h-48 rounded-2xl overflow-visible mb-5 flex items-center justify-center">
                {imageErrors[solution.id] || !solution.image ? (
                  <div className="w-full h-full bg-white/10 flex items-center justify-center rounded-2xl">
                    <ImageOff className="w-10 h-10 text-white/40" />
                  </div>
                ) : (
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-contain"
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

export default DigitalServicesCarouselSection;
