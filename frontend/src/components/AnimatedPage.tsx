import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';

interface AnimatedPageProps {
  children: ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const pageTransition: Transition = {
  duration: 0.3,
};

const AnimatedPage = ({ children }: AnimatedPageProps) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
