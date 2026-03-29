// ============================================
// Footer.tsx
// I made this with vibe coding.
// ============================================

import { colours, hero } from '../data/portfolioData';
import { Logo } from '../components/Logo';

export const Footer = () => {
  return (
          <footer
        className="py-8 px-6 lg:px-12 border-t flex flex-col md:flex-row justify-between items-center gap-4 z-10 relative"
        style={{ borderColor: colours.cardBorder, background: colours.bgAlt }}
      >
        <Logo />
        <p className="text-s" style={{ color: `${colours.textAlt}80` }}>
          © 2026 💜 Made by Haunani Pao · {hero.location}
        </p>
        <p className="text-s" style={{ color: `${colours.textAlt}80` }}>
          {hero.rights}
        </p>
      </footer>

  );
};