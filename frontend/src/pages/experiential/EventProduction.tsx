import ServicePage from '../../components/services/ServicePage';

export default function EventProduction() {
  return (
    <ServicePage
      title="Event Production & Fabrication"
      tagline="We build the physical world your event lives in. Custom sets, stages, structures, and installations — fabricated in-house with obsessive attention to detail."
      description="Behind every great event is great production. Our in-house fabrication team brings creative concepts to physical reality — building custom stages, scenic sets, branded structures, and bespoke installations that are engineered to wow. From technical drawings to the final screw, every build is a testament to craft."
      heroImage="https://images.unsplash.com/photo-1540039155732-68473678c96e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#6D28D9"
      seoDescription="Event production and fabrication services including stage design, custom sets, LED installations, and full event technical production."
      stats={[
        { value: '300+', label: 'Productions Completed' },
        { value: '500K+', label: 'Sq Ft Built' },
        { value: '48hr', label: 'Fastest Turnaround' },
        { value: '0', label: 'Structural Failures' },
      ]}
      features={[
        { title: 'Stage & Set Design', description: 'Custom stage builds and scenic backdrops for events of every scale.' },
        { title: 'LED & Lighting Rigs', description: 'Complex lighting and LED wall installations with full programming.' },
        { title: 'Structural Fabrication', description: 'Steel, timber, and aluminium structures engineered for safety and aesthetics.' },
        { title: 'A/V Technical Production', description: 'Sound system design, operation, and full broadcast/live-stream setups.' },
      ]}
      process={[
        { step: '01', title: 'Concept', description: 'Technical design consultation translating your vision into buildable specs.' },
        { step: '02', title: 'Engineering', description: 'Structural engineering, 3D modelling, and technical approval.' },
        { step: '03', title: 'Fabrication', description: 'In-house fabrication with quality control at every stage.' },
        { step: '04', title: 'Install & Strike', description: 'Expert on-site installation, show operation, and post-event de-rig.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
