import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, Users, Award, MapPin } from 'lucide-react';
import SEO from '../components/seo/SEO';

const filters = ['All', 'Festival', 'Corporate', 'Brand Activation', 'Concert', 'Digital'];

const caseStudies = [
  {
    id: 1,
    client: 'Red Bull',
    title: 'Neon Nights Festival',
    category: 'Festival',
    location: 'Mumbai, India',
    year: '2023',
    challenge: 'Create a first-of-its-kind underground electronic music festival for 12,000 attendees with immersive brand activations.',
    result: 'Sold out in 72 hours. 3M+ social impressions. 500+ branded neon installations. Named "Festival of the Year" by Event Magazine.',
    stats: [
      { icon: Users, value: '12,000+', label: 'Attendees' },
      { icon: TrendingUp, value: '3M+', label: 'Social Impressions' },
      { icon: Award, value: '#1', label: 'Festival of the Year' },
    ],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    color: '#7C3AED',
  },
  {
    id: 2,
    client: 'TCS',
    title: 'Spark Summit 2024',
    category: 'Corporate',
    location: 'Bangalore, India',
    year: '2024',
    challenge: 'Design and execute a multi-day tech summit for 8,000 global delegates across 5 simultaneous stages with live streaming.',
    result: '50+ countries connected. 98% delegate satisfaction. 10M+ livestream views. Full hybrid production delivered on-time and on-budget.',
    stats: [
      { icon: Users, value: '8,000+', label: 'Delegates' },
      { icon: TrendingUp, value: '50+', label: 'Countries' },
      { icon: Award, value: '98%', label: 'Satisfaction' },
    ],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    color: '#2563EB',
  },
  {
    id: 3,
    client: 'Dream11',
    title: 'Pan-India Brand Activation Tour',
    category: 'Brand Activation',
    location: 'Pan-India — 5 Cities',
    year: '2023',
    challenge: 'Build a travelling cricket fan zone for 5 IPL cities in 30 days with a modular kit that can be deployed in under 4 hours.',
    result: '50,000+ fans reached. 200% ROI on ad spend. Modular activation kit reused across all 5 cities. 5M+ social impressions generated.',
    stats: [
      { icon: Users, value: '50K+', label: 'Fans Reached' },
      { icon: TrendingUp, value: '200%', label: 'ROI' },
      { icon: Award, value: '5M+', label: 'Impressions' },
    ],
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    color: '#DC2626',
  },
  {
    id: 4,
    client: 'Spotify',
    title: 'Beats & Brands Concert Series',
    category: 'Concert',
    location: 'Mumbai, India',
    year: '2024',
    challenge: 'Co-create a 3-night concert series fusing live DJ sets with real-time data visualisations and interactive brand storytelling.',
    result: '20,000+ live audience. 10M+ stream views across platforms. Won "Best Live Event" at the Indian Ad Awards 2024.',
    stats: [
      { icon: Users, value: '20K+', label: 'Live Audience' },
      { icon: TrendingUp, value: '10M+', label: 'Stream Views' },
      { icon: Award, value: 'Best', label: 'Live Event 2024' },
    ],
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    color: '#16A34A',
  },
  {
    id: 5,
    client: 'Nykaa',
    title: 'Digital-First D2C Growth Campaign',
    category: 'Digital',
    location: 'Pan-India',
    year: '2024',
    challenge: "Scale Nykaa's performance marketing from 1.2x ROAS to 5x+ ROAS while reducing CPA by 60% across Google and Meta.",
    result: '5.8x ROAS achieved in 90 days. CPA reduced by 62%. 300% revenue growth from paid channels. Named top performance campaign Q3.',
    stats: [
      { icon: TrendingUp, value: '5.8x', label: 'ROAS' },
      { icon: TrendingUp, value: '62%', label: 'CPA Reduction' },
      { icon: Award, value: '300%', label: 'Revenue Growth' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    color: '#EA580C',
  },
];

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = caseStudies.filter(cs => activeFilter === 'All' || cs.category === activeFilter);

  return (
    <div className="bg-background min-h-screen">
      <SEO title="Case Studies | Planning Labs" description="In-depth case studies showcasing how Planning Labs delivers measurable results for the world's top brands." />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
            alt="Case Studies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40 w-full">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block"
          >
            Case Studies
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-white leading-[0.9] tracking-tighter mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Results That<br />Speak for Themselves.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-xl max-w-2xl"
          >
            Deep dives into our biggest campaigns — the challenge, the strategy, and the measurable impact we delivered.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-neutral-800 bg-neutral-900/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-accent text-white border-accent shadow-lg shadow-accent/30'
                    : 'bg-transparent text-neutral-400 border-neutral-700 hover:text-foreground hover:border-neutral-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case study cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((cs, i) => (
              <motion.div
                key={cs.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/40 hover:border-neutral-600 transition-colors group"
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span
                      className="text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full"
                      style={{ backgroundColor: `${cs.color}CC` }}
                    >
                      {cs.category}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 flex items-center gap-1.5 text-white/70 text-xs">
                    <MapPin size={12} /> {cs.location} · {cs.year}
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: cs.color }}>
                    {cs.client}
                  </p>
                  <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground leading-tight mb-4">
                    {cs.title}
                  </h3>

                  <div className="mb-6">
                    <p className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-2">The Challenge</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="mb-8">
                    <p className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-2">The Result</p>
                    <p className="text-neutral-300 text-sm leading-relaxed">{cs.result}</p>
                  </div>

                  {/* Stat chips */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {cs.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border"
                        style={{ borderColor: `${cs.color}30`, backgroundColor: `${cs.color}08` }}
                      >
                        <stat.icon size={14} style={{ color: cs.color }} />
                        <div>
                          <p className="font-display font-bold text-sm text-foreground leading-none">{stat.value}</p>
                          <p className="text-neutral-500 text-xs">{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold self-start px-5 py-2.5 rounded-full border transition-all duration-300 group/btn"
                    style={{ color: cs.color, borderColor: `${cs.color}40` }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = `${cs.color}15`)}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    Discuss a Similar Project
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-neutral-500 text-center py-16">No case studies match the selected filter.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-800 bg-neutral-900/30 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-foreground mb-4">
            Your Brand. Next Case Study.
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
            Let's create results worth writing about.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-accent/30 hover:bg-accent/90"
          >
            Start a Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
