// ============================================
// Work.tsx
// I've done this. 
// ============================================
import { motion } from "framer-motion";
import { fadeUp, stagger } from '../styles/animations';
import { colours, workItems } from '../data/portfolioData';
import { ArrowUpRight} from "lucide-react";

export const Work = () => {
  return (
 <section id="work" className="py-24 px-6 lg:px-12 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp}>
            <p
              className="text-s font-semibold tracking-widest uppercase mb-3"
              style={{ color: colours.secondary, opacity: 0.80 }}
            >
              Selected Work
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight mb-14"
              style={{ fontFamily: "'Fraunces', serif", color: colours.text }}
            >
              My Adventures in <br />
              <em style={{ color: colours.primary }}>
                Making and Participating{" "}
              </em>
            </h2>
          </motion.div>
          <motion.div {...stagger} className="grid md:grid-cols-2 gap-4">
            {workItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="p-8 rounded-2xl border transition-all duration-300 group"
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
                  el.style.boxShadow = `0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px ${colours.primary}25`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = colours.cardBorder;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
                  style={{
                    background: `${colours.secondary}18`,
                    color: colours.secondary,
                  }}
                >
                  {item.tag}
                </span>
                <h3
                  className="text-xl font-bold mb-3 leading-snug"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: colours.text,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: colours.textAlt }}
                >
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                  style={{ color: colours.primary }}
                >
                  {item.linkText} <ArrowUpRight size={16} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};
  