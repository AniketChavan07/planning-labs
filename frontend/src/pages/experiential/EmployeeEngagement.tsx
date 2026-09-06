import ServicePage from '../../components/services/ServicePage';

export default function EmployeeEngagement() {
  return (
    <ServicePage
      title="Employee Engagement"
      tagline="Your most important audience is inside your building. We create internal events that inspire, motivate, and build the culture your brand runs on."
      description="Great companies are built on engaged employees. We design and deliver internal events — town halls, team-building offsites, annual days, awards ceremonies, and leadership summits — that make your people feel valued, aligned, and inspired. Because when your team believes in the brand, everything else follows."
      heroImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#D97706"
      seoDescription="Employee engagement events including annual days, team building, awards nights, and internal conferences."
      stats={[
        { value: '60+', label: 'Internal Events' },
        { value: '40+', label: 'Corporate Clients' },
        { value: '85%', label: 'Avg Engagement Uplift' },
        { value: '100K+', label: 'Employees Engaged' },
      ]}
      features={[
        { title: 'Annual Days & Gala Dinners', description: 'Memorable celebration events that reward and recognise your team.' },
        { title: 'Team Building Programs', description: 'Creative, collaborative, and fun experiences that build genuine bonds.' },
        { title: 'Town Halls & All-Hands Meetings', description: 'Impactful leadership communications at any scale, in-person or hybrid.' },
        { title: 'Awards & Recognition Ceremonies', description: 'Premium ceremony design that makes every award feel extraordinary.' },
      ]}
      process={[
        { step: '01', title: 'Culture Audit', description: 'Understanding your company values, team dynamics, and engagement goals.' },
        { step: '02', title: 'Experience Design', description: 'Tailored program design that aligns with your culture and objectives.' },
        { step: '03', title: 'Production', description: 'All logistics, A/V, food & beverage, entertainment, and decor handled.' },
        { step: '04', title: 'Follow-Through', description: 'Post-event surveys, sentiment analysis, and culture impact reporting.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1540039155732-68473678c96e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
