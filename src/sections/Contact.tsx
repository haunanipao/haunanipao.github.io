// ============================================
// Contact.tsx
// Where's Nani?
// ============================================
import { motion } from "framer-motion";
import { fadeUp, stagger } from '../styles/animations';
import { colours, contact, iconMap } from '../data/portfolioData';
import { Calendar, Linkedin, Github, Link2} from "lucide-react";

export const Contact = () => {
  return (
    <section
        id="contact"
        className="py-24 px-6 lg:px-12 z-10 relative text-center"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p
              className="text-s font-semibold tracking-widest uppercase mb-3"
              style={{ color: colours.secondary }}
            >
              Get in Touch
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight mb-4"
              style={{ fontFamily: "'Fraunces', serif", color: colours.text }}
            >
              {contact.heading}
              <em style={{ color: colours.primary }}>Talk!</em>
            </h2>
            <p className="text-2xl mb-12" style={{ color: colours.textAlt }}>
              {contact.sub3}
            </p>
          </motion.div>
          <motion.div
            {...stagger}
            className="flex flex-wrap justify-center gap-4"
          >
            {contact.links.map((link, i) => (
              <motion.a
                key={i}
                {...fadeUp}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-7 py-4 rounded-full font-semibold tracking-wide transition-all duration-200"
                style={
                  link.primary
                    ? {
                        background: colours.primary,
                        color: "#fff",
                        transform: "translateY(0)",
                        boxShadow: "none",
                      }
                    : {
                        border: `3px solid ${colours.cardBorder}`,
                        color: colours.textAlt,
                        transform: "translateY(0)",
                        boxShadow: "none",
                      }
                }
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(0px)";
                  if (link.primary) {
                    el.style.background = colours.hover;
                    el.style.boxShadow = `0 0px 0px ${colours.primary}55`;
                  } else {
                    el.style.borderColor = colours.primary;
                    el.style.color = colours.primary;
                    el.style.boxShadow = `0 8px 24px rgba(0,0,0,0.3)`;
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  if (link.primary) {
                    el.style.background = colours.primary;
                  } else {
                    el.style.borderColor = colours.cardBorder;
                    el.style.color = colours.textAlt;
                  }
                }}
              >
                {iconMap[link.icon]} {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
  );
};
  