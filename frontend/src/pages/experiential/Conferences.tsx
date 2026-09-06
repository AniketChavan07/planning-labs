import ServicePage from '../../components/services/ServicePage';

export default function Conferences() {
  return (
    <ServicePage
      title="Conferences & Product Launches"
      tagline="When you need the world to pay attention, we build the stage. High-impact launches and landmark conferences that define industries."
      description="A great product launch or conference can shift perception, ignite a market, and create moments that people talk about for years. We specialise in creating those moments — combining compelling narrative design, technical production mastery, and flawless logistics to deliver events that exceed expectations."
      heroImage="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#7C3AED"
      seoDescription="Conference management and product launch event services — from keynote stages to media events."
      stats={[
        { value: '75+', label: 'Product Launches' },
        { value: '120+', label: 'Conferences' },
        { value: '1B+', label: 'Media Reach' },
        { value: '50+', label: 'Industries Served' },
      ]}
      features={[
        { title: 'Keynote Stage Design', description: 'Dramatic stage environments that make every speaker look extraordinary.' },
        { title: 'Product Reveal Experiences', description: 'Engineered reveals with lighting, audio, and visual drama for maximum impact.' },
        { title: 'Media & Press Management', description: 'Dedicated media zones, press kits, and journalist coordination.' },
        { title: 'Hybrid Event Production', description: 'Simultaneous in-person and online conference production with global reach.' },
      ]}
      process={[
        { step: '01', title: 'Narrative', description: 'We help craft the story your launch or conference needs to tell.' },
        { step: '02', title: 'Design', description: 'Stage, set, environment, and attendee journey design.' },
        { step: '03', title: 'Rehearsal', description: 'Rigorous technical and speaker rehearsals for a flawless show.' },
        { step: '04', title: 'Showtime', description: 'Live event execution with our experienced production directors on-site.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
