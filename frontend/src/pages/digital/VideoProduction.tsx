import ServicePage from '../../components/services/ServicePage';

export default function VideoProduction() {
  return (
    <ServicePage
      title="Video & Commercial Production"
      tagline="Stories that stop the scroll. We produce brand films, TVCs, and digital video content that captivates audiences and drives action."
      description="From a 6-second pre-roll to a 3-minute brand manifesto — we handle every stage of video production in-house. Our production team combines creative storytelling, cinematic technique, and platform-native thinking to produce video content that performs across every screen and format."
      heroImage="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
      accentColor="#7C3AED"
      seoDescription="Video production services including brand films, TVCs, digital ad production, and social video content."
      stats={[
        { value: '500+', label: 'Videos Produced' },
        { value: '1B+', label: 'Total Views' },
        { value: '50+', label: 'Brand Partners' },
        { value: '20+', label: 'Awards Won' },
      ]}
      features={[
        { title: 'Brand Films & Manifestos', description: 'Cinematic brand storytelling that defines who you are and what you stand for.' },
        { title: 'TVC & OTT Commercials', description: 'Television and OTT commercials produced to broadcast-grade standards.' },
        { title: 'Digital & Social Video', description: 'Short-form, platform-native video content for Instagram, YouTube, and beyond.' },
        { title: 'Product & Demo Videos', description: 'Compelling product videos that showcase features and drive purchase intent.' },
      ]}
      process={[
        { step: '01', title: 'Pre-Production', description: 'Script, storyboard, casting, location scouting, and shoot planning.' },
        { step: '02', title: 'Production', description: 'Full crew shoot with our in-house directors, DPs, and production team.' },
        { step: '03', title: 'Post-Production', description: 'Edit, colour grade, VFX, motion graphics, and sound design.' },
        { step: '04', title: 'Deliver & Deploy', description: 'Platform-optimised exports and deployment support across all channels.' },
      ]}
      galleryImages={[
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]}
    />
  );
}
