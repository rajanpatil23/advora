import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, Twitter, Linkedin } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getPostById, blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPostById(id) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12">
        {/* Breadcrumb */}
        <div className="mb-8 animate-slide-down">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12 space-y-6 animate-slide-up">
          <div className="flex items-center gap-3">
            <span className="px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="font-bold text-accent">{post.author.charAt(0)}</span>
              </div>
              <div>
                <div className="font-medium text-foreground">{post.author}</div>
                <div className="text-sm">Advora Team</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-[2rem] overflow-hidden animate-slide-up stagger-1">
          {post.image ? (
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          ) : (
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 h-64 md:h-96 flex items-center justify-center">
              <span className="text-accent font-medium">Featured Image</span>
            </div>
          )}
        </div>

        {/* Article Content */}
        <article 
          className="prose prose-lg max-w-none mb-16 animate-slide-up stagger-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            color: 'hsl(var(--muted-foreground))'
          }}
        />

        {/* Share Section */}
        <div className="mb-16 p-6 rounded-[1.5rem] bg-card border border-border animate-slide-up stagger-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              <span className="font-medium">Share this article</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-3 rounded-full bg-muted hover:bg-accent/10 transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="p-3 rounded-full bg-muted hover:bg-accent/10 transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mb-16 p-8 rounded-[2rem] bg-card border border-border animate-slide-up stagger-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <span className="text-3xl font-bold text-accent">{post.author.charAt(0)}</span>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
              <p className="text-muted-foreground mb-4">
                {post.author} is a senior developer at Advora with expertise in building scalable web applications. 
                With years of experience in the industry, they share insights and best practices through our blog.
              </p>
              <Link to="/about" className="text-accent hover:underline font-medium">
                View all posts →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className={`group rounded-[1.5rem] bg-card border border-border hover:border-accent/50 overflow-hidden transition-all animate-slide-up stagger-${index + 1}`}
                >
                  {relatedPost.image && (
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <span className="text-xs font-medium text-accent mb-2 block">{relatedPost.category}</span>
                    <h3 className="font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">{relatedPost.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <CTASection
          title="Need help with your project?"
          description="Our team of experts is ready to help you build something amazing."
          buttonText="Get in Touch"
          compact
        />
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
