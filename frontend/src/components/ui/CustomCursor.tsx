import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  // Dot follows cursor faster
  const dotSpringConfig = { damping: 60, stiffness: 800, mass: 0.1 };
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onEnter = () => setIsHidden(false);
    const onLeave = () => setIsHidden(true);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const handleHoverables = () => {
      const interactives = document.querySelectorAll('a, button, [data-cursor="hover"]');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseenter', onEnter);
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    // Observe for dynamically added elements
    const observer = new MutationObserver(handleHoverables);
    observer.observe(document.body, { childList: true, subtree: true });
    handleHoverables();

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      observer.disconnect();
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : isClicking ? 20 : 32,
            height: isHovering ? 48 : isClicking ? 20 : 32,
            x: isHovering ? -24 : isClicking ? -10 : -16,
            y: isHovering ? -24 : isClicking ? -10 : -16,
            opacity: isHidden ? 0 : 1,
            borderWidth: isHovering ? 1 : 2,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="rounded-full border-white bg-transparent"
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          animate={{
            width: isHovering ? 6 : 6,
            height: isHovering ? 6 : 6,
            x: -3,
            y: -3,
            opacity: isHidden ? 0 : isHovering ? 0 : 1,
            scale: isClicking ? 0 : 1,
          }}
          transition={{ type: 'spring', damping: 40, stiffness: 600 }}
          className="rounded-full bg-white"
        />
      </motion.div>
    </>
  );
}
