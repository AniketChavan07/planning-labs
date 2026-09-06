import { motion } from 'framer-motion';

const stats = [
  { value: '12+', label: 'Years' },
  { value: '250+', label: 'Projects' },
  { value: '50+', label: 'Brands' },
  { value: '20+', label: 'Industries' },
];

export default function AboutStats() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter text-foreground mb-8"
            >
              We blend creativity with strategy to deliver unforgettable outcomes.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-600 max-w-xl text-balance"
            >
              At Planning Labs, we don't just execute campaigns; we engineer experiences. Whether it's an immersive physical activation or a data-driven digital strategy, our focus is always on creating meaningful connections between brands and their audiences.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border-l-2 border-accent pl-6"
              >
                <div className="font-display font-bold text-5xl md:text-6xl text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-500 uppercase tracking-widest text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
