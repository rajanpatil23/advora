import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const SITE_NAME = "Advora Digital";
const BASE_URL = "https://advora.in";
const DEFAULT_OG_IMAGE = "https://advora.in/favicon.png";

function setMeta(property: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageSEO({ title, description, canonical, ogType = "website", ogImage, noIndex }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = `${title} | ${SITE_NAME}`;

    // Meta description
    setMeta("description", description);

    // Canonical
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : `${BASE_URL}${window.location.pathname}`;
    setCanonical(canonicalUrl);

    // Open Graph
    setMeta("og:title", `${title} | ${SITE_NAME}`, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:image", ogImage || DEFAULT_OG_IMAGE, true);
    setMeta("og:site_name", SITE_NAME, true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", `${title} | ${SITE_NAME}`);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage || DEFAULT_OG_IMAGE);

    // Robots
    if (noIndex) {
      setMeta("robots", "noindex, nofollow");
    } else {
      setMeta("robots", "index, follow");
    }
  }, [title, description, canonical, ogType, ogImage, noIndex]);
}
