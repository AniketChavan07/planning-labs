import { motion } from 'framer-motion';
import { clients, industries } from '../../data/clients';

export default function IndustriesLogos() {
  // Split clients into two rows for the double marquee effect
  const row1 = clients.slice(0, 5);
  const row2 = clients.slice(5, 10);

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-black mb-6"
          >
            Our Clients
          </motion.h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-12 mb-24">
        {/* Transparent fading edges */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-white via-transparent to-white w-full" />
        
        {/* ROW 1: Scrolling Left */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex whitespace-nowrap"
        >
          <div className="flex animate-marquee space-x-20 items-center px-8">
            {[...row1, ...row1, ...row1, ...row1].map((client, i) => (
              <div 
                key={`row1-${client.id}-${i}`}
                className="flex-shrink-0 transition-transform duration-300 hover:scale-105 cursor-default"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ROW 2: Scrolling Right */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex whitespace-nowrap"
        >
          <div className="flex animate-marquee-reverse space-x-20 items-center px-8">
            {[...row2, ...row2, ...row2, ...row2].map((client, i) => (
              <div 
                key={`row2-${client.id}-${i}`}
                className="flex-shrink-0 transition-transform duration-300 hover:scale-105 cursor-default"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm uppercase tracking-widest font-medium text-neutral-500 mb-8 border-b border-neutral-200 pb-4">
          Industries We Serve
        </h3>
        <div className="flex flex-wrap gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-6 py-3 rounded-full border border-neutral-200 hover:border-accent hover:bg-accent/5 transition-colors cursor-default text-neutral-700 font-medium bg-white shadow-sm"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
