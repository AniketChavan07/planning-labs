import ServicePage from '../../components/services/ServicePage';

export default function SEO() {
  return (
    <ServicePage
      title="SEO"
      tagline="Rank higher. Get found. Grow organically. We build sustainable SEO strategies that deliver compounding, long-term results."
      description="We take a holistic approach to SEO — combining deep technical audits, high-quality content strategy, and powerful link building to drive organic traffic that converts. Our team has helped brands across e-commerce, SaaS, healthcare, and BFSI dominate their search categories."
      heroImage="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#16A34A"
      seoDescription="Full-service SEO agency offering technical SEO, content strategy, link building and local SEO services."
      stats={[
        { value: '300%', label: 'Avg Traffic Growth' },
        { value: '1st Page', label: 'Rankings Achieved' },
        { value: '60+', label: 'SEO Clients' },
        { value: '12M+', label: 'Keywords Ranked' },
      ]}
      features={[
        { title: 'Technical SEO Audits', description: 'Core Web Vitals, crawlability, indexation, schema markup and site architecture.' },
        { title: 'Content Strategy & Execution', description: 'Keyword research-driven content that ranks and converts — blogs, pillar pages, and more.' },
        { title: 'Link Building', description: 'High-DA, editorially-earned backlinks from authoritative websites in your industry.' },
        { title: 'Local & E-commerce SEO', description: 'Specialised strategies for local businesses and product catalogue optimisation.' },
      ]}
      process={[
        { step: '01', title: 'Audit', description: 'Comprehensive technical, content, and backlink audit to find every opportunity.' },
        { step: '02', title: 'Strategy', description: 'Custom roadmap with prioritised actions for fastest impact.' },
        { step: '03', title: 'Execute', description: 'On-page optimisation, content creation, and link acquisition.' },
        { step: '04', title: 'Track & Grow', description: 'Monthly reporting on rankings, traffic, and revenue attribution.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
