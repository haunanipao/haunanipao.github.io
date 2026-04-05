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
    <section id="skills" className="py-24 px-6 lg:px-12 z-10 relative bg-soft">
        <motion.div {...stagger} className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="max-w-1xl lg:max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-s font-semibold tracking-widest uppercase mb-3 text-secondary">{capability.sectionLabel}</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 font-brand">
              {capability.heading1}<br />
              <span className="font-brand-italic text-primary">{capability.heading2}<br /></span>
            </h2>
            <p className="text-2xl mb-12 text-alt">{capability.desc}</p>
          </motion.div>

          {/* FULL STACK DESIGNER SKILLS */}
          <motion.div {...fadeUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 font-ui"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
          >
            {(Object.entries(skills) as [string, string[]][]).map(
              ([key, items], i) => (
                <div
                  key={i}
                  className="p-7 rounded-2xl border transition-all duration-300  bg-card border-card hover-card-dsn">
                  <h3 className="text-lg font-bold mb-5 pb-4 border-b uppercase font-reading text-secondary border-card">
                    {key}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((skill, j) => (
                      <li
                        key={j}
                        className="text-base flex items-center gap-2 text-alt">
                        <span className="text-primary">▹</span>{" "}
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </motion.div>

          {/* EXPERIENCE STATS */}
          <motion.div {...fadeUp} className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="border-y z-10 relative bg-soft border-card">
              <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="py-10 px-8 border-l border-r text-center transition-colors duration-200 border-card hover-stat-dsn">
                    <div className="text-4xl font-black tracking-tight mb-2 font-brand text-primary">{s.number}</div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-alt">
                      {s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <br />
          </motion.div>

          {/* INDUSTRY DOMAINS */}
          <motion.div {...fadeUp} className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-base font-semibold tracking-widest uppercase mb-6 text-center text-secondary">Industry Experience</p>
            <div className="flex flex-wrap justify-left gap-2">
            {industries.map((industry, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-200 cursor-default text-alt bg-card border-card hover-primary text-white">{industry}
              </span>
            ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
  );
};