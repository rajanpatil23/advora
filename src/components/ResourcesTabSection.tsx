import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, Users, HeadphonesIcon, GraduationCap, TrendingUp, Code2, LineChart, Wallet, HeartPulse, ShoppingCart, CalendarDays, Github, MessageCircle, Cpu, Palette, Server, FileText, HelpCircle, Sparkles, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

type TabType = "blog" | "portfolio" | "community" | "support" | "careers";

interface ContentCard {
  title: string;
  description: string;
  icon: LucideIcon;
  tag?: string;
}

interface TabData {
  id: TabType;
  label: string;
  icon: typeof BookOpen;
  description: string;
  link: string;
  linkText: string;
  cards: ContentCard[];
}

const tabsData: TabData[] = [
  {
    id: "blog",
    label: "Blog",
    icon: BookOpen,
    description: "Stay updated with the latest insights, tutorials, and industry trends. Our blog covers everything from technical deep-dives to business strategies.",
    link: "/blog",
    linkText: "Read our blog",
    cards: [
      { title: "The Future of Web Development", description: "Exploring emerging trends in modern web technologies", icon: TrendingUp, tag: "Trends" },
      { title: "Building Scalable React Apps", description: "Best practices for enterprise-level applications", icon: Code2, tag: "Tutorial" },
      { title: "FinanceFlow Case Study", description: "How we built a fintech platform", icon: LineChart, tag: "Case Study" },
    ],
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: Briefcase,
    description: "Explore our showcase of successful projects. From web applications to mobile apps, see how we've helped businesses transform their digital presence.",
    link: "/portfolio",
    linkText: "View portfolio",
    cards: [
      { title: "FinanceFlow", description: "Modern fintech dashboard platform", icon: Wallet, tag: "Fintech" },
      { title: "HealthTrack", description: "Healthcare management system", icon: HeartPulse, tag: "Healthcare" },
      { title: "RetailHub", description: "E-commerce analytics solution", icon: ShoppingCart, tag: "E-commerce" },
    ],
  },
  {
    id: "community",
    label: "Community",
    icon: Users,
    description: "Join our growing community of developers, designers, and entrepreneurs. Connect, collaborate, and learn together in our vibrant ecosystem.",
    link: "/community",
    linkText: "Join community",
    cards: [
      { title: "Developer Meetups", description: "Monthly virtual events and workshops", icon: CalendarDays, tag: "Events" },
      { title: "Open Source Projects", description: "Contribute to our public repositories", icon: Github, tag: "Open Source" },
      { title: "Discord Community", description: "Connect with 5,000+ developers", icon: MessageCircle, tag: "Discord" },
    ],
  },
  {
    id: "careers",
    label: "Careers",
    icon: GraduationCap,
    description: "Join our talented team of innovators. We're always looking for passionate individuals who want to make an impact in the tech industry.",
    link: "/careers",
    linkText: "View openings",
    cards: [
      { title: "Senior Full-Stack Developer", description: "Remote · Full-time · Engineering", icon: Cpu, tag: "Engineering" },
      { title: "Product Designer", description: "Hybrid · Full-time · Design", icon: Palette, tag: "Design" },
      { title: "DevOps Engineer", description: "Remote · Full-time · Infrastructure", icon: Server, tag: "DevOps" },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: HeadphonesIcon,
    description: "Get the help you need, when you need it. Our dedicated support team is here to assist you with any questions or technical challenges.",
    link: "/contact",
    linkText: "Get support",
    cards: [
      { title: "Documentation", description: "Comprehensive guides and API references", icon: FileText, tag: "Docs" },
      { title: "FAQ & Knowledge Base", description: "Quick answers to common questions", icon: HelpCircle, tag: "FAQ" },
      { title: "Priority Support", description: "Direct access to our engineering team", icon: Sparkles, tag: "Premium" },
    ],
  },
];

export default function ResourcesTabSection() {
  const [activeTab, setActiveTab] = useState<TabType>("blog");
  const [isPaused, setIsPaused] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<1 | -1>(1);
  const isMobile = useIsMobile();

  const tabOrder: TabType[] = ["blog", "portfolio", "community", "careers", "support"];

  const goToNextTab = useCallback(() => {
    setActiveTab((current) => {
      const currentIndex = tabOrder.indexOf(current);
      const nextIndex = (currentIndex + 1) % tabOrder.length;
      return tabOrder[nextIndex];
    });
  }, []);

  // Desktop auto-rotation
  useEffect(() => {
    if (isPaused || isMobile) return;
    
    const interval = setInterval(goToNextTab, 3000);
    return () => clearInterval(interval);
  }, [isPaused, goToNextTab, isMobile]);

  // Mobile auto-rotation
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setSwipeDirection(1);
      setMobileIndex((prev) => (prev + 1) % tabsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleMobilePrev = () => {
    setSwipeDirection(-1);
    setMobileIndex((prev) => (prev - 1 + tabsData.length) % tabsData.length);
  };

  const handleMobileNext = () => {
    setSwipeDirection(1);
    setMobileIndex((prev) => (prev + 1) % tabsData.length);
  };

  const activeTabData = tabsData.find((tab) => tab.id === activeTab)!;
  const mobileTabData = tabsData[mobileIndex];

  // Swipe animation variants
  const swipeVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.5,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0.5,
      scale: 0.95,
    }),
  };

  return (
    <section className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
      {/* Wrapper card with gradient background */}
      <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-primary/20 via-primary/10 to-accent/15 dark:from-primary/25 dark:via-primary/15 dark:to-accent/20 p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden isolate">
        {/* Decorative gradient orb */}
        <div aria-hidden className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div aria-hidden className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        {/* Content (kept above decorative orbs) */}
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-10 md:mb-14 max-w-xl">
            <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              Resources
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 leading-tight">
              <span className="block font-serif italic font-normal">Explore Our</span>
              <span className="block font-bold">Resources & <span className="text-primary">Community</span></span>
            </h2>
            <p className="hidden lg:block text-muted-foreground text-base md:text-lg mb-6">
              Everything you need to build exceptional digital products. From tutorials to templates, we've got you covered.
            </p>
            <Link to={activeTabData.link}>
              <Button className="rounded-full px-6 py-5 bg-primary text-primary-foreground hover:bg-primary/70">
                {activeTabData.linkText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile & Tablet Carousel with Swipe */}
          <div className="lg:hidden">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="popLayout" custom={swipeDirection}>
                <motion.div
                  key={mobileIndex}
                  custom={swipeDirection}
                  variants={swipeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.3}
                  onDragEnd={(_, info) => {
                    const threshold = 50;
                    const velocity = info.velocity.x;
                    const offset = info.offset.x;
                    
                    if (offset > threshold || velocity > 500) {
                      handleMobilePrev();
                    } else if (offset < -threshold || velocity < -500) {
                      handleMobileNext();
                    }
                  }}
                  className="bg-background rounded-2xl border border-border overflow-hidden shadow-sm cursor-grab active:cursor-grabbing"
                  style={{ touchAction: "pan-y" }}
                >
                  {/* Preview Image */}
                  <div className="relative overflow-hidden bg-muted shrink-0">
                    <img
                      src={mobileTabData.cards[0]?.image}
                      alt={mobileTabData.label}
                      loading="lazy"
                      decoding="async"
                      className="block w-full h-48 sm:h-56 object-cover pointer-events-none"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <mobileTabData.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">{mobileTabData.label}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{mobileTabData.label}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {mobileTabData.description}
                    </p>
                    <Link to={mobileTabData.link}>
                      <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                        {mobileTabData.linkText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {tabsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMobileIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === mobileIndex ? "bg-primary w-6" : "bg-border"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Content Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
            {/* Left: Accordion Tabs */}
            <div className="flex flex-col justify-between gap-3">
              {tabsData.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                
                return (
                  <motion.div
                    key={tab.id}
                    className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive
                        ? "bg-background border-border shadow-sm"
                        : "bg-transparent border-transparent hover:bg-background/50"
                    }`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <div className="px-5 py-4 flex items-center gap-3">
                      <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                      <span className={`font-semibold transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                        {tab.label}
                      </span>
                    </div>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 pt-0">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {tab.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Preview Card */}
            <div className="relative h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-background rounded-2xl border border-border p-4 sm:p-6 shadow-sm h-full flex flex-col"
                >
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-primary/10 rounded-full px-4 py-1 text-xs text-muted-foreground">
                        advora.in/{activeTab}
                      </div>
                    </div>
                  </div>

                  {/* Content Cards */}
                  <div className="space-y-3 flex-1">
                    {activeTabData.cards.map((card, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex gap-3 p-3 rounded-xl bg-primary/10 hover:bg-primary/15 transition-colors cursor-pointer group"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          {card.tag && (
                            <span className="inline-block text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-1">
                              {card.tag}
                            </span>
                          )}
                          <h4 className="text-sm font-semibold text-foreground truncate">{card.title}</h4>
                          <p className="text-xs text-muted-foreground line-clamp-1">{card.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="flex justify-center mt-4 pt-3 border-t border-border">
                    <Link to={activeTabData.link} className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                      {activeTabData.linkText}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
