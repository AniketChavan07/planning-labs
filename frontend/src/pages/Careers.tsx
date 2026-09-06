import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Clock, Briefcase, ChevronDown, Users, Zap, Heart, Coffee, X as XIcon, UploadCloud, FileText, CheckCircle } from 'lucide-react';
import SEO from '../components/seo/SEO';

const perks = [
  { icon: Zap, title: 'Fast Growth', description: 'Accelerated learning with direct exposure to top-tier brands and campaigns.' },
  { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance, mental health support, and gym memberships.' },
  { icon: Coffee, title: 'Flexible Culture', description: 'Hybrid work, flexible hours, and unlimited PTO because we trust our people.' },
  { icon: Users, title: 'Epic Team Events', description: 'Monthly outings, annual retreats, and backstage passes to our own events.' },
];

const departments = ['All', 'Creative', 'Strategy', 'Production', 'Digital', 'Operations', 'Business Development'];

const openings = [
  { id: 1, title: 'Senior Art Director', department: 'Creative', location: 'Mumbai, India', type: 'Full-time', experience: '5-8 years', description: 'Lead visual design for large-scale brand activations and event campaigns.' },
  { id: 2, title: 'Event Producer', department: 'Production', location: 'Mumbai, India', type: 'Full-time', experience: '3-5 years', description: 'Manage end-to-end event production from concept to on-ground execution.' },
  { id: 3, title: 'Performance Marketing Manager', department: 'Digital', location: 'Bangalore, India', type: 'Full-time', experience: '4-6 years', description: 'Own paid media strategy and execution across Google, Meta, and programmatic.' },
  { id: 4, title: 'Brand Strategist', department: 'Strategy', location: 'Mumbai, India', type: 'Full-time', experience: '3-5 years', description: 'Develop brand strategy and communication frameworks for experiential campaigns.' },
  { id: 5, title: 'Social Media Manager', department: 'Digital', location: 'Remote', type: 'Full-time', experience: '2-4 years', description: 'Manage social media presence for multiple brand clients across all platforms.' },
  { id: 6, title: 'Operations Coordinator', department: 'Operations', location: 'Mumbai, India', type: 'Full-time', experience: '1-3 years', description: 'Coordinate logistics, vendor management, and on-ground operations for live events.' },
  { id: 7, title: 'Business Development Lead', department: 'Business Development', location: 'Delhi, India', type: 'Full-time', experience: '5-8 years', description: 'Drive new business acquisition and nurture client relationships across North India.' },
  { id: 8, title: '3D / CGI Artist', department: 'Creative', location: 'Remote', type: 'Full-time', experience: '2-5 years', description: 'Create hyper-realistic CGI product renders and motion graphics for brand campaigns.' },
];

export default function Careers() {
  const [activeDept, setActiveDept] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [applyJob, setApplyJob] = useState<typeof openings[0] | null>(null);
  const [applyForm, setApplyForm] = useState({ name: '', email: '', phone: '', linkedin: '' });
  const [resume, setResume] = useState<File | null>(null);
  const [applyStatus, setApplyStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [dragOver, setDragOver] = useState(false);
  const resumeRef = useRef<HTMLInputElement>(null);

  const filtered = openings.filter(j => activeDept === 'All' || j.department === activeDept);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplyStatus('submitting');
    setTimeout(() => {
      setApplyStatus('success');
      setTimeout(() => { setApplyJob(null); setApplyStatus('idle'); setApplyForm({ name: '', email: '', phone: '', linkedin: '' }); setResume(null); }, 3000);
    }, 1500);
  };

  const handleResumeDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f) setResume(f);
  };

  return (
    <>
      <div className="bg-background min-h-screen">
        <SEO title="Careers | Planning Labs" description="Join the Planning Labs team. Explore open positions in creative, strategy, production, digital, and operations." />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
              alt="Planning Labs team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40 w-full">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block"
            >
              Careers
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-white leading-[0.9] tracking-tighter mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              Join the Lab.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-xl max-w-2xl"
            >
              We're building the future of marketing — and we need brilliant, passionate people to do it. Ready?
            </motion.p>
          </div>
        </section>

        {/* Perks */}
        <section className="py-20 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-foreground mb-3">Why Planning Labs?</h2>
              <p className="text-neutral-400 text-base max-w-lg mx-auto">More than a job — a launchpad for your career in the most exciting industry on earth.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 text-center hover:border-accent/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                    <perk.icon size={22} className="text-accent" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{perk.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{perk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-foreground mb-3">Open Positions</h2>
              <p className="text-neutral-400 text-base">Find the role that's right for you.</p>
            </div>

            {/* Department filters */}
            <div className="flex flex-wrap gap-2 mb-10">
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${activeDept === dept
                      ? 'bg-accent text-white border-accent shadow-lg shadow-accent/30'
                      : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-400 hover:text-foreground'
                    }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Job list */}
            <div className="space-y-3">
              {filtered.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}

                  className="border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-colors"
                >
                  <button
                    onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-lg text-foreground mb-1">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-neutral-500 text-xs">
                        <span className="flex items-center gap-1"><Briefcase size={12} />{job.department}</span>
                        <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: expandedId === job.id ? 180 : 0 }}
                      className="text-neutral-500 shrink-0 ml-4"
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>

                  {expandedId === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="px-5 pb-5 border-t border-neutral-800"
                    >
                      <div className="pt-4">
                        <p className="text-neutral-400 text-sm mb-3">{job.description}</p>
                        <p className="text-neutral-500 text-xs mb-4">Experience: {job.experience}</p>
                        <button
                          onClick={() => setApplyJob(job)}
                          className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
                        >
                          Apply Now <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-neutral-500 text-center py-12">No openings in this department right now. Check back soon!</p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-800 bg-neutral-900/30 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-foreground mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and let's start a conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-accent/30 hover:bg-accent/90"
            >
              Send Your Resume <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </div>

      {/* Apply Now Modal */}
      <AnimatePresence>
        {applyJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
            onClick={(e) => { if (e.target === e.currentTarget) setApplyJob(null); }}
          >
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 80, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">Apply For</p>
                    <h2 className="font-display font-bold text-2xl text-neutral-900">{applyJob.title}</h2>
                    <p className="text-neutral-500 text-sm mt-0.5">{applyJob.location} · {applyJob.type}</p>
                  </div>
                  <button onClick={() => setApplyJob(null)} className="p-2 text-neutral-400 hover:text-neutral-700 transition-colors rounded-full hover:bg-neutral-100">
                    <XIcon size={20} />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {applyStatus === 'success' ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                      <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
                      <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">Application Sent!</h3>
                      <p className="text-neutral-500">Thank you for your interest. We'll review your profile and reach out shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleApplySubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                          <input required type="text" value={applyForm.name} onChange={e => setApplyForm({ ...applyForm, name: e.target.value })} className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="Jane Doe" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email *</label>
                          <input required type="email" value={applyForm.email} onChange={e => setApplyForm({ ...applyForm, email: e.target.value })} className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="jane@example.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone</label>
                          <input type="tel" value={applyForm.phone} onChange={e => setApplyForm({ ...applyForm, phone: e.target.value })} className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="+91 9999 999999" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1.5">LinkedIn URL</label>
                          <input type="url" value={applyForm.linkedin} onChange={e => setApplyForm({ ...applyForm, linkedin: e.target.value })} className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="linkedin.com/in/..." />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Resume / CV *</label>
                        {resume ? (
                          <div className="flex items-center gap-3 border border-neutral-200 bg-neutral-50 rounded-xl px-4 py-3">
                            <FileText size={18} className="text-accent shrink-0" />
                            <span className="text-sm text-neutral-700 truncate flex-1">{resume.name}</span>
                            <button type="button" onClick={() => { setResume(null); if (resumeRef.current) resumeRef.current.value = ''; }} className="text-neutral-400 hover:text-accent">
                              <XIcon size={15} />
                            </button>
                          </div>
                        ) : (
                          <div
                            onClick={() => resumeRef.current?.click()}
                            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                            onDragLeave={() => setDragOver(false)}
                            onDrop={handleResumeDrop}
                            className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${dragOver ? 'border-accent bg-accent/5' : 'border-neutral-200 hover:border-neutral-400'}`}
                          >
                            <input ref={resumeRef} type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={e => { if (e.target.files?.[0]) setResume(e.target.files[0]); }} />
                            <UploadCloud size={24} className={`mx-auto mb-1.5 ${dragOver ? 'text-accent' : 'text-neutral-400'}`} />
                            <p className="text-sm font-medium text-neutral-600">{dragOver ? 'Drop it!' : 'Drag & drop or click to upload'}</p>
                            <p className="text-xs text-neutral-400 mt-0.5">PDF or DOCX, max 10MB</p>
                          </div>
                        )}
                      </div>

                      <button type="submit" disabled={applyStatus === 'submitting'} className="w-full bg-accent text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-accent/90 transition-colors disabled:opacity-70 mt-2">
                        {applyStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
