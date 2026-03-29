// ============================================
// DesignPrinciples.tsx
// I believe. 
// ============================================
import { motion } from "framer-motion";
import { fadeUp, stagger } from '../styles/animations';
import { colours, designPrinciples, iconMap } from '../data/portfolioData';
import { Target, Users, Search, MessageCircle, Palette, Compass } from "lucide-react";

export const Principles = () => {
  return (
 <section id="principles" className="py-24 px-6 lg:px-12 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp}>
            <p
              className="text-s font-semibold tracking-widest uppercase mb-3"
              style={{ color: colours.secondary }}
            >
              How I Work
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight mb-4"
              style={{ fontFamily: "'Fraunces', serif", color: colours.text }}
            >
              My Design Principles &<br />
              <em style={{ color: colours.primary }}>
                Collaboration Philosophy
              </em>
            </h2>
            <p
              className="text-xl lg:text-2xl xl:text-2xl mb-14 max-w-2xl"
              style={{ color: colours.textAlt }}
            >
              My approach to design—how I think, collaborate, and build. They
              reflect my values, methodologies, and priorities when it comes to
              designing solutions.
            </p>
          </motion.div>
          <motion.div
            {...stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 "
          >
            {designPrinciples.map((p, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="p-7 rounded-2xl border transition-all duration-300"
                style={{
                  background: colours.cardBg,
                  borderColor: colours.cardBorder,
                  transform: "translateY(0)",
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = colours.primary;
                  el.style.transform = "translateY(-5px)";
                  el.style.boxShadow = `0 20px 40px rgba(0,0,0,0.35), 0 0 0 1px ${colours.primary}30`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = colours.cardBorder;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  className="mb-4 p-2 rounded-xl inline-block transition-all duration-300"
                  style={{
                    background: `${colours.secondary}18`,
                    color: colours.secondary,
                  }}
                >
                  {iconMap[p.icon]}
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    color: colours.text,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: colours.textAlt }}
                >
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};