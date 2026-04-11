// ============================================
// MyArt.tsx
// A journey I wish I came back to earlier. 
// ============================================
import { motion } from "framer-motion";
import { fadeUp, stagger } from '../styles/animations';
import { myArtIntro } from '../data/portfolioData';
import { PortfolioButton } from '../components/Button';

const instaInfo = {
      label: "My Instagram",
      href: "https://www.instagram.com/nanicured/",
      primary: false,
};

export const MyArt = () => {
  return (
  <section id="myArt" className="py-24 px-6 lg:px-12 z-10 relative">
        <motion.div {...stagger} className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="max-w-1xl lg:max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}>
            <p className="text-s font-semibold tracking-widest uppercase mb-3 text-secondary">
              {myArtIntro.sectionLabel}</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-14 font-brand">
              {myArtIntro.heading1}<br />
              <span className="font-brand-italic text-primary">
                {myArtIntro.heading2}<br /></span>
            </h2>
            <p className="text-2xl mb-12 text-alt">{myArtIntro.desc}</p>
          </motion.div>

          <motion.div {...fadeUp} className="flex justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={myArtIntro.src} 
                alt={myArtIntro.alt}
                className="w-full h-auto object-cover"
              />
              <p className="text-base p-3 leading-relaxed text-alt">{myArtIntro.alt}</p>
            </div>
            </motion.div>
            <motion.div>
            <div className="flex flex-wrap justify-center gap-6">
                <a
                  href={instaInfo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-2xl font-bold transition-all duration-200 text-white border-4 border-card hover-social">
                  
                  <span className="font-reading text-base uppercase tracking-widest">
                    {instaInfo.label}
                  </span>
                </a>
            </div>
          </motion.div>
      </motion.div>
    </section>
  );
};