// ============================================
// MyArt.tsx
// A journey I wish I came back to earlier. 
// ============================================
import { motion } from "framer-motion";
import { fadeUp, stagger } from '../styles/animations';
import { myArtIntro } from '../data/portfolioData';
import { MoonPhase } from '../components/MoonPhase';

const instaInfo = {
  label: "My Instagram",
  href: "https://www.instagram.com/nanicured/",
};

export const MyArt = () => {
  return (
    <section id="myArt" className="py-24 px-6 lg:px-12 z-10 relative">
      <motion.div {...stagger} className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="max-w-1xl lg:max-w-2xl mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}>
          <p className="text-s font-semibold tracking-widest uppercase mb-3 text-secondary">
            {myArtIntro.sectionLabel}</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 font-brand">
            {myArtIntro.heading1}<br />
            <span className="font-brand-italic text-primary">
              {myArtIntro.heading2}<br /></span>
          </h2>
          <p className="text-2xl mb-8 text-alt">{myArtIntro.desc}</p>
        </motion.div>

        {/* Mahina in Space */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center mb-3"
          className="max-w-xs">
          <MoonPhase />
        </motion.div>

        <motion.div {...fadeUp} className="flex flex-col items-center gap-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-card">
            <img 
              src={myArtIntro.src} 
              alt={myArtIntro.alt}
              className="w-full h-auto object-cover"
            />
            <div className="p-6 bg-card border-t border-white/5">
              <p className="text-base leading-relaxed text-alt italic">{myArtIntro.alt}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={instaInfo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full  font-bold transition-all duration-200 text-white border-4 border-card hover-social font-reading text-base uppercase tracking-widest"
            >
              {instaInfo.label}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
