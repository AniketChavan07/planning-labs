import ServicePage from '../../components/services/ServicePage';

export default function MICE() {
  return (
    <ServicePage
      title="MICE"
      tagline="Meetings, Incentives, Conferences & Exhibitions — we manage them all with precision, creativity, and white-glove service."
      description="The MICE segment demands a unique blend of logistics mastery, hospitality excellence, and creative programming. We've managed MICE events for Fortune 500 companies, government bodies, and global associations — delivering seamless experiences that motivate, educate, and connect."
      heroImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#0D9488"
      seoDescription="MICE event management — meetings, incentive trips, conferences, and exhibitions planned and executed globally."
      stats={[
        { value: '100+', label: 'MICE Programs' },
        { value: '40+', label: 'Countries Visited' },
        { value: '25K+', label: 'Delegates Served' },
        { value: '99%', label: 'On-Time Delivery' },
      ]}
      features={[
        { title: 'Corporate Meetings & Retreats', description: 'Board meetings, leadership offsites, and team retreats across India and globally.' },
        { title: 'Incentive Travel', description: 'Reward-worthy travel programs that motivate and retain top performers.' },
        { title: 'Conference Management', description: 'End-to-end management of multi-day conferences with multiple tracks and speakers.' },
        { title: 'Exhibition Management', description: 'Trade show and expo management including booth design, logistics, and staffing.' },
      ]}
      process={[
        { step: '01', title: 'Planning', description: 'Destination scouting, venue selection, agenda design, and budget modeling.' },
        { step: '02', title: 'Coordination', description: 'Vendor contracts, travel logistics, accommodation, and delegate communications.' },
        { step: '03', title: 'Execution', description: 'On-ground team ensuring every moment runs on schedule and to spec.' },
        { step: '04', title: 'Reporting', description: 'Comprehensive post-event ROI analysis and attendee feedback reports.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
