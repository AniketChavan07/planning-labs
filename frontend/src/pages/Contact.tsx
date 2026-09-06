import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle, UploadCloud, X as XIcon, FileText } from 'lucide-react';
import SEO from '../components/seo/SEO';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    description: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const f = e.target.files[0];
      if (f.size <= 10 * 1024 * 1024) setFile(f);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f && f.size <= 10 * 1024 * 1024) setFile(f);
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <SEO title="Contact | Planning Labs" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Info */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-5xl md:text-7xl tracking-tighter text-foreground mb-6"
            >
              Let's create something extraordinary.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-600 mb-12 max-w-md text-balance"
            >
              Whether it's a massive brand activation or a precise digital campaign, we're ready to bring your vision to life.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-neutral-100 p-3 rounded-full text-foreground">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-1">Mumbai HQ</h3>
                  <p className="text-neutral-500">123 Creative Avenue, Bandra West<br/>Mumbai, Maharashtra 400050</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-neutral-100 p-3 rounded-full text-foreground">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-1">Email Us</h3>
                  <a href="mailto:hello@planninglabs.com" className="text-neutral-500 hover:text-accent transition-colors">hello@planninglabs.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-neutral-100 p-3 rounded-full text-foreground">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-1">Call Us</h3>
                  <a href="tel:+919876543210" className="text-neutral-500 hover:text-accent transition-colors">+91 98765 43210</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-100 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 bg-accent text-white flex flex-col items-center justify-center p-12 text-center z-10"
                >
                  <CheckCircle size={64} className="mb-6" />
                  <h2 className="font-display font-bold text-4xl mb-4">Request Sent!</h2>
                  <p className="text-lg opacity-90">Thank you for reaching out. Our team will review your project details and get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Name *</label>
                      <input 
                        required
                        type="text" 
                        className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Company</label>
                      <input 
                        type="text" 
                        className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors"
                        value={formState.company}
                        onChange={e => setFormState({...formState, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                      <input 
                        required
                        type="email" 
                        className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors"
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors"
                        value={formState.phone}
                        onChange={e => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Service Required *</label>
                      <select 
                        required
                        className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors appearance-none"
                        value={formState.service}
                        onChange={e => setFormState({...formState, service: e.target.value})}
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="experiential">Experiential Marketing</option>
                        <option value="digital">Digital Marketing</option>
                        <option value="both">Integrated Campaign</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Budget Range</label>
                      <select 
                        className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors appearance-none"
                        value={formState.budget}
                        onChange={e => setFormState({...formState, budget: e.target.value})}
                      >
                        <option value="" disabled>Select a budget</option>
                        <option value="small">Under ₹5L</option>
                        <option value="medium">₹5L - ₹20L</option>
                        <option value="large">₹20L - ₹50L</option>
                        <option value="enterprise">Above ₹50L</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Project Description *</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full border-b border-neutral-300 py-3 bg-transparent focus:outline-none focus:border-foreground transition-colors resize-none"
                      placeholder="Tell us about your goals..."
                      value={formState.description}
                      onChange={e => setFormState({...formState, description: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Attachment (Brief / RFP)</label>
                    {file ? (
                      <div className="flex items-center gap-3 border border-neutral-200 bg-neutral-50 rounded-xl px-4 py-3">
                        <FileText size={20} className="text-accent shrink-0" />
                        <span className="text-sm font-medium text-neutral-700 truncate flex-1">{file.name}</span>
                        <span className="text-xs text-neutral-400 shrink-0">{(file.size / 1024).toFixed(0)} KB</span>
                        <button type="button" onClick={removeFile} className="ml-1 text-neutral-400 hover:text-accent transition-colors shrink-0">
                          <XIcon size={16} />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 ${
                          dragOver ? 'border-accent bg-accent/5' : 'border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50'
                        }`}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png"
                          onChange={handleFileChange}
                        />
                        <UploadCloud size={28} className={`mx-auto mb-2 ${dragOver ? 'text-accent' : 'text-neutral-400'}`} />
                        <p className="text-sm font-medium text-neutral-600">
                          {dragOver ? 'Drop it here!' : 'Drag & drop your brief, or click to browse'}
                        </p>
                        <p className="text-xs text-neutral-400 mt-1">PDF, DOCX, PPTX, JPG, PNG — Max 10MB</p>
                      </div>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-foreground text-background py-4 rounded-full font-medium hover:bg-accent transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    <span>{status === 'submitting' ? 'Sending...' : 'Submit Request'}</span>
                    {!status && <ArrowRight size={18} />}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
