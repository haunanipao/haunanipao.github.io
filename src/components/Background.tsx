// ============================================
// Background.tsx
// My Universe ✨
// ============================================

// Generate a starfield once at module load — random positions, two layers for depth
function makeStars(count: number, maxX: number, maxY: number): string {
  const stars: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    const big = Math.random() > 0.88;
    const op = (Math.random() * 0.55 + 0.2).toFixed(2);
    stars.push(`${x}px ${y}px ${big ? "2px" : "1px"} rgba(255,255,255,${op})`);
  }
  return stars.join(", ");
}

const stars1 = makeStars(120, 1920, 4000);
const stars2 = makeStars(50, 1920, 4000);

// Define the props our Orb needs
interface OrbProps {
  colour: string;
  size: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  animation: string;
  opacity: number;
}

// The reusable Orb component
const Orb = ({ colour, size, top, bottom, left, right, animation, opacity }: OrbProps) => (
  <div
    className="absolute rounded-full"
    style={{
      top, bottom, left, right,
      width: size,
      height: size,
      background: `radial-gradient(circle, ${colour} 0%, transparent 70%)`,
      opacity: opacity,
      animation: animation,
      filter: "blur(40px)", // Adds that extra soft space-cloud feel
    }}
  />
);

const bgAnimation = {
  orb1Colour: "var(--orb1)", // Large orb — top right
  orb2Colour: "var(--orb2)", // Large orb — bottom left
  orb3Colour: "var(--orb3)", // Subtle mid orb — centre left
  auroraColour: "var(--aurora)", // Aurora band colour
  intensity: 0.25, // Overall glow strength: 0.05 = barely there · 0.25 = vivid
  orb1Speed: "22s", // Drift speed for orb 1
  orb2Speed: "28s", // Drift speed for orb 2
  orb3Speed: "35s", // Drift speed for orb 3
  auroraSpeed: "16s", // Aurora pulse speed
  breatheSpeed: "14s", // Base gradient breathe speed
};

export const Background = () => {
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
          0%, 100% { transform: translate(0%, 0%) scale(1); opacity: ${bgAnimation.intensity * 0.6}; }
          50%       { transform: translate(22%, -14%) scale(1.18); opacity: ${bgAnimation.intensity}; }
        }
        @keyframes auroraShift {
          0%, 100% { opacity: ${bgAnimation.intensity * 0.5}; transform: rotate(-4deg) translateX(-4%); }
          50%       { opacity: ${bgAnimation.intensity * 1.2}; transform: rotate(-4deg) translateX(4%); }
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
        opacity={bgAnimation.intensity}
      />

      {/* Orb 2 — bottom left, secondary */}
      <Orb
        colour={bgAnimation.orb2Colour} size="700px" bottom="-14%" left="-10%"
        animation={`orbDrift2 ${bgAnimation.orb2Speed} ease-in-out infinite`}
        opacity={bgAnimation.intensity * 0.65}
      />

      {/* Orb 3 — mid screen, subtle accent */}
      <Orb
        colour={bgAnimation.orb3Colour} size="450px" top="38%" left="20%"
        animation={`orbDrift3 ${bgAnimation.orb3Speed} ease-in-out infinite`}
        opacity={bgAnimation.intensity * 0.6}
      />

      {/* Aurora band — diagonal sweep across mid-screen */}
      <div className="absolute" style={{
        top: "30%", left: "-25%", right: "-25%", height: "350px",
        background: `linear-gradient(180deg, transparent 0%, ${bgAnimation.auroraColour}22 45%, transparent 80%)`,
        transform: "rotate(-4deg)",
        animation: `auroraShift ${bgAnimation.auroraSpeed} ease-in-out infinite`,
      }} />

      {/* Stars */}
      <div
        className="absolute rounded-full"
        style={{ top: 0, left: 0, width: "5px", height: "5px", boxShadow: stars1, animation: "twinkle1 9s ease-in-out infinite" }}
      />

      <div
        className="absolute rounded-full"
        style={{ top: 0, left: 0, width: "8px", height: "8px", boxShadow: stars2, animation: "twinkle2 6s ease-in-out infinite" }}
      />
    </div>
  );
};
