// src/styles/animations.ts

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

export const stagger = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.12, // The "beat" between elements
      delayChildren: 0.1     // A tiny pause before the first element moves
    },
  },
  viewport: { once: true, margin: "-80px" },
};