import { useEffect } from 'react';
import { SITE_CONFIG, PageMeta, generateOGTags, generateTwitterTags } from '@/lib/seo';

/**
 * Hook to update document head with SEO meta tags
 * Handles title, description, OG tags, Twitter cards, and canonical URL
 */
export const useHead = (page: PageMeta, structuredData?: Record<string, any>) => {
  useEffect(() => {
    // Update title
    document.title = page.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      
      tag.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', page.description);
    updateMetaTag('theme-color', '#000000');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('author', SITE_CONFIG.author);

    // Open Graph tags
    const ogTags = generateOGTags(page);
    Object.entries(ogTags).forEach(([key, value]) => {
      updateMetaTag(key, value, 'property');
    });

    // Twitter Card tags
    const twitterTags = generateTwitterTags(page);
    Object.entries(twitterTags).forEach(([key, value]) => {
      updateMetaTag(key, value);
    });

    // Canonical URL
    const canonicalUrl = `${SITE_CONFIG.url}${page.path || ''}`;
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    
    canonicalTag.href = canonicalUrl;

    // Structured data (JSON-LD)
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
      
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      
      scriptTag.textContent = JSON.stringify(structuredData);
    }

    // Cleanup
    return () => {
      // Optional: remove added tags on unmount
      // Be careful not to remove tags added by other components
    };
  }, [page, structuredData]);
};

/**
 * Hook to update favicon
 */
export const useFavicon = (href: string) => {
  useEffect(() => {
    let link = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    
    link.href = href;
  }, [href]);
};

/**
 * Hook to add JSON-LD structured data to head
 */
export const useStructuredData = (data: Record<string, any>) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);
};

/**
 * Hook to track page view with analytics
 */
export const usePageView = (pageName: string) => {
  useEffect(() => {
    // Send page view event to your analytics service
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_path: window.location.pathname,
        page_name: pageName,
      });
    }
  }, [pageName]);
};
