import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowRight, Calendar, Clock, User, Mail, Sparkles, Code, Smartphone, Cloud, Palette, Shield, Zap, Database, Globe, Layers, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts, getFeaturedPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";
import blogHero from "@/assets/blog-future-web.jpg";

const topics = [
  { icon: Code, title: "React", count: 12 },
  { icon: Terminal, title: "TypeScript", count: 8 },
  { icon: Database, title: "Node.js", count: 10 },
  { icon: Smartphone, title: "Mobile Apps", count: 6 },
  { icon: Cloud, title: "DevOps", count: 5 },
  { icon: Layers, title: "API Design", count: 7 },
  { icon: Globe, title: "Cloud", count: 9 },
  { icon: Palette, title: "UI/UX", count: 4 },
  { icon: Shield, title: "Security", count: 3 },
  { icon: Zap, title: "Performance", count: 6 },
];

function TopicsCarousel() {
  const allTopics = [...topics, ...topics, ...topics, ...topics];

  return (
    <div className="relative overflow-hidden group">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '5s' }}>
        {allTopics.map((topic, i) => (
          <div
            key={`${topic.title}-${i}`}
            className="flex-shrink-0 w-56 p-6 rounded-[2rem] bg-primary/10 text-center hover:bg-primary/15 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-3 hover:bg-primary/30 transition-colors">
              <topic.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-1">{topic.title}</h3>
            <p className="text-sm text-muted-foreground">{topic.count} articles</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const Blog = () => {
  const featuredPosts = getFeaturedPosts();
  const regularPosts = blogPosts.filter(post => !post.featured);

  const categories = ["All", "Web Development", "Technology Trends", "Case Study", "Mobile Development", "Best Practices"];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section - Editorial Split Layout */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Card */}
            <motion.div 
              className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={blogHero}
                    alt="Featured blog"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Featured Article</span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
                    Insights &
                    <span className="block text-primary">Expert Knowledge</span>
                  </h1>

                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    Stay ahead with tutorials, case studies, and industry insights from our team of developers and designers.
                  </p>

                  {/* Newsletter Inline */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1 max-w-sm">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-4 rounded-full bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-4 font-medium">
                      Subscribe
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">Join 2,000+ developers. No spam, unsubscribe anytime.</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Category Pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-5 py-2.5 rounded-[1.25rem] bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium"
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">

        {/* Featured Posts */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Featured Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`group rounded-[1.75rem] sm:rounded-[2rem] bg-card border border-border hover:border-accent/50 overflow-hidden transition-all duration-300 hover:scale-[1.02] animate-slide-up stagger-${index + 1}`}
              >
                <div className="h-36 sm:h-48 overflow-hidden">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  <span className="text-xs font-medium text-primary mb-2 block">{post.category}</span>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 sm:mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span className="truncate">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regularPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`group flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-6 rounded-[1.25rem] sm:rounded-[1.5rem] bg-card border border-border hover:border-accent/50 transition-all duration-300 animate-slide-up stagger-${(index % 4) + 1}`}
              >
                <div className="w-full sm:w-32 h-32 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-primary text-xs font-medium text-center px-2">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-primary mb-1 block">{post.category}</span>
                  <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-20 rounded-[2rem] sm:rounded-[2.5rem] bg-card p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground">
                Get the latest articles, tutorials, and industry insights delivered straight to your inbox. No spam, unsubscribe anytime.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-4">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        {/* Topics Section - Marquee Carousel */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore by Topic</h2>
          <TopicsCarousel />
        </section>

        <CTASection
          title="Have a project in mind?"
          description="Let's turn your ideas into reality. Our team is ready to help."
          buttonText="Get in Touch"
        />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
