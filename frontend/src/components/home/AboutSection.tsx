import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lightbulb, Users, Award } from 'lucide-react';
import { useRef } from 'react';
import { CountUp } from '../ui/Animations';

const values = [
  { icon: Target, title: 'Strategy-First', description: 'Every project starts with deep brand understanding and audience insight.' },
  { icon: Lightbulb, title: 'Creative Excellence', description: 'We push creative boundaries to deliver work that stands out and gets talked about.' },
  { icon: Users, title: 'People-Centric', description: 'We design for real human emotions — not just impressions and clicks.' },
  { icon: Award, title: 'Results-Driven', description: 'Beautiful work that performs. We measure everything and optimize relentlessly.' },
];

const stats = [
  { num: 12, suffix: '+', label: 'Years of Experience' },
  { num: 250, suffix: '+', label: 'Projects Delivered' },
  { num: 50, suffix: '+', label: 'Brand Partners' },
  { num: 20, suffix: '+', label: 'Industries Served' },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: About text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          {/* Left: Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block"
            >
              About Planning Labs
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black leading-[0.95] tracking-tighter text-foreground mb-6"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
            >
              We Build Brands<br />Through Experiences.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 text-lg leading-relaxed mb-6"
            >
              Planning Labs is an award-winning experiential marketing and digital growth agency. For over 12 years, we've helped the world's most ambitious brands connect with their audiences through unforgettable live experiences, powerful brand activations, and data-driven digital campaigns.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-500 text-base leading-relaxed mb-8"
            >
              From a 50,000-person festival to a hyper-targeted Instagram campaign, we bring the same obsessive attention to craft, strategy, and execution. We don't just do events or ads — we engineer moments that move people and deliver measurable business results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm group"
              >
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Image with parallax */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90"
                alt="Planning Labs team at corporate event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-2xl shadow-2xl shadow-accent/30"
            >
              <p className="font-display font-black text-4xl leading-none">
                <CountUp to={250} suffix="+" />
              </p>
              <p className="text-white/80 text-sm mt-1 font-medium">Projects Delivered</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-24 border-y border-neutral-800 py-10 sm:py-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display font-black text-4xl md:text-5xl text-foreground mb-2">
                <CountUp to={stat.num} suffix={stat.suffix} />
              </p>
              <p className="text-neutral-500 text-sm uppercase tracking-widest font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-neutral-800 hover:border-accent/40 bg-neutral-900/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <item.icon size={22} className="text-accent" />
              </div>
              <h4 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
