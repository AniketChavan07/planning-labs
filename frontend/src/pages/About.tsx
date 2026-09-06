import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { FadeUp, StaggerContainer, StaggerItem, CountUp, AnimatedHeading } from '../components/ui/Animations';

const values = [
  {
    icon: Target,
    title: 'Strategy First',
    description: 'We do not just execute; we strategize. Every event and campaign is rooted in deep brand understanding and measurable objectives.'
  },
  {
    icon: Users,
    title: 'Human Centric',
    description: 'At the core of every physical activation and digital touchpoint are people. We design experiences that resonate emotionally.'
  },
  {
    icon: Zap,
    title: 'Relentless Innovation',
    description: 'From integrating AR into live events to pioneering CGI content, we constantly push the boundaries of what is possible.'
  },
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description: 'Excellence is our baseline. We sweat the small stuff so our clients do not have to, delivering flawless execution every time.'
  }
];

const team = [
  {
    name: 'Sarah Jenkins',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90'
  },
  {
    name: 'David Chen',
    role: 'Head of Digital',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90'
  },
  {
    name: 'Priya Sharma',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90'
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of Experiential',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90'
  }
];

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="About Us | Planning Labs"
        description="Learn about Planning Labs, the award-winning agency bridging the gap between immersive physical activations and powerful digital growth."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=90" 
            alt="Team collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <FadeUp>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Our Story</span>
            </FadeUp>
            <h1 className="font-display font-black tracking-tighter text-foreground mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
              <AnimatedHeading text="We are the architects of connection." />
            </h1>
            <FadeUp delay={0.2}>
              <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl text-balance">
                Founded in 2018, Planning Labs was born from a simple observation: brands were treating their physical events and digital presence as two different worlds. We exist to bring them together.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-neutral-800 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StaggerItem className="text-center">
              <div className="font-display font-bold text-5xl text-accent mb-2">
                <CountUp to={6} suffix="+" />
              </div>
              <p className="text-neutral-400 text-sm font-medium uppercase tracking-widest">Years of Excellence</p>
            </StaggerItem>
            <StaggerItem className="text-center">
              <div className="font-display font-bold text-5xl text-accent mb-2">
                <CountUp to={200} suffix="+" />
              </div>
              <p className="text-neutral-400 text-sm font-medium uppercase tracking-widest">Campaigns Delivered</p>
            </StaggerItem>
            <StaggerItem className="text-center">
              <div className="font-display font-bold text-5xl text-accent mb-2">
                <CountUp to={50} suffix="+" />
              </div>
              <p className="text-neutral-400 text-sm font-medium uppercase tracking-widest">Global Clients</p>
            </StaggerItem>
            <StaggerItem className="text-center">
              <div className="font-display font-bold text-5xl text-accent mb-2">
                <CountUp to={15} suffix="+" />
              </div>
              <p className="text-neutral-400 text-sm font-medium uppercase tracking-widest">Industry Awards</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90" 
                  alt="Team brainstorming" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
              </div>
            </FadeUp>
            
            <div>
              <FadeUp>
                <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground mb-6">
                  Bridging the gap between the physical and the digital.
                </h2>
                <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                  <p>
                    In a world where attention is the most valuable currency, traditional marketing is no longer enough. You don't just need a website, and you don't just need an event. You need an ecosystem.
                  </p>
                  <p>
                    Planning Labs is a hybrid agency. We have the meticulous logistics and creative production capabilities of a top-tier event management firm, combined with the data-driven performance and growth hacking mindset of a digital agency.
                  </p>
                  <p>
                    When we build an activation, we are already thinking about how it amplifies on social media. When we run a performance campaign, we are thinking about how it translates into real-world brand love. That is the Planning Labs difference.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-neutral-900/50 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground mb-4">Our Core Values</h2>
              <p className="text-neutral-400 text-lg">The principles that guide our work, our culture, and our partnerships.</p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title} className="bg-background border border-neutral-800 p-8 rounded-2xl hover-lift card-glow">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{value.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground mb-4">Leadership Team</h2>
              <p className="text-neutral-400 text-lg">The minds behind the magic.</p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <StaggerItem key={member.name} className="group cursor-default">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground group-hover:text-accent transition-colors">{member.name}</h3>
                <p className="text-neutral-500 font-medium">{member.role}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-6 tracking-tighter">
              Ready to create something extraordinary?
            </h2>
            <p className="text-white/80 text-xl mb-10">
              Let's build experiences that move people and numbers.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-accent hover:bg-neutral-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover-scale"
            >
              Start a Conversation <ArrowRight size={20} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
