import { useHead } from '@/hooks/useHead';
import { generateProjectSchema, generatePersonSchema } from '@/lib/seo';

/**
 * EXAMPLE: How to use SEO utilities in your components
 */

// Example 1: Simple page with title and description
export function ExamplePage1() {
  useHead({
    title: 'My Page - Tarik Abaspahic',
    description: 'This is my awesome page description',
    path: '/my-page',
  });

  return <div>Page Content</div>;
}

// Example 2: With custom image for social sharing
export function ExamplePage2() {
  useHead({
    title: 'Projects - Tarik Abaspahic',
    description: 'Check out my latest projects',
    path: '/projects',
    image: 'https://t-abaspahic.de/projects-og-image.jpg',
  });

  return <div>Projects Content</div>;
}

// Example 3: With structured data
export function ExamplePage3() {
  const projectData = generateProjectSchema({
    name: 'My Awesome Project',
    description: 'A project that does cool things',
    image: 'https://t-abaspahic.de/project-image.jpg',
    url: 'https://github.com/tarikaentwickler/awesome-project',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
  });

  useHead(
    {
      title: 'Awesome Project - Tarik Abaspahic',
      description: 'A project that does cool things',
      path: '/projects/awesome-project',
    },
    projectData // Pass structured data as second argument
  );

  return <div>Project Details</div>;
}

// Example 4: Multiple structured data elements
export function ExamplePage4() {
  useHead(
    {
      title: 'Portfolio - Tarik Abaspahic',
      description: 'My professional portfolio',
      path: '/',
      type: 'profile',
    },
    generatePersonSchema() // Uses SITE_CONFIG
  );

  return <div>Portfolio Content</div>;
}

// Example 5: Performance monitoring
import { measurePerformance, getMetricStatus } from '@/lib/performance';

export function ExamplePerformanceTracking() {
  const expensiveOperation = () => {
    // Simulate expensive work
    const data = Array.from({ length: 1000000 }, (_, i) => i);
    return data.reduce((a, b) => a + b, 0);
  };

  // Measure performance
  measurePerformance('Expensive Operation', expensiveOperation);

  // Check if metric is good
  const status = getMetricStatus('LCP', 2000);
  console.log('LCP Status:', status); // 'good' | 'needs-improvement' | 'poor'

  return <div>Performance Tracking Example</div>;
}

// Example 6: Using Web Vitals hook
import { usePageView } from '@/hooks/useHead';

export function ExampleWebVitals() {
  // Track page view
  usePageView('My Page Name');

  return <div>Web Vitals Tracking</div>;
}

/**
 * SUMMARY OF UTILITIES
 * 
 * SEO Functions (src/lib/seo.ts):
 * - generateOGTags() - Open Graph meta tags
 * - generateTwitterTags() - Twitter Card meta tags
 * - generatePersonSchema() - JSON-LD Person schema
 * - generateWebsiteSchema() - JSON-LD Website schema
 * - generateProjectSchema() - JSON-LD Project schema
 * - generateBreadcrumbSchema() - JSON-LD Breadcrumb schema
 * - truncateText() - Limit text to specific length
 * - extractDomain() - Get domain from URL
 * - getCanonicalUrl() - Build canonical URL
 * 
 * Hooks (src/hooks/useHead.ts):
 * - useHead() - Update document head with meta tags and structured data
 * - useFavicon() - Update favicon
 * - useStructuredData() - Add JSON-LD to head
 * - usePageView() - Track page views with analytics
 * 
 * Performance (src/lib/webVitals.ts):
 * - trackLCP() - Track Largest Contentful Paint
 * - trackFID() - Track First Input Delay
 * - trackCLS() - Track Cumulative Layout Shift
 * - trackFCP() - Track First Contentful Paint
 * - trackTTFB() - Track Time to First Byte
 * - initWebVitals() - Initialize all Web Vitals tracking
 * 
 * Performance Utils (src/lib/performance.ts):
 * - measurePerformance() - Measure function execution time
 * - getMetricStatus() - Check if metric is good/needs improvement/poor
 * - WEB_VITALS_THRESHOLDS - Core Web Vitals thresholds
 * - sendPerformanceData() - Send metrics to analytics endpoint
 * - logPerformanceData() - Log metrics in development
 * - isPerformanceObserverSupported() - Check browser support
 */
