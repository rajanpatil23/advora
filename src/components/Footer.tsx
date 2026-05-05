import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Phone, MapPin, ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";

// Collapsible section component for mobile
const FooterSection = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="lg:block">
      {/* Mobile/Tablet: Collapsible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full flex items-center justify-between py-4 border-b border-background/10"
      >
        <h3 className="font-semibold text-[11px] uppercase tracking-[0.18em] text-background">
          {title}
        </h3>
        <ChevronDown
          className={`h-4 w-4 text-background/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mobile expandable */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 py-3" : "max-h-0"}`}>
        {children}
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <h3 className="font-semibold mb-5 text-[11px] uppercase tracking-[0.18em] text-background/70">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

const linkClass =
  "group inline-flex items-center gap-1 text-background/65 hover:text-background transition-colors duration-200";

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
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Upper footer is bg-foreground (dark in light mode, white in dark mode)
  // So logo on upper footer needs the OPPOSITE of normal
  const upperLogo = isDark ? logoDark : logoLight;

  return (
    <footer className="relative mt-12 sm:mt-16 bg-foreground">
      {/* Sticky reveal teaser */}
      <div className="sticky bottom-0 bg-foreground z-0" style={{ height: "200px" }}>
        <div className="h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-background">
            Ready to start your project?
          </h2>
        </div>
      </div>

      {/* Upper Footer - premium light glass */}
      <div
        className="relative z-10 bg-background text-foreground rounded-b-[3rem] sm:rounded-b-[4.5rem] overflow-hidden border-b border-foreground/5"
        style={{ marginTop: "-200px" }}
      >
        {/* Ambient gradient blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 w-[32rem] h-[32rem] rounded-full bg-primary/10 blur-3xl" />
        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-10 sm:pb-14">
          {/* Brand + CTA Card */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-14 lg:mb-20">
            {/* Brand column */}
            <div className="lg:col-span-5">
              <Link to="/" className="inline-flex items-center mb-6">
                <img src={upperLogo} alt="Advora Labs" className="h-9 sm:h-10 w-auto" />
              </Link>
              <p className="text-background/65 text-base leading-relaxed max-w-md">
                We design, build and scale digital products that move businesses forward — strategy, software and growth, all under one roof.
              </p>

              {/* Contact mini list */}
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex items-center gap-3 text-background/70">
                  <span className="w-8 h-8 rounded-full bg-background/5 border border-background/10 flex items-center justify-center">
                    <Mail className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <a href="mailto:advora.in@gmail.com" className="hover:text-background transition-colors">
                    advora.in@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-background/70">
                  <span className="w-8 h-8 rounded-full bg-background/5 border border-background/10 flex items-center justify-center">
                    <Phone className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <a href="tel:+917219860213" className="hover:text-background transition-colors">
                    +91 7219860213
                  </a>
                </li>
                <li className="flex items-center gap-3 text-background/70">
                  <span className="w-8 h-8 rounded-full bg-background/5 border border-background/10 flex items-center justify-center">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span>Kharadi, Pune</span>
                </li>
              </ul>
            </div>

            {/* Newsletter card */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl border border-background/10 bg-background/[0.03] backdrop-blur-sm p-6 sm:p-8 overflow-hidden">
                <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[11px] font-medium uppercase tracking-wider mb-4">
                    <Sparkles className="h-3 w-3" />
                    Weekly insights
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-background mb-2">
                    Stay ahead of the curve
                  </h3>
                  <p className="text-sm text-background/60 mb-5 max-w-md">
                    Curated playbooks on growth, design and product — straight to your inbox. No spam, ever.
                  </p>

                  <div className="flex w-full rounded-full border border-background/15 bg-background/5 backdrop-blur-sm overflow-hidden p-1">
                    <input
                      type="email"
                      value={upperEmail}
                      onChange={(e) => setUpperEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="flex-1 px-5 py-2.5 bg-transparent focus:outline-none text-sm text-background placeholder:text-background/40"
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
                      className="px-5 sm:px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/85 transition-colors text-sm whitespace-nowrap disabled:opacity-70"
                    >
                      {upperSent ? "✓ Subscribed" : upperSending ? "Sending..." : "Subscribe"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Link Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-8 mb-12 lg:mb-16">
            <FooterSection title="Grow & Scale">
              <ul className="space-y-3 text-sm">
                <li><Link to="/services/digital-presence" className={linkClass}>Digital Presence</Link></li>
                <li><Link to="/services/growth-marketing" className={linkClass}>Growth Marketing</Link></li>
                <li><Link to="/services/sales-revenue" className={linkClass}>Sales & Revenue</Link></li>
                <li><Link to="/services/strategy-scaling" className={linkClass}>Strategy & Scaling</Link></li>
              </ul>
            </FooterSection>

            <FooterSection title="Build">
              <ul className="space-y-3 text-sm">
                <li><Link to="/services/web-development" className={linkClass}>Web Development</Link></li>
                <li><Link to="/services/mobile-apps" className={linkClass}>Mobile Apps</Link></li>
                <li><Link to="/services/custom-software" className={linkClass}>Custom Software</Link></li>
                <li><Link to="/services/ui-ux-design" className={linkClass}>UI/UX Design</Link></li>
                <li><Link to="/services/branding" className={linkClass}>Branding</Link></li>
              </ul>
            </FooterSection>

            <FooterSection title="Company">
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className={linkClass}>About</Link></li>
                <li><Link to="/portfolio" className={linkClass}>Portfolio</Link></li>
                <li><Link to="/careers" className={linkClass}>Careers</Link></li>
                <li><Link to="/blog" className={linkClass}>Blog</Link></li>
              </ul>
            </FooterSection>

            <FooterSection title="Resources">
              <ul className="space-y-3 text-sm">
                <li><Link to="/community" className={linkClass}>Community</Link></li>
                <li><Link to="/contact" className={linkClass}>Contact</Link></li>
                <li><Link to="/privacy" className={linkClass}>Privacy Policy</Link></li>
                <li><Link to="/terms" className={linkClass}>Terms</Link></li>
              </ul>
            </FooterSection>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t border-background/10">
            <p className="text-sm text-background/50 order-2 sm:order-1">
              © {new Date().getFullYear()} Advora Digital. Crafted with care.
            </p>

            <div className="flex items-center gap-3 order-1 sm:order-2">
              <a
                href="https://www.linkedin.com/company/advora-labs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-background/5 border border-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/advora.labs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-background/5 border border-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Reveal — Brand statement */}
      <div className="sticky bottom-0 bg-foreground h-[70vh] sm:h-[400px]">
        <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8">
          <Link to="/" className="flex items-center">
            <img src={upperLogo} alt="Advora Labs" className="h-16 sm:h-20 lg:h-24 w-auto" />
          </Link>

          <div className="text-center">
            <p className="font-serif italic text-lg sm:text-xl text-background/70">
              Have something in mind, but not sure where to start?
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background mt-2">
              Let's <span className="text-primary">shape it</span> together
            </h2>
          </div>

          <div className="w-full max-w-md" ref={formContainerRef}>
            <div className="relative w-full rounded-full border border-background/20 bg-background/10 backdrop-blur-sm overflow-hidden h-[52px]">
              <div
                className="absolute left-0 top-0 bottom-0 overflow-hidden transition-all duration-700 ease-in-out"
                style={{ right: isSent ? "100%" : "0%", opacity: isSent ? 0 : 1 }}
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

              <div
                className="absolute top-0 bottom-0 transition-all duration-700 ease-in-out flex items-center"
                style={{
                  left: isSent ? "0%" : "auto",
                  right: "0%",
                  width: isSent ? "100%" : "auto",
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
                    isSent ? "w-[calc(100%-8px)] cursor-default" : "px-6"
                  }`}
                >
                  {isSent ? (
                    <>
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We'll get in touch with you soon!</span>
                    </>
                  ) : isSending ? (
                    "Sending..."
                  ) : (
                    <>
                      Tell Us
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
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
