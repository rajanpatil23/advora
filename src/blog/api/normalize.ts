import type { WpPost, WpCategory } from "./wp";

export type UiPost = {
  id: string;
  title: string;
  slug: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  cover?: string;
  category: string; // category slug for routing
  readTime?: string;
  authorName?: string;
  authorImage?: string;
  authorDesignation?: string; // author job title/role
  authorLinkedin?: string; // LinkedIn profile URL (from ACF field: linekdin_profile_url)
  html: string; // full post content HTML
  wpId: number; // numeric WP id (for comments)
};

// Helper to decode HTML entities
function decodeHtmlEntities(text: string): string {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}

export const stripHtml = (s: string) => {
  const stripped = (s || "").replace(/<[^>]*>/g, "").trim();
  return decodeHtmlEntities(stripped);
};

const mediaUrl = (p: WpPost) => p?._embedded?.["wp:featuredmedia"]?.[0]?.source_url as string | undefined;
const authorName = (p: WpPost) => p?.acf?.author_name || (p?._embedded?.author?.[0]?.name as string | undefined);
const authorAvatar = (p: WpPost) =>
  p?.acf?.author_image || (p?._embedded?.author?.[0]?.avatar_urls?.["96"] as string | undefined);

export function normalizePost(p: WpPost, cats: WpCategory[]): UiPost | null {
  // Get the primary category ID from ACF or fall back to first category
  const primaryId = p?.acf?.primary_category ?? p?.categories?.[0];

  // Find the category from the fetched categories list
  const wpCat = cats.find((c) => c.id === primaryId);

  // Get the slug from the category - this is now dynamic from WordPress
  const catSlug = wpCat?.slug;

  // Filter out uncategorized posts - return null if no valid category
  if (!catSlug || catSlug === "uncategorized") {
    console.warn(`Post ${p.id} has no valid category. Primary ID: ${primaryId}, WP Cat:`, wpCat);
    return null;
  }

  return {
    id: String(p.id),
    wpId: p.id,
    title: decodeHtmlEntities(p.title?.rendered ?? ""),
    slug: p.slug,
    date: (p.date || "").slice(0, 10),
    excerpt: stripHtml(p.excerpt?.rendered ?? ""),
    cover: mediaUrl(p),
    category: catSlug,
    readTime: p.acf?.read_time,
    authorName: authorName(p),
    authorImage: authorAvatar(p),
    authorDesignation: p.acf?.author_designation || undefined,
    authorLinkedin: p.acf?.linekdin_profile_url || undefined,
    html: p.content?.rendered ?? "",
  };
}
