import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { fetchHeroLatest, fetchPostList, GRID_PER_PAGE } from "../api/wp";
import type { UiPost } from "../api/normalize";
import { useBlogData } from "../state/BlogDataProvider";
import BlogCard from "./components/BlogCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type TabId = "all" | string;

export default function BlogIndex() {
  const { cats, loading: catsLoading } = useBlogData();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<TabId>("all");
  const [pageByTab, setPageByTab] = useState<Record<TabId, number>>({ all: 1 });
  const [searchQuery, setSearchQuery] = useState("");
  const [heroPosts, setHeroPosts] = useState<UiPost[]>([]);
  const [gridPosts, setGridPosts] = useState<UiPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const blogsRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Initial load
  useEffect(() => {
    if (catsLoading) return;
    (async () => {
      try {
        const hero = await fetchHeroLatest(cats);
        setHeroPosts(hero);
        setIsLoading(true);
        const result = await fetchPostList({ mode: "browse", tabId: "all", page: 1, perPage: GRID_PER_PAGE }, cats);
        setGridPosts(result.posts);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error("Failed to load blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [catsLoading, cats]);

  // Auto-play carousel
  useEffect(() => {
    if (heroPosts.length === 0) return;
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroPosts.length), 5000);
    return () => clearInterval(timer);
  }, [heroPosts.length]);

  const categories = useMemo(
    () => [{ name: "All", value: "all" }, ...cats.map((c) => ({ name: c.name, value: c.slug }))],
    [cats]
  );

  // Keyboard shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const inInput = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if (!inInput && e.key === "/") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Load grid
  useEffect(() => {
    if (catsLoading) return;
    const currentPage = pageByTab[activeTab] ?? 1;
    const trimmedSearch = searchQuery.trim();
    const mode: "browse" | "search" = trimmedSearch ? "search" : "browse";
    const categoryId = activeTab === "all" ? undefined : cats.find((c) => c.slug === activeTab)?.id;

    setIsLoading(true);
    fetchPostList({ mode, tabId: activeTab, page: currentPage, perPage: GRID_PER_PAGE, categoryId, search: trimmedSearch || undefined }, cats)
      .then((result) => {
        setGridPosts(result.posts);
        setTotalPages(result.totalPages);
      })
      .catch((error) => console.error("Failed to load posts:", error))
      .finally(() => setIsLoading(false));
  }, [activeTab, pageByTab, searchQuery, catsLoading, cats]);

  const currentPage = pageByTab[activeTab] ?? 1;
  const visiblePosts = gridPosts;
  const hasNextPage = currentPage < totalPages;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const handleTabChange = (newTab: TabId) => {
    setActiveTab(newTab);
    setPageByTab((prev) => ({ ...prev, [newTab]: prev[newTab] ?? 1 }));
    setSearchQuery("");
  };

  const handlePageChange = (pageNum: number) => {
    setPageByTab((prev) => ({ ...prev, [activeTab]: pageNum }));
    blogsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPageByTab((prev) => ({ ...prev, [activeTab]: 1 }));
  };

  const formatDate = (d: string | Date) => {
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroPosts.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroPosts.length) % heroPosts.length);

  if (catsLoading) return <div className="min-h-screen flex items-center justify-center bg-background"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" /></div>;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* ===== HERO CAROUSEL ===== */}
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
                <AnimatePresence mode="wait">
                  {heroPosts.map((post, index) => {
                    if (index !== currentSlide) return null;
                    const cat = cats.find((c) => c.slug === post.category);
                    const catLabel = cat?.name ?? post.category;

                    return (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center cursor-pointer"
                        onClick={() => navigate(`/blog/${post.category}/${post.slug}`, { state: { post } })}
                      >
                        {/* Left Content */}
                        <div className="order-2 lg:order-1 flex flex-col gap-6">
                          {/* Row 1: Category Badge + Date */}
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-amber-100 text-amber-800 font-semibold text-xs uppercase tracking-wide">
                              {catLabel}
                            </span>
                            <time className="text-muted-foreground text-sm" dateTime={String(post.date)}>
                              {formatDate(post.date)}
                            </time>
                          </div>

                          {/* Row 2: Title */}
                          <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-foreground leading-[1.15] tracking-tight">
                            {post.title}
                          </h1>

                          {/* Row 3: Excerpt */}
                          {post.excerpt && (
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed line-clamp-3">
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
                                    onClick={(e) => e.stopPropagation()}
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
                        </div>

                        {/* Right Image */}
                        {post.cover && (
                          <figure className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-card">
                            <img src={post.cover} alt={post.title} className="w-full aspect-[4/3] object-cover" loading="eager" />
                          </figure>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                <div className="flex items-center justify-center gap-4 mt-10">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card hover:scale-110 transition-all shadow-md"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground/70" />
                  </button>
                  <div className="flex gap-2">
                    {heroPosts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card hover:scale-110 transition-all shadow-md"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground/70" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== POSTS GRID ===== */}
        <section id="blogs" ref={blogsRef} className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile filter */}
            <div className="md:hidden mb-8">
              <label htmlFor="blog-category" className="block text-sm font-medium text-muted-foreground mb-2">Filter by category</label>
              <select
                id="blog-category"
                value={activeTab}
                onChange={(e) => { setShowSearch(false); handleTabChange(e.target.value); }}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map((c) => <option key={c.value} value={c.value}>{c.name}</option>)}
              </select>
            </div>

            {/* Desktop tabs */}
            <div className="hidden md:block mb-12">
              {!showSearch ? (
                <div className="flex items-center gap-3 flex-wrap">
                  {categories.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => handleTabChange(c.value)}
                      className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                        activeTab === c.value
                          ? "bg-primary text-primary-foreground border-primary shadow-md"
                          : "bg-card text-foreground border-border hover:bg-muted/20 hover:border-muted-foreground/30"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                  <button
                    onClick={() => { setShowSearch(true); setSearchQuery(""); }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-foreground hover:bg-muted/20 transition-all text-sm font-medium ml-auto"
                    aria-label="Search blogs"
                  >
                    <Search className="h-4 w-4" />
                    Search
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => { setShowSearch(false); setSearchQuery(""); }}
                    className="flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card hover:bg-muted/20 transition-all"
                    aria-label="Back to categories"
                  >
                    <ArrowLeft className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <input
                    ref={searchRef}
                    autoFocus
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search articles, topics, or tags…"
                    className="flex-1 h-11 px-5 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center py-16">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                </div>
              ) : (
                <>
                  <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {visiblePosts.map((p) => (
                      <BlogCard
                        key={p.id}
                        post={p}
                        to={`/blog/${p.category}/${p.slug}`}
                        title={p.title}
                        excerpt={p.excerpt}
                        date={p.date}
                        cover={p.cover}
                        category={p.category}
                        aspectRatio="16/9"
                        readTime={p.readTime}
                        authorName={p.authorName}
                        authorImage={p.authorImage}
                        authorDesignation={p.authorDesignation}
                        authorLinkedin={p.authorLinkedin}
                      />
                    ))}
                    {visiblePosts.length === 0 && (
                      <li className="col-span-full text-center text-muted-foreground py-16">No posts match your search.</li>
                    )}
                  </ul>

                  {totalPages > 1 && (
                    <div className="flex flex-col items-center gap-4 mt-12">
                      <div className="flex justify-center items-center gap-2">
                        {currentPage > 1 && totalPages > 5 && (
                          <button onClick={() => handlePageChange(1)} className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center bg-card border border-border text-foreground hover:bg-muted/20 transition-all" aria-label="First page">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
                          </button>
                        )}
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${currentPage === 1 ? "bg-muted/30 text-muted-foreground/40 cursor-not-allowed" : "bg-card border border-border text-foreground hover:bg-muted/20"}`}
                          aria-label="Previous page"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        {getPageNumbers().map((pageNum, index) =>
                          pageNum === "..." ? (
                            <span key={`ellipsis-${index}`} className="w-10 h-10 flex items-center justify-center text-muted-foreground font-medium">...</span>
                          ) : (
                            <button
                              key={pageNum}
                              onClick={() => handlePageChange(pageNum as number)}
                              className={`w-10 h-10 rounded-xl flex items-center justify-center font-medium transition-all ${pageNum === currentPage ? "bg-primary text-primary-foreground shadow-md" : "bg-card border border-border text-foreground hover:bg-muted/20"}`}
                              aria-label={`Go to page ${pageNum}`}
                              aria-current={pageNum === currentPage ? "page" : undefined}
                            >
                              {pageNum}
                            </button>
                          )
                        )}
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={!hasNextPage}
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${!hasNextPage ? "bg-muted/30 text-muted-foreground/40 cursor-not-allowed" : "bg-card border border-border text-foreground hover:bg-muted/20"}`}
                          aria-label="Next page"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        {hasNextPage && totalPages > 5 && (
                          <button onClick={() => handlePageChange(totalPages)} className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center bg-card border border-border text-foreground hover:bg-muted/20 transition-all" aria-label="Last page">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                          </button>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">Page {currentPage} of {totalPages}</div>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
