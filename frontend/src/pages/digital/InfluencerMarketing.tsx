import ServicePage from '../../components/services/ServicePage';

export default function InfluencerMarketing() {
  return (
    <ServicePage
      title="Influencer Marketing"
      tagline="Authentic voices. Real impact. We connect your brand with the right creators to build trust, awareness, and conversion at scale."
      description="We manage end-to-end influencer marketing — from identifying and vetting the right creators to briefing, content approval, publishing, and performance tracking. Our creator network spans mega, macro, micro, and nano influencers across every category in India and globally."
      heroImage="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#DB2777"
      seoDescription="Influencer marketing agency with access to thousands of verified creators across Instagram, YouTube, and emerging platforms."
      stats={[
        { value: '5000+', label: 'Creator Network' },
        { value: '500M+', label: 'Combined Reach' },
        { value: '8x', label: 'Avg Earned Media Value' },
        { value: '85%', label: 'Campaign Renewal Rate' },
      ]}
      features={[
        { title: 'Creator Discovery & Vetting', description: 'AI-powered creator matching with fraud detection and audience quality analysis.' },
        { title: 'Campaign Management', description: 'End-to-end management — briefing, contracts, approvals, and publishing.' },
        { title: 'Long-Term Brand Partnerships', description: 'Sustained ambassador programs that build genuine brand association.' },
        { title: 'Performance & ROI Tracking', description: 'Real-time dashboards tracking reach, engagement, clicks, and conversions.' },
      ]}
      process={[
        { step: '01', title: 'Brief & Match', description: 'Translate your campaign objectives into a precise creator profile and shortlist.' },
        { step: '02', title: 'Outreach & Contracts', description: 'Negotiation, contracting, and onboarding managed by our team.' },
        { step: '03', title: 'Create & Approve', description: 'Content briefing, review, and approval process ensuring brand alignment.' },
        { step: '04', title: 'Publish & Measure', description: 'Coordinated content drops and real-time performance reporting.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
