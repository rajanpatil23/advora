import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";

// Collapsible section component for mobile
const FooterSection = ({ 
  title, 
  children, 
  isPrimary = false,
  defaultOpen = false 
}: { 
  title: string; 
  children: React.ReactNode; 
  isPrimary?: boolean;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="lg:block">
      {/* Mobile/Tablet: Collapsible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full flex items-center justify-between py-3 border-b border-border/30"
      >
        <h3 className={`font-semibold text-xs uppercase tracking-wider ${isPrimary ? 'text-primary' : ''}`}>
          {title}
        </h3>
        <ChevronDown 
          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {/* Mobile: Expandable content */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 py-3' : 'max-h-0'}`}>
        {children}
      </div>

      {/* Desktop: Always visible */}
      <div className="hidden lg:block">
        <h3 className={`font-semibold mb-5 text-xs uppercase tracking-wider ${isPrimary ? 'text-primary' : ''}`}>
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  const [isDark, setIsDark] = useState(false);
  const [footerEmail, setFooterEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [upperEmail, setUpperEmail] = useState("");
  const [upperSending, setUpperSending] = useState(false);
  const [upperSent, setUpperSent] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ["class"] 
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Lower footer has bg-foreground:
  // - In dark mode: bg is white → use dark logo
  // - In light mode: bg is dark → use light logo
  const lowerFooterLogo = isDark ? logoDark : logoLight;
  
  return (
    <footer className="relative mt-12 sm:mt-16 bg-foreground">
      {/* New Section - Sticky Reveal */}
      <div className="sticky bottom-0 bg-foreground z-0" style={{ height: "200px" }}>
        <div className="h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-background">Ready to start your project?</h2>
        </div>
      </div>

      {/* Upper Footer - with curved bottom corners */}
      <div
        className="relative z-10 bg-background rounded-b-[4.5rem] sm:rounded-b-[5.5rem]"
        style={{ marginTop: "-200px" }}
      >
        {/* Gradient overlay to match hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/10 to-primary/15 rounded-b-[4.5rem] sm:rounded-b-[5.5rem]" />
        {/* Background grid pattern to match hero */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] rounded-b-[4.5rem] sm:rounded-b-[5.5rem]" />


        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          {/* Top Row: Logo & Newsletter in single line */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 lg:mb-16">
            {/* Logo - theme-aware */}
            <Link to="/" className="flex items-center">
              <span className="relative inline-flex">
                <img src={logoDark} alt="Advora Labs" className="h-8 sm:h-10 w-auto dark:hidden" />
                <img src={logoLight} alt="Advora Labs" className="h-8 sm:h-10 w-auto hidden dark:block" />
              </span>
            </Link>

            {/* Newsletter - inline input with button */}
            <div className="flex flex-col sm:flex-row gap-0 w-full lg:w-auto lg:flex-1 lg:max-w-xl lg:ml-auto">
              <div className="relative flex w-full rounded-full border border-border bg-background/80 backdrop-blur-sm overflow-hidden">
                <input
                  type="email"
                  value={upperEmail}
                  onChange={(e) => setUpperEmail(e.target.value)}
                  placeholder="Enter your email for Weekly insights"
                  className="flex-1 px-5 py-3.5 bg-transparent focus:outline-none text-sm"
                  disabled={upperSending || upperSent}
                />
                <button
                  onClick={async () => {
                    if (upperSent) return;
                    if (!upperEmail || !upperEmail.includes("@")) return;
                    setUpperSending(true);
                    try {
                      const formData = new FormData();
                      formData.append("access_key", "9b766b1f-8a26-4ba4-b363-3829a818bc92");
                      formData.append("email", upperEmail);
                      formData.append("subject", "New newsletter subscription");
                      formData.append("message", `Newsletter signup from: ${upperEmail}`);
                      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
                      if (res.ok) {
                        setUpperSent(true);
                        setUpperEmail("");
                      }
                    } catch {
                      // silent fail
                    } finally {
                      setUpperSending(false);
                    }
                  }}
                  disabled={upperSending}
                  className="px-6 py-3 m-1 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/70 transition-colors text-sm whitespace-nowrap disabled:opacity-70"
                >
                  {upperSent ? "✓ Subscribed!" : upperSending ? "Sending..." : "Subscribe"}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Collapsible sections | Desktop: 5-column grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-6 mb-8 lg:mb-16">
            {/* Grow & Scale */}
            <FooterSection title="Grow & Scale" isPrimary>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link to="/services/digital-presence" className="hover:text-foreground transition-colors">
                    Digital Presence
                  </Link>
                </li>
                <li>
                  <Link to="/services/growth-marketing" className="hover:text-foreground transition-colors">
                    Growth Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/services/sales-revenue" className="hover:text-foreground transition-colors">
                    Sales & Revenue
                  </Link>
                </li>
                <li>
                  <Link to="/services/strategy-scaling" className="hover:text-foreground transition-colors">
                    Strategy & Scaling
                  </Link>
                </li>
              </ul>
            </FooterSection>
            
            {/* Build */}
            <FooterSection title="Build" isPrimary>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link to="/services/web-development" className="hover:text-foreground transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/mobile-apps" className="hover:text-foreground transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link to="/services/custom-software" className="hover:text-foreground transition-colors">
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link to="/services/ui-ux-design" className="hover:text-foreground transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link to="/services/branding" className="hover:text-foreground transition-colors">
                    Branding
                  </Link>
                </li>
              </ul>
            </FooterSection>

            {/* Company */}
            <FooterSection title="Company">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-foreground transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </FooterSection>

            {/* Resources */}
            <FooterSection title="Resources">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link to="/community" className="hover:text-foreground transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </FooterSection>

            {/* Get in Touch - Always visible, not collapsible */}
            <div className="pt-6 lg:pt-0 border-t border-border/30 lg:border-0">
              <h3 className="font-semibold mb-4 lg:mb-5 text-xs uppercase tracking-wider">Get in Touch</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>advora.in@gmail.com</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>+91 7219860213</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Kharadi, Pune</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Row: Social Icons & Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/advora-labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/advora.labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">© 2025 Advora Digital. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* New Logo Section - Sticky Reveal */}
      <div className="sticky bottom-0 bg-foreground h-[70vh] sm:h-[400px]">
        <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="relative inline-flex">
              <img src={logoLight} alt="Advora Labs" className="h-16 sm:h-20 lg:h-24 w-auto dark:hidden" />
              <img src={logoDark} alt="Advora Labs" className="h-16 sm:h-20 lg:h-24 w-auto hidden dark:block" />
            </span>
          </Link>
          
          {/* Title - dual-line pattern matching site sections */}
          <div className="text-center">
            <p className="font-serif italic text-lg sm:text-xl text-background/80">
              Have something in mind, but not sure where to start?
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background mt-2">
              Let's <span className="text-primary">shape it</span> together
            </h2>
          </div>
          
          {/* Email Form */}
          <div className="w-full max-w-md" ref={formContainerRef}>
            <div className="relative w-full rounded-full border border-background/20 bg-background/10 backdrop-blur-sm overflow-hidden h-[52px]">
              {/* Input - shrinks to 0 when sent */}
              <div
                className="absolute left-0 top-0 bottom-0 overflow-hidden transition-all duration-700 ease-in-out"
                style={{ right: isSent ? '100%' : '0%', opacity: isSent ? 0 : 1 }}
              >
                <input
                  type="email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-full px-5 bg-transparent focus:outline-none text-sm text-background placeholder:text-background/60 pr-32"
                  disabled={isSending || isSent}
                />
              </div>

              {/* Button - expands from right to fill entire capsule */}
              <div
                className="absolute top-0 bottom-0 transition-all duration-700 ease-in-out flex items-center"
                style={{
                  left: isSent ? '0%' : 'auto',
                  right: '0%',
                  width: isSent ? '100%' : 'auto',
                }}
              >
                <button
                  onClick={async () => {
                    if (isSent) return;
                    if (!footerEmail || !footerEmail.includes("@")) return;
                    setIsSending(true);
                    try {
                      const formData = new FormData();
                      formData.append("access_key", "9b766b1f-8a26-4ba4-b363-3829a818bc92");
                      formData.append("email", footerEmail);
                      formData.append("subject", "New inquiry from footer CTA");
                      formData.append("message", `Email inquiry from: ${footerEmail}`);
                      const res = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        body: formData,
                      });
                      if (res.ok) {
                        setIsSent(true);
                      }
                    } catch {
                      // silent fail
                    } finally {
                      setIsSending(false);
                    }
                  }}
                  disabled={isSending}
                  className={`h-[calc(100%-8px)] m-1 rounded-full bg-background text-foreground font-medium hover:bg-background/90 transition-all duration-700 text-sm whitespace-nowrap disabled:opacity-70 flex items-center justify-center gap-2 ${
                    isSent ? 'w-[calc(100%-8px)] cursor-default' : 'px-6'
                  }`}
                >
                  {isSent ? (
                    <>
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We'll get in touch with you soon!</span>
                    </>
                  ) : isSending ? "Sending..." : "Tell Us"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
