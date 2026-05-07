import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WorldMapSection from "@/components/WorldMapSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, MessageCircle, Calendar, Github, Slack, Twitter, ArrowRight, Heart, Star, Code } from "lucide-react";
import communityHero from "@/assets/community-hero.jpg";
import { usePageSEO } from "@/hooks/usePageSEO";

const Community = () => {
  usePageSEO({
    title: "Community",
    description: "Join the Advora Digital developer community. Connect with 500+ developers on Slack, GitHub, and social channels.",
    canonical: "/community",
  });
  const communityLinks = [
    {
      icon: Github,
      title: "GitHub",
      description: "Check out our open-source projects and contributions",
      link: "#",
      color: "bg-gray-900",
    },
    {
      icon: Slack,
      title: "Slack Community",
      description: "Join 500+ developers in our Slack workspace",
      link: "#",
      color: "bg-primary",
    },
    {
      icon: Twitter,
      title: "Twitter",
      description: "Follow us for updates and tech insights",
      link: "#",
      color: "bg-primary/80",
    },
  ];

  const stats = [
    { value: "500+", label: "Community Members" },
    { value: "50+", label: "Open Source Projects" },
    { value: "100+", label: "Events Hosted" },
    { value: "1000+", label: "Discord Messages/Week" },
  ];

  const upcomingEvents = [
    {
      title: "React Best Practices Workshop",
      date: "Feb 15, 2026",
      type: "Online Workshop",
    },
    {
      title: "Cloud Architecture Meetup",
      date: "Feb 22, 2026",
      type: "Virtual Meetup",
    },
    {
      title: "Open Source Contribution Day",
      date: "Mar 1, 2026",
      type: "Community Event",
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section - Editorial Split Layout */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Card */}
            <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={communityHero}
                    alt="Advora Community"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">Join Our</span>
                    <span className="block font-bold text-primary">Community</span>
                  </h1>

                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    Connect with developers, designers, and tech enthusiasts. Share knowledge, collaborate on projects, and grow together.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-medium w-full sm:w-auto">
                      Join Slack Community
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Platforms */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Connect With Us</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {communityLinks.map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  className="group rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-all hover:scale-[1.02]"
                >
                  <div className={`w-12 h-12 rounded-xl ${platform.color} flex items-center justify-center mb-4`}>
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{platform.title}</h3>
                  <p className="text-muted-foreground text-sm">{platform.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-2 text-sm text-primary mb-3">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Map */}
        <WorldMapSection />

        <CTASection 
          title="Ready to Get Involved?"
          description="Join our community and start collaborating with developers worldwide."
          buttonText="Join Now"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
