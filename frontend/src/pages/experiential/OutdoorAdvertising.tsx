import ServicePage from '../../components/services/ServicePage';

export default function OutdoorAdvertising() {
  return (
    <ServicePage
      title="Outdoor Advertising"
      tagline="We turn public spaces into brand conversations. OOH campaigns that stop traffic, spark curiosity, and build massive brand recall."
      description="Outdoor advertising is one of the most powerful and unavoidable brand touchpoints. We plan, design, and execute OOH campaigns — from traditional billboards and hoardings to dynamic digital signage, transit wraps, and experiential street installations — that make your brand impossible to ignore."
      heroImage="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#EA580C"
      seoDescription="Outdoor advertising and OOH marketing services including billboards, digital signage, transit advertising, and street installations."
      stats={[
        { value: '500+', label: 'OOH Campaigns' },
        { value: '100+', label: 'Cities Covered' },
        { value: '1B+', label: 'Impressions Delivered' },
        { value: '60%', label: 'Avg Brand Recall Lift' },
      ]}
      features={[
        { title: 'Billboard & Hoarding Design', description: 'High-impact visuals designed for distance and dwell-time readability.' },
        { title: 'Digital Out-of-Home (DOOH)', description: 'Dynamic, targeted digital billboard campaigns with real-time content updates.' },
        { title: 'Transit & Metro Advertising', description: 'Bus wraps, metro panels, and airport advertising for maximum urban reach.' },
        { title: 'Ambient & Street Installations', description: 'Creative, unconventional placements that generate organic social conversation.' },
      ]}
      process={[
        { step: '01', title: 'Mapping', description: 'Audience mapping, location analysis, and media plan creation.' },
        { step: '02', title: 'Creative', description: 'High-impact outdoor creative designed for each format and location.' },
        { step: '03', title: 'Buying', description: 'Media buying, vendor negotiations, and permit management.' },
        { step: '04', title: 'Monitoring', description: 'Site verification, impact tracking, and campaign reporting.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1523987893049-8d46cc2bb1e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1562158079-e3de1f7b2c12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
