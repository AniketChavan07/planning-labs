import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const verticals = [
  {
    id: 'experiential',
    title: 'EXPERIENTIAL',
    subtitle: 'Physical impact that resonates.',
    image: '/experiential_marketing_1788676803962.png',
    link: '/experiential-marketing'
  },
  {
    id: 'digital',
    title: 'DIGITAL',
    subtitle: 'Digital strategies that scale.',
    image: '/digital_marketing_1788676819847.png',
    link: '/digital-marketing'
  }
];

export default function DualVertical() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative py-24 bg-foreground text-background overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Images based on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: `url(${verticals.find(v => v.id === hovered)?.image})` 
            }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-foreground/60 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-neutral-800 pt-24 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 h-full">
          
          {verticals.map((vertical, index) => (
            <div 
              key={vertical.id}
              className={`flex flex-col justify-center ${index === 0 ? 'md:pr-12 md:border-r border-neutral-800' : 'md:pl-12'}`}
              onMouseEnter={() => setHovered(vertical.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link to={vertical.link} className="group block">
                <motion.h2 
                  className={`font-display font-bold text-5xl lg:text-7xl xl:text-8xl tracking-tighter mb-4 transition-colors duration-500 ${
                    hovered === vertical.id ? 'text-accent-dark' : (hovered ? 'text-neutral-700' : 'text-background')
                  }`}
                >
                  {vertical.title}
                </motion.h2>
                <div className="flex items-center space-x-4">
                  <p className={`text-xl transition-colors duration-500 ${hovered === vertical.id ? 'text-white' : 'text-neutral-400'}`}>
                    {vertical.subtitle}
                  </p>
                  <ArrowRight 
                    className={`transition-all duration-300 transform ${
                      hovered === vertical.id ? 'translate-x-2 text-white opacity-100' : 'opacity-0 -translate-x-4'
                    }`}
                  />
                </div>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
