import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Clock, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import aboutHero from "@/assets/about-hero.jpg";
import { motion } from "framer-motion";
import { usePageSEO } from "@/hooks/usePageSEO";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "advora.in@gmail.com",
    sub: "We respond within 24 hours",
    href: "mailto:advora.in@gmail.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 7219860213",
    sub: "Mon–Fri, 9 am – 6 pm IST",
    href: "tel:+917219860213",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Kharadi, Pune",
    sub: "Remote-first team",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    sub: "Usually much faster!",
  },
];

const steps = [
  "We review your message & project requirements",
  "Schedule a free 30-minute consultation call",
  "You receive a detailed proposal & timeline",
];

const inputClass =
  "w-full px-4 py-3.5 rounded-xl border border-border/60 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200";

const labelClass = "block text-sm font-medium text-foreground/80 mb-2";

const Contact = () => {
  usePageSEO({
    title: "Contact Us",
    description: "Get in touch with Advora Digital. Email advora.in@gmail.com or call +91 7219860213 for web development, mobile apps, and software consulting.",
    canonical: "/contact",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formDataObj = new FormData(e.target as HTMLFormElement);
      formDataObj.append("access_key", "9b766b1f-8a26-4ba4-b363-3829a818bc92");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Message sent! We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", phone: "", company: "", budget: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img src={aboutHero} alt="Contact us" className="w-full h-auto object-cover aspect-[4/3]" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">Let's Build</span>
                    <span className="block font-bold text-primary">Something Great</span>
                  </h1>
                  <p className="text-muted-foreground text-xl sm:text-lg md:text-xl leading-relaxed">
                    Ready to start your project? Get in touch and we'll provide a free consultation and quote.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Response within 24h</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>advora.in@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form + Info Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">

            {/* Contact Form — 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl sm:rounded-3xl border border-border/40 bg-card/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 shadow-sm h-full flex flex-col">
                <div className="mb-8">
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Get in Touch</span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    Tell us about your project
                  </h2>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Company</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your company" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className={labelClass}>Estimated Budget</label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="10k-25k">$10,000 – $25,000</option>
                      <option value="25k-50k">$25,000 – $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Project Details *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Tell us about your project, goals, and timeline..." />
                  </div>

                  <div className="mt-auto pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-base font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 disabled:opacity-70 group"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Info — 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Contact Cards */}
              <div className="rounded-2xl sm:rounded-3xl border border-border/40 bg-card/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Contact Info</span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6">Reach out directly</h2>

                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href || "#"}
                      className={`flex items-start gap-4 group rounded-xl p-3 -mx-3 transition-colors ${item.href ? "hover:bg-primary/5" : "cursor-default"}`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wide">{item.label}</p>
                        <p className="font-semibold text-foreground mt-0.5">{item.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* What happens next */}
              <div className="rounded-2xl sm:rounded-3xl bg-primary/5 dark:bg-primary/10 border border-primary/10 p-6 sm:p-8 shadow-sm flex-1 flex flex-col">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Process</span>
                <h3 className="text-lg font-bold tracking-tight mb-5">What happens next?</h3>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-5 border-t border-primary/10">
                  <a
                    href="mailto:advora.in@gmail.com"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Or email us directly
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
