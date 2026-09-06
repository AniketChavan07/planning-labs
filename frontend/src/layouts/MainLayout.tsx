import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../components/navigation/Header';
import Footer from '../components/footer/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import ScrollProgressBar from '../components/ui/ScrollProgressBar';
import FloatingContact from '../components/ui/FloatingContact';
import ScrollToTop from '../components/ui/ScrollToTop';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 24,
  },

  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },

  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col selection:bg-foreground selection:text-background">
      {/* Global UI overlays */}
      <ScrollToTop />
      <CustomCursor />
      <ScrollProgressBar />
      <FloatingContact />

      <Header />

      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
