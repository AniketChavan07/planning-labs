import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles, FolderOpen, Briefcase, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

// Comprehensive searchable index of all site pages / services
const allPages = [
  // Experiential sub-pages
  { title: 'Events', description: 'Large-scale event planning & production', path: '/experiential/events', category: 'Experiential' },
  { title: 'Exhibitions & Stall Design', description: 'Award-winning booth & exhibit design', path: '/experiential/exhibitions', category: 'Experiential' },
  { title: 'Brand Activations', description: 'Immersive brand storytelling experiences', path: '/experiential/brand-activations', category: 'Experiential' },
  { title: 'MICE', description: 'Meetings, incentives, conferences & exhibitions', path: '/experiential/mice', category: 'Experiential' },
  { title: 'Conferences & Product Launches', description: 'High-impact launches & corporate conferences', path: '/experiential/conferences', category: 'Experiential' },
  { title: 'Employee Engagement', description: 'Internal events that inspire & unite teams', path: '/experiential/employee-engagement', category: 'Experiential' },
  { title: 'Outdoor Advertising', description: 'OOH campaigns that stop traffic', path: '/experiential/outdoor-advertising', category: 'Experiential' },
  { title: 'Event Production & Fabrication', description: 'Custom sets, stages & physical builds', path: '/experiential/event-production', category: 'Experiential' },
  // Digital sub-pages
  { title: 'Social Media Management', description: 'Strategy, content & community management', path: '/digital/social-media', category: 'Digital' },
  { title: 'Performance Marketing', description: 'ROI-driven paid media across all platforms', path: '/digital/performance-marketing', category: 'Digital' },
  { title: 'SEO', description: 'Organic search growth & technical optimisation', path: '/digital/seo', category: 'Digital' },
  { title: 'Influencer Marketing', description: 'Authentic creator partnerships at scale', path: '/digital/influencer-marketing', category: 'Digital' },
  { title: 'Video & Commercial Production', description: 'Brand films, TVC & digital-first video content', path: '/digital/video-production', category: 'Digital' },
  { title: 'Website Development', description: 'High-performance, conversion-driven websites', path: '/digital/website-development', category: 'Digital' },
  { title: 'Creative Design', description: 'Brand identity, campaigns & visual storytelling', path: '/digital/creative-design', category: 'Digital' },
  { title: 'CGI & Digital Content', description: 'Hyper-realistic CGI, 3D & immersive content', path: '/digital/cgi-content', category: 'Digital' },
  // General pages
  { title: 'Our Work', description: 'Portfolio of our best campaigns & projects', path: '/our-work', category: 'Page' },
  { title: 'Case Studies', description: 'Deep dives into our biggest campaigns', path: '/case-studies', category: 'Page' },
  { title: 'Insights', description: 'Articles, trends & marketing perspectives', path: '/insights', category: 'Page' },
  { title: 'Careers', description: 'Join the Planning Labs team', path: '/careers', category: 'Page' },
  { title: 'Contact', description: 'Get in touch to start a project', path: '/contact', category: 'Page' },
];

const suggestions = ['Events', 'SEO', 'Brand Activations', 'Video Production', 'Festival'];

const categoryIcon: Record<string, React.ReactNode> = {
  Experiential: <Briefcase size={12} />,
  Digital: <Sparkles size={12} />,
  Page: <FileText size={12} />,
  Project: <FolderOpen size={12} />,
};

const categoryColor: Record<string, string> = {
  Experiential: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Digital: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Page: 'bg-neutral-700/50 text-neutral-400 border-neutral-600/30',
  Project: 'bg-accent/10 text-accent border-accent/20',
};

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const q = query.toLowerCase().trim();
  const hasQuery = q.length >= 2;

  const matchedPages = hasQuery
    ? allPages.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    : [];

  const matchedProjects = hasQuery
    ? projects.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subCategories.some(s => s.toLowerCase().includes(q))
      )
    : [];

  const totalResults = matchedPages.length + matchedProjects.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
          className="bg-background text-foreground flex flex-col overflow-hidden w-full h-full"
        >
          {/* Decorative orbs */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

          {/* ── Header ── */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-neutral-800/60 relative z-10 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Search size={14} className="text-accent" />
              </div>
              <span className="font-display font-bold text-sm sm:text-base tracking-tight">Search Planning Labs</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-9 h-9 rounded-xl bg-neutral-800/60 hover:bg-red-500/20 hover:text-red-400 border border-neutral-700/40 flex items-center justify-center transition-all duration-200"
            >
              <X size={17} />
            </button>
          </div>

          {/* ── Search Input ── */}
          <div className="px-4 sm:px-8 pt-5 pb-4 border-b border-neutral-800/40 relative z-10 shrink-0">
            <div className="relative group max-w-3xl mx-auto">
              <div className="absolute -inset-px bg-gradient-to-r from-accent/40 via-accent/10 to-transparent rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center bg-neutral-900 border border-neutral-700/70 group-focus-within:border-accent/60 rounded-2xl transition-colors duration-200 shadow-lg">
                <Search size={18} className="absolute left-4 text-neutral-500 group-focus-within:text-accent transition-colors shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search services, projects, pages…"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="w-full bg-transparent text-base sm:text-xl font-medium outline-none placeholder:text-neutral-600 text-foreground pl-11 pr-11 py-4 rounded-2xl"
                />
                {query && (
                  <button
                    onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                    className="absolute right-3 w-7 h-7 rounded-full bg-neutral-700 hover:bg-neutral-600 flex items-center justify-center transition-colors"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>
            </div>

            {/* Quick suggestions */}
            {!hasQuery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-wrap gap-2 mt-3 max-w-3xl mx-auto"
              >
                <span className="flex items-center gap-1 text-xs text-neutral-600 shrink-0 self-center">
                  <Sparkles size={11} className="text-accent/60" /> Try:
                </span>
                {suggestions.map(s => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="text-xs px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-accent/20 border border-neutral-700/50 hover:border-accent/40 text-neutral-400 hover:text-accent transition-all duration-200"
                  >
                    {s}
                  </button>
                ))}
              </motion.div>
            )}

            {/* Result count badge */}
            {hasQuery && totalResults > 0 && (
              <p className="mt-2 text-xs text-neutral-500 max-w-3xl mx-auto">
                {totalResults} result{totalResults !== 1 ? 's' : ''} for <span className="text-accent font-semibold">"{query}"</span>
              </p>
            )}
          </div>

          {/* ── Results ── */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-5 relative z-10">
            <div className="max-w-3xl mx-auto space-y-7">

              {/* Not enough input */}
              {!hasQuery && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center pt-12">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-3">
                    <Search size={22} className="text-accent/60" />
                  </div>
                  <p className="text-sm text-neutral-500">
                    Type at least <span className="text-accent font-semibold">2 characters</span> to search
                  </p>
                </motion.div>
              )}

              {/* No results */}
              {hasQuery && totalResults === 0 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center pt-12">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-800/60 border border-neutral-700/40 flex items-center justify-center mx-auto mb-3">
                    <Search size={22} className="text-neutral-600" />
                  </div>
                  <p className="text-lg font-display font-bold text-neutral-300 mb-1">No results for "{query}"</p>
                  <p className="text-sm text-neutral-500">Try "Events", "SEO", "Spotify" or "Festival"</p>
                </motion.div>
              )}

              {/* Services / Pages results */}
              {matchedPages.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <h3 className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-semibold mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-accent inline-block" />
                    Services & Pages
                  </h3>
                  <ul className="space-y-1">
                    {matchedPages.map((page, i) => (
                      <motion.li
                        key={page.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                      >
                        <Link
                          to={page.path}
                          onClick={onClose}
                          className="group flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-neutral-800/60 border border-transparent hover:border-neutral-700/50 transition-all duration-200"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="shrink-0 w-9 h-9 rounded-lg bg-neutral-800/80 border border-neutral-700/40 flex items-center justify-center text-neutral-400">
                              {categoryIcon[page.category]}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                                {page.title}
                              </p>
                              <p className="text-xs text-neutral-500 truncate">{page.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className={`hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryColor[page.category]}`}>
                              {page.category}
                            </span>
                            <ArrowRight size={15} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Projects results */}
              {matchedProjects.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                  <h3 className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-semibold mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-accent inline-block" />
                    Projects
                  </h3>
                  <ul className="space-y-1">
                    {matchedProjects.map((p, i) => (
                      <motion.li
                        key={p.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 + 0.05 }}
                      >
                        <Link
                          to={`/our-work/${p.id}`}
                          onClick={onClose}
                          className="group flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-neutral-800/60 border border-transparent hover:border-neutral-700/50 transition-all duration-200"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="shrink-0 w-9 h-9 rounded-lg object-cover border border-neutral-700/40"
                            />
                            <div className="min-w-0">
                              <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                                {p.title}
                              </p>
                              <p className="text-xs text-neutral-500 truncate">{p.client} · {p.category}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className={`hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryColor['Project']}`}>
                              Project
                            </span>
                            <ArrowRight size={15} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="hidden sm:flex items-center justify-center gap-5 px-8 py-3 border-t border-neutral-800/40 text-xs text-neutral-600 relative z-10 shrink-0">
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 border border-neutral-700 font-mono text-[10px]">↵</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 border border-neutral-700 font-mono text-[10px]">ESC</kbd>
              close
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
