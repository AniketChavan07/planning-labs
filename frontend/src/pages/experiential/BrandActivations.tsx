import ServicePage from '../../components/services/ServicePage';

export default function BrandActivations() {
  return (
    <ServicePage
      title="Brand Activations"
      tagline="We create physical touchpoints where consumers don't just see your brand — they feel it, share it, and remember it forever."
      description="Brand activations are the art of bringing a brand to life through real-world interactions. We conceptualize, design, and execute activations that drive genuine emotional connections between your brand and your audience — generating viral social content, measurable brand uplift, and lasting impressions."
      heroImage="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#DC2626"
      seoDescription="Creative brand activation services including experiential marketing, pop-up experiences, and live brand events."
      stats={[
        { value: '80+', label: 'Activations Executed' },
        { value: '200%', label: 'Avg ROI Delivered' },
        { value: '50K+', label: 'Consumers Engaged' },
        { value: '5M+', label: 'Social Impressions' },
      ]}
      features={[
        { title: 'Pop-Up Brand Experiences', description: 'Temporary spaces that tell your brand story and drive footfall.' },
        { title: 'Sampling & Engagement Zones', description: 'Product sampling stations designed for maximum conversion and dwell time.' },
        { title: 'Guerrilla Marketing', description: 'Unexpected, disruptive activations that stop people in their tracks.' },
        { title: 'Social-First Design', description: 'Every activation is engineered to be shareable, hashtaggable, and viral.' },
      ]}
      process={[
        { step: '01', title: 'Strategy', description: 'Define objectives, KPIs, audience profiles, and activation territories.' },
        { step: '02', title: 'Creative', description: 'Concept development, experience design, and visual identity.' },
        { step: '03', title: 'Build', description: 'Fabrication, staffing, logistics, and vendor management.' },
        { step: '04', title: 'Measure', description: 'Real-time reporting, social listening, and post-activation analytics.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1533174000273-e114a14cb43a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
