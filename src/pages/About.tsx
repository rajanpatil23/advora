import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import {
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  Rocket,
  Eye,
  ArrowRight,
  Code2,
  Palette,
  TrendingUp,
  Smartphone,
} from "lucide-react";
import ValuesTabSection from "@/components/ValuesTabSection";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageSEO";

import aboutHero from "@/assets/about-hero.jpg";
import aboutWorkspace from "@/assets/about-vision-illustration.png";

const About = () => {
  usePageSEO({
    title: "About Us",
    description:
      "Learn about Advora Digital — a Pune-based software agency delivering custom web, mobile, and cloud solutions with a client-focused approach.",
    canonical: "/about",
  });

  const team = [
    {
      name: "Raj",
      role: "Founder & Full-Stack Developer",
      bio: "Leads product strategy and development with deep expertise in scalable web and mobile applications.",
      skills: ["React", "Node.js", "System Architecture"],
    },
    {
      name: "Priya Deshmukh",
      role: "UI/UX Design Lead",
      bio: "Crafts intuitive digital experiences with a focus on user research and brand-driven design.",
      skills: ["Figma", "Branding", "Prototyping"],
    },
    {
      name: "Amit Kulkarni",
      role: "Backend & Cloud Engineer",
      bio: "Builds robust server-side systems and manages cloud infrastructure for high-availability apps.",
      skills: ["Python", "AWS", "PostgreSQL"],
    },
    {
      name: "Sneha Patil",
      role: "Digital Marketing Strategist",
      bio: "Drives growth through SEO, paid campaigns, and data-driven marketing strategies.",
      skills: ["SEO", "Google Ads", "Analytics"],
    },
    {
      name: "Vikram Joshi",
      role: "Mobile App Developer",
      bio: "Specialises in cross-platform mobile development delivering smooth, performant apps.",
      skills: ["React Native", "Flutter", "Firebase"],
    },
    {
      name: "Ananya Iyer",
      role: "Sales & Client Success Lead",
      bio: "Ensures every client engagement is seamless — from first call to project delivery and beyond.",
      skills: ["Client Relations", "Strategy", "Revenue Growth"],
    },
  ];

  const capabilities = [
    { icon: Code2, label: "Web Development", count: "60+" },
    { icon: Smartphone, label: "Mobile Apps", count: "30+" },
    { icon: Palette, label: "UI/UX Design", count: "80+" },
    { icon: TrendingUp, label: "Growth Strategy", count: "40+" },
  ];

  const stats = [
    { value: "5+", label: "Years" },
    { value: "150+", label: "Projects" },
    { value: "50+", label: "Clients" },
    { value: "15+", label: "Awards" },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main>
        {/* Hero Section - Editorial Split Layout */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img src={aboutHero} alt="Advora workspace" className="w-full h-auto object-cover aspect-[4/3]" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">Crafting Digital</span>
                    <span className="block font-bold text-primary">Excellence</span>
                  </h1>
                  <p className="text-muted-foreground text-xl sm:text-lg md:text-xl leading-relaxed">
                    Welcome to Advora: A space for innovation, collaboration, and digital transformation. Where
                    technology meets creativity to build solutions that shape the future.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        Work With Us
                      </Button>
                    </Link>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://www.instagram.com/advora.labs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/advora-labs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Enhanced with animated counters */}
        <section className="py-4 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/80 px-4 py-6 sm:px-6 sm:py-8 text-center shadow-sm backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base text-muted-foreground tracking-wide uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Tagline Section */}
        <section className="section-divider">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-foreground leading-relaxed mb-6">
                Advora is a space for exploring ideas, finding inspiration, and discovering new ways of building the
                digital world.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                From web development and mobile apps to custom software and cloud solutions, we share our expertise to
                help businesses thrive. Join us as we explore technologies that inspire innovation and meaningful
                growth.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Values Section */}
        <ValuesTabSection />

        {/* Mission & Vision - Premium Split Section */}
        <section className="section-divider py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Eye className="w-4 h-4" />
                    Our Vision
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">To become the most</span>
                    <span className="block font-bold text-primary">trusted digital partner</span>
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We envision a world where every business, regardless of size, has access to world-class digital
                    solutions that drive real growth and lasting impact.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our goal is to deliver software that's not just technically excellent, but strategically aligned
                    with your business goals, helping you compete, grow, and lead in your industry.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-[2rem] overflow-visible">
                  <img
                    src={aboutWorkspace}
                    alt="Advora vision illustration"
                    className="w-full h-auto object-contain aspect-[4/3]"
                  />
                </div>
                {/* Floating capability cards */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-card border border-border rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Innovation First</div>
                      <div className="text-xs text-muted-foreground">Always pushing boundaries</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities Marquee Section */}
        <section className="py-8 sm:py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <p className="text-center text-muted-foreground text-sm sm:text-base">What We Excel At</p>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-10 sm:gap-14 md:gap-20 px-5 sm:px-7">
                  {capabilities.map((item) => (
                    <div
                      key={`${setIndex}-${item.label}`}
                      className="hover:scale-110 transition-all duration-300 flex-shrink-0 flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm sm:text-base font-semibold text-foreground/80 whitespace-nowrap block">
                          {item.label}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.count} Projects</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <HowWeWorkSection />

        {/* Team Section - Enhanced */}
        <section className="section-divider">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  Our Team
                </div>
                <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4">
                  <span className="block font-serif italic font-normal">The Passionate People Behind</span>
                  <span className="block font-bold text-primary">Every Successful Project</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our diverse team of experts brings creativity, technical excellence, and dedication to every challenge
                </p>
              </ScrollReveal>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group p-6 sm:p-8 rounded-[2rem] bg-card border border-border transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">{member.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                      <p className="text-primary text-sm">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Big Quote / Social Proof Section */}
        <section className="section-divider py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-foreground text-background rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-6 left-8 text-8xl font-serif opacity-10 select-none">"</div>
              <div className="absolute bottom-6 right-8 text-8xl font-serif opacity-10 select-none rotate-180">"</div>

              <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic leading-relaxed mb-8 max-w-3xl mx-auto relative z-10">
                We don't just build software, we build partnerships that drive growth, innovation, and lasting digital
                impact.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">R</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Raj</div>
                  <div className="text-sm opacity-70">Founder, Advora Labs</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Teaser */}
        <section className="section-divider">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4">
                <span className="block font-serif italic font-normal">Curious About</span>
                <span className="block font-bold text-primary">What We've Built?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                From startups to established enterprises, explore how we've helped businesses transform their digital
                presence.
              </p>
              <Link to="/portfolio">
                <Button className="rounded-full px-8 py-6 font-medium text-base gap-2">
                  View Our Portfolio <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <CTASection
          title="Ready to work with us?"
          description="Let's discuss your project and see how Advora can help you achieve your goals."
          buttonText="Get in Touch"
        />
      </main>

      <Footer />
    </div>
  );
};

export default About;
