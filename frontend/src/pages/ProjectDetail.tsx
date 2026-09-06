import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import NotFound from './NotFound';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <NotFound />;
  }

  return (
    <article className="bg-background min-h-screen">
      <SEO title={`${project.title} | Our Work`} description={project.overview} />
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/our-work" className="inline-flex items-center space-x-2 text-neutral-500 hover:text-foreground mb-12 transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Work</span>
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16"
          >
            <div>
              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-foreground mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-neutral-600 max-w-lg">
                {project.overview}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 border-t border-neutral-200 pt-8 lg:border-t-0 lg:pt-0">
              <div>
                <span className="block text-xs uppercase tracking-widest text-neutral-400 font-medium mb-1">Client</span>
                <span className="font-medium text-lg text-foreground">{project.client}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-neutral-400 font-medium mb-1">Industry</span>
                <span className="font-medium text-lg text-foreground">{project.industry}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-neutral-400 font-medium mb-1">Location</span>
                <span className="font-medium text-lg text-foreground">{project.location}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-neutral-400 font-medium mb-1">Year</span>
                <span className="font-medium text-lg text-foreground">{project.year}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[60vh] md:h-[80vh]"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">The Challenge</h2>
              <p className="text-xl text-neutral-600 leading-relaxed text-balance">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">Our Approach</h2>
              <p className="text-xl text-neutral-600 leading-relaxed text-balance">
                {project.approach}
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">Execution</h2>
              <p className="text-xl text-neutral-600 leading-relaxed text-balance">
                {project.execution}
              </p>
            </div>

            <div className="bg-foreground text-background p-12 md:p-16 rounded-3xl">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-12">The Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.results.map((result, index) => (
                  <div key={index} className="border-t border-neutral-700 pt-6">
                    <span className="block text-accent font-display text-2xl md:text-3xl font-bold mb-2">0{index + 1}</span>
                    <span className="text-lg text-neutral-300">{result}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, index) => (
                <div key={index} className="aspect-[4/3] bg-neutral-200">
                  <img src={img} alt={`${project.title} gallery ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project / CTA */}
      <section className="py-24 border-t border-neutral-200 bg-neutral-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter text-foreground mb-8">
            Ready for your next big project?
          </h2>
          <Link 
            to="/contact"
            className="inline-flex items-center space-x-2 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-accent hover:text-white transition-all duration-300"
          >
            <span>Let's Talk</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </article>
  );
}
