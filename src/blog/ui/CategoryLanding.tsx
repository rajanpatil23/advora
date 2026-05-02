import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { fetchPostList, GRID_PER_PAGE } from "../api/wp";
import type { UiPost } from "../api/normalize";
import { useBlogData } from "../state/BlogDataProvider";
import BlogCard from "./components/BlogCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CategoryLanding() {
  const { category = "" } = useParams();
  const { cats, loading: catsLoading } = useBlogData();
  const [posts, setPosts] = useState<UiPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  const topRef = useRef<HTMLDivElement | null>(null);
  const cat = useMemo(() => cats.find((c) => c.slug === category), [cats, category]);

  useEffect(() => {
    if (catsLoading || !cat) return;
    const trimmedSearch = query.trim();
    const mode: "browse" | "search" = trimmedSearch ? "search" : "browse";

    setIsLoading(true);
    fetchPostList({ mode, tabId: cat.slug, page: currentPage, perPage: GRID_PER_PAGE, categoryId: cat.id, search: trimmedSearch || undefined }, cats)
      .then((result) => {
        setPosts(result.posts);
        setTotalPages(result.totalPages);
      })
      .catch((error) => console.error("Failed to load category posts:", error))
      .finally(() => setIsLoading(false));
  }, [catsLoading, cat, cats, currentPage, query]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

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

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };

  if (catsLoading) return <div className="min-h-screen flex items-center justify-center bg-background"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" /></div>;

  if (!cat) {
    return (
      <main className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-3xl font-bold text-foreground mb-4">Category not found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section ref={topRef} className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
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
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
                <motion.nav variants={itemVariants} className="text-sm text-muted-foreground mb-6">
                  <Link to="/blog" className="text-primary hover:underline">Blog</Link>
                  {" › "}
                  <span className="text-foreground font-medium">{cat.name}</span>
                </motion.nav>

                <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Explore <span className="text-primary">{cat.name}</span>
                </motion.h1>

                {cat.description && (
                  <motion.p variants={itemVariants} className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8">
                    {cat.description}
                  </motion.p>
                )}

                <motion.div variants={itemVariants} className="max-w-xl mx-auto">
                  <div className="flex items-center gap-3 rounded-2xl p-3 bg-card border border-border shadow-sm">
                    <Search className="w-5 h-5 text-muted-foreground/50" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={`Search ${cat.name}…`}
                      className="flex-1 bg-transparent border-none outline-none text-foreground text-base placeholder:text-muted-foreground/50"
                    />
                    {query && (
                      <button onClick={() => setQuery("")} className="w-7 h-7 rounded-lg bg-muted/30 hover:bg-muted/50 flex items-center justify-center transition-colors" aria-label="Clear search">
                        <X className="w-4 h-4 text-muted-foreground" />
                      </button>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground/70">
                    {posts.length} post{posts.length !== 1 ? "s" : ""} {query && "matching your search"}
                  </p>
                </motion.div>
              </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
              </div>
            ) : (
              <>
                <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.map((p) => (
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
                    />
                  ))}
                  {posts.length === 0 && (
                    <li className="col-span-full text-center text-muted-foreground py-16">
                      {query ? `No posts match "${query}".` : "No posts found."}
                    </li>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
