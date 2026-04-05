// ============================================
// DesignPrinciples.tsx
// I believe. 
// ============================================
import { motion } from "framer-motion";
import { fadeUp, stagger } from '../styles/animations';
import { principleIntro, designPrinciples, iconMap } from '../data/portfolioData';
import { Target, Users, Search, MessageCircle, Palette, Compass } from "lucide-react";

export const Principles = () => {
  return (
  <section id="principles" className="py-24 px-6 lg:px-12 z-10 relative">
        <motion.div {...stagger} className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="max-w-1xl lg:max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-s font-semibold tracking-widest uppercase mb-3 text-secondary">
              {principleIntro.sectionLabel}</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-14 font-brand">
              {principleIntro.heading1}<br />
              <span className="font-brand-italic text-primary">
                {principleIntro.heading2}<br /></span>
            </h2>
            <p className="text-2xl mb-12 text-alt">{principleIntro.desc}</p>
          </motion.div>

          <motion.div {...fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 "
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
          >
            {designPrinciples.map((p, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl border transition-all duration-300 group bg-card border-card hover-card-dsn">
                <div className="mb-4 p-2 rounded-xl inline-block transition-all duration-300 text-secondary">
                  {iconMap[p.icon]}
                </div>
                <h3 className="text-2xl font-bold mb-3 font-reading text-main">
                  {p.title}
                </h3>
                <p className="text-base leading-relaxed text-alt">
                  {p.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
  );
};