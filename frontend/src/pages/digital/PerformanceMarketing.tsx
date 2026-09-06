import ServicePage from '../../components/services/ServicePage';

export default function PerformanceMarketing() {
  return (
    <ServicePage
      title="Performance Marketing"
      tagline="Every rupee accountable. We run paid media campaigns engineered for maximum ROI — across Google, Meta, programmatic, and beyond."
      description="We are a performance marketing agency that lives and breathes data. Our team of certified specialists manages paid search, paid social, programmatic display, and shopping campaigns with a relentless focus on cost-per-acquisition, ROAS, and revenue growth. No vanity metrics. Just results."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#2563EB"
      seoDescription="Performance marketing agency specialising in Google Ads, Meta Ads, programmatic, and full-funnel paid media."
      stats={[
        { value: '₹50Cr+', label: 'Ad Spend Managed' },
        { value: '400%', label: 'Avg ROAS Delivered' },
        { value: '60%', label: 'Avg CPA Reduction' },
        { value: '100+', label: 'Campaigns Live' },
      ]}
      features={[
        { title: 'Google & Meta Ads', description: 'Expert campaign management across Search, Display, Shopping, YouTube, and Meta.' },
        { title: 'Programmatic Display', description: 'Data-driven display and video buying across premium inventory at scale.' },
        { title: 'Conversion Rate Optimisation', description: 'Landing page testing and funnel optimisation to maximise every click.' },
        { title: 'Real-Time Reporting Dashboard', description: 'Live performance dashboards so you always know exactly where your money is going.' },
      ]}
      process={[
        { step: '01', title: 'Audit & Strategy', description: 'Full audit of existing accounts and competitive landscape analysis.' },
        { step: '02', title: 'Setup & Launch', description: 'Campaign architecture, audience building, creative assets, and tracking setup.' },
        { step: '03', title: 'Optimise Daily', description: 'Bid management, audience refinement, and creative rotation every single day.' },
        { step: '04', title: 'Scale & Report', description: 'Scaled budgets on winning campaigns with weekly executive reporting.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
