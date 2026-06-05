// Web Vitals tracking for performance monitoring
// Tracks Core Web Vitals: LCP, FID, CLS, FCP, TTFB

export interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType?: string;
}

/**
 * Send metric data to analytics service
 */
const sendMetric = (metric: WebVitalsMetric) => {
  // You can customize this based on your analytics provider
  // This logs to console in development and sends to endpoint in production
  
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`);
  }

  // Send to analytics endpoint (replace with your own)
  if (navigator.sendBeacon) {
    const data = JSON.stringify(metric);
    navigator.sendBeacon('/api/metrics', data);
  }
};

/**
 * Largest Contentful Paint (LCP)
 * Good: < 2.5s
 * Needs improvement: 2.5s - 4s
 * Poor: > 4s
 */
export const trackLCP = (callback: (metric: WebVitalsMetric) => void) => {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        const metric: WebVitalsMetric = {
          name: 'LCP',
          value: lastEntry.renderTime || lastEntry.loadTime,
          rating: getRating('LCP', lastEntry.renderTime || lastEntry.loadTime),
          delta: 0,
          id: `lcp-${Date.now()}`,
        };
        
        callback(metric);
        sendMetric(metric);
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP tracking not supported', e);
    }
  }
};

/**
 * First Input Delay (FID) / Interaction to Next Paint (INP)
 * Good: < 100ms
 * Needs improvement: 100ms - 300ms
 * Poor: > 300ms
 */
export const trackFID = (callback: (metric: WebVitalsMetric) => void) => {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        
        entries.forEach((entry) => {
          const metric: WebVitalsMetric = {
            name: 'FID',
            value: (entry as any).processingDuration,
            rating: getRating('FID', (entry as any).processingDuration),
            delta: 0,
            id: `fid-${Date.now()}`,
          };
          
          callback(metric);
          sendMetric(metric);
        });
      });

      observer.observe({ entryTypes: ['first-input', 'longest-interaction'] });
    } catch (e) {
      console.warn('FID tracking not supported', e);
    }
  }
};

/**
 * Cumulative Layout Shift (CLS)
 * Good: < 0.1
 * Needs improvement: 0.1 - 0.25
 * Poor: > 0.25
 */
export const trackCLS = (callback: (metric: WebVitalsMetric) => void) => {
  if ('PerformanceObserver' in window) {
    try {
      let clsValue = 0;

      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            
            const metric: WebVitalsMetric = {
              name: 'CLS',
              value: clsValue,
              rating: getRating('CLS', clsValue),
              delta: (entry as any).value,
              id: `cls-${Date.now()}`,
            };
            
            callback(metric);
            sendMetric(metric);
          }
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS tracking not supported', e);
    }
  }
};

/**
 * First Contentful Paint (FCP)
 * Good: < 1.8s
 * Needs improvement: 1.8s - 3s
 * Poor: > 3s
 */
export const trackFCP = (callback: (metric: WebVitalsMetric) => void) => {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        const metric: WebVitalsMetric = {
          name: 'FCP',
          value: lastEntry.startTime,
          rating: getRating('FCP', lastEntry.startTime),
          delta: 0,
          id: `fcp-${Date.now()}`,
        };
        
        callback(metric);
        sendMetric(metric);
      });

      observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('FCP tracking not supported', e);
    }
  }
};

/**
 * Time to First Byte (TTFB)
 * Good: < 800ms
 * Needs improvement: 800ms - 1.8s
 * Poor: > 1.8s
 */
export const trackTTFB = (callback: (metric: WebVitalsMetric) => void) => {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        const responseStart = (lastEntry as any).responseStart || 0;
        const fetchStart = (lastEntry as any).fetchStart || 0;
        const ttfb = responseStart - fetchStart;
        
        const metric: WebVitalsMetric = {
          name: 'TTFB',
          value: ttfb,
          rating: getRating('TTFB', ttfb),
          delta: 0,
          id: `ttfb-${Date.now()}`,
        };
        
        callback(metric);
        sendMetric(metric);
      });

      observer.observe({ entryTypes: ['navigation'] });
    } catch (e) {
      console.warn('TTFB tracking not supported', e);
    }
  }
};

/**
 * Determine rating based on metric name and value
 */
const getRating = (metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const thresholds: Record<string, { good: number; improvement: number }> = {
    LCP: { good: 2500, improvement: 4000 },
    FID: { good: 100, improvement: 300 },
    CLS: { good: 0.1, improvement: 0.25 },
    FCP: { good: 1800, improvement: 3000 },
    TTFB: { good: 800, improvement: 1800 },
  };

  const threshold = thresholds[metricName];
  if (!threshold) return 'poor';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.improvement) return 'needs-improvement';
  return 'poor';
};

/**
 * Initialize all Web Vitals tracking
 */
export const initWebVitals = () => {
  const metricsCollected: Record<string, WebVitalsMetric> = {};

  const handleMetric = (metric: WebVitalsMetric) => {
    metricsCollected[metric.name] = metric;
  };

  trackFCP(handleMetric);
  trackLCP(handleMetric);
  trackFID(handleMetric);
  trackCLS(handleMetric);
  trackTTFB(handleMetric);

  // Return function to get collected metrics
  return () => metricsCollected;
};
