import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const experientialServices = [
  { name: 'Events', path: '/experiential/events', icon: '🎪' },
  { name: 'Exhibitions & Stall Design', path: '/experiential/exhibitions', icon: '🏛️' },
  { name: 'Brand Activations', path: '/experiential/brand-activations', icon: '⚡' },
  { name: 'MICE', path: '/experiential/mice', icon: '🌐' },
  { name: 'Conferences & Launches', path: '/experiential/conferences', icon: '🚀' },
  { name: 'Employee Engagement', path: '/experiential/employee-engagement', icon: '🤝' },
  { name: 'Outdoor Advertising', path: '/experiential/outdoor-advertising', icon: '📢' },
  { name: 'Event Production', path: '/experiential/event-production', icon: '🔧' },
];

const digitalServices = [
  { name: 'Social Media Management', path: '/digital/social-media', icon: '📱' },
  { name: 'Performance Marketing', path: '/digital/performance-marketing', icon: '📈' },
  { name: 'SEO', path: '/digital/seo', icon: '🔍' },
  { name: 'Influencer Marketing', path: '/digital/influencer-marketing', icon: '🌟' },
  { name: 'Video & Commercial', path: '/digital/video-production', icon: '🎬' },
  { name: 'Website Development', path: '/digital/website-development', icon: '💻' },
  { name: 'Creative Design', path: '/digital/creative-design', icon: '🎨' },
  { name: 'CGI & Digital Content', path: '/digital/cgi-content', icon: '✨' },
];

const tabs = [
  {
    id: 'experiential',
    label: 'Experiential Marketing',
    headline: 'Physical Experiences That Move People',
    description: 'We design, produce, and execute large-scale events, brand activations, exhibitions, and live experiences that create emotional connections between brands and their audiences.',
    services: experientialServices,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    link: '/experiential-marketing',
    accent: '#7C3AED',
  },
  {
    id: 'digital',
    label: 'Digital Marketing',
    headline: 'Digital Growth That Drives Results',
    description: 'We build and execute full-funnel digital strategies — from social media and performance marketing to SEO, video production, and creative design — engineered for measurable business outcomes.',
    services: digitalServices,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    link: '/digital-marketing',
    accent: '#2563EB',
  },
];

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section className="py-28 bg-neutral-900/30 border-y border-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black tracking-tighter text-foreground mb-4"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Two Verticals. One Mission.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            We bridge the gap between physical and digital — creating integrated brand experiences that resonate across every touchpoint.
          </motion.p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10 sm:mb-14 overflow-x-auto pb-4">
          <div className="inline-flex bg-neutral-800/50 rounded-full p-1.5 border border-neutral-700 min-w-max">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === i
                    ? 'text-white shadow-lg'
                    : 'text-neutral-400 hover:text-white'
                  }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="servicePill"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: tab.accent }}
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left: Image */}
            <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
              <img
                src={current.image}
                alt={current.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span
                  className="text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full"
                  style={{ backgroundColor: `${current.accent}CC` }}
                >
                  {current.label}
                </span>
              </div>
            </div>

            {/* Right: Text + services list */}
            <div>
              <h3
                className="font-display font-bold tracking-tight text-foreground mb-4 leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
              >
                {current.headline}
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed mb-8">
                {current.description}
              </p>

              {/* Service links grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-neutral-800 hover:border-neutral-600 bg-neutral-900/40 hover:bg-neutral-800/40 transition-all group"
                  >
                    <span className="text-lg shrink-0">{service.icon}</span>
                    <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors truncate">
                      {service.name}
                    </span>
                    <ArrowUpRight size={14} className="text-neutral-600 group-hover:text-accent ml-auto shrink-0 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
