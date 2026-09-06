import ServicePage from '../../components/services/ServicePage';

export default function Exhibitions() {
  return (
    <ServicePage
      title="Exhibitions & Stall Design"
      tagline="We don't just build booths — we build brand worlds. Award-winning exhibition stands that command attention and convert visitors into leads."
      description="Our exhibitions team combines spatial design, brand strategy, and fabrication expertise to create exhibition stands that become the highlight of any trade show or expo floor. From concept sketches to final fabrication and installation, we handle everything with precision and creativity."
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#0891B2"
      seoDescription="Exhibition stand design and fabrication services for trade shows, expos, and brand activations."
      stats={[
        { value: '150+', label: 'Stands Built' },
        { value: '50+', label: 'Trade Shows' },
        { value: '30+', label: 'Industry Verticals' },
        { value: '3x', label: 'Avg Lead Increase' },
      ]}
      features={[
        { title: 'Spatial Design & Architecture', description: 'Custom stand designs that maximize impact within your allocated footprint.' },
        { title: 'Brand Integration', description: 'Every element reinforces your brand identity and key messages.' },
        { title: 'Fabrication & Build', description: 'In-house fabrication ensures quality control from blueprint to build.' },
        { title: 'Technology Integration', description: 'Interactive screens, AR/VR, LED walls, and product demo stations.' },
      ]}
      process={[
        { step: '01', title: 'Brief', description: 'Understanding your brand, audience, objectives, and stand specifications.' },
        { step: '02', title: 'Design', description: '3D renders and walkthroughs before a single bolt is tightened.' },
        { step: '03', title: 'Fabricate', description: 'Expert in-house fabrication with rigorous quality assurance.' },
        { step: '04', title: 'Install', description: 'Full installation, on-show support, and post-event dismantling.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1540039155732-68473678c96e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
