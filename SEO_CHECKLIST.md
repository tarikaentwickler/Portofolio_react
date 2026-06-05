# SEO & Performance Implementation Checklist

## ✅ Completed Implementation

### Core Files Created
- [x] `src/lib/seo.ts` - SEO utilities and schema generators
- [x] `src/lib/webVitals.ts` - Web Vitals tracking
- [x] `src/lib/performance.ts` - Performance utilities
- [x] `src/lib/sitemapPlugin.ts` - Vite plugin for sitemap generation
- [x] `src/hooks/useHead.ts` - Meta tag management hook
- [x] `src/types/analytics.ts` - TypeScript definitions for analytics
- [x] `public/robots.txt` - Search engine directives
- [x] `public/sitemap.xml` - Site map for indexing
- [x] Enhanced `index.html` - Meta tags and structured data
- [x] Updated `src/app/App.tsx` - SEO initialization
- [x] Updated `src/main.tsx` - Analytics type imports

### Optimization Features
- [x] Open Graph tags (za LinkedIn, Facebook, WhatsApp)
- [x] Twitter Card tags (za Twitter/X)
- [x] JSON-LD structured data
- [x] Core Web Vitals tracking (LCP, FID, CLS, FCP, TTFB)
- [x] Performance monitoring utilities
- [x] Canonical URLs
- [x] robots.txt for search engines
- [x] sitemap.xml for faster indexing
- [x] Meta tag deduplication
- [x] Font loading optimization
- [x] DNS prefetch for external resources

---

## 📋 Next Steps

### 1. **Update SITE_CONFIG** (Optional)
- [ ] Update `src/lib/seo.ts` SITE_CONFIG with your actual domain
- [ ] Update email address
- [ ] Update social media handles

### 2. **Create OG Images**
- [ ] Create 1200x630px image for social sharing
- [ ] Upload to `public/og-image.jpg`
- [ ] Create Apple touch icon (180x180px) at `public/apple-touch-icon.png`

### 3. **Setup Google Services** (Optional)
- [ ] Create Google Search Console account
- [ ] Submit sitemap.xml
- [ ] Verify domain ownership
- [ ] Monitor crawl errors
- [ ] Check mobile usability

### 4. **Setup Analytics** (Optional)
- [ ] Create Google Analytics 4 account
- [ ] Add GA script to `index.html`
- [ ] Track custom events
- [ ] Monitor performance metrics

### 5. **Test SEO**
- [ ] Run Google Lighthouse audit (DevTools → Lighthouse)
- [ ] Check Lighthouse score:
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+
- [ ] Test social media preview:
  - [ ] Test on Twitter Card Validator (cards-dev.twitter.com)
  - [ ] Test on Facebook Sharing Debugger (developers.facebook.com/tools/debug)
  - [ ] Test on LinkedIn Post Inspector

### 6. **Performance Monitoring**
- [ ] Setup custom analytics endpoint at `/api/metrics`
- [ ] Monitor Web Vitals in production
- [ ] Set up alerts for poor performance
- [ ] Review performance monthly

### 7. **SEO Enhancements**
- [ ] Add breadcrumb navigation (useHead with breadcrumb schema)
- [ ] Add FAQ schema if applicable
- [ ] Add review schema for projects
- [ ] Optimize meta descriptions (50-160 chars)
- [ ] Ensure all images have alt text

### 8. **Advanced**
- [ ] Setup hreflang tags for multi-language (en, bs, de)
- [ ] Create XML sitemaps for each language variant
- [ ] Implement structured data testing tool validation
- [ ] Setup Core Web Vitals monitoring dashboard

---

## 🔍 Testing Commands

### Lighthouse Audit (DevTools)
```
F12 → Lighthouse → Analyze Page Load
```

### Validate Structured Data
- Google Rich Results: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

### Test Social Media Preview
- Twitter: https://cards-dev.twitter.com/validator
- Facebook: https://developers.facebook.com/tools/debug/
- LinkedIn: https://www.linkedin.com/post-inspector/inspect/

### Performance Testing
- Google PageSpeed: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/

---

## 📊 Key Metrics to Monitor

### Core Web Vitals
| Metric | Good | Needs Improvement | Poor |
|--------|------|------------------|------|
| LCP | < 2.5s | 2.5s - 4s | > 4s |
| FID | < 100ms | 100ms - 300ms | > 300ms |
| CLS | < 0.1 | 0.1 - 0.25 | > 0.25 |
| FCP | < 1.8s | 1.8s - 3s | > 3s |
| TTFB | < 800ms | 800ms - 1.8s | > 1.8s |

### Lighthouse Scores
- **Performance**: 90-100 (Good), 50-89 (Needs Work), 0-49 (Poor)
- **SEO**: 90-100 (Good)
- **Accessibility**: 90-100 (Good)
- **Best Practices**: 90-100 (Good)

---

## 🔗 Useful Resources

- **Google Search Console**: https://search.google.com/search-console
- **Google PageSpeed**: https://pagespeed.web.dev/
- **Lighthouse**: Built into Chrome DevTools
- **Schema.org**: https://schema.org/
- **Open Graph**: https://ogp.me/
- **Twitter Cards**: https://developer.twitter.com/en/docs/twitter-for-websites/cards

---

## 💡 Tips

1. **Update sitemap.xml regularly** - Add new projects or pages as needed
2. **Monitor Core Web Vitals** - Use Google Search Console Performance Report
3. **Keep metadata updated** - Use `useHead` hook in all major pages
4. **Test before deploying** - Use Lighthouse and PageSpeed tools
5. **Backup structured data** - Keep copies of schema definitions
6. **Monitor rankings** - Use Google Search Console to track search visibility

---

## 🚀 Production Checklist

- [ ] Update SITE_CONFIG with production domain
- [ ] Upload OG image (1200x630px)
- [ ] Upload Apple touch icon (180x180px)
- [ ] Setup Google Search Console
- [ ] Setup Google Analytics
- [ ] Run final Lighthouse audit
- [ ] Test all social media previews
- [ ] Monitor performance for 1 week
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

---

**Last Updated:** 2026-06-05  
**Implementation Version:** 1.0
