import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Code2,
  DollarSign,
  Headphones,
  HelpCircle,
  Settings2,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type FAQCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
};

type FAQEntry = {
  q: string;
  a: string;
};

type PremiumFAQProps = {
  categories?: FAQCategory[];
  faqs?: Record<string, FAQEntry[]>;
  eyebrow?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
};

const defaultCategories: FAQCategory[] = [
  { id: "general", label: "General", icon: HelpCircle },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "process", label: "Process", icon: Settings2 },
  { id: "technical", label: "Technical", icon: Code2 },
  { id: "support", label: "Support", icon: Headphones },
];

const defaultFaqs: Record<string, FAQEntry[]> = {
  general: [
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      q: "Do you work with clients remotely?",
      a: "Yes. We're a remote-first company and have successfully delivered projects for clients worldwide. We use modern collaboration tools to ensure smooth communication regardless of location.",
    },
    {
      q: "What industries do you specialize in?",
      a: "We work across diverse industries including healthcare, fintech, e-commerce, education, and logistics. Our cross-industry experience lets us bring innovative solutions from one domain to another.",
    },
  ],
  pricing: [
    {
      q: "What is your payment structure?",
      a: "We typically work with a milestone-based payment structure. A percentage is due upfront, with remaining payments tied to project milestones. We're flexible and can discuss arrangements that work for your budget.",
    },
    {
      q: "Do you offer fixed-price or hourly billing?",
      a: "We offer both models. Fixed-price works well for clearly defined projects, while time-and-materials is ideal for evolving scopes. We'll recommend the best fit during our discovery phase.",
    },
    {
      q: "Are there any hidden costs?",
      a: "Absolutely not. We provide transparent, detailed proposals upfront. Any additional scope is discussed and agreed upon before work begins, so there are never surprises on your invoice.",
    },
  ],
  process: [
    {
      q: "What does your development process look like?",
      a: "We follow an agile methodology with 2-week sprints. This includes discovery, design, development, testing, and deployment phases - with regular check-ins and demos throughout.",
    },
    {
      q: "How do you handle project communication?",
      a: "You'll have a dedicated project manager and access to our collaboration tools. We provide weekly progress reports, sprint demos, and are available for ad-hoc calls whenever needed.",
    },
    {
      q: "Can you work with our existing team?",
      a: "Absolutely. We offer team augmentation services where our developers integrate with your existing team. We can also provide technical consulting to guide your internal development efforts.",
    },
  ],
  technical: [
    {
      q: "What technologies do you use?",
      a: "We use modern, battle-tested stacks including React, TypeScript, Node.js, Python, and cloud platforms like AWS and GCP. We choose the best tools for each project's specific requirements.",
    },
    {
      q: "How do you ensure code quality?",
      a: "We enforce strict code reviews, automated testing, CI/CD pipelines, and follow industry best practices. Every line of code meets our quality standards before deployment.",
    },
    {
      q: "Do you follow security best practices?",
      a: "Security is baked into every stage of our process - from secure architecture design to OWASP compliance, encryption at rest and in transit, and regular security audits.",
    },
  ],
  support: [
    {
      q: "What happens after the project is delivered?",
      a: "We offer various maintenance and support packages to keep your application running smoothly. This includes bug fixes, security updates, and feature enhancements as needed.",
    },
    {
      q: "Do you offer SLAs?",
      a: "Yes, we provide tiered SLA packages with guaranteed response times. Our premium tier includes 24/7 monitoring, sub-1-hour critical response, and dedicated support engineers.",
    },
    {
      q: "Can we scale up support later?",
      a: "Of course. Our support packages are flexible and can grow with your needs. Many clients start with basic maintenance and upgrade as their user base and feature set expands.",
    },
  ],
};

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-200/80">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-6 text-left sm:py-7"
      >
        <div className="max-w-3xl">
          <h3
            className={cn(
              "text-lg font-semibold leading-8 tracking-tight transition-colors sm:text-xl",
              isOpen ? "text-primary" : "text-[#0A1220]",
            )}
          >
            {q}
          </h3>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
          className={cn(
            "mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors",
            isOpen
              ? "border-primary/25 bg-primary/10 text-primary"
              : "border-slate-200 bg-white text-slate-500",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-14 sm:pb-7">
              <div className="mb-5 h-px bg-[linear-gradient(90deg,rgba(37,99,235,0.18),rgba(226,232,240,0.78),transparent)]" />
              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {a}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function PremiumFAQ({
  categories = defaultCategories,
  faqs = defaultFaqs,
  eyebrow = "FAQ",
  title = "Frequently Asked",
  highlightedTitle = "Questions",
  description = "Everything you need to know about working with us.",
}: PremiumFAQProps = {}) {
  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.id ?? "general",
  );
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeFaqs = faqs[activeCategory] || [];

  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_58%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <HelpCircle className="h-4 w-4" />
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4">
            <span className="block font-serif italic font-normal">{title}</span>
            <span className="block font-bold text-primary">{highlightedTitle}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-12"
        >
          <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="mx-auto flex w-max min-w-full justify-start gap-3 sm:justify-center">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIndex(0);
                    }}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-300",
                      isActive
                        ? "border-primary bg-primary text-white shadow-[0_16px_34px_-20px_rgba(37,99,235,0.55)]"
                        : "border-slate-200 bg-white text-slate-600 hover:border-primary/20 hover:text-[#0A1220]",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.12 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="border-t border-slate-200/80"
            >
              {activeFaqs.map((faq, index) => (
                <FAQItem
                  key={`${activeCategory}-${faq.q}`}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
