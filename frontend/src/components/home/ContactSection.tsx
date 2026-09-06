import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold tracking-tighter text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
              Let's create something extraordinary.
            </h2>
            <p className="text-base sm:text-xl text-neutral-500 mb-8 sm:mb-12 max-w-md">
              Have a project in mind? We'd love to hear about it. Drop us a line and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-foreground group">
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail size={20} className="group-hover:text-white" />
                </div>
                <a href="mailto:hello@planninglabs.in" className="text-lg font-medium group-hover:text-accent transition-colors">
                  hello@planninglabs.in
                </a>
              </div>
              <div className="flex items-center space-x-4 text-foreground group">
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone size={20} className="group-hover:text-white" />
                </div>
                <a href="tel:+919876543210" className="text-lg font-medium group-hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-4 text-foreground group">
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                  <MapPin size={20} className="group-hover:text-white" />
                </div>
                <span className="text-lg font-medium">
                  Mumbai, India
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-neutral-900/40 p-6 sm:p-8 md:p-12 rounded-2xl border border-neutral-800 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-8">Send us a brief</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-400 mb-2">Company</label>
                  <input type="text" id="company" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="Acme Corp" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Project Details</label>
                <textarea id="message" rows={4} className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button type="submit" className="w-full bg-accent text-white rounded-lg px-4 py-4 font-medium hover:bg-accent-hover transition-colors flex items-center justify-center space-x-2">
                <span>Submit Request</span>
                <ArrowRight size={20} />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
