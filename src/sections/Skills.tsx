// ============================================
// Skills.tsx
// I do this with my 🧠 🖖🏼 and 💜
// ============================================
import { motion } from "framer-motion";
import { fadeUp, stagger } from '../styles/animations';
import { colours, stats, capability, skills, industries } from '../data/portfolioData';
import { ArrowUpRight} from "lucide-react";

export const Skills = () => {
  return (
    <section id="skills"
        className="py-24 px-6 lg:px-12 z-10 relative"
        style={{ background: colours.bgAlt, opacity: 0.80,}}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp}>
            <p
              className="text-s font-semibold tracking-widest uppercase mb-3"
              style={{ color: colours.secondary }}
            >
              Capabilities
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight mb-14"
              style={{ fontFamily: "'Fraunces', serif", color: colours.text }}
            >
              Bridging the gap <br />
              <em style={{ color: colours.primary }}>
                between Design and Code
              </em>
            </h2>
            <p
              className="text-xl lg:text-2xl xl:text-2xl mb-14 max-w-2xl"
              style={{ color: colours.textAlt }}
            >
              My work bridges design, research, and delivery—shaped by years
              across product, enterprise, and government. I'm now expanding into
              full-stack development, "vibe coding" and Web3 to deepen how I
              build and collaborate.
            </p>
          </motion.div>

          {/* FULL STACK DESIGNER */}
          <motion.div
            {...stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {(Object.entries(skills) as [string, string[]][]).map(
              ([key, items], i) => (
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
                    el.style.transform = "translateY(-6px)";
                    el.style.boxShadow = `0 20px 40px rgba(0,0,0,0.35), 0 0 0 1px ${colours.primary}30`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = colours.cardBorder;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <h3
                    className="text-lg font-bold mb-5 pb-4 border-b uppercase"
                    style={{
                      fontFamily: "'Urbanist', sans-serif",
                      color: colours.secondary,
                      borderColor: colours.cardBorder,
                    }}
                  >
                    {key}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((skill, j) => (
                      <li
                        key={j}
                        className="text-base flex items-center gap-2 "
                        style={{ color: colours.textAlt }}
                      >
                        <span style={{ color: colours.primary }}>▹</span>{" "}
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ),
            )}
          </motion.div>

          {/* EXPERIENCE STATS :  Note for future, add percentage breakdown */}
          <motion.div {...fadeUp} className="mt-16">
            <div
              className="border-y z-10 relative"
              style={{
                borderColor: colours.cardBorder,
                background: colours.bgAlt,
              }}
            >
              <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="py-10 px-8 border-l border-r text-center transition-colors duration-200"
                    style={{ borderColor: colours.cardBorder }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = `${colours.primary}08`)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <div
                      className="text-4xl font-black tracking-tight mb-2"
                      style={{
                        fontFamily: "'Fraunces', serif",
                        color: colours.primary,
                      }}
                    >
                      {s.number}
                    </div>
                    <div
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: colours.textAlt }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <br />
          </motion.div>

          {/* INDUSTRY DOMAINS */}
          <p
            className="text-base font-semibold tracking-widest uppercase mb-6 text-center"
            style={{ color: colours.secondary }}
          >
            Industry Experience
          </p>
          <motion.div
            {...stagger}
            className="flex flex-wrap justify-left gap-2"
          >
            {industries.map((ind, i) => (
              <motion.span
                key={i}
                {...fadeUp}
                className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-200 cursor-default"
                style={{
                  background: colours.cardBg,
                  borderColor: colours.cardBorder,
                  color: colours.textAlt,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.background =
                    colours.primary;
                  (e.currentTarget as HTMLSpanElement).style.color = "#fff";
                  (e.currentTarget as HTMLSpanElement).style.borderColor =
                    colours.primary;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.background =
                    colours.cardBg;
                  (e.currentTarget as HTMLSpanElement).style.color =
                    colours.textAlt;
                  (e.currentTarget as HTMLSpanElement).style.borderColor =
                    colours.cardBorder;
                }}
              >
                {ind}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
  );
};