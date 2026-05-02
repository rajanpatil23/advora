import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import type { UiPost } from "../../api/normalize";
import "./blog-card.css";

export type BlogCardProps = {
  /** Full post object for router state */
  post?: UiPost;
  /** Link destination (react-router) */
  to: string;
  /** Post title (required) */
  title: string;
  /** Optional short description */
  excerpt?: string;
  /** ISO date string or Date */
  date?: string | Date;
  /** Cover image path (e.g. /images/blog/foo.jpg) */
  cover?: string;
  /** Optional category label to show above the title */
  category?: string;
  /** Optional tags to show as chips */
  tags?: string[];
  /** Aspect ratio for the media area (default 16/9) */
  aspectRatio?: `${number}/${number}`;
  /** Compact variant (smaller body paddings, hides excerpt if desired) */
  compact?: boolean;
  /** Optional ARIA label override for the link */
  ariaLabel?: string;
  /** Read time (e.g. "12 minute read") */
  readTime?: string;
  /** Author name */
  authorName?: string;
  /** Author profile image path */
  authorImage?: string;
  /** Author designation/title */
  authorDesignation?: string;
  /** Author LinkedIn profile URL */
  authorLinkedin?: string;
};

function formatDate(d?: string | Date) {
  if (!d) return "";
  try {
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

function toIsoDate(d?: string | Date) {
  if (!d) return undefined;
  const dt = typeof d === "string" ? new Date(d) : d;
  return isNaN(+dt) ? undefined : dt.toISOString().slice(0, 10);
}

export default function BlogCard({
  post,
  to,
  title,
  excerpt,
  date,
  cover,
  category,
  tags,
  aspectRatio = "16/9",
  compact = false,
  ariaLabel,
  readTime,
  authorName,
  authorImage,
  authorDesignation,
  authorLinkedin,
}: BlogCardProps) {
  const prettyDate = formatDate(date);
  const isoDate = toIsoDate(date);

  // Use the URL to build a stable, unique label id (titles can repeat)
  const labelId = useMemo(() => `card-${encodeURIComponent(to).replace(/%/g, "")}`, [to]);

  // If image fails, show the placeholder with icon
  const [broken, setBroken] = useState(false);
  const showPlaceholder = !cover || broken;

  return (
    <li className="blog-card" style={{ listStyle: "none" }}>
      <Link
        to={to}
        state={{ post }}
        aria-labelledby={labelId}
        {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
        className="blog-card__link"
      >
        {/* Media */}
        <figure className="blog-card__media" style={{ aspectRatio }} aria-hidden="true">
          {showPlaceholder ? (
            <div className="blog-card__placeholder">
              <FileText className="blog-card__placeholder-icon" />
            </div>
          ) : (
            <img
              src={cover}
              alt={`${title} — cover image`}
              decoding="async"
              loading="lazy"
              onError={() => setBroken(true)}
            />
          )}
        </figure>

        {/* Body */}
        <div className="blog-card__body">
          {/* Category Badge and Date Row */}
          <div className="blog-card__header">
            {category && <div className="blog-card__category">{category}</div>}
            {prettyDate &&
              (isoDate ? (
                <time className="blog-card__date" dateTime={isoDate}>
                  {prettyDate}
                </time>
              ) : (
                <span className="blog-card__date">{prettyDate}</span>
              ))}
          </div>

          {/* Title */}
          <h3 id={labelId} className="blog-card__title">
            {title}
          </h3>

          {/* Read time */}
          {readTime && <div className="blog-card__read-time">{readTime}</div>}

          {/* Author info with arrow */}
          <div className="blog-card__footer">
            <div className="blog-card__author-info">
              {authorImage ? (
                <img src={authorImage} alt={authorName || "Author"} className="blog-card__author-avatar" />
              ) : (
                <div className="blog-card__author-avatar blog-card__author-avatar--placeholder">
                  {(authorName || "A").charAt(0).toUpperCase()}
                </div>
              )}
              <div className="blog-card__author-details">
                <div className="blog-card__author-name-row">
                  <span className="blog-card__author-name">{authorName || "Connecttly"}</span>
                  {authorLinkedin && (
                    <a
                      href={authorLinkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-card__linkedin-link"
                      aria-label={`${authorName || "Author"}'s LinkedIn profile`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg viewBox="0 0 24 24" className="blog-card__linkedin-icon">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                      </svg>
                    </a>
                  )}
                </div>
                {authorDesignation && <span className="blog-card__author-designation">{authorDesignation}</span>}
              </div>
            </div>
            <svg className="blog-card__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </li>
  );
}
