import ServicePage from '../../components/services/ServicePage';

export default function WebsiteDevelopment() {
  return (
    <ServicePage
      title="Website Development"
      tagline="Your website is your most important salesperson. We build fast, beautiful, conversion-optimised websites that work as hard as your team."
      description="We design and develop websites that combine stunning visual design with exceptional technical performance. From marketing microsites to complex e-commerce platforms and enterprise portals, we build digital products that load fast, look incredible, and convert visitors into customers."
      heroImage="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#0369A1"
      seoDescription="Website design and development services including landing pages, e-commerce, and enterprise web applications."
      stats={[
        { value: '200+', label: 'Websites Launched' },
        { value: '99.9%', label: 'Uptime Guarantee' },
        { value: '< 2s', label: 'Avg Page Load Time' },
        { value: '40%', label: 'Avg Conversion Increase' },
      ]}
      features={[
        { title: 'UX & UI Design', description: 'Research-led design that prioritises user experience and conversion at every step.' },
        { title: 'React & Next.js Development', description: 'Modern, performant frontend development with the latest frameworks.' },
        { title: 'E-commerce Development', description: 'Custom and Shopify/WooCommerce stores optimised for maximum sales.' },
        { title: 'CMS & Headless Architecture', description: 'Content management systems that empower your team to update without a developer.' },
      ]}
      process={[
        { step: '01', title: 'Discovery', description: 'Stakeholder workshops, competitor benchmarking, and sitemap planning.' },
        { step: '02', title: 'Design', description: 'Wireframes, high-fidelity UI mockups, and interactive prototypes.' },
        { step: '03', title: 'Develop', description: 'Agile development with regular QA, testing, and client review checkpoints.' },
        { step: '04', title: 'Launch & Support', description: 'Smooth deployment, training, and ongoing maintenance & support packages.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
