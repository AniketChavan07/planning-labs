import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { services } from '../../data/services';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Simple local search
  const searchResults = query.length > 2 ? {
    projects: projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase())),
    services: services.filter(s => s.title.toLowerCase().includes(query.toLowerCase()))
  } : { projects: [], services: [] };

  const hasResults = searchResults.projects.length > 0 || searchResults.services.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] bg-background text-foreground flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
            <div className="font-display font-bold text-2xl tracking-tighter">
              SEARCH
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:text-accent transition-colors flex items-center space-x-2"
            >
              <span className="text-sm font-medium uppercase tracking-widest hidden md:block">Close</span>
              <X size={28} />
            </button>
          </div>

          {/* Search Input */}
          <div className="flex-1 max-w-4xl w-full mx-auto px-4 flex flex-col mt-12 md:mt-24">
            <div className="relative border-b-2 border-foreground pb-4 mb-12">
              <input
                ref={inputRef}
                type="text"
                placeholder="What are you looking for?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-4xl md:text-6xl font-display font-bold outline-none placeholder:text-neutral-300"
              />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400" size={32} />
            </div>

            {/* Results */}
            {query.length > 2 ? (
              <div className="flex-1 overflow-y-auto pb-12 scrollbar-hide">
                {!hasResults ? (
                  <div className="text-center text-neutral-500 py-12">
                    <p className="text-2xl font-display mb-2">No results found for "{query}"</p>
                    <p>Try searching for "Digital", "Experiential", or "Festival"</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {searchResults.services.length > 0 && (
                      <div>
                        <h3 className="text-sm uppercase tracking-widest text-neutral-400 font-medium mb-6">Services</h3>
                        <ul className="space-y-4">
                          {searchResults.services.map(s => (
                            <li key={s.id}>
                              <Link 
                                to={`/${s.id}-marketing`} 
                                onClick={onClose}
                                className="group flex items-center justify-between border-b border-neutral-200 pb-4 hover:border-foreground transition-colors"
                              >
                                <span className="text-2xl font-display font-bold group-hover:text-accent transition-colors">{s.title}</span>
                                <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {searchResults.projects.length > 0 && (
                      <div>
                        <h3 className="text-sm uppercase tracking-widest text-neutral-400 font-medium mb-6">Projects</h3>
                        <ul className="space-y-4">
                          {searchResults.projects.map(p => (
                            <li key={p.id}>
                              <Link 
                                to={`/our-work/${p.id}`} 
                                onClick={onClose}
                                className="group flex items-center justify-between border-b border-neutral-200 pb-4 hover:border-foreground transition-colors"
                              >
                                <div>
                                  <span className="block text-xl font-display font-bold group-hover:text-accent transition-colors">{p.title}</span>
                                  <span className="text-sm text-neutral-500">{p.client} — {p.category}</span>
                                </div>
                                <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-neutral-400 py-12">
                <p>Type at least 3 characters to search.</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
