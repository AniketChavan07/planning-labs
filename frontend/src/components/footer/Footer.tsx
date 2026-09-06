import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import BrandLogo from '../ui/BrandLogo';

const services = [
  { name: 'Experiential Marketing', path: '/experiential-marketing' },
  { name: 'Events & Exhibitions', path: '/experiential/events' },
  { name: 'Brand Activations', path: '/experiential/brand-activations' },
  { name: 'Performance Marketing', path: '/digital/performance-marketing' },
  { name: 'Social Media', path: '/digital/social-media' },
  { name: 'SEO & Content', path: '/digital/seo' },
];

const company = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Work', path: '/our-work' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Insights', path: '/insights' },
  { name: 'Careers', path: '/careers' },
];

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/60 relative overflow-hidden">
      {/* Subtle bg gradient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top CTA strip */}
      <div className="border-b border-neutral-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-1">Ready to work together?</p>
            <h2 className="font-display font-black text-2xl md:text-3xl text-foreground tracking-tight">
              Let's build something extraordinary.
            </h2>
          </div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-accent/25 shrink-0"
            >
              Start a Project <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-14">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <BrandLogo className="text-4xl" />
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-xs">
              A hybrid agency bridging immersive experiential marketing with data-driven digital growth — for brands that refuse to be ignored.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-accent hover:text-accent transition-all duration-200"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="md:col-span-4">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-[0.15em] mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    to={s.path}
                    className="text-neutral-500 text-sm hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-200 overflow-hidden" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-2">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-[0.15em] mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.name}>
                  <Link
                    to={c.path}
                    className="text-neutral-500 text-sm hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-200 overflow-hidden" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-2">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-[0.15em] mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li>
                <a href="mailto:hello@planninglabs.in" className="hover:text-accent transition-colors">
                  hello@planninglabs.in
                </a>
              </li>
              <li>
                <a href="tel:+919999999999" className="hover:text-accent transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="leading-relaxed pt-1">
                123 Creative Avenue,<br />
                Bandra West,<br />
                Mumbai — 400 050
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
          <p>© {currentYear} Planning Labs Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-neutral-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
