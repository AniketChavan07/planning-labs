import ServicePage from '../../components/services/ServicePage';

export default function Events() {
  return (
    <ServicePage
      title="Events"
      tagline="From intimate brand moments to 50,000-person festivals — we design, produce, and deliver events that define moments in culture."
      description="We are a full-service event management company that handles every dimension of your event — concept, venue, production, logistics, on-ground operations, and post-event reporting. Whether it's a product launch, a cultural festival, a gala dinner, or a brand experience, we bring the same level of craft and obsession to every project."
      heroImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#7C3AED"
      seoDescription="Professional event management services including concerts, brand events, galas, product launches and more."
      stats={[
        { value: '200+', label: 'Events Delivered' },
        { value: '5M+', label: 'Audience Reached' },
        { value: '12', label: 'Years Experience' },
        { value: '98%', label: 'Client Satisfaction' },
      ]}
      features={[
        { title: 'End-to-End Event Management', description: 'Concept to execution — we manage every detail so you can focus on your guests.' },
        { title: 'Venue Scouting & Design', description: 'We find and transform spaces into worlds that reflect your brand identity.' },
        { title: 'A/V & Technical Production', description: 'State-of-the-art sound, lighting, and visual production for every scale.' },
        { title: 'On-Ground Operations', description: 'Experienced event managers ensuring flawless day-of execution.' },
      ]}
      process={[
        { step: '01', title: 'Discovery', description: 'Deep dive into your objectives, audience, brand, and budget.' },
        { step: '02', title: 'Concept', description: 'We ideate and present a full creative concept for your approval.' },
        { step: '03', title: 'Production', description: 'We build every element — sets, tech, logistics, vendor coordination.' },
        { step: '04', title: 'Delivery', description: 'Flawless on-ground execution and comprehensive post-event reporting.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
