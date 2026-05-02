import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceWhyUsSection from "@/components/services/ServiceWhyUsSection";
import ServiceReviewsSection from "@/components/services/ServiceReviewsSection";
import ServiceProcessSection from "@/components/services/ServiceProcessSection";
import ServiceToolStackSection from "@/components/services/ServiceToolStackSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, PenTool, Users, Award, Palette, MessageSquare } from "lucide-react";
import serviceDesign from "@/assets/service-design.jpg";
import { usePageSEO } from "@/hooks/usePageSEO";
import { serviceDetails } from "@/data/serviceDetails";

const data = serviceDetails["branding"];

const Branding = () => {
  usePageSEO({
    title: "Branding & Identity Design",
    description: "Professional branding services by Advora Digital — logo design, brand identity systems, style guides, and visual storytelling.",
    canonical: "/services/branding",
  });

  const features = [
    { icon: PenTool, title: "Brand Identity", description: "Logo, color systems, and typography that define your brand." },
    { icon: MessageSquare, title: "Messaging & Voice", description: "Clear value propositions and brand messaging." },
    { icon: Users, title: "Audience Positioning", description: "Strategic positioning for your target market." },
    { icon: Award, title: "Brand Guidelines", description: "Comprehensive guidelines for consistent brand usage." },
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
                  <img src={serviceDesign} alt="Branding & Product Positioning" className="w-full h-auto object-cover aspect-[4/3]" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary">
                    <PenTool className="w-4 h-4" />
                    <span className="text-sm font-medium">Branding</span>
                  </div>
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">Product</span>
                    <span className="block font-bold text-primary">Positioning</span>
                  </h1>
                  <p className="text-muted-foreground text-xl sm:text-lg md:text-xl leading-relaxed">
                    Build a clear, credible, and differentiated brand presence with strategic positioning, compelling messaging, and distinctive visual identity.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        Build Your Brand <ArrowRight className="ml-2 h-4 w-4" />
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
        <ServiceReviewsSection reviews={data.reviews} serviceName="branding" />
        <ServiceProcessSection {...data.process} />
        <ServiceToolStackSection {...data.toolStack} />

        <CTASection title="Ready to Define Your Brand?" description="Let's create a memorable brand identity together." buttonText="Get Started" />
      </main>
      <Footer />
    </div>
  );
};

export default Branding;
