// ============================================
// Logo.tsx
// Haunani Pao
// ============================================
import { colours } from '../data/portfolioData';

export const Logo = () => (
  <div
    className="flex items-center gap-3 cursor-pointer group"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <div className="relative w-11 h-11 flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 bg-primary"/>
      <svg className="relative z-10" width="44" height="44" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#0D0A20" />
        <path d="M11 12V28" stroke={colours.primary} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M11 20H20" stroke={colours.primary} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 12V28" stroke={colours.primary} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 12H25C27.2 12 29 13.8 29 16C29 18.2 27.2 20 25 20H20" stroke={colours.primary} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="28" cy="28" r="2" fill={colours.secondary} className="animate-pulse" />
      </svg>
    </div>
    <span className="font-bold text-xl tracking-tight transition-colors duration-200 font-brand text-main">Haunani <span className="text-primary">Pao</span>
    </span>
  </div>
);