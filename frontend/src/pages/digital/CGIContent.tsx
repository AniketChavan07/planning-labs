import ServicePage from '../../components/services/ServicePage';

export default function CGIContent() {
  return (
    <ServicePage
      title="CGI & Digital Content"
      tagline="Hyper-real. Infinitely scalable. We create CGI and 3D digital content that makes the impossible look effortless."
      description="When reality isn't enough — or isn't available — we create it digitally. Our CGI and 3D team produces product visualisations, architectural renders, motion graphics, and full CGI commercials that are indistinguishable from live-action footage, at a fraction of the cost and timeline."
      heroImage="https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#6D28D9"
      seoDescription="CGI production, 3D animation, product visualisation, and digital content creation for brands and agencies."
      stats={[
        { value: '200+', label: 'CGI Projects' },
        { value: '50+', label: 'Brand Clients' },
        { value: '70%', label: 'Cost vs Live Action' },
        { value: '4K', label: 'Delivery Standard' },
      ]}
      features={[
        { title: 'Product CGI & Visualisation', description: 'Photo-realistic product renders and animations for e-commerce, ads, and launches.' },
        { title: 'CGI Commercials', description: 'Full CGI or hybrid live-action/CGI commercials that exceed live-shoot quality.' },
        { title: 'Architectural & Interior CGI', description: 'Stunning space visualisations for real estate, retail, and experiential design.' },
        { title: 'Motion Graphics & Animation', description: '2D and 3D motion graphics for brand storytelling and explainer content.' },
      ]}
      process={[
        { step: '01', title: 'Brief & Concept', description: 'Mood boards, reference gathering, and final creative direction approval.' },
        { step: '02', title: '3D Modelling', description: 'Asset creation, rigging, and scene composition in our 3D pipeline.' },
        { step: '03', title: 'Lighting & Rendering', description: 'Physically based rendering for ultra-realistic results with precise lighting.' },
        { step: '04', title: 'Post & Delivery', description: 'Compositing, grading, and delivery in all required formats and resolutions.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
