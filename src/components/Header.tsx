import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronDown, ChevronRight, Globe, Smartphone, Code, Database, Palette, Cloud, ArrowRight, Briefcase, BookOpen, Users, Headphones, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";

// Renders both logos stacked; toggles visibility via CSS to avoid reload flicker
const ThemeLogo = ({ className = "h-5 sm:h-6 w-auto" }: { className?: string }) => (
  <span className="relative inline-flex">
    <img src={logoDark} alt="Advora Labs" className={`${className} dark:hidden`} />
    <img src={logoLight} alt="Advora Labs" className={`${className} hidden dark:block`} />
  </span>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileBuildOpen, setMobileBuildOpen] = useState(false);
  const [mobileGrowOpen, setMobileGrowOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // BUILD - Technology & Product Services
  const buildServices = [
    { label: "Web Development", path: "/services/web-development", icon: Globe, description: "Websites & platforms" },
    { label: "Mobile Apps", path: "/services/mobile-apps", icon: Smartphone, description: "iOS & Android apps" },
    { label: "Custom Software", path: "/services/custom-software", icon: Code, description: "Business tools & automation" },
    { label: "UI/UX Design", path: "/services/ui-ux-design", icon: Palette, description: "Product experience" },
    { label: "Branding", path: "/services/branding", icon: Database, description: "Product positioning" },
  ];

  // GROW & SCALE - Digital Growth Services
  const growServices = [
    { label: "Digital Presence", path: "/services/digital-presence", icon: Globe, description: "Demand foundation" },
    { label: "Growth Marketing", path: "/services/growth-marketing", icon: Cloud, description: "Acquisition engine" },
    { label: "Sales & Revenue", path: "/services/sales-revenue", icon: Database, description: "Revenue systems" },
    { label: "Strategy & Scaling", path: "/services/strategy-scaling", icon: Code, description: "Analytics & scaling" },
  ];

  // Combined for backwards compatibility
  const servicesItems = [...buildServices, ...growServices];

  const resourcesItems = [
    { label: "Portfolio", path: "/portfolio", icon: Briefcase, description: "Our best work" },
    { label: "Blog", path: "/blog", icon: BookOpen, description: "Insights & tutorials" },
    { label: "Community", path: "/community", icon: Users, description: "Join developers" },
    { label: "Careers", path: "/careers", icon: GraduationCap, description: "Join our team" },
    { label: "Support", path: "/contact", icon: Headphones, description: "Get help" },
  ];

  const mainNavItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "Community", path: "/community" },
    { label: "Contact", path: "/contact" },
  ];

  // Scrolled state - Split navbar with logo left, menu button right
  if (isScrolled) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 animate-slide-down">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Full navbar when scrolling up */}
          {scrollDirection === 'up' ? (
            <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6 shadow-lg animate-fade-in">
              {/* Logo - Dark on light bg, Light on dark mode */}
              <div className="flex items-center min-w-0">
                <Link to="/" className="flex items-center">
                  <ThemeLogo />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {/* Home */}
                <Link 
                  to="/" 
                  className={`text-sm font-medium px-4 py-2 transition-all relative ${
                    isActive("/") && location.pathname === "/"
                      ? "text-accent" 
                      : "hover:text-accent"
                  }`}
                >
                  Home
                  {isActive("/") && location.pathname === "/" && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>

                {/* About */}
                <Link 
                  to="/about" 
                  className={`text-sm font-medium px-4 py-2 transition-all relative ${
                    isActive("/about") 
                      ? "text-accent" 
                      : "hover:text-accent"
                  }`}
                >
                  About
                  {isActive("/about") && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>

                {/* Services */}
                <Link 
                  to="/services" 
                  className={`text-sm font-medium px-4 py-2 transition-all relative ${
                    isActive("/services") 
                      ? "text-accent" 
                      : "hover:text-accent"
                  }`}
                >
                  Services
                  {isActive("/services") && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>

                {/* Products */}
                <Link 
                  to="/products" 
                  className={`text-sm font-medium px-4 py-2 transition-all relative ${
                    isActive("/products") 
                      ? "text-accent" 
                      : "hover:text-accent"
                  }`}
                >
                  Products
                  {isActive("/products") && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>

                {/* Resources Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button 
                      className={`text-sm font-medium px-4 py-2 transition-all relative flex items-center gap-1 ${
                        isActive("/portfolio") || isActive("/blog") || isActive("/community") || isActive("/careers")
                          ? "text-accent" 
                          : "hover:text-accent"
                      }`}
                    >
                      Resources
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      {(isActive("/portfolio") || isActive("/blog") || isActive("/community") || isActive("/careers")) && (
                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    className="w-[280px] p-0 bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl z-50 overflow-hidden"
                  >
                    <div className="p-2">
                      {resourcesItems.map((item) => (
                        <Link 
                          key={item.path}
                          to={item.path} 
                          className="group flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-200"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-200">
                            <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                <button
                  onClick={toggleTheme}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-muted/60 transition-all"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
                </button>

                <Link to="/contact" className="hidden md:block">
                  <Button className="bg-primary hover:bg-primary/70 text-primary-foreground rounded-full px-6 py-2 transition-all">
                    Get a Quote
                  </Button>
                </Link>

                {/* Mobile Menu Button - only on mobile */}
                <button
                  className="md:hidden p-1.5 sm:p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                </button>
              </div>
            </div>
          ) : (
            /* Split navbar - logo left, menu right */
            <div className="flex items-center justify-between">
              {/* Logo - Left Corner */}
              <Link 
                to="/" 
                className="flex items-center pill-nav px-3 sm:px-4 py-2 shadow-lg"
              >
                <ThemeLogo />
              </Link>

              {/* Right Corner Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 sm:p-2.5 rounded-full pill-nav shadow-lg hover:bg-muted/60 transition-all"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
                </button>

                {/* Get a Quote Button - desktop only */}
                <Link to="/contact" className="hidden md:block">
                  <Button className="bg-primary hover:bg-primary/70 text-primary-foreground rounded-full px-6 py-2 shadow-lg transition-all">
                    Get a Quote
                  </Button>
                </Link>

                {/* Mobile Menu Button - only on mobile */}
                <button
                  className="md:hidden p-2 sm:p-2.5 rounded-full pill-nav shadow-lg flex items-center gap-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu - shown when isMenuOpen is true */}
          {isMenuOpen && (
            <>
              {/* Backdrop overlay - starts below navbar */}
              <div 
                className="fixed inset-x-0 top-[4.5rem] bottom-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <div className="relative z-50 md:hidden mt-2 py-4 px-4 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/50 animate-fade-in max-h-[calc(100vh-6rem)] overflow-y-auto shadow-lg">
              <nav className="flex flex-col gap-1">
                <Link 
                  to="/" 
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                    isActive("/") && location.pathname === "/"
                      ? "bg-accent/10 text-accent" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                    isActive("/about") 
                      ? "bg-accent/10 text-accent" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                
                {/* Services */}
                <Link 
                  to="/services" 
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                    isActive("/services") 
                      ? "bg-accent/10 text-accent" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>

                <Link 
                  to="/products" 
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                    isActive("/products") 
                      ? "bg-accent/10 text-accent" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>

                {/* Resources Dropdown */}
                <div className="flex flex-col">
                  <button 
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className={`text-base font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-between ${
                      isActive("/portfolio") || isActive("/blog") || isActive("/community") || isActive("/careers")
                        ? "bg-accent/10 text-accent" 
                        : "hover:bg-muted"
                    }`}
                  >
                    Resources
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileResourcesOpen && (
                    <div className="pl-4 flex flex-col gap-0.5 mt-1">
                      {resourcesItems.map((item) => (
                        <Link 
                          key={item.path}
                          to={item.path} 
                          className="flex items-center gap-3 py-2 px-3 rounded-lg transition-colors hover:bg-muted"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 mt-2 border-t border-border">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-full py-6 text-base">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </nav>
              </div>
            </>
          )}
        </div>
      </header>
    );
  }

  // Default state - Full navbar
  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-3 sm:pt-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6 transition-all duration-300 !border !border-foreground/15">
          {/* Logo - Dark on light bg, Light on dark mode */}
          <div className="flex items-center min-w-0">
            <Link to="/" className="flex items-center">
              <ThemeLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Home */}
            <Link 
              to="/" 
              className={`text-sm font-medium px-4 py-2 transition-all relative ${
                isActive("/") && location.pathname === "/"
                  ? "text-accent" 
                  : "hover:text-accent"
              }`}
            >
              Home
              {isActive("/") && location.pathname === "/" && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
              )}
            </Link>

            {/* About */}
            <Link 
              to="/about" 
              className={`text-sm font-medium px-4 py-2 transition-all relative ${
                isActive("/about") 
                  ? "text-accent" 
                  : "hover:text-accent"
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
              )}
            </Link>

            {/* Services */}
            <Link 
              to="/services" 
              className={`text-sm font-medium px-4 py-2 transition-all relative ${
                isActive("/services") 
                  ? "text-accent" 
                  : "hover:text-accent"
              }`}
            >
              Services
              {isActive("/services") && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
              )}
            </Link>

            {/* Products */}
            <Link 
              to="/products" 
              className={`text-sm font-medium px-4 py-2 transition-all relative ${
                isActive("/products") 
                  ? "text-accent" 
                  : "hover:text-accent"
              }`}
            >
              Products
              {isActive("/products") && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
              )}
            </Link>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className={`text-sm font-medium px-4 py-2 transition-all relative flex items-center gap-1 ${
                    isActive("/portfolio") || isActive("/blog") || isActive("/community") || isActive("/careers")
                      ? "text-accent" 
                      : "hover:text-accent"
                  }`}
                >
                  Resources
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  {(isActive("/portfolio") || isActive("/blog") || isActive("/community") || isActive("/careers")) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-[280px] p-0 bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl z-50 overflow-hidden"
              >
                {/* Resources List */}
                <div className="p-2">
                  {resourcesItems.map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-200">
                        <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full hover:bg-muted/60 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>

            <Link to="/contact">
              <Button className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-2 hover:scale-105 transition-all">
                Get a Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop overlay - starts below navbar */}
            <div 
              className="fixed inset-x-0 top-[4rem] bottom-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="relative z-50 md:hidden mt-2 py-4 px-4 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/50 animate-fade-in max-h-[calc(100vh-6rem)] overflow-y-auto shadow-lg">
            <nav className="flex flex-col gap-1">
              <Link 
                to="/" 
                className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                  isActive("/") && location.pathname === "/"
                    ? "bg-accent/10 text-accent" 
                    : "hover:bg-muted"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                  isActive("/about") 
                    ? "bg-accent/10 text-accent" 
                    : "hover:bg-muted"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-between ${
                    isActive("/services") 
                      ? "bg-accent/10 text-accent" 
                      : "hover:bg-muted"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileServicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 mt-1">
                    {/* Build Sub-dropdown */}
                    <button 
                      onClick={() => setMobileBuildOpen(!mobileBuildOpen)}
                      className="text-sm font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-between hover:bg-muted"
                    >
                      <span className="flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        Build
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${mobileBuildOpen ? 'rotate-90' : ''}`} />
                    </button>
                    
                    {mobileBuildOpen && (
                      <div className="pl-4 flex flex-col gap-0.5">
                        {buildServices.map((item) => (
                          <Link 
                            key={item.path}
                            to={item.path} 
                            className="flex items-center gap-3 py-2 px-3 rounded-lg transition-colors hover:bg-muted"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <item.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    {/* Grow & Scale Sub-dropdown */}
                    <button 
                      onClick={() => setMobileGrowOpen(!mobileGrowOpen)}
                      className="text-sm font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-between hover:bg-muted"
                    >
                      <span className="flex items-center gap-2">
                        <Cloud className="w-4 h-4 text-primary" />
                        Grow & Scale
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${mobileGrowOpen ? 'rotate-90' : ''}`} />
                    </button>
                    
                    {mobileGrowOpen && (
                      <div className="pl-4 flex flex-col gap-0.5">
                        {growServices.map((item) => (
                          <Link 
                            key={item.path}
                            to={item.path} 
                            className="flex items-center gap-3 py-2 px-3 rounded-lg transition-colors hover:bg-muted"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <item.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    <Link 
                      to="/services" 
                      className="flex items-center gap-2 mt-1 py-2 px-4 rounded-full bg-primary/10 text-primary font-medium text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View All Services
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/products" 
                className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                  isActive("/products") 
                    ? "bg-accent/10 text-accent" 
                    : "hover:bg-muted"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>

              {/* Resources Dropdown */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-between ${
                    isActive("/portfolio") || isActive("/blog") || isActive("/community") || isActive("/careers")
                      ? "bg-accent/10 text-accent" 
                      : "hover:bg-muted"
                  }`}
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileResourcesOpen && (
                  <div className="pl-4 flex flex-col gap-0.5 mt-1">
                    {resourcesItems.map((item) => (
                      <Link 
                        key={item.path}
                        to={item.path} 
                        className="flex items-center gap-3 py-2 px-3 rounded-lg transition-colors hover:bg-muted"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 mt-2 border-t border-border">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-full py-6 text-base">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
