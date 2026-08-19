import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  type?: string;
}

export function SEOHead({
  title,
  description,
  ogImage = "/og-default.jpg",
  canonical,
  type = "website",
}: SEOHeadProps) {
  const location = useLocation();
  const url = canonical || `https://lugogolf.com${location.pathname}`;

  useEffect(() => {
    document.title = title;

    const meta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    meta("description", description);
    meta("og:title", title, "property");
    meta("og:description", description, "property");
    meta("og:image", ogImage, "property");
    meta("og:url", url, "property");
    meta("og:type", type, "property");
    meta("twitter:card", "summary_large_image");
    meta("twitter:title", title);
    meta("twitter:description", description);
    meta("twitter:image", ogImage);

    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", url);
  }, [title, description, ogImage, url, type]);

  return null;
}
