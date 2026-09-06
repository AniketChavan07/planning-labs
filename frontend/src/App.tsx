import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Experiential from './pages/Experiential';
import Digital from './pages/Digital';
import OurWork from './pages/OurWork';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Careers from './pages/Careers';
import Insights from './pages/Insights';
import CaseStudies from './pages/CaseStudies';

// Digital sub-pages
import SocialMedia from './pages/digital/SocialMedia';
import PerformanceMarketing from './pages/digital/PerformanceMarketing';
import SEO from './pages/digital/SEO';
import InfluencerMarketing from './pages/digital/InfluencerMarketing';
import VideoProduction from './pages/digital/VideoProduction';
import WebsiteDevelopment from './pages/digital/WebsiteDevelopment';
import CreativeDesign from './pages/digital/CreativeDesign';
import CGIContent from './pages/digital/CGIContent';

import Events from './pages/experiential/Events';
import Exhibitions from './pages/experiential/Exhibitions';
import BrandActivations from './pages/experiential/BrandActivations';
import MICE from './pages/experiential/MICE';
import Conferences from './pages/experiential/Conferences';
import EmployeeEngagement from './pages/experiential/EmployeeEngagement';
import OutdoorAdvertising from './pages/experiential/OutdoorAdvertising';
import EventProduction from './pages/experiential/EventProduction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experiential-marketing" element={<Experiential />} />
          <Route path="digital-marketing" element={<Digital />} />

          {/* Experiential Marketing sub-routes */}
          <Route path="experiential/events" element={<Events />} />
          <Route path="experiential/exhibitions" element={<Exhibitions />} />
          <Route path="experiential/brand-activations" element={<BrandActivations />} />
          <Route path="experiential/mice" element={<MICE />} />
          <Route path="experiential/conferences" element={<Conferences />} />
          <Route path="experiential/employee-engagement" element={<EmployeeEngagement />} />
          <Route path="experiential/outdoor-advertising" element={<OutdoorAdvertising />} />
          <Route path="experiential/event-production" element={<EventProduction />} />

          {/* Digital Marketing sub-routes */}
          <Route path="digital/social-media" element={<SocialMedia />} />
          <Route path="digital/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="digital/seo" element={<SEO />} />
          <Route path="digital/influencer-marketing" element={<InfluencerMarketing />} />
          <Route path="digital/video-production" element={<VideoProduction />} />
          <Route path="digital/website-development" element={<WebsiteDevelopment />} />
          <Route path="digital/creative-design" element={<CreativeDesign />} />
          <Route path="digital/cgi-content" element={<CGIContent />} />

          <Route path="our-work" element={<OurWork />} />
          <Route path="our-work/:id" element={<ProjectDetail />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="insights" element={<Insights />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
