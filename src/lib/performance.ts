// Performance monitoring utilities

/**
 * Measure performance of a function
 */
export function measurePerformance(
  label: string,
  fn: () => void | Promise<void>
): void | Promise<void> {
  const start = performance.now();

  const result = fn();

  if (result instanceof Promise) {
    return result.finally(() => {
      const end = performance.now();
      const duration = end - start;
      console.log(`⏱️ ${label}: ${duration.toFixed(2)}ms`);
    });
  } else {
    const end = performance.now();
    const duration = end - start;
    console.log(`⏱️ ${label}: ${duration.toFixed(2)}ms`);
  }
}

/**
 * Get current Core Web Vitals thresholds
 */
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 }, // Largest Contentful Paint
  FID: { good: 100, needsImprovement: 300 }, // First Input Delay
  CLS: { good: 0.1, needsImprovement: 0.25 }, // Cumulative Layout Shift
  FCP: { good: 1800, needsImprovement: 3000 }, // First Contentful Paint
  TTFB: { good: 800, needsImprovement: 1800 }, // Time to First Byte
  INP: { good: 200, needsImprovement: 500 }, // Interaction to Next Paint
};

/**
 * Check if metric is good, needs improvement, or poor
 */
export function getMetricStatus(
  metricName: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const threshold = WEB_VITALS_THRESHOLDS[metricName as keyof typeof WEB_VITALS_THRESHOLDS];

  if (!threshold) return 'poor';
  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

/**
 * Send performance data to analytics
 */
export async function sendPerformanceData(
  endpoint: string,
  data: Record<string, any>
): Promise<void> {
  if (!navigator.sendBeacon) {
    console.warn('sendBeacon not supported');
    return;
  }

  try {
    navigator.sendBeacon(endpoint, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to send performance data:', error);
  }
}

/**
 * Log performance data in development
 */
export function logPerformanceData(data: Record<string, any>): void {
  if (import.meta.env.DEV) {
    console.table(data);
  }
}

/**
 * Get PerformanceObserverEntryList compatibility check
 */
export function isPerformanceObserverSupported(): boolean {
  return 'PerformanceObserver' in window && 'PerformanceObserverEntryList' in window;
}
