import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    id: 1,
    title: 'Designing Large-Scale Immersive Festival Experiences',
    category: 'Festivals',
    date: 'Oct 12, 2026',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  },
  {
    id: 2,
    title: 'The ROI of Corporate Summits in the Post-Digital Era',
    category: 'Corporate Events',
    date: 'Oct 05, 2026',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  },
  {
    id: 3,
    title: 'How Music & Tech Create Unforgettable Brand Activations',
    category: 'Brand Activations',
    date: 'Sep 28, 2026',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  }
];

export default function LatestInsights() {
  return (
    <section className="py-24 bg-background border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tighter text-foreground mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-neutral-500 max-w-xl">
              Thoughts, trends, and strategies from the Planning Labs team.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <Link 
              to="/insights"
              className="inline-flex items-center space-x-2 text-foreground font-medium hover:text-accent transition-colors group"
            >
              <span>Read all articles</span>
              <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article 
              key={insight.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={insight.slug} className="block">
                <div className="relative overflow-hidden mb-6 aspect-[4/3] rounded-lg">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-neutral-500 mb-3">{insight.date}</span>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
                    {insight.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
