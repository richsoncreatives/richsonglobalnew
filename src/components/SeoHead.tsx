import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_SEO } from '../data/siteData';

const DEFAULT_SEO = PAGE_SEO['/'];

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Dynamically synchronises document title, meta description, OpenGraph, Twitter/X cards,
 * and canonical URL across every SPA route for strong SEO and social share previews.
 */
export function SeoHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_SEO[pathname] || DEFAULT_SEO;
    document.title = meta.title;

    upsertMeta('name', 'description', meta.description);
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);

    const canonicalUrl = `${window.location.origin}${pathname}`;
    upsertMeta('property', 'og:url', canonicalUrl);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [pathname]);

  return null;
}
