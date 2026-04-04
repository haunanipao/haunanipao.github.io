// ============================================
// Work.tsx
// I've done this. 
// ============================================
import { motion } from "framer-motion";
import { fadeUp } from '../styles/animations';
import { workIntro, caseStudies } from '../data/portfolioData';
import { ArrowUpRight} from "lucide-react";

export const Work = () => {
  return (
  <section id="work" className="py-24 px-6 lg:px-12 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="max-w-1xl lg:max-w-2xl">
            <p className="text-s font-semibold tracking-widest uppercase mb-3 text-secondary">
              {workIntro.sectionLabel}</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-14 font-brand">
              {workIntro.heading1}<br />
              <span className="font-brand-italic text-primary">
                {workIntro.heading2}<br /></span>             
            </h2>
          </motion.div>
          
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-4">
            {caseStudies.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border transition-all duration-300 group bg-card border-card hover-card-dsn">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-secondary">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold mb-3 leading-snug font-brand text-main">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed mb-6 text-alt">
                  {item.desc}
                </p>
                <a href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 text-primary">
                  {item.linkText} <ArrowUpRight size={16} />
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};
  