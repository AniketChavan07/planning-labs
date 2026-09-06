import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 bg-[url('/hero_bg_1788676785104.png')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-background/80 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent font-medium tracking-widest uppercase mb-4 text-xs sm:text-sm"
          >
            Planning Labs
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="font-display font-bold leading-[0.9] tracking-tighter text-foreground"
              style={{ fontSize: 'clamp(2.4rem, 9vw, 8rem)' }}
            >
              WE CREATE <br /> EXPERIENCES <br /> THAT MOVE PEOPLE.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-xl md:text-2xl text-neutral-600 mb-8 sm:mb-10 max-w-2xl text-balance"
          >
            An award-winning agency bridging the gap between immersive physical activations and powerful digital growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              to="/our-work"
              className="bg-foreground text-background hover:bg-accent hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 text-center"
            >
              Explore Our Work
            </Link>
            <Link
              to="/contact"
              className="border border-neutral-300 text-foreground hover:border-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 text-center"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
