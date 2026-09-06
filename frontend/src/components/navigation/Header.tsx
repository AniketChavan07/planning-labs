import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, ArrowUpRight } from 'lucide-react';
import SearchOverlay from './SearchOverlay';

const experientialLinks = [
  {
    name: 'Events',
    path: '/experiential/events',
    description: 'Large-scale event planning & production',
    icon: '🎪',
  },
  {
    name: 'Exhibitions & Stall Design',
    path: '/experiential/exhibitions',
    description: 'Award-winning booth & exhibit design',
    icon: '🏛️',
  },
  {
    name: 'Brand Activations',
    path: '/experiential/brand-activations',
    description: 'Immersive brand storytelling experiences',
    icon: '⚡',
  },
  {
    name: 'MICE',
    path: '/experiential/mice',
    description: 'Meetings, incentives, conferences & exhibitions',
    icon: '🌐',
  },
  {
    name: 'Conferences & Product Launches',
    path: '/experiential/conferences',
    description: 'High-impact launches & corporate conferences',
    icon: '🚀',
  },
  {
    name: 'Employee Engagement',
    path: '/experiential/employee-engagement',
    description: 'Internal events that inspire & unite teams',
    icon: '🤝',
  },
  {
    name: 'Outdoor Advertising',
    path: '/experiential/outdoor-advertising',
    description: 'OOH campaigns that stop traffic',
    icon: '📢',
  },
  {
    name: 'Event Production & Fabrication',
    path: '/experiential/event-production',
    description: 'Custom sets, stages & physical builds',
    icon: '🔧',
  },
];

const digitalLinks = [
  { name: 'Social Media Management', path: '/digital/social-media', description: 'Strategy, content & community management', icon: '📱' },
  { name: 'Performance Marketing', path: '/digital/performance-marketing', description: 'ROI-driven paid media across all platforms', icon: '📈' },
  { name: 'SEO', path: '/digital/seo', description: 'Organic search growth & technical optimisation', icon: '🔍' },
  { name: 'Influencer Marketing', path: '/digital/influencer-marketing', description: 'Authentic creator partnerships at scale', icon: '🌟' },
  { name: 'Video & Commercial Production', path: '/digital/video-production', description: 'Brand films, TVC & digital-first video content', icon: '🎬' },
  { name: 'Website Development', path: '/digital/website-development', description: 'High-performance, conversion-driven websites', icon: '💻' },
  { name: 'Creative Design', path: '/digital/creative-design', description: 'Brand identity, campaigns & visual storytelling', icon: '🎨' },
  { name: 'CGI & Digital Content', path: '/digital/cgi-content', description: 'Hyper-realistic CGI, 3D & immersive content', icon: '✨' },
];

const navLinks = [
  { name: 'Our Work', path: '/our-work' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Insights', path: '/insights' },
  { name: 'Careers', path: '/careers' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [digitalDropdownOpen, setDigitalDropdownOpen] = useState(false);
  const [mobileExpOpen, setMobileExpOpen] = useState(false);
  const [mobileDigitalOpen, setMobileDigitalOpen] = useState(false);
  const digitalDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isHeroPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen || searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen, searchOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const headerBg = isScrolled
    ? 'bg-background/90 backdrop-blur-lg shadow-sm'
    : isHeroPage ? 'bg-transparent' : 'bg-background/90 backdrop-blur-lg';

  const textColor = isScrolled || !isHeroPage ? 'text-foreground' : 'text-white';

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className={`flex items-center gap-2.5 font-display font-bold text-2xl tracking-tighter ${textColor}`}>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-accent">
                  <rect width="32" height="32" rx="8" fill="currentColor" />
                  <path d="M10 11H15.5C17.9853 11 20 13.0147 20 15.5C20 17.9853 17.9853 20 15.5 20H13.5V23" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 23H15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                PLANNING LABS
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">

              {/* Experiential Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors ${location.pathname.startsWith('/experiential') ? 'text-accent' : textColor
                    }`}
                >
                  Experiential
                  <motion.span
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.97 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] bg-white rounded-2xl shadow-2xl shadow-black/15 border border-neutral-100 overflow-hidden z-50"
                    >
                      {/* Dropdown Header */}
                      <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between">
                        <div>
                          <p className="font-display font-bold text-base text-neutral-900">Experiential Marketing</p>
                          <p className="text-neutral-500 text-xs mt-0.5">Immersive experiences that move audiences</p>
                        </div>
                        <Link
                          to="/experiential-marketing"
                          className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold hover:underline"
                        >
                          View All <ArrowUpRight size={12} />
                        </Link>
                      </div>

                      {/* Links Grid */}
                      <div className="grid grid-cols-2 gap-1 p-3">
                        {experientialLinks.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="group flex items-start gap-3 px-4 py-3.5 rounded-xl hover:bg-neutral-50 transition-colors"
                          >
                            <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-neutral-800 group-hover:text-accent transition-colors truncate">
                                {item.name}
                              </p>
                              <p className="text-xs text-neutral-500 mt-0.5 leading-snug">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Dropdown Footer CTA */}
                      <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
                        <p className="text-xs text-neutral-500">Ready to create an experience?</p>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-accent/90 transition-colors"
                        >
                          Start a Project <ArrowUpRight size={12} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Digital Dropdown */}
              <div
                ref={digitalDropdownRef}
                className="relative"
                onMouseEnter={() => setDigitalDropdownOpen(true)}
                onMouseLeave={() => setDigitalDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors ${location.pathname.startsWith('/digital') ? 'text-accent' : textColor
                    }`}
                >
                  Digital
                  <motion.span animate={{ rotate: digitalDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={14} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {digitalDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.97 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] bg-white rounded-2xl shadow-2xl shadow-black/15 border border-neutral-100 overflow-hidden z-50"
                    >
                      <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between">
                        <div>
                          <p className="font-display font-bold text-base text-neutral-900">Digital Marketing</p>
                          <p className="text-neutral-500 text-xs mt-0.5">Data-driven digital growth for modern brands</p>
                        </div>
                        <Link to="/digital-marketing" className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold hover:underline">
                          View All <ArrowUpRight size={12} />
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-1 p-3">
                        {digitalLinks.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="group flex items-start gap-3 px-4 py-3.5 rounded-xl hover:bg-neutral-50 transition-colors"
                          >
                            <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-neutral-800 group-hover:text-accent transition-colors truncate">{item.name}</p>
                              <p className="text-xs text-neutral-500 mt-0.5 leading-snug">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
                        <p className="text-xs text-neutral-500">Ready to grow your digital presence?</p>
                        <Link to="/contact" className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-accent/90 transition-colors">
                          Start a Project <ArrowUpRight size={12} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other nav links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium hover:text-accent transition-colors ${location.pathname.startsWith(link.path) ? 'text-accent' : textColor
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4 md:space-x-6">
              {/* Desktop Search Box */}
              <div className="hidden lg:block relative group">
                <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors ${isScrolled ? 'text-neutral-400 group-focus-within:text-accent' : 'text-white/60 group-focus-within:text-white'}`}>
                  <Search size={16} />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className={`block w-48 xl:w-64 pl-10 pr-4 py-2 border rounded-full text-sm font-medium transition-all duration-300 focus:outline-none cursor-text ${
                    isScrolled 
                      ? 'bg-neutral-100 border-transparent text-neutral-900 placeholder-neutral-500 hover:bg-neutral-200 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent shadow-sm' 
                      : 'bg-white/10 border-white/20 text-white placeholder-white/70 hover:bg-white/20 focus:bg-white/20 focus:border-white shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                  }`}
                />
              </div>

              {/* Mobile Search Icon */}
              <button
                onClick={() => setSearchOpen(true)}
                className={`lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors ${textColor}`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              <div className="hidden md:flex items-center">
                <Link
                  to="/contact"
                  className="bg-accent text-white hover:bg-accent/90 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md shadow-accent/30"
                >
                  Start a Project
                </Link>
              </div>

              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className={`p-2 rounded-md ${textColor} hover:text-accent focus:outline-none`}
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[60] bg-foreground text-background flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6">
                <Link to="/" className="font-display font-bold text-2xl tracking-tighter text-background" onClick={() => setMobileMenuOpen(false)}>
                  PLANNING LABS
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-background hover:text-accent transition-colors">
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center p-8 space-y-2">
                {/* Experiential accordion */}
                <div>
                  <button
                    onClick={() => setMobileExpOpen(v => !v)}
                    className="flex items-center gap-3 font-display text-3xl font-bold text-background hover:text-accent transition-colors w-full text-left py-3"
                  >
                    Experiential
                    <motion.span animate={{ rotate: mobileExpOpen ? 180 : 0 }}>
                      <ChevronDown size={24} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileExpOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-4 space-y-1 pb-2"
                      >
                        {experientialLinks.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center gap-3 py-2 text-lg text-background/70 hover:text-accent transition-colors"
                          >
                            <span>{item.icon}</span>
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Digital accordion */}
                <div>
                  <button
                    onClick={() => setMobileDigitalOpen(v => !v)}
                    className="flex items-center gap-3 font-display text-3xl font-bold text-background hover:text-accent transition-colors w-full text-left py-3"
                  >
                    Digital
                    <motion.span animate={{ rotate: mobileDigitalOpen ? 180 : 0 }}>
                      <ChevronDown size={24} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileDigitalOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-4 space-y-1 pb-2"
                      >
                        {digitalLinks.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center gap-3 py-2 text-lg text-background/70 hover:text-accent transition-colors"
                          >
                            <span>{item.icon}</span>
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className="block font-display text-3xl font-bold py-3 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-8">
                  <Link
                    to="/contact"
                    className="bg-background text-foreground hover:bg-accent hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-block"
                  >
                    Let's Talk
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
