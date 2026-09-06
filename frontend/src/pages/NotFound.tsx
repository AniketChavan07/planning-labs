import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <SEO title="Page Not Found | Planning Labs" />
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-8xl md:text-9xl font-display font-bold text-foreground mb-4"
      >
        404
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl md:text-4xl font-display text-neutral-500 mb-8 text-center"
      >
        Experience Not Found
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-neutral-600 mb-10 max-w-md text-center"
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link 
          to="/"
          className="bg-foreground text-background hover:bg-accent hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
