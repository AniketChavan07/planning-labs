import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Users, TrendingUp, Star } from 'lucide-react';

const featuredProjects = [
  {
    id: '1',
    title: 'Neon Nights Festival',
    client: 'Red Bull',
    category: 'Festival',
    tag: 'Experiential',
    location: 'Mumbai, India',
    year: '2023',
    description: 'A massive underground electronic music festival blending neon aesthetics with high-energy brand activations for 12,000+ attendees.',
    video: 'https://videos.pexels.com/video-files/2795750/2795750-hd_1920_1080_30fps.mp4',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90',
    stats: [
      { icon: Users, value: '12K+', label: 'Attendees' },
      { icon: TrendingUp, value: '3M+', label: 'Impressions' },
      { icon: Star, value: '25%', label: 'Brand Uplift' },
    ],
    color: 'from-purple-900/80 to-black/90'
  },
  {
    id: '2',
    title: 'Spark Summit 2024',
    client: 'TCS',
    category: 'Corporate Event',
    tag: 'Corporate',
    location: 'Bangalore, India',
    year: '2024',
    description: 'A flagship annual tech summit redefining corporate events with immersive technology demos, keynotes and global live-streaming.',
    video: 'https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_25fps.mp4',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90',
    stats: [
      { icon: Users, value: '8K+', label: 'Delegates' },
      { icon: TrendingUp, value: '50+', label: 'Countries' },
      { icon: Star, value: '98%', label: 'Satisfaction' },
    ],
    color: 'from-blue-900/80 to-black/90'
  },
  {
    id: '3',
    title: 'Dream Activation',
    client: 'Dream11',
    category: 'Brand Activation',
    tag: 'Activation',
    location: 'Delhi, India',
    year: '2023',
    description: 'A multi-city sports-themed brand activation creating immersive cricket fan zones across 5 IPL host cities simultaneously.',
    video: 'https://videos.pexels.com/video-files/3194277/3194277-hd_1920_1080_25fps.mp4',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90',
    stats: [
      { icon: Users, value: '50K+', label: 'Fans Reached' },
      { icon: TrendingUp, value: '5', label: 'Cities' },
      { icon: Star, value: '200%', label: 'ROI' },
    ],
    color: 'from-red-900/80 to-black/90'
  },
  {
    id: '4',
    title: 'Beats & Brands',
    client: 'Spotify',
    category: 'Concert Event',
    tag: 'Live Event',
    location: 'Mumbai, India',
    year: '2024',
    description: 'A first-of-its-kind concert series fusing live DJ sets with interactive brand storytelling, putting listeners at the center of the narrative.',
    video: 'https://videos.pexels.com/video-files/1797718/1797718-hd_1920_1080_25fps.mp4',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90',
    stats: [
      { icon: Users, value: '20K+', label: 'Live Audience' },
      { icon: TrendingUp, value: '10M+', label: 'Stream Views' },
      { icon: Star, value: 'Best Event', label: 'Award 2024' },
    ],
    color: 'from-green-900/80 to-black/90'
  },
];

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = featuredProjects[activeIndex];

  return (
    <section className="py-0 bg-background overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Our Portfolio</span>
            <h2 className="font-display font-bold tracking-tighter text-foreground mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Selected Work
            </h2>
            <p className="text-xl text-neutral-400 max-w-xl">
              Experiences that move people. Campaigns that move numbers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 bg-accent text-white hover:bg-accent-hover px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group"
            >
              <span>View All Work</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 overflow-x-auto pb-4">
        <div className="flex flex-nowrap sm:flex-wrap gap-3 min-w-max sm:min-w-0">
          {featuredProjects.map((project, i) => (
            <button
              key={project.id}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeIndex === i
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-neutral-900 text-neutral-400 hover:text-foreground hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {project.category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch"
          >
            {/* Large Image */}
            <div className="lg:col-span-3 relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:min-h-[540px] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProject.image}
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </AnimatePresence>
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${activeProject.color}`} />

              {/* Tag */}
              <div className="absolute top-6 left-6">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest">
                  {activeProject.tag}
                </span>
              </div>

              {/* Bottom Info on Image */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-white/60 text-sm font-medium mb-1">{activeProject.location} · {activeProject.year}</p>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
                    {activeProject.title}
                  </h3>
                </div>
                <Link
                  to={`/our-work/${activeProject.id}`}
                  className="shrink-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300"
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>

            {/* Right Side Panel */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Description Card */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm">
                <div>
                  <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">{activeProject.client}</p>
                  <h4 className="font-display font-bold text-2xl text-neutral-900 mb-3">{activeProject.title}</h4>
                  <p className="text-neutral-600 leading-relaxed">{activeProject.description}</p>
                </div>
                <Link
                  to={`/our-work/${activeProject.id}`}
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all duration-300 mt-2"
                >
                  <span>Read Case Study</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {activeProject.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-white border border-neutral-200 rounded-2xl p-4 flex flex-col items-center text-center hover:border-accent/50 transition-colors shadow-sm"
                  >
                    <stat.icon size={20} className="text-accent mb-2" />
                    <span className="font-display font-bold text-xl text-neutral-900">{stat.value}</span>
                    <span className="text-neutral-500 text-xs mt-1">{stat.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Thumbnail Row */}
              <div className="flex gap-3">
                {featuredProjects.filter((_, i) => i !== activeIndex).slice(0, 2).map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveIndex(featuredProjects.indexOf(project))}
                    className="flex-1 relative overflow-hidden rounded-xl aspect-video group"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                    <span className="absolute bottom-2 left-2 text-white text-xs font-semibold leading-tight line-clamp-1 pr-2">{project.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

