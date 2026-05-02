import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceWhyUsSection from "@/components/services/ServiceWhyUsSection";
import ServiceReviewsSection from "@/components/services/ServiceReviewsSection";
import ServiceProcessSection from "@/components/services/ServiceProcessSection";
import ServiceToolStackSection from "@/components/services/ServiceToolStackSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Wallet, Mail, Gauge, Users, DollarSign } from "lucide-react";
import projectFinanceflow from "@/assets/project-financeflow.jpg";
import { usePageSEO } from "@/hooks/usePageSEO";
import { serviceDetails } from "@/data/serviceDetails";

const data = serviceDetails["sales-revenue"];

const SalesRevenue = () => {
  usePageSEO({
    title: "Sales & Revenue Optimization",
    description: "Boost sales and revenue with Advora Digital — CRM setup, funnel optimization, payment integration, and revenue automation.",
    canonical: "/services/sales-revenue",
  });

  const features = [
    { icon: Wallet, title: "Revenue Automation", description: "Automated systems that convert leads into revenue." },
    { icon: Mail, title: "Outbound Systems", description: "Email, WhatsApp & outbound campaign sequences." },
    { icon: Gauge, title: "Pipeline Optimization", description: "Streamlined sales pipeline for efficiency." },
    { icon: Users, title: "CRM Integration", description: "CRM selection, setup & automation." },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main>
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img src={projectFinanceflow} alt="Sales & Revenue Systems" className="w-full h-auto object-cover aspect-[4/3]" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-medium">Sales & Revenue</span>
                  </div>
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">Revenue</span>
                    <span className="block font-bold text-primary">Systems</span>
                  </h1>
                  <p className="text-muted-foreground text-xl sm:text-lg md:text-xl leading-relaxed">
                    Build scalable, automated systems that convert leads into revenue with optimized sales pipelines and intelligent automation.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        Boost Revenue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/portfolio" className="w-full sm:w-auto">
                      <Button variant="outline" className="rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">View Our Work</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">What We Deliver</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceWhyUsSection {...data.whyUs} />
        <ServiceReviewsSection reviews={data.reviews} serviceName="sales & revenue" />
        <ServiceProcessSection {...data.process} />
        <ServiceToolStackSection {...data.toolStack} />

        <CTASection title="Ready to Scale Your Revenue?" description="Let's build your revenue engine together." buttonText="Get Started" />
      </main>
      <Footer />
    </div>
  );
};

export default SalesRevenue;
