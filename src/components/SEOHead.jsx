import { useEffect } from 'react';

const BASE_URL = 'https://www.nirdesignsstudio.in';

/**
 * SEOHead — Dynamically sets per-page meta tags for SEO.
 * No external dependency needed; uses vanilla DOM manipulation.
 */
export default function SEOHead({ title, description, keywords, path = '/', ogImage }) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (attr, attrValue, content) => {
      let el = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to set or create a link tag
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const fullUrl = `${BASE_URL}${path}`;
    const image = ogImage || `${BASE_URL}/images/nd_blueprint_logo.png`;

    // Standard SEO meta
    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);

    // Canonical
    setLink('canonical', fullUrl);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:image', image);

    // Twitter Card
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
  }, [title, description, keywords, path, ogImage]);

  return null; // This component renders nothing visible
}
