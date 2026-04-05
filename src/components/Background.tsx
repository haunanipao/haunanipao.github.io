// ============================================
// Background.tsx
// My Universe ✨
// ============================================
import { useEffect } from "react";

// Orb intensity per section — tweak these to match each section's "vibe"
const sectionIntensity: Record<string, number> = {
  hero: 0.30,       // vivid glow to open
  skills: 0.18,     // dim so skill cards pop
  work: 0.22,
  principles: 0.15, // most subdued for readability
  community: 0.30,
  contact: 0.25,    // warm glow to finish
};

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

// The reusable Orb component — opacity driven by CSS var --orb-intensity * multiplier
const Orb = ({ colour, size, top, bottom, left, right, animation, multiplier }: {
  colour: string;
  size: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  animation: string;
  multiplier: number;
}) => (
  <div
    className="absolute rounded-full orb-transition"
    style={{
      top, bottom, left, right,
      width: size,
      height: size,
      background: `radial-gradient(circle, ${colour} 0%, transparent 70%)`,
      opacity: `calc(var(--orb-intensity, 0.25) * ${multiplier})`,
      animation: animation,
      filter: "blur(40px)",
    }}
  />
);

const bgAnimation = {
  orb1Colour: "var(--orb1)", // Large orb — top right
  orb2Colour: "var(--orb2)", // Large orb — bottom left
  orb3Colour: "var(--orb3)", // Subtle mid orb — centre left
  auroraColour: "var(--aurora)", // Aurora band colour
  orb1Speed: "22s", // Drift speed for orb 1
  orb2Speed: "28s", // Drift speed for orb 2
  orb3Speed: "35s", // Drift speed for orb 3
  auroraSpeed: "16s", // Aurora pulse speed
  breatheSpeed: "14s", // Base gradient breathe speed
};

export const Background = () => {
  // Scroll observer — sets --orb-intensity on document root based on active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const intensity = sectionIntensity[entry.target.id] ?? 0.25;
            document.documentElement.style.setProperty('--orb-intensity', String(intensity));
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    Object.keys(sectionIntensity).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

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

        /* Smooth transitions for scroll-based intensity changes */
        .orb-transition {
          transition: opacity 1.2s ease-out;
        }
      `}</style>

      {/* Breathing Base */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, var(--bg) 0%, var(--bgAlt) 50%, var(--bg) 100%)`,
          backgroundSize: "200% 200%",
          animation: `bgBreathe ${bgAnimation.breatheSpeed} ease-in-out infinite`,
        }}
      />

      {/* Orb 1 — top right, primary */}
      <Orb
        colour={bgAnimation.orb1Colour} size="620px" top="-12%" right="-6%"
        animation={`orbDrift1 ${bgAnimation.orb1Speed} ease-in-out infinite`}
        multiplier={1.0}
      />

      {/* Orb 2 — bottom left, secondary */}
      <Orb
        colour={bgAnimation.orb2Colour} size="700px" bottom="-14%" left="-10%"
        animation={`orbDrift2 ${bgAnimation.orb2Speed} ease-in-out infinite`}
        multiplier={0.65}
      />

      {/* Orb 3 — mid screen, subtle accent */}
      <Orb
        colour={bgAnimation.orb3Colour} size="450px" top="38%" left="20%"
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
