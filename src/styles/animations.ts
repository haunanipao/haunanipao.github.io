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
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  },
  viewport: { once: true, margin: "-80px" },
};

/* Small-step children inside a parent that already fades up.
   Using {y: 14} instead of {y: 28} prevents the double-y offset
   that caused social icons and other nested items to jerk upward. */
export const staggerItem = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  },
};