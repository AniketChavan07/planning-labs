import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Calendar, Users, TrendingUp, Star, CheckCircle2 } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { projects } from '../data/projects';

const filters = ['All', 'Experiential', 'Digital', 'Events', 'Exhibitions', 'Activations', 'Campaigns'];

const stats = [
  { value: '200+', label: 'Events Produced', icon: Calendar },
  { value: '50+', label: 'Brand Partners', icon: Star },
  { value: '5M+', label: 'Lives Touched', icon: Users },
  { value: '15+', label: 'Industry Awards', icon: TrendingUp },
];

// Featured showcase items — text + video/image side by side
const showcases = [
  {
    id: 'festival',
    category: 'Festival & Live Events',
    title: 'Neon Nights Festival',
    client: 'Red Bull',
    clientLogo: 'https://logo.clearbit.com/redbull.com',
    location: 'Mumbai, India',
    year: '2023',
    description: 'We produced a 12,000-capacity underground electronic music festival for Red Bull — transforming a raw outdoor space into a neon-lit, fully branded world of immersive experiences.',
    highlights: ['12,000+ Attendees', '500+ Custom Neon Installations', '3M+ Social Media Impressions', '360° LED Stage Mapping'],
    video: 'https://videos.pexels.com/video-files/2795750/2795750-hd_1920_1080_30fps.mp4',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    accent: '#7C3AED',
    flip: false,
  },
  {
    id: 'corporate',
    category: 'Corporate Events',
    title: 'Spark Summit 2024',
    client: 'TCS',
    clientLogo: 'https://logo.clearbit.com/tcs.com',
    location: 'Bangalore, India',
    year: '2024',
    description: 'A flagship tech summit for 8,000+ delegates across 50 countries. We designed, built and operated the full event — from 5 simultaneous stage productions to global livestream broadcast.',
    highlights: ['8,000+ Delegates', '50+ Countries Live', '5 Simultaneous Stages', '98% Delegate Satisfaction'],
    video: 'https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_25fps.mp4',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    accent: '#2563EB',
    flip: true,
  },
  {
    id: 'activation',
    category: 'Brand Activations',
    title: 'Dream Activation Tour',
    client: 'Dream11',
    clientLogo: 'https://logo.clearbit.com/dream11.com',
    location: 'Pan-India — 5 Cities',
    year: '2023',
    description: 'A travelling cricket fan zone experience spanning 5 IPL host cities in 30 days. We built a modular activation kit that could transform any public space into an immersive brand world in under 4 hours.',
    highlights: ['50,000+ Fans Reached', '5 Cities in 30 Days', 'Mobile Activation Kit', '200% ROI on Ad Spend'],
    video: 'https://videos.pexels.com/video-files/3194277/3194277-hd_1920_1080_25fps.mp4',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    accent: '#DC2626',
    flip: false,
  },
  {
    id: 'concert',
    category: 'Concert & Music Events',
    title: 'Beats & Brands Tour',
    client: 'Spotify',
    clientLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png',
    location: 'Mumbai, India',
    year: '2024',
    description: 'Three nights of live music at MMRDA Grounds, Mumbai. We co-created a concert series with Spotify and their artists — weaving real-time data visualizations and brand stories into the stage design.',
    highlights: ['20,000+ Live Audience', '10M+ Stream Views', '3-Night Concert Series', 'Best Live Event Award 2024'],
    video: 'https://videos.pexels.com/video-files/1797718/1797718-hd_1920_1080_25fps.mp4',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    accent: '#16A34A',
    flip: true,
  },
];

function ShowcasePanel({ item }: { item: typeof showcases[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/60`}
    >
      {/* Video / Media side */}
      <div className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] overflow-hidden ${item.flip ? 'lg:order-2' : 'lg:order-1'}`}>
        {/* Poster image always visible */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Video overlay (shown when playing) */}

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />


        {/* Category chip */}
        <div className="absolute top-6 left-6 pointer-events-none">
          <span
            className="text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full"
            style={{ backgroundColor: `${item.accent}CC`, backdropFilter: 'blur(8px)' }}
          >
            {item.category}
          </span>
        </div>

        {/* Bottom location */}
        <div className="absolute bottom-6 left-6 pointer-events-none">
          <p className="flex items-center gap-1.5 text-white/70 text-xs font-medium">
            <MapPin size={12} /> {item.location} · {item.year}
          </p>
        </div>
      </div>

      {/* Text side */}
      <div className={`flex flex-col justify-center p-8 lg:p-12 ${item.flip ? 'lg:order-1' : 'lg:order-2'}`}>
        {/* Client */}
        <div className="flex items-center gap-3 mb-8">
          <div 
            className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border border-white/10"
            style={{ backgroundColor: item.accent }}
          >
            {item.client.charAt(0)}
          </div>
          <span className="text-neutral-300 text-base font-semibold tracking-wide">{item.client}</span>
        </div>

        <h3 className="font-display font-bold text-3xl lg:text-4xl text-foreground leading-tight mb-4">
          {item.title}
        </h3>
        <p className="text-neutral-400 text-base leading-relaxed mb-8">
          {item.description}
        </p>

        {/* Highlights */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-neutral-300">
              <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: item.accent }} />
              {h}
            </li>
          ))}
        </ul>

        <Link
          to={`/our-work/${item.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold group self-start px-6 py-3 rounded-full border transition-all duration-300"
          style={{ color: item.accent, borderColor: `${item.accent}50` }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = `${item.accent}15`)}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          View Full Case Study
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (project.category === activeFilter) return true;
    if (project.subCategories.includes(activeFilter)) return true;
    return project.category.includes(activeFilter) || project.subCategories.some(sub => sub.includes(activeFilter));
  });

  return (
    <div className="bg-background min-h-screen">
      <SEO
        title="Our Work | Planning Labs"
        description="Explore Planning Labs' portfolio of world-class festivals, corporate summits, brand activations, and digital campaigns."
      />

      {/* Hero Banner */}
      <div className="relative h-[65vh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
            alt="Our Work Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block"
          >
            Our Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-6xl md:text-8xl tracking-tighter text-foreground mb-6 leading-none"
          >
            Work That<br />Moves People.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-400 max-w-2xl"
          >
            From massive festivals to intimate brand moments — every project is a story of ambition, craft, and impact.
          </motion.p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-y border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 px-6 py-6 md:py-8"
              >
                <stat.icon size={22} className="text-accent shrink-0" />
                <div>
                  <p className="font-display font-bold text-2xl md:text-3xl text-foreground">{stat.value}</p>
                  <p className="text-neutral-500 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SHOWCASE SECTIONS (Video + Text) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 space-y-8">
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Featured Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-foreground"
          >
            Events Across Every Category
          </motion.h2>
        </div>

        {showcases.map((item, index) => (
          <ShowcasePanel key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* ── ALL PROJECTS GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Full Portfolio</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-foreground">All Projects</h2>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${activeFilter === filter
                    ? 'bg-accent text-white border-accent shadow-lg shadow-accent/30'
                    : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-400 hover:text-foreground'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to={`/our-work/${project.id}`} className="block">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Arrow button */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={hoveredId === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.2 }}
                        className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow"
                      >
                        <ArrowUpRight size={16} className="text-black" />
                      </motion.div>
                    </div>

                    {/* Location on hover */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="flex items-center gap-1.5 text-white/80 text-xs font-medium">
                        <MapPin size={11} />{project.location}
                      </span>
                      <span className="text-white/60 text-xs">{project.year}</span>
                    </div>
                  </div>

                  {/* Card Text */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">{project.client}</p>
                      <h3 className="font-display font-bold text-xl text-foreground group-hover:text-accent transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-neutral-500 text-xs mt-1.5">{project.industry}</p>
                    </div>
                    <div className="flex flex-col gap-1 shrink-0 mt-0.5 items-end">
                      {project.subCategories.slice(0, 2).map(sub => (
                        <span key={sub} className="text-neutral-500 text-xs border border-neutral-800 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-neutral-500">No projects found for the selected filter.</div>
        )}
      </div>

      {/* CTA Section */}
      <div className="border-t border-neutral-800 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-foreground mb-3">
              Ready to Create Something Epic?
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl">
              Let's talk about your next event, campaign, or activation.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-accent text-white hover:bg-accent-hover px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group shadow-lg shadow-accent/30"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
