# SEO & Performance Optimization Guide

## 📋 Overview

Ovaj dokument objašnjava sve SEO i performance optimizacije koje su implementirane u portfolijo aplikaciji.

---

## 🔍 SEO Optimizations

### 1. **Meta Tags**

Sve meta tagove automatski upravlja `useHead` hook u `src/hooks/useHead.ts`:

```typescript
import { useHead } from '@/hooks/useHead';
import { generatePersonSchema } from '@/lib/seo';

export function MyComponent() {
  useHead(
    {
      title: 'Page Title',
      description: 'Page description',
      path: '/my-page',
    },
    generatePersonSchema()
  );

  return <div>Content</div>;
}
```

#### Meta Tags Obuhvaćeni:

- ✅ Title tag
- ✅ Description meta tag
- ✅ Canonical URL
- ✅ Open Graph tags (za LinkedIn, Facebook, itd.)
- ✅ Twitter Card tags (za Twitter X)
- ✅ robots meta tag
- ✅ theme-color
- ✅ author tag

### 2. **Open Graph Tags**

Omogućavaju bolji preview na društvenim mrežama:

```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
<meta property="og:type" content="website" />
```

**Datoteka:** `src/lib/seo.ts` - `generateOGTags()`

### 3. **Twitter Cards**

Prilagođeni preview za Twitter/X:

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@tarikaentwickler" />
```

**Datoteka:** `src/lib/seo.ts` - `generateTwitterTags()`

### 4. **JSON-LD Structured Data**

Google koristi structured data za bolje razumevanje sadržaja:

```typescript
// Automatski u index.html
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tarik Abaspahic",
  "jobTitle": "Full-Stack Developer",
  "sameAs": ["https://linkedin.com/...", "https://github.com/..."]
}
```

#### Dostupne schema generatorske funkcije:

- `generatePersonSchema()` - Info o osobi
- `generateWebsiteSchema()` - Info o webu
- `generateProjectSchema()` - Info o projektu
- `generateBreadcrumbSchema()` - Breadcrumb navigacija

**Datoteka:** `src/lib/seo.ts`

### 5. **Robots.txt**

Govori search engine botovima kako da crawlaju sajt:

```text
User-agent: *
Allow: /
Disallow: /admin
Sitemap: https://t-abaspahic.de/sitemap.xml
```

**Datoteka:** `public/robots.txt`

### 6. **Sitemap.xml**

Lista svih stranica na sajtu za brže indexiranje:

```xml
<urlset>
  <url>
    <loc>https://t-abaspahic.de/</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Datoteka:** `public/sitemap.xml`

---

## 🚀 Performance Optimizations

### 1. **Core Web Vitals Tracking**

Automatski prati ključne performance metrike:

| Metrika | Skraćenica | Dobar | Treba poboljšanja | Loš     |
| ------- | ---------- | ------ | --------------- | ------- |
| Largest Contentful Paint | LCP | < 2.5s | 2.5s - 4s | > 4s |
| First Input Delay | FID | < 100ms | 100ms - 300ms | > 300ms |
| Cumulative Layout Shift | CLS | < 0.1 | 0.1 - 0.25 | > 0.25 |
| First Contentful Paint | FCP | < 1.8s | 1.8s - 3s | > 3s |
| Time to First Byte | TTFB | < 800ms | 800ms - 1.8s | > 1.8s |

#### Korišćenje:

```typescript
import { initWebVitals } from '@/lib/webVitals';

// Initialize u App.tsx (već dodano!)
useEffect(() => {
  const getMetrics = initWebVitals();
  
  window.addEventListener('beforeunload', () => {
    const metrics = getMetrics();
    console.log('[Performance Metrics]', metrics);
  });
}, []);
```

**Datoteka:** `src/lib/webVitals.ts`

### 2. **Performance Utilities**

```typescript
import { measurePerformance, getMetricStatus } from '@/lib/performance';

// Meri trajanje funkcije
measurePerformance('My Function', () => {
  // Your code here
});

// Proverava status metrike
const status = getMetricStatus('LCP', 2000);
console.log(status); // 'good'
```

**Datoteka:** `src/lib/performance.ts`

### 3. **Font Loading Optimization**

Index.html ima preload za fontove:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

### 4. **DNS Prefetch**

DNS prefetch za external resurse:

```html
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
```

### 5. **Meta Tag Deduplication**

Hook `useHead` sprečava duplikate meta tagova automatski.

---

## 🔗 Integracioni Koraci

### ✅ Već Implementirano:

1. ✅ `index.html` - Poboljšane meta tagove
2. ✅ `src/lib/seo.ts` - SEO utility funkcije
3. ✅ `src/lib/webVitals.ts` - Performance tracking
4. ✅ `src/lib/performance.ts` - Performance utilities
5. ✅ `src/hooks/useHead.ts` - Meta tag management hook
6. ✅ `src/app/App.tsx` - Web Vitals inicijalizacija
7. ✅ `public/robots.txt` - Search engine directives
8. ✅ `public/sitemap.xml` - Site map

### 📝 Kako Koristiti u Komponentama:

```typescript
import { useHead } from '@/hooks/useHead';
import { generateProjectSchema } from '@/lib/seo';

export function Projects() {
  useHead(
    {
      title: 'Projects - Tarik Abaspahic',
      description: 'Explore my latest projects and work',
      path: '/projects',
    },
    generateProjectSchema({
      name: 'My Project',
      description: 'Project description',
      image: 'https://...',
      url: 'https://...',
      technologies: ['React', 'TypeScript'],
    })
  );

  return <div>Projects</div>;
}
```

---

## 📊 Testing & Monitoring

### Google Tools:

1. **Google Lighthouse** - Automatski test u DevTools
   - Performance score
   - Accessibility score
   - Best practices
   - SEO score

2. **Google Search Console** - Monitoring indexacije
   - Sitemap submission
   - Crawl errors
   - Mobile usability
   - Performance reports

3. **Google PageSpeed Insights** - Real-world performance

### Kako Koristiti Lighthouse:

```bash
# U Chrome DevTools:
F12 → Lighthouse → Analyze Page Load
```

---

## 🎯 Best Practices

### 1. **Slike za Social Sharing**

Kreiraj OG image (1200x630px) za bolji preview:

```typescript
image: 'https://t-abaspahic.de/og-image.jpg'
```

### 2. **Ažuriranje Sitemap-a**

Trenutno statički, ali možeš dinamički ažurirati:

```xml
<lastmod>2026-06-05</lastmod>
<changefreq>weekly</changefreq> <!-- Kako često se menja sadržaj -->
<priority>0.9</priority> <!-- 0.0 - 1.0, veća prioriteta = veća važnost -->
```

### 3. **JSON-LD za Svaki Projekt**

Dodaj structured data za svaki projekt:

```typescript
const projectData = generateProjectSchema({
  name: 'Project Name',
  description: 'Description',
  image: 'project-image.jpg',
  url: 'project-url',
  technologies: ['React', 'TypeScript'],
});

useHead(pageInfo, projectData);
```

### 4. **Monitoring Performance**

Redovno proveravaj performance:

```bash
# Console u browser-u
- Otvori DevTools (F12)
- Performance tab
- Record i reload stranicu
```

---

## 🔧 Napredne Konfiguracije

### Google Analytics (opciono):

```html
<!-- Dodaj u index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Custom Analytics Endpoint:

```typescript
// U src/lib/webVitals.ts - sendMetric funkcija
const sendMetric = (metric: WebVitalsMetric) => {
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/metrics', JSON.stringify(metric));
  }
};
```

---

## 📚 Reference

- [Google SEO Starter Guide](https://developers.google.com/search/docs)
- [Web Vitals](https://web.dev/vitals/)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

## 📞 Support

Za pitanja ili probleme sa SEO/Performance:

1. Proverite `src/lib/seo.ts` za dostupne funkcije
2. Proverite `src/hooks/useHead.ts` za hook korišćenje
3. Proverite browser console za performance warnings
4. Koristite Google Lighthouse za detaljne preporuke

---

**Kreirano:** 2026-06-05  
**Zadnja ažuriranja:** SEO & Performance Optimization v1.0
