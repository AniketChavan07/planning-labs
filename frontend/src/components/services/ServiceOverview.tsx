import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../seo/SEO';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';

interface ServiceOverviewProps {
  id: string;
  title: string;
  description: string;
  image: string;
  capabilities: string[];
}

export default function ServiceOverview({ id, title, description, image, capabilities }: ServiceOverviewProps) {
  // Filter projects by category based on service ID
  const relatedProjects = projects.filter(p => p.category.toLowerCase() === id.toLowerCase()).slice(0, 4);

  return (
    <div className="bg-background min-h-screen">
      <SEO title={`${title} | Planning Labs`} description={description} />
      
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-300 max-w-2xl"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <h2 className="font-display font-bold text-4xl tracking-tighter text-foreground sticky top-32">
                Our Capabilities
              </h2>
            </div>
            <div className="md:col-span-2">
              <ul className="space-y-6">
                {capabilities.map((cap, index) => (
                  <motion.li 
                    key={cap}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 border-b border-neutral-200 pb-6 group"
                  >
                    <ArrowRight className="text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="text-2xl md:text-3xl font-display font-medium text-neutral-700 group-hover:text-foreground transition-colors">
                      {cap}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-4xl tracking-tighter text-foreground mb-16">
              Selected Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {relatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/our-work/${project.id}`} className="block">
                    <div className="relative overflow-hidden mb-6 bg-neutral-200 aspect-[4/5] md:aspect-[16/10]">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 font-medium">
                      {project.client}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                to="/our-work"
                className="inline-flex items-center space-x-2 text-foreground font-medium hover:text-accent transition-colors group"
              >
                <span>View All Cases</span>
                <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}
      
      {/* CTA */}
      <section className="py-32 bg-foreground text-background text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-8">
            Let's build something extraordinary.
          </h2>
          <Link 
            to="/contact"
            className="inline-block bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent-hover transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

    </div>
  );
}
