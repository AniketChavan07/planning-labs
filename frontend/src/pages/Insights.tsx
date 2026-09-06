import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Search } from 'lucide-react';
import SEO from '../components/seo/SEO';

const categories = ['All', 'Events', 'Digital', 'Strategy', 'Trends', 'Brand Activations', 'Case Studies'];

const articles = [
  {
    id: 1,
    title: 'Designing Large-Scale Immersive Festival Experiences',
    excerpt: 'How we engineered a 12,000-capacity neon-lit festival world for Red Bull — from spatial audio to real-time data-driven lighting.',
    category: 'Events',
    date: 'Oct 12, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90',
    featured: true,
  },
  {
    id: 2,
    title: 'The ROI of Corporate Summits in the Post-Digital Era',
    excerpt: 'Why in-person conferences deliver 5x more pipeline than webinars — and how to measure the full business impact.',
    category: 'Strategy',
    date: 'Oct 05, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90',
    featured: false,
  },
  {
    id: 3,
    title: 'How Music & Tech Create Unforgettable Brand Activations',
    excerpt: 'A deep dive into the intersection of live music, AR experiences, and brand storytelling at scale.',
    category: 'Brand Activations',
    date: 'Sep 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90',
    featured: false,
  },
  {
    id: 4,
    title: '5 Social Media Trends That Will Define 2027',
    excerpt: 'From AI-generated content to community-led growth — the trends your brand needs to start preparing for today.',
    category: 'Digital',
    date: 'Sep 20, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90',
    featured: false,
  },
  {
    id: 5,
    title: 'The Ultimate Guide to Exhibition Stand Design',
    excerpt: 'Everything you need to know about designing exhibition stands that stop traffic and generate leads on the expo floor.',
    category: 'Events',
    date: 'Sep 14, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90',
    featured: false,
  },
  {
    id: 6,
    title: 'Performance Marketing: Beyond the Click',
    excerpt: 'How Planning Labs shifted a D2C brand from a 1.2x ROAS to a 5.8x ROAS in 90 days using full-funnel attribution.',
    category: 'Digital',
    date: 'Sep 07, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90',
    featured: false,
  },
  {
    id: 7,
    title: 'Why Employee Engagement Events Are Your Best Retention Tool',
    excerpt: "Companies that invest in internal events see 40% lower attrition. Here's how to design events your team actually wants to attend.",
    category: 'Strategy',
    date: 'Aug 30, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90',
    featured: false,
  },
  {
    id: 8,
    title: 'Experiential Marketing Trends to Watch in 2027',
    excerpt: 'The convergence of physical and digital is accelerating. Here are the 7 experiential trends that will define the next wave.',
    category: 'Trends',
    date: 'Aug 22, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90',
    featured: false,
  },
];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = articles.filter(a => {
    const matchesCategory = activeCategory === 'All' || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = filtered.find(a => a.featured);
  const rest = filtered.filter(a => !a.featured);

  return (
    <div className="bg-background min-h-screen">
      <SEO title="Insights & Blog | Planning Labs" description="Industry insights, trends, and thought leadership from the Planning Labs team." />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block"
          >
            Insights & Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-5xl md:text-7xl tracking-tighter text-foreground mb-4"
          >
            Ideas That<br />Shape Industries.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-xl max-w-2xl"
          >
            Thoughts, strategies, and trends from the team behind the world's most talked-about experiences.
          </motion.p>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="border-y border-neutral-800 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-accent text-white border-accent'
                    : 'bg-transparent text-neutral-400 border-neutral-700 hover:text-foreground hover:border-neutral-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-neutral-800/50 border border-neutral-700 rounded-full pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-neutral-500 focus:outline-none focus:border-accent transition-colors w-64"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured article */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <Link to="/insights" className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="overflow-hidden rounded-2xl aspect-[16/10]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-accent/15 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-accent/30">
                      Featured
                    </span>
                    <span className="text-neutral-500 text-xs">{featured.category}</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground group-hover:text-accent transition-colors tracking-tight leading-tight mb-4">
                    {featured.title}
                  </h2>
                  <p className="text-neutral-400 text-base leading-relaxed mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-neutral-500 text-xs">
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <Link to="/insights" className="block">
                  <div className="overflow-hidden rounded-2xl aspect-[4/3] mb-5">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent text-xs font-bold uppercase tracking-wider">{article.category}</span>
                    <span className="text-neutral-600 text-xs">·</span>
                    <span className="text-neutral-500 text-xs flex items-center gap-1"><Clock size={11} />{article.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground group-hover:text-accent transition-colors leading-tight mb-2">
                    {article.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
                  <p className="text-neutral-600 text-xs mt-3">{article.date}</p>
                </Link>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-neutral-500 text-center py-16">No articles match your search.</p>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-neutral-800 bg-neutral-900/30 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-foreground mb-4">
            Stay in the Loop
          </h2>
          <p className="text-neutral-400 text-base mb-8">
            Get the latest insights, case studies, and industry trends delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-neutral-800/50 border border-neutral-700 rounded-full px-5 py-3 text-sm text-foreground placeholder:text-neutral-500 focus:outline-none focus:border-accent transition-colors"
            />
            <button className="bg-accent text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-accent/90 transition-colors shadow-lg shadow-accent/30 flex items-center gap-2 justify-center">
              Subscribe <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
