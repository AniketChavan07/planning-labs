import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Planning Labs didn't just deliver an event; they created a movement. The level of detail, the creative vision, and the flawless execution exceeded all our expectations.",
    name: "Sarah Jenkins",
    designation: "CMO",
    company: "Global Tech Inc.",
    avatar: "SJ"
  },
  {
    id: 2,
    quote: "Their digital campaign completely transformed our online presence. We saw a 300% increase in engagement and the creative assets were simply stunning.",
    name: "David Chen",
    designation: "Marketing Director",
    company: "Future Mobility",
    avatar: "DC"
  },
  {
    id: 3,
    quote: "The team at Planning Labs understands how to build a bridge between physical brand activations and digital amplification perfectly.",
    name: "Priya Sharma",
    designation: "VP Brand Strategy",
    company: "Luxe Retail Group",
    avatar: "PS"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background text-foreground border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-foreground mb-6"
          >
            Client Reviews
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-neutral-400"
          >
            Don't just take our word for it. Here is what industry leaders have to say about partnering with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.2)' }}
              className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl card-glow flex flex-col h-full relative overflow-hidden cursor-default"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Animated quote icon */}
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-4 pointer-events-none"
              >
                <Quote size={80} className="text-neutral-800 opacity-20" />
              </motion.div>

              {/* 5 Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + index * 0.06, type: 'spring', stiffness: 400 }}
                  >
                    <Star size={18} className="fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral-300 leading-relaxed mb-8 flex-grow relative z-10 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4 mt-auto border-t border-neutral-800 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-purple-400 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-accent/30">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.designation}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
