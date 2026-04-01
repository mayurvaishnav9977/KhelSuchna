// src/lib/motionVariants.ts

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
};

export const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
};

export const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

export const slideFromBottom = {
  hidden: { y: 50, opacity: 0 },   // start slightly below
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};