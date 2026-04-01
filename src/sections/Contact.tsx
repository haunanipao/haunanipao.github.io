// ============================================
// Contact.tsx
// Where's Nani?
// ============================================
import { motion } from "framer-motion";
import { fadeUp, stagger } from '../styles/animations';
import { contact, iconMap } from '../data/portfolioData';
import { Calendar, Linkedin, Github, Link2} from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact"
        className="py-24 px-6 lg:px-12 z-10 relative text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-s font-semibold tracking-widest uppercase mb-3 text-secondary">{contact.sectionLabel}</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 font-brand">
              {contact.heading1}
              <span className="font-brand-italic text-primary">{contact.heading2}</span>
            </h2>
              <p className="text-2xl mb-12 text-alt">{contact.desc2}</p>
          </motion.div>

          <motion.div {...stagger} className="flex flex-col items-center gap-8">
          {/* Main CTA Button */}
          <motion.a
            {...fadeUp}
            href={contact.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-25 py-5 rounded-full text-2xl font-bold transition-all duration-200 hover:scale-105 hover-primary bg-primary text-white"
          >
            <Calendar size={25} /> {contact.heading1}{contact.heading2}
          </motion.a>

            {/* THE SOCIAL ROW */}
            <div className="flex flex-wrap justify-center gap-6">
              {contact.links.slice(1).map((link, i) => (
                <motion.a
                  key={i}
                  {...fadeUp}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-2xl font-bold transition-all duration-200 hover-primary  text-white border-4 border-card"
                >
                  {iconMap[link.icon]}
                  <span className="font-ui text-base uppercase tracking-widest">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>         
        </div>
      </section>
  );
};
  