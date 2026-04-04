// ============================================
// Hero.tsx
// Hello / Aloha / Kia Ora / Hallo!
// ============================================
import { motion } from "framer-motion";
import { hero, heroImage, contact, iconMap } from '../data/portfolioData';
import {Calendar, Github, Linkedin, Link2, Menu, X, Sparkles,} from "lucide-react";

export const Hero = () => {
  return (
  <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20 px-6 lg:px-12 z-10">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-base font-semibold tracking-widest uppercase mb-8 border-secondary/40 bg-secondary/15 text-secondary">
                <Sparkles size={14} />{hero.badge}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tighter mb-6 font-brand text-main">
              {hero.heading1}
              <br />
              <span className="font-brand-italic text-primary">{hero.heading2}</span>
              <br />
              {hero.heading3}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-4xl xl:text-5xl mb-6 font-brand italic text-secondary">
              {hero.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl leading-relaxed max-w-lg mb-10 text-main">
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col gap-4"
            >
              {/* Primary CTA — Let's Talk */}
              <a
                href={contact.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-2xl font-bold tracking-wide transition-all duration-200 self-start hover-primary hover:opacity-90 hover:scale-105 bg-primary text-white uppercase">
                <Calendar size={25} /> {contact.heading1}{contact.heading2}
              </a>

              {/* Social icon buttons */}
              <div className="flex items-center gap-3">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mr-1 text-secondary">
                  Find me:
                </p>
                {contact.links.slice(1).map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group text-alt border-4 border-card hover-social">
                      {iconMap[link.icon]}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-xs tracking-widest uppercase text-alt">
            </motion.p>
          </div>

          {/* Mahina in Space */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center">
            <div className="relative w-[480px] h-[480px]">
              <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden border-4 border-primary/30 isolate">
                <img src={heroImage.src} alt={heroImage.alt}
                  className="w-full h-full object-cover rounded-full"/>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};
  