import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PremiumFAQ from "@/components/PremiumFAQ";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageSEO";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Lock,
  Plug,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import productHeroIllustration from "@/assets/product-hero-illustration.webp";
import { productTools } from "@/data/productTools";

const productPreviews = productTools.map((tool) => ({
  title: tool.name,
  image: tool.screenshot,
  alt: tool.screenshotAlt,
  route: tool.route,
  eyebrow: tool.eyebrow,
}));

const automationFlow = [
  {
    step: "01",
    title: "Manual Work",
    icon: Users,
    description: "Repetitive tasks slow your team down.",
  },
  {
    step: "02",
    title: "Advora Automation",
    icon: Workflow,
    description: "We automate, integrate, and streamline.",
  },
  {
    step: "03",
    title: "Lean Team",
    icon: Clock,
    description: "Fewer manual tasks. More focus.",
  },
  {
    step: "04",
    title: "Business Growth",
    icon: TrendingUp,
    description: "Better operations. Stronger results.",
  },
];

const automationOutcomes = [
  {
    title: "Less hiring pressure",
    description: "Do more with your existing team.",
  },
  {
    title: "More output",
    description: "Automations handle the busywork.",
  },
  {
    title: "Faster cycles",
    description: "Ship faster. Serve better.",
  },
];

const productFaqCategories = [
  { id: "general", label: "General", icon: Workflow },
  { id: "customization", label: "Customise", icon: Users },
  { id: "integrations", label: "Integrations", icon: Plug },
  { id: "support", label: "Support", icon: Shield },
];

const productFaqs = {
  general: [
    {
      q: "Are these ready-made SaaS products or custom software?",
      a: "They are Advora-built product foundations. You get a faster starting point than custom software, with room to customise workflows, branding, integrations, and reports.",
    },
    {
      q: "Are these suitable for early-stage startups?",
      a: "Yes. We can launch a lean version first, then scale modules as your team, users, and operations grow.",
    },
    {
      q: "What if I need a tool that is not listed here?",
      a: "We can adapt the closest tool base or build a new productized tool if your workflow needs a different system.",
    },
  ],
  customization: [
    {
      q: "Can I customise a tool for my specific business needs?",
      a: "Yes. Each product can be tailored around your processes, user roles, data structure, automations, and customer-facing experience.",
    },
  ],
  integrations: [
    {
      q: "Can these tools integrate with what I already use?",
      a: "Yes. We commonly integrate CRMs, payment gateways, WhatsApp, email platforms, analytics tools, calendars, cloud storage, and custom APIs.",
    },
  ],
  support: [
    {
      q: "Do you offer dedicated support after deployment?",
      a: "Yes. We can support onboarding, fixes, monitoring, feature improvements, integrations, and new releases after launch.",
    },
  ],
};

function HeroProductShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.1 }}
      className="rounded-xl sm:rounded-2xl overflow-hidden bg-white"
    >
      <div className="aspect-[4/3]">
        <img
          src={productHeroIllustration}
          alt="Advora product automation dashboard illustration"
          className="h-full w-full object-contain"
        />
      </div>
    </motion.div>
  );
}

export default function Products() {
  usePageSEO({
    title: "Products",
    description:
      "Explore Advora Digital's four productized tools for sales, bookings, client portals, and commerce operations.",
    canonical: "/products",
  });

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main>
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <HeroProductShowcase />

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-medium border border-primary/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    Productized Tools
                  </span>
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">
                      Productized Tools
                    </span>
                    <span className="block font-bold text-primary">
                      Built to Sell.
                    </span>
                  </h1>

                  <p className="text-muted-foreground text-xl sm:text-lg md:text-xl leading-relaxed">
                    Premium software tools created from Advora&apos;s agency
                    workflows, packaged for businesses that need faster launch,
                    smarter operations, and room to customise.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <a href="#products" className="w-full sm:w-auto">
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        Explore Tools
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                      >
                        Talk to Us
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 rounded-[2rem] border border-border bg-card p-5 shadow-sm md:grid-cols-4 md:p-6">
              {[
                { icon: Clock, label: "Launch faster than custom from zero" },
                { icon: Shield, label: "Own your workflows and data" },
                { icon: Plug, label: "Integrate with your current stack" },
                { icon: Lock, label: "Brand, roles, and access control" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold leading-6">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="products"
          className="section-divider max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-20"
        >
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Productized Tools
            </span>
            <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4">
              <span className="block font-serif italic font-normal">
                Four Tool Previews
              </span>
              <span className="block font-bold text-primary">
                Built for Real Operations
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A quick look at the four products currently being built and
              packaged by Advora.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {productPreviews.map((preview) => (
              <motion.div
                key={preview.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45 }}
              >
                <Link
                  to={preview.route}
                  aria-label={`Open ${preview.title} details`}
                  className="group relative isolate block overflow-hidden rounded-[1.75rem] border border-[#E6EAF2] bg-gradient-to-b from-white to-[#FAFBFD] p-3 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.22)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_30px_70px_-25px_rgba(15,23,42,0.32)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 dark:border-border dark:bg-card dark:from-card dark:to-card"
                >
                  {/* accent corner glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* image frame */}
                  <div className="relative overflow-hidden rounded-[1.35rem] bg-background">
                    <img
                      src={preview.image}
                      alt={preview.alt}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full object-cover"
                    />
                  </div>

                  {/* meta footer */}
                  <div className="relative z-10 flex items-center justify-between gap-4 px-3 pt-5 pb-2 sm:px-4">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                        {preview.eyebrow}
                      </p>
                      <h3 className="mt-1.5 font-serif text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-[1.4rem]">
                        {preview.title}
                      </h3>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E1E6EF] bg-white text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_10px_24px_-10px_rgba(37,99,235,0.6)] dark:border-border dark:bg-card">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-divider relative overflow-hidden bg-[#02070d] py-20 pt-24 text-background">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(14,75,139,0.22), transparent 58%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 backdrop-blur px-4 py-1.5 text-sm font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                How It Works
              </span>
              <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4">
                <span className="block font-serif italic font-normal">
                  Automation That Cuts Manual Load
                </span>
                <span className="block font-bold text-primary">
                  and Fuels Growth
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-background/70">
                Less manual work. More output. Sustainable growth.
              </p>
            </div>

            <div className="mt-16 lg:mt-20">
              <div className="hidden grid-cols-4 gap-9 lg:grid">
                {automationFlow.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group relative"
                  >
                    <div className="relative flex min-h-24 items-center gap-6">
                      <span
                        className={`relative z-10 text-3xl font-bold transition-colors duration-300 ${
                          index === 1
                            ? "text-primary"
                            : "text-background/35 group-hover:text-background/60"
                        }`}
                      >
                        {step.step}
                      </span>
                      <div
                        className={`relative z-10 flex shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          index === 1
                            ? "h-24 w-24 border-primary bg-primary/10 text-background ring-8 ring-primary/10"
                            : "h-20 w-20 border-background/30 text-background/85 group-hover:border-primary/65 group-hover:text-background"
                        }`}
                      >
                        <step.icon className="h-7 w-7" strokeWidth={1.8} />
                      </div>

                      {index < automationFlow.length - 1 ? (
                        <div className="pointer-events-none absolute left-[10.25rem] right-[-1rem] top-1/2 hidden -translate-y-1/2 items-center lg:flex">
                          <span
                            className={`h-px flex-1 ${
                              index === 1 ? "bg-primary/70" : "bg-background/35"
                            }`}
                          />
                          <span
                            className={`mx-4 h-2.5 w-2.5 rounded-full border-2 ${
                              index === 1
                                ? "border-primary bg-[#02070d]"
                                : "border-background/70 bg-[#02070d]"
                            }`}
                          />
                          <span
                            className={`h-px flex-1 ${
                              index === 1 ? "bg-primary/70" : "bg-background/35"
                            }`}
                          />
                          <ArrowRight
                            className={`ml-2 h-5 w-5 ${
                              index === 1 ? "text-primary" : "text-background/55"
                            }`}
                          />
                        </div>
                      ) : null}
                    </div>

                    <span className="mt-7 block h-px w-5 bg-primary" />
                    <h3
                      className={`mt-5 text-xl font-bold transition-colors duration-300 ${
                        index === 1
                          ? "text-primary"
                          : "text-background group-hover:text-primary"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-[15rem] text-base leading-8 text-background/68">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-0 lg:hidden">
                {automationFlow.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="group relative flex gap-4 pb-9 last:pb-0"
                  >
                    {index < automationFlow.length - 1 ? (
                      <span className="absolute left-6 top-14 h-[calc(100%-3rem)] w-px bg-background/18" />
                    ) : null}
                    <div
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        index === 1
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-background/25 text-background/80"
                      }`}
                    >
                      <step.icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0 border-b border-background/10 pb-7 last:border-b-0">
                      <div className="mb-2 flex items-center gap-3">
                        <span
                          className={`text-lg font-bold ${
                            index === 1 ? "text-primary" : "text-background/40"
                          }`}
                        >
                          {step.step}
                        </span>
                        <span className="h-px w-4 bg-background/30" />
                      </div>
                      <h3
                        className={`text-xl font-bold ${
                          index === 1 ? "text-primary" : "text-background"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-background/62">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-background/10 bg-background/[0.015] px-5 py-7 lg:mt-16 lg:px-10">
                <div className="grid gap-6 md:grid-cols-3 md:gap-0">
                  {automationOutcomes.map((outcome, index) => (
                    <div
                      key={outcome.title}
                      className={`flex gap-5 ${
                        index > 0
                          ? "md:border-l md:border-background/15 md:pl-10"
                          : ""
                      } ${index < automationOutcomes.length - 1 ? "md:pr-10" : ""}`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                        <CheckCircle2 className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <span>
                        <span className="block text-base font-semibold leading-6 text-background">
                          {outcome.title}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-background/62">
                          {outcome.description}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <PremiumFAQ
          categories={productFaqCategories}
          faqs={productFaqs}
          description="Everything you need to know about choosing, customising, and launching an Advora productized tool."
        />

        <CTASection
          title="Find the right productized tool for your business"
          description="Tell us what you want to sell, automate, or launch. We'll recommend the right Advora tool base and customise it fast."
          buttonText="Book a Free Discovery Call"
        />
      </main>

      <Footer />
    </div>
  );
}
