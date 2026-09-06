import ServicePage from '../../components/services/ServicePage';

export default function SocialMedia() {
  return (
    <ServicePage
      title="Social Media Management"
      tagline="We build brands in the feed. Strategic social media management that grows audiences, sparks conversations, and drives real business results."
      description="We manage your brand's presence across all major social platforms — Instagram, LinkedIn, X, YouTube, and more. From content strategy and creative production to community management and performance reporting, we do everything it takes to turn followers into fans and fans into customers."
      heroImage="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#E1306C"
      seoDescription="Professional social media management services — content strategy, creation, scheduling, and community management."
      stats={[
        { value: '50+', label: 'Brands Managed' },
        { value: '100M+', label: 'Total Reach' },
        { value: '8%', label: 'Avg Engagement Rate' },
        { value: '3x', label: 'Avg Follower Growth' },
      ]}
      features={[
        { title: 'Content Strategy & Calendars', description: 'Monthly content plans aligned with your brand voice and business goals.' },
        { title: 'Creative Production', description: 'In-house design and video team producing scroll-stopping content every day.' },
        { title: 'Community Management', description: 'Active moderation, comment response, and DM management that builds loyalty.' },
        { title: 'Analytics & Reporting', description: 'Weekly and monthly reports with actionable insights, not just vanity metrics.' },
      ]}
      process={[
        { step: '01', title: 'Audit', description: 'Full analysis of your current social presence, competitors, and audience.' },
        { step: '02', title: 'Strategy', description: 'Platform-specific strategy with content pillars, tone of voice, and KPIs.' },
        { step: '03', title: 'Create & Publish', description: 'Consistent, high-quality content published on an optimised schedule.' },
        { step: '04', title: 'Optimise', description: 'Continuous A/B testing and optimisation based on performance data.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
