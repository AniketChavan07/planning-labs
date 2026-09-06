import ServicePage from '../../components/services/ServicePage';

export default function CreativeDesign() {
  return (
    <ServicePage
      title="Creative Design"
      tagline="Design that does more than look good — it communicates, persuades, and sells. Brand identity, campaigns, and visual storytelling at the highest level."
      description="Our creative studio handles everything from brand identity creation and campaign design to packaging, print, and digital creative. We combine strategic thinking with exceptional craft to produce design work that stands out in a crowded market and tells a clear, compelling brand story."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#DC2626"
      seoDescription="Creative design agency offering brand identity, campaign design, digital creative, and visual storytelling."
      stats={[
        { value: '300+', label: 'Brands Designed' },
        { value: '50+', label: 'Design Awards' },
        { value: '15+', label: 'Years of Craft' },
        { value: '98%', label: 'Client Retention' },
      ]}
      features={[
        { title: 'Brand Identity & Visual Systems', description: 'Logo, typography, colour, and comprehensive brand guidelines that scale.' },
        { title: 'Campaign Creative', description: 'Multi-channel campaign creative from concept to final artwork.' },
        { title: 'Digital & Social Creative', description: 'Platform-native creative assets for all digital channels and formats.' },
        { title: 'Print & Packaging', description: 'Exceptional print design for packaging, collateral, POS, and out-of-home.' },
      ]}
      process={[
        { step: '01', title: 'Discovery', description: 'Brand immersion, audience research, and competitive analysis.' },
        { step: '02', title: 'Concept', description: 'Multiple creative directions explored and presented for feedback.' },
        { step: '03', title: 'Refine', description: 'Selected concept refined through collaborative rounds of iteration.' },
        { step: '04', title: 'Deliver', description: 'Final files delivered in all required formats with a usage guide.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
