import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceWhyUsSection from "@/components/services/ServiceWhyUsSection";
import ServiceReviewsSection from "@/components/services/ServiceReviewsSection";
import ServiceProcessSection from "@/components/services/ServiceProcessSection";
import ServiceToolStackSection from "@/components/services/ServiceToolStackSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Users, Layers, MousePointer, Eye } from "lucide-react";
import serviceDesign from "@/assets/service-design.jpg";
import { usePageSEO } from "@/hooks/usePageSEO";
import { serviceDetails } from "@/data/serviceDetails";

const data = serviceDetails["ui-ux-design"];

const UIUXDesign = () => {
  usePageSEO({
    title: "UI/UX Design Services",
    description: "User-centered UI/UX design by Advora Digital — research, wireframes, prototypes, and design systems for web and mobile products.",
    canonical: "/services/ui-ux-design",
  });

  const features = [
    { icon: Users, title: "User Research", description: "Deep understanding of your users' needs and behaviors." },
    { icon: Layers, title: "Wireframing", description: "Clear blueprints for intuitive user journeys." },
    { icon: MousePointer, title: "Prototyping", description: "Interactive prototypes for testing and validation." },
    { icon: Eye, title: "Visual Design", description: "Stunning interfaces that reflect your brand." },
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
                  <img src={serviceDesign} alt="UI/UX Design" className="w-full h-auto object-cover aspect-[4/3]" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary">
                    <Palette className="w-4 h-4" />
                    <span className="text-sm font-medium">UI/UX Design</span>
                  </div>
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">User-Centered</span>
                    <span className="block font-bold text-primary">Design Excellence</span>
                  </h1>
                  <p className="text-muted-foreground text-xl sm:text-lg md:text-xl leading-relaxed">
                    Beautiful, intuitive interfaces backed by user research and design thinking to maximize engagement and conversions.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
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
        <ServiceReviewsSection reviews={data.reviews} serviceName="UI/UX design" />
        <ServiceProcessSection {...data.process} />
        <ServiceToolStackSection {...data.toolStack} />

        <CTASection title="Ready to Elevate Your Design?" description="Let's create an exceptional user experience together." buttonText="Get Started" />
      </main>
      <Footer />
    </div>
  );
};

export default UIUXDesign;
