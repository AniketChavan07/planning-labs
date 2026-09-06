import SEO from '../components/seo/SEO';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturedWork from '../components/home/FeaturedWork';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import EventGalleryMarquee from '../components/home/EventGalleryMarquee';
import IndustriesLogos from '../components/home/IndustriesLogos';
import Testimonials from '../components/home/Testimonials';
import LatestInsights from '../components/home/LatestInsights';
import CareersPreview from '../components/home/CareersPreview';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <>
      <SEO />
      <div className="overflow-hidden">
        {/* 1. Hero — Full-screen video background */}
        <HeroSection />

        {/* 2. About Planning Labs */}
        <AboutSection />

        {/* 3. Services — Experiential & Digital tabs */}
        <ServicesOverview />

        {/* 4. Our Work — Featured projects showcase */}
        <FeaturedWork />

        {/* 5. Event Gallery Marquee */}
        <EventGalleryMarquee />

        {/* 6. Case Studies */}
        <CaseStudiesPreview />

        {/* 7. Client Logos */}
        <IndustriesLogos />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. Blog / Insights */}
        <LatestInsights />

        {/* 10. Careers */}
        <CareersPreview />

        {/* 11. Contact / CTA */}
        <ContactSection />
      </div>
    </>
  );
}
