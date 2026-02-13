type WebVitalsMetric = {
  name: string;
  value: number;
  id: string;
};

type WebVitalsCallback = (cb: (metric: WebVitalsMetric) => void) => void;

const reportWebVitals = (onPerfEntry?: (metric: WebVitalsMetric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((webVitalsModule) => {
      const api = webVitalsModule as unknown as Partial<Record<string, WebVitalsCallback>>;

      if (api.onCLS && api.onFCP && api.onINP && api.onLCP && api.onTTFB) {
        api.onCLS(onPerfEntry);
        api.onFCP(onPerfEntry);
        api.onINP(onPerfEntry);
        api.onLCP(onPerfEntry);
        api.onTTFB(onPerfEntry);
        return;
      }

      api.getCLS?.(onPerfEntry);
      api.getFID?.(onPerfEntry);
      api.getFCP?.(onPerfEntry);
      api.getLCP?.(onPerfEntry);
      api.getTTFB?.(onPerfEntry);
    });
  }
};

export default reportWebVitals;
