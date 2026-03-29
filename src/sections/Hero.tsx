// ============================================
// Hero.tsx
// Hello / Aloha / Kia Ora / Hallo!
// ============================================
import { motion } from "framer-motion";
import { fadeUp, stagger } from '../styles/animations';
import { colours, hero, heroImage, contact, iconMap } from '../data/portfolioData';
import {Calendar, Github, Linkedin, Link2, Menu, X, Sparkles,
} from "lucide-react";


export const Hero = () => {
  return (
<section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 lg:px-12 z-10">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-base font-semibold tracking-widest uppercase mb-8"
                style={{
                  borderColor: `${colours.secondary}40`,
                  background: `${colours.secondary}15`,
                  color: colours.secondary,
                }}
              >
                <Sparkles size={14} />
                {hero.badge}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tighter mb-6"
              style={{ fontFamily: "'Fraunces', serif", color: colours.text }}
            >
              {hero.heading1}
              <br />
              <span style={{ color: colours.primary, fontStyle: "italic" }}>
                {hero.heading2}
              </span>
              <br />
              {hero.heading3}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-4xl xl:text-5xl mb-6"
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                color: colours.secondary, 
              }}
            >
              {hero.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl leading-relaxed max-w-lg mb-10"
              style={{ color: colours.text }}
            >
              {hero.description}
            </motion.p>

            <motion.div {...stagger} className="flex flex-col gap-4">
              {/* Primary CTA — Let's Talk */}
              <motion.a
                {...fadeUp}
                href={contact.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-2xl font-bold tracking-wide transition-all duration-200 self-start"
                style={{
                  background: colours.primary,
                  color: "#fff",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = colours.hover;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = colours.primary;
                }}
              >
                <Calendar size={25} /> Let's Talk
              </motion.a>

              {/* Social icon buttons */}
              <div className="flex items-center gap-3">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mr-1"
                  style={{ color: colours.secondary }}
                >
                  Find me:
                </p>
                {contact.links.slice(1).map((link, i) => (
                  <motion.a
                    key={i}
                    {...fadeUp}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200"
                    style={{
                      border: `3px solid ${colours.cardBorder}`,
                      color: colours.textAlt,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = colours.hover;
                      el.style.color = colours.hover;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = colours.cardBorder;
                      el.style.color = colours.textAlt;

                    }}
                  >
                    {iconMap[link.icon]}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-xs tracking-widest uppercase"
              style={{ color: `${colours.textAlt}80` }}
            ></motion.p>
          </div>

          {/* Mahina in Space */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[480px] h-[480px]">
              <div
                className="w-full h-full rounded-full border-5 flex items-center justify-center overflow-hidden"
                style={{
                  borderColor: `${colours.primary}30`,
                  background: colours.bg,
                  isolation: "isolate",
                }}
              >
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};
  