import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchPostBySlug, fetchComments } from "../api/wp";
import { UiPost } from "../api/normalize";
import { useBlogData } from "../state/BlogDataProvider";
import CommentsList from "./components/CommentsList";
import CommentForm from "./components/CommentForm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link2, Check, Download, X } from "lucide-react";
import { FaWhatsapp, FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

function formatDate(d: string | Date) {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function DownloadGuideCard({ postTitle }: { postTitle: string }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("access_key", "9b766b1f-8a26-4ba4-b363-3829a818bc92");
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("subject", `Guide Download Request: ${postTitle}`);
      formData.append("message", `${name.trim()} (${email.trim()}) requested the guide from blog post "${postTitle}".`);
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      if (res.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
      }
    } catch (err) {
      console.error("Guide form error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm";

  return (
    <>
      <div className="bg-card border border-border rounded-[2rem] p-6 shadow-sm">
        <h3 className="text-lg font-bold text-foreground mb-3">Ready to learn more?</h3>
        <p className="text-sm text-muted-foreground mb-4">Download our quick guide to get started.</p>
        <button
          onClick={() => { setOpen(true); setSubmitted(false); }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
        >
          <Download className="w-4 h-4" /> Download Guide
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4" onClick={() => setOpen(false)}>
          <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-sm shadow-xl relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <Check className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">Thank you!</h3>
                <p className="text-sm text-muted-foreground">The guide will be sent to your email shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-foreground mb-1">Get Your Free Guide</h3>
                <p className="text-sm text-muted-foreground mb-5">Enter your details and we'll send it right over.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input className={inputClass} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required maxLength={100} />
                  <input className={inputClass} placeholder="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={255} />
                  <button type="submit" disabled={submitting} className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-md disabled:opacity-50 text-sm">
                    {submitting ? "Sending..." : "Send me the guide"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function SidebarCTAForm({ postTitle }: { postTitle: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("access_key", "9b766b1f-8a26-4ba4-b363-3829a818bc92");
      formData.append("name", name.trim());
      formData.append("phone", phone.trim());
      formData.append("subject", `Blog CTA Lead: ${postTitle}`);
      formData.append("message", `New lead from blog post "${postTitle}". Name: ${name.trim()}, Phone: ${phone.trim()}`);
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      if (res.ok) {
        setSubmitted(true);
        setName("");
        setPhone("");
      }
    } catch (err) {
      console.error("CTA form error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div className="bg-card border border-border rounded-[2rem] p-6 shadow-sm">
      <h3 className="text-lg font-bold text-foreground mb-3">Get Free Consultation</h3>
      <p className="text-sm text-muted-foreground mb-4">Talk to an expert to plan your next move.</p>
      {submitted ? (
        <div className="text-center py-4">
          <Check className="w-8 h-8 text-primary mx-auto mb-2" />
          <p className="text-sm font-medium text-foreground">Thank you! We'll reach out soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input className={inputClass} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required maxLength={100} />
          <input className={inputClass} placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required maxLength={20} />
          <button type="submit" disabled={submitting} className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-md disabled:opacity-50">
            {submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      )}
      <p className="text-xs text-muted-foreground/60 mt-3">
        By submitting, you accept our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
      </p>
    </div>
  );
}

function ShareBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;

  const share = (platform: string) => {
    const encoded = encodeURIComponent(url);
    const text = encodeURIComponent(title);
    const urls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${text}%20${encoded}`,
      twitter: `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    };
    window.open(urls[platform], "_blank", "noopener,noreferrer,width=600,height=500");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btnClass = "p-2 rounded-xl bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors";

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium text-muted-foreground mr-1">Share</span>
      <button onClick={() => share("whatsapp")} className={btnClass} aria-label="Share on WhatsApp"><FaWhatsapp className="w-4 h-4" /></button>
      <button onClick={() => share("twitter")} className={btnClass} aria-label="Share on X"><FaXTwitter className="w-4 h-4" /></button>
      <button onClick={() => share("linkedin")} className={btnClass} aria-label="Share on LinkedIn"><FaLinkedinIn className="w-4 h-4" /></button>
      <button onClick={() => share("facebook")} className={btnClass} aria-label="Share on Facebook"><FaFacebookF className="w-4 h-4" /></button>
      <button onClick={copyLink} className={btnClass} aria-label="Copy link">
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
}

export default function PostDetail() {
  const { slug = "" } = useParams();
  const location = useLocation();
  const { cats, loading: catsLoading } = useBlogData();
  const [post, setPost] = useState<UiPost | null>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const statePost = location.state?.post as UiPost | undefined;

  useEffect(() => {
    if (catsLoading || !slug) return;

    if (statePost && statePost.slug === slug) {
      setPost(statePost);
      setLoading(false);
      (async () => {
        try {
          const postComments = await fetchComments(statePost.wpId);
          setComments(postComments);
        } catch (err) {
          console.error("Failed to load comments:", err);
        }
      })();
      return;
    }

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const normalized = await fetchPostBySlug(slug, cats);
        if (!normalized) {
          setError("Post not found");
          setPost(null);
          return;
        }
        setPost(normalized);
        const postComments = await fetchComments(normalized.wpId);
        setComments(postComments);
      } catch (err: any) {
        setError(err.message || "Failed to load post");
        setPost(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug, cats, catsLoading, statePost]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };

  if (loading || catsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <main className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-3xl font-bold text-foreground mb-4">{error || "Post not found"}</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </main>
    );
  }

  const cat = cats.find((c) => c.slug === post.category);
  const catLabel = cat?.name ?? post.category;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Card */}
            <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-primary/10 dark:bg-card p-4 sm:p-8 md:p-12 relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, hsl(var(--foreground) / 0.03) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground) / 0.03) 1px, transparent 1px)`,
                  backgroundSize: "44px 44px",
                  maskImage: `radial-gradient(ellipse 80% 60% at 50% 45%, black 0%, rgba(0,0,0,0.6) 30%, transparent 70%)`,
                  WebkitMaskImage: `radial-gradient(ellipse 80% 60% at 50% 45%, black 0%, rgba(0,0,0,0.6) 30%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  <motion.nav variants={itemVariants} className="text-sm text-muted-foreground mb-6">
                    <Link to="/blog" className="text-primary hover:underline">Blog</Link>
                    {" › "}
                    <Link to={`/blog/${post.category}`} className="text-primary hover:underline">{catLabel}</Link>
                  </motion.nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                  {/* Left Content */}
                  <motion.div variants={itemVariants} className="order-2 lg:order-1 flex flex-col gap-6">
                    {/* Row 1: Category Badge + Date */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-amber-100 text-amber-800 font-semibold text-xs uppercase tracking-wide">
                        {catLabel}
                      </span>
                      <time className="text-muted-foreground text-sm" dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                    </div>

                    {/* Row 2: Title */}
                    <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-foreground leading-[1.15] tracking-tight">
                      {post.title}
                    </h1>

                    {/* Row 3: Excerpt */}
                    {post.excerpt && (
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Row 4: Read Time */}
                    {post.readTime && (
                      <p className="text-sm font-medium text-foreground/70">{post.readTime}</p>
                    )}

                    {/* Row 5: Author Info */}
                    <div className="flex items-center gap-3 pt-2">
                      {post.authorImage ? (
                        <img src={post.authorImage} alt={post.authorName || "Author"} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center font-semibold text-sm">
                          {(post.authorName || "C").charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-foreground">{post.authorName || "Connecttly"}</p>
                          {post.authorLinkedin && (
                            <a
                              href={post.authorLinkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0A66C2] hover:opacity-80 transition-opacity"
                              aria-label={`${post.authorName || "Author"}'s LinkedIn profile`}
                            >
                              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                              </svg>
                            </a>
                          )}
                        </div>
                        {post.authorDesignation && <p className="text-xs text-foreground/60">{post.authorDesignation}</p>}
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Image */}
                  {post.cover && (
                    <motion.div variants={itemVariants} className="order-1 lg:order-2 flex flex-col gap-3 items-center">
                      <figure className="rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-card w-full">
                        <img src={post.cover} alt={post.title} className="w-full aspect-[4/3] object-cover" loading="eager" />
                      </figure>
                      <ShareBar title={post.title} />
                    </motion.div>
                  )}
                </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] items-start">
              {/* Article */}
              <article className="prose prose-slate max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-img:rounded-2xl prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-2">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />

                <div className="mt-16 pt-8 border-t border-border not-prose">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Comments</h2>
                  <CommentsList comments={comments} />
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Leave a Comment</h3>
                    <CommentForm
                      postId={post.wpId}
                      onSubmitted={async () => {
                        const updated = await fetchComments(post.wpId);
                        setComments(updated);
                      }}
                    />
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 flex flex-col gap-4">
                <SidebarCTAForm postTitle={post.title} />

                <DownloadGuideCard postTitle={post.title} />
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
