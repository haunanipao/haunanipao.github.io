// ============================================
// Navigation.tsx
// That way ->
// ============================================

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Calendar, Orbit, MoonStar, Telescope, Sparkles, ZodiacCapricorn,} from "lucide-react";
import { Logo } from '../components/Logo';
import { PortfolioButton } from '../components/Button';
import { contact } from '../data/portfolioData';

const navLabel = ["skills", "work", "principles", "community", "contact"];

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track the active ID

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

  // Intersection Observer for the active state
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is in the middle 20% of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });

      // Clear selection if we are back at the very top (Hero)
      if (window.scrollY < 100) setActiveSection("");
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    // Observe all labels + the hero
    const sectionsToObserve = [...navLabel, "hero"];

    // Observe all sections defined in your navLabel
    sectionsToObserve.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${scrolled ? "py-3 nav-glass" : "py-5 nav-base"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Logo onClick={() => scrollTo("hero")} 
            className={`transition-colors ${activeSection === "hero" ? "text-primary" : "text-white"}`}/>
          
          <ul className="hidden md:flex gap-8 list-none m-0 p-0">
            {navLabel.map((item) => (
              <li key={item} className="flex flex-col items-center">
                <button
                  onClick={() => scrollTo(item)}
                  className={`text-xs font-semibold tracking-widest uppercase transition-all duration-200 
                    ${activeSection === item ? "nav-link-active" : "text-alt nav-hover"}`}>
                  {item}
                </button>
                
                {/* The Thematic Marker */}
                {activeSection === item && (
                  <motion.div 
                    layoutId="activeMarker" // Framer Motion magic to slide the icon between links
                    className="text-primary mt-1">
                    <Orbit size={15} className="nav-icon-pulse" />
                  </motion.div>
                )}
              </li>
            ))}
          </ul>

          <PortfolioButton size="sm"
            label={`${contact.heading1} ${contact.heading2}`} 
            href={contact.links[0].href}
            icon="calendar"
          />

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 border-b py-4 px-6 space-y-3 nav-glass"
          >
            {navLabel.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`block w-full text-left py-4 text-xs font-semibold tracking-widest uppercase border-b border-white/5 
                    ${activeSection === item ? "nav-link-active" : "text-alt nav-hover"}`}>
                  {item}
                </button>
              ),
            )}
          </motion.div>
        )}
    </nav>
  );
};