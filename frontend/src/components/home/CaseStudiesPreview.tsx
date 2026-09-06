import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'Red Bull',
    title: 'Neon Nights Festival — 12,000 Attendees in One Night',
    category: 'Festival',
    result: '3M+ social impressions',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90',
    color: '#7C3AED',
  },
  {
    id: 2,
    client: 'TCS',
    title: 'Spark Summit — A Global Tech Conference for 8,000 Delegates',
    category: 'Corporate Event',
    result: '50+ countries connected',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90',
    color: '#2563EB',
  },
  {
    id: 3,
    client: 'Dream11',
    title: 'Pan-India Brand Activation Tour Across 5 IPL Cities',
    category: 'Brand Activation',
    result: '200% ROI on ad spend',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90',
    color: '#DC2626',
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-28 bg-background border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Case Studies</span>
            <h2 className="font-display font-black tracking-tighter text-foreground" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
              Proven Results.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-accent transition-colors group text-sm"
            >
              View All Case Studies
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group hover-lift"
            >
              <Link to="/case-studies" className="block">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-5">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category chip */}
                  <div className="absolute top-5 left-5">
                    <span
                      className="text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: `${study.color}CC` }}
                    >
                      {study.category}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      <ArrowUpRight size={16} className="text-black" />
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">{study.client}</p>
                    <h3 className="text-white font-display font-bold text-xl leading-tight mb-3 group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <div
                      className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${study.color}20`, color: study.color, border: `1px solid ${study.color}40` }}
                    >
                      {study.result}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
