// src/styles/animations.ts

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  },
  viewport: { once: true, margin: "-80px" },
};