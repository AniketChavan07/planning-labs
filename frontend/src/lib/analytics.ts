// Google Analytics 4 - Event Tracking Helpers
// Replace GA_MEASUREMENT_ID with your actual G-XXXXXXXXXX ID

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your GA4 ID

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/** Track a page view */
export function trackPageView(url: string, title: string) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title,
  });
}

/** Track a custom event */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Conversion event helpers
export const ga = {
  /** Fire when contact form is submitted */
  contactFormSubmit: () =>
    trackEvent('form_submit', 'Contact', 'Contact Form Submission'),

  /** Fire when job application is submitted */
  jobApplicationSubmit: (jobTitle: string) =>
    trackEvent('form_submit', 'Careers', `Applied for ${jobTitle}`),

  /** Fire when WhatsApp button is clicked */
  whatsappClick: () =>
    trackEvent('click', 'WhatsApp', 'WhatsApp Float Button'),

  /** Fire when call button is clicked */
  callClick: () =>
    trackEvent('click', 'CTA', 'Click-to-Call'),

  /** Fire when a project case study is opened */
  projectView: (projectName: string) =>
    trackEvent('view_item', 'Portfolio', projectName),

  /** Fire when a service page is visited */
  serviceView: (serviceName: string) =>
    trackEvent('view_item', 'Service', serviceName),
};
