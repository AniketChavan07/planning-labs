import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/seo/SEO';

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderProps) {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 flex items-center">
      <SEO title={`${title} | Planning Labs`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-foreground text-background p-16 md:p-32 rounded-[3rem]"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-bold text-6xl md:text-8xl tracking-tighter mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 border border-neutral-700 hover:border-background px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              <ArrowLeft size={18} />
              <span>Return Home</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
