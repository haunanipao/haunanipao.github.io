// ============================================
// MoonPhase.tsx
// Ok, this is just cool nerdy moon stuff 💜 
// ============================================

import { useState, useEffect } from 'react';

const phases = [
  { emoji: "🌑", label: "New Moon" },
  { emoji: "🌒", label: "Waxing Crescent" },
  { emoji: "🌓", label: "First Quarter" },
  { emoji: "🌔", label: "Waxing Gibbous" },
  { emoji: "🌕", label: "Full Moon" },
  { emoji: "🌖", label: "Waning Gibbous" },
  { emoji: "🌗", label: "Last Quarter" },
  { emoji: "🌘", label: "Waning Crescent" }
];

export const MoonPhase = () => {
  const [currentPhase, setCurrentPhase] = useState<{ emoji: string; label: string } | null>(null);
  const [monthName, setMonthName] = useState<string>(""); // State for the month

  useEffect(() => {
    const calculateMoonPhase = () => {
  const date = new Date();
  
  // 1. Get the month name for your UI
  const formattedMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  setMonthName(formattedMonth);

  // 2. Reference New Moon: January 6, 2000
  const referenceNewMoon = new Date(2000, 0, 6, 18, 14).getTime();
  const now = date.getTime();
  
  // 3. Length of a lunar cycle in milliseconds
  const lunarCycle = 29.530588 * 24 * 60 * 60 * 1000;
  
  // 4. Calculate how many cycles have passed
  const elapsed = now - referenceNewMoon;
  const cyclesPassed = elapsed / lunarCycle;
  const currentCycleFraction = cyclesPassed % 1; // Just the decimal (0.0 to 0.99)

  // 5. Map 0-1 to our 8 phases
  // We use Math.floor because 0.0-0.124 is New Moon, etc.
  const phaseIndex = Math.floor(currentCycleFraction * 8);
  
  setCurrentPhase(phases[phaseIndex]);
};
    const timer = setTimeout(calculateMoonPhase, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-left p-6 rounded-2xl mb-10 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl min-w-[380px]">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
           <span className="text-2xl" role="img" aria-label="moon phase icon">
            {currentPhase ? currentPhase.emoji : " "}
           </span>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-1">
            Current Lunar Phase in {monthName}</p>
          <p className="text-2xl font-brand italic text-primary leading-tight">
            {currentPhase ? currentPhase.label : "Calculating..."}
          </p>
        </div>
      </div>
    </div>
  );
};
