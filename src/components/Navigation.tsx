// ============================================
// Navigation.tsx
// That way ->
// ============================================

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { Logo } from '../components/Logo';
import { colours, contact } from '../data/portfolioData';


export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 border-b" : "py-5"}`}
      style={{
        background: scrolled ? `${colours.bg}EE` : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderColor: colours.cardBorder,
      }}
    >
       <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Logo />
          <ul className="hidden md:flex gap-8 list-none">
            {["skills", "work", "principles", "community", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className="text-xs font-semibold tracking-widest uppercase transition-all duration-200 relative pb-0.5"
                  style={{
                    color: colours.textAlt,
                    transform: "translateY(0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colours.primary;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colours.textAlt;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={contact.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200"
            style={{
              background: colours.primary,
              color: "#fff",
              transform: "translateY(0)",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                `0 0px 0px ${colours.primary}55`;
              (e.currentTarget as HTMLAnchorElement).style.background =
                colours.hover;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              (e.currentTarget as HTMLAnchorElement).style.background =
                colours.primary;
            }}
          >
            <Calendar size={14} /> Let's talk
          </a>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: colours.text }}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 border-b py-4 px-6 space-y-3"
            style={{
              background: `${colours.bg}F5`,
              borderColor: colours.cardBorder,
            }}
          >
            {["skills", "work", "principles", "community", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="block w-full text-left py-3 text-xs font-semibold tracking-widest uppercase border-b"
                  style={{
                    color: colours.textAlt,
                    borderColor: colours.cardBorder,
                  }}
                >
                  {item}
                </button>
              ),
            )}
          </motion.div>
        )}
    </nav>
  );
};