import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import SEO from '../seo/SEO';

interface Stat { value: string; label: string; }
interface Feature { title: string; description: string; }
interface ProcessStep { step: string; title: string; description: string; }

interface ServicePageProps {
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  accentColor: string;
  stats: Stat[];
  features: Feature[];
  process: ProcessStep[];
  galleryImages: string[];
  clients?: string[];
  seoDescription: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } }
};

export default function ServicePage({
  title, tagline, description, heroImage, accentColor,
  stats, features, process, galleryImages, seoDescription
}: ServicePageProps) {

  return (
    <div className="bg-background min-h-screen">
      <SEO title={`${title} | Planning Labs`} description={seoDescription} />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40 w-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-white/50 text-xs font-medium mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link to="/experiential-marketing" className="hover:text-white transition-colors">Experiential Marketing</Link>
              <ChevronRight size={12} />
              <span className="text-white/80">{title}</span>
            </motion.div>

            {/* Tag */}
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 text-white"
              style={{ backgroundColor: `${accentColor}CC` }}
            >
              Experiential Marketing
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display font-black text-white leading-[0.9] tracking-tighter mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              {title}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 sm:mb-10">
              {tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 group shadow-lg"
                style={{ backgroundColor: accentColor }}
              >
                Start a Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/our-work"
                className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/20 transition-all duration-300"
              >
                See Our Work <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-neutral-800 bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-8 text-center"
              >
                <p className="font-display font-bold text-3xl md:text-4xl text-foreground mb-1" style={{ color: accentColor }}>{stat.value}</p>
                <p className="text-neutral-500 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: accentColor }}>What We Do</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-foreground mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Creating Experiences<br />That Leave a Mark
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">{description}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold group"
                style={{ color: accentColor }}
              >
                Talk to Our Team <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 gap-4"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl border border-neutral-800 hover:border-neutral-600 bg-neutral-900/40 transition-colors"
                >
                  <CheckCircle2 size={22} className="shrink-0 mt-0.5" style={{ color: accentColor }} />
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">{feature.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── IMAGE GALLERY ── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 row-span-1 aspect-[16/7]' : 'aspect-[4/3]'}`}
              >
                <img
                  src={src}
                  alt={`${title} gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-neutral-900/30 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-3 block" style={{ color: accentColor }}>Our Process</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-foreground">How We Work</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-600 transition-colors group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg mb-4"
                  style={{ backgroundColor: `${accentColor}25`, color: accentColor, border: `1px solid ${accentColor}40` }}
                >
                  {step.step}
                </div>
                <h4 className="text-foreground font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 z-10">
                    <ArrowRight size={16} className="text-neutral-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tighter text-foreground mb-6">
              Ready to Build Something Unforgettable?
            </h2>
            <p className="text-neutral-400 text-xl mb-10 max-w-2xl mx-auto">
              Tell us your vision. We'll make it a reality that audiences remember for years.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white px-10 py-4 rounded-full font-bold text-base transition-all duration-300 group shadow-xl"
                style={{ backgroundColor: accentColor, boxShadow: `0 8px 30px ${accentColor}40` }}
              >
                Start a Conversation
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 border border-neutral-700 text-foreground hover:border-neutral-400 px-10 py-4 rounded-full font-bold text-base transition-all duration-300"
              >
                See Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
