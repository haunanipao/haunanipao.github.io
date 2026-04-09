// ============================================
// Background.tsx
// My Universe ✨
// ============================================
import { useEffect } from "react";

// Generate a starfield once at module load — random positions, two layers for depth
function makeStars(count: number, maxX: number, maxY: number): string {
  const stars: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    const big = Math.random() > 0.88;
    const op = (Math.random() * 0.55 + 0.2).toFixed(2);
    stars.push(`${x}px ${y}px ${big ? "2px" : "1px"} var(--starFill)`);
  }
  return stars.join(", ");
}

const stars1 = makeStars(120, 1920, 4000);
const stars2 = makeStars(50, 1920, 4000);

// Orb intensity per section — tweak these to match each section's "vibe"
const sectionIntensity: Record<string, number> = {
  hero: 0.30,       // vivid glow to open
  skills: 0.18,     // dim so skill cards pop
  work: 0.22,
  principles: 0.15, // most subdued for readability
  community: 0.30,  // show through the glass
  contact: 0.25,    // warm glow to finish
};

interface SectionOrbConfig {
  orbIntensity?: number;
  orb1Left?: string;   orb1Top?: string;
  orb1Right?: string;  orb1Bottom?: string;
  orb1Colour: string;
  orb2Left?: string;   orb2Top?: string;
  orb2Right?: string;  orb2Bottom?: string;
  orb2Colour: string;
  orb3Left?: string;   orb3Top?: string;
  orb3Right?: string;  orb3Bottom?: string;
  orb3Colour: string;
}

const sectionConfig: Record<string, SectionOrbConfig> = {
  hero: {
    orb1Right: "6%",  orb1Top: "-12%", orb1Colour: "#7B24F6", // Large orb — top right Neon Purple
    orb2Left: "-10%", orb2Bottom: "-14%", orb2Colour: "#E5156D", // Large orb — bottom left Neon Red
    orb3Left: "25%", orb3Top: "38%",  orb3Colour: "#FF0099", // Subtle mid orb — centre left Neon Pink
  },
  skills: {
    orb1Right: "-15%", orb1Top: "10%",  orb1Colour: "#DC7FE0",
    orb2Left: "-15%",  orb2Bottom: "-5%",  orb2Colour: "#9F5BB0",
    orb3Left: "45%",   orb3Top: "50%",   orb3Colour: "#C5C6FF",
  },
  work: {
    orb1Right: "0%",  orb1Top: "-5%",  orb1Colour: "#E5156D",
    orb2Left: "0%",   orb2Bottom: "-10%", orb2Colour: "#7B24F6",
    orb3Left: "10%",  orb3Top: "40%",  orb3Colour: "#DC7FE0",
  },
  principles: {
    orb1Right: "10%",  orb1Top: "5%",   orb1Colour: "#06B6D4",
    orb2Left: "-5%",   orb2Bottom: "0%",  orb2Colour: "#10B981",
    orb3Left: "50%",   orb3Top: "55%",  orb3Colour: "#0E7490",
  },
  community: {
    orb1Right: "-5%",  orb1Top: "-8%",  orb1Colour: "#EC4899",
    orb2Left: "-8%",   orb2Bottom: "-8%",  orb2Colour: "#F59E0B",
    orb3Left: "30%",   orb3Top: "45%",  orb3Colour: "#8B5CF6",
  },
  contact: {
    orb1Right: "15%",  orb1Top: "-10%", orb1Colour: "#7B24F6",
    orb2Left: "-12%",  orb2Bottom: "-12%", orb2Colour: "#E5156D",
    orb3Left: "20%",   orb3Top: "30%",  orb3Colour: "#FF0099",
  },
};

const bgAnimation = {
  orb1Colour: "var(--orb1-colour)", // Large orb — top right
  orb2Colour: "var(--orb2-colour)", // Large orb — bottom left
  orb3Colour: "var(--orb3-colour)", // Subtle mid orb — centre left
  auroraColour: "var(--aurora-colour)", // Aurora band colour
  orb1Speed: "22s", // Drift speed for orb 1
  orb2Speed: "28s", // Drift speed for orb 2
  orb3Speed: "35s", // Drift speed for orb 3
  auroraSpeed: "16s", // Aurora pulse speed
  breatheSpeed: "18s", // Base gradient breathe speed
};

interface OrbProps {
  colour: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  size: string;
  animation: string;
  multiplier: number;
}

const Orb = ({ colour, top, right, bottom, left, size, animation, multiplier }: OrbProps) => (
  <div
    className="absolute rounded-full orb-transition"
    style={{
      width: size,
      height: size,
      top,
      right,
      bottom,
      left,
      background: `radial-gradient(circle, ${colour} 0%, transparent 70%)`,
      opacity: `calc(var(--orb-intensity, 0.25) * ${multiplier})`,
      animation,
      mixBlendMode: 'screen',
      filter: 'blur(60px)',
    }}
  />
);

export const Background = () => {
  // Scroll observer — sets orb CSS vars on document root based on active section
  useEffect(() => {
    const setOrbVars = (id: string) => {
      const cfg = sectionConfig[id];
      if (!cfg) return;

      // Intensity + position + colour for each orb
      const intensity = sectionIntensity[id] ?? cfg.orbIntensity ?? 0.25;
      document.documentElement.style.setProperty('--orb-intensity', String(intensity));
      if (cfg.orb1Left) document.documentElement.style.setProperty('--orb1-left', cfg.orb1Left);
      if (cfg.orb2Left) document.documentElement.style.setProperty('--orb2-left', cfg.orb2Left);
      if (cfg.orb3Left) document.documentElement.style.setProperty('--orb3-left', cfg.orb3Left);
      if (cfg.orb1Top) document.documentElement.style.setProperty('--orb1-top', cfg.orb1Top);
      if (cfg.orb2Bottom) document.documentElement.style.setProperty('--orb2-bottom', cfg.orb2Bottom);
      if (cfg.orb3Top) document.documentElement.style.setProperty('--orb3-top', cfg.orb3Top);
      if (cfg.orb1Right) document.documentElement.style.setProperty('--orb1-right', cfg.orb1Right);
      if (cfg.orb1Bottom) document.documentElement.style.setProperty('--orb1-bottom', cfg.orb1Bottom);
      if (cfg.orb2Top) document.documentElement.style.setProperty('--orb2-top', cfg.orb2Top);
      if (cfg.orb2Bottom) document.documentElement.style.setProperty('--orb2-bottom', cfg.orb2Bottom);
      if (cfg.orb2Right) document.documentElement.style.setProperty('--orb2-right', cfg.orb2Right);
      if (cfg.orb3Bottom) document.documentElement.style.setProperty('--orb3-bottom', cfg.orb3Bottom);
      if (cfg.orb3Right) document.documentElement.style.setProperty('--orb3-right', cfg.orb3Right);
      document.documentElement.style.setProperty('--orb1-colour', cfg.orb1Colour);
      document.documentElement.style.setProperty('--orb2-colour', cfg.orb2Colour);
      document.documentElement.style.setProperty('--orb3-colour', cfg.orb3Colour);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setOrbVars(entry.target.id);
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    Object.keys(sectionConfig).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Set initial values for hero on mount
    setOrbVars('hero');

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <style>{`
        @keyframes orbDrift1 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          30%       { transform: translate(-12%, 14%) scale(1.08); }
          65%       { transform: translate(10%, -10%) scale(0.94); }
        }
        @keyframes orbDrift2 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          40%       { transform: translate(14%, -18%) scale(1.12); }
          72%       { transform: translate(-10%, 12%) scale(0.92); }
        }
        @keyframes orbDrift3 {
          0%, 100% { transform: translate(0%, 0%) scale(1); opacity: calc(var(--orb-intensity, 0.25) * 0.6); }
          50%       { transform: translate(22%, -14%) scale(1.18); opacity: var(--orb-intensity, 0.25); }
        }
        @keyframes auroraShift {
          0%, 100% { opacity: calc(var(--orb-intensity, 0.25) * 0.5); transform: rotate(-4deg) translateX(-4%); }
          50%       { opacity: calc(var(--orb-intensity, 0.25) * 1.2); transform: rotate(-4deg) translateX(4%); }
        }
        @keyframes bgBreathe {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        @keyframes twinkle1 {
          0%, 100% { opacity: 0.4; }
          40%       { opacity: 0.95; }
        }
        @keyframes twinkle2 {
          0%, 100% { opacity: 0.25; }
          60%       { opacity: 0.8; }
        }

        /* Smooth transitions for scroll-based changes */
        .orb-transition {
          transition:
            opacity 1.2s ease-out,
            top 2s ease-out,
            right 2s ease-out,
            bottom 2s ease-out,
            left 2s ease-out,
            background 2s ease-out;
        }
      `}</style>

      {/* Breathing Base */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, #030213 0%, #0a0a1a 50%, #030213 100%)`,
          backgroundSize: "200% 200%",
          animation: `bgBreathe ${bgAnimation.breatheSpeed} ease-in-out infinite`,
        }}
      />

      {/* Orb 1 — top right, primary */}
      <Orb
        colour={bgAnimation.orb1Colour}
        top="var(--orb1-top, -12%)"
        right="var(--orb1-right, -6%)"
        bottom="var(--orb1-bottom)"
        left="var(--orb1-left)"
        size="620px"
        animation={`orbDrift1 ${bgAnimation.orb1Speed} ease-in-out infinite`}
        multiplier={1.0}
      />

      {/* Orb 2 — bottom left, secondary */}
      <Orb
        colour={bgAnimation.orb2Colour}
        top="var(--orb2-top)"
        bottom="var(--orb2-bottom, -14%)"
        left="var(--orb2-left, -10%)"
        right="var(--orb2-right)"
        size="700px"
        animation={`orbDrift2 ${bgAnimation.orb2Speed} ease-in-out infinite`}
        multiplier={0.65}
      />

      {/* Orb 3 — mid screen, subtle accent */}
      <Orb
        colour={bgAnimation.orb3Colour}
        top="var(--orb3-top, 38%)"
        bottom="var(--orb3-bottom)"
        left="var(--orb3-left, 25%)"
        right="var(--orb3-right)"
        size="450px"
        animation={`orbDrift3 ${bgAnimation.orb3Speed} ease-in-out infinite`}
        multiplier={0.6}
      />

      {/* Aurora band — diagonal sweep across mid-screen */}
      <div className="absolute" style={{
        top: "30%", left: "-25%", right: "-25%", height: "700px",
        transform: "rotate(-45deg)",
        background: `linear-gradient(180deg, transparent 0%, ${bgAnimation.auroraColour}22 45%, transparent 80%)`,
        animation: `auroraShift ${bgAnimation.auroraSpeed} ease-in-out infinite`,
      }} />

      {/* Stars */}
      <div
        className="absolute rounded-full"
        style={{ top: 0, left: 0, width: "5px", height: "5px", boxShadow: stars1, animation: "twinkle1 9s ease-in-out infinite", filter: "drop-shadow(0 0 2px var(--starStroke))" }}
      />

      <div
        className="absolute rounded-full"
        style={{ top: 0, left: 0, width: "8px", height: "8px", boxShadow: stars2, animation: "twinkle2 6s ease-in-out infinite", filter: "drop-shadow(0 0 2px var(--starStroke))" }}
      />
    </div>
  );
};
