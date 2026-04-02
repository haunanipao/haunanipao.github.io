// ============================================
// Community.tsx
// I support this.
// ============================================
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, stagger } from '../styles/animations';
import { colours, communityIntro, uxa, adplist } from '../data/portfolioData';
import { ArrowUpRight} from "lucide-react";

export const Community = () => {
  const [quoteIdx, setQuoteIdx] = useState(0);
  return (
   <section id="community" className="py-24 px-6 lg:px-12 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
             <p className="text-s font-semibold tracking-widest uppercase mb-3 text-secondary">{communityIntro.sectionLabel}</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-14 font-brand">
              {communityIntro.heading1} 
              <span className="font-brand-italic text-primary">
                {communityIntro.heading2}<br /></span> 
            </h2>
          </motion.div>

          {/* Two community cards side by side */}
          <motion.div {...stagger} className="grid md:grid-cols-2 gap-8 mb-10">

            {/* UX Auckland card */}
            <motion.div
              {...fadeUp}
              className="rounded-3xl p-8 flex flex-col bg-glass-12">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-white opacity-60">
                {uxa.heading1}
              </p>
              <h3 className="text-2xl font-black mb-4 font-brand text-white">
                {uxa.heading2}
              </h3>
              <p className="text-base leading-relaxed mb-8 flex text-white">
                {uxa.desc}
              </p>
              {/* UXA Stats */}
              <div className="grid grid-cols-2  gap-3 mb-8">
                {uxa.stats.map((s, i) => (
                  <div
                    key={i}
                    className="py-5 px-3 rounded-2xl text-center transition-all duration-300 cursor-default bg-glass-12 hover-community">
                    <div className="text-2xl font-black mb-1 font-brand text-white">
                      {s.number}
                    </div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-white opacity-60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-1 flex flex-col justify-end">
                <a
                  href={uxa.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 self-start  bg-white text-bg hover-bg-dsn">
                  {uxa.label}<ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* ADPList card */}
            <motion.div
              {...fadeUp}
              className="rounded-3xl p-8 flex flex-col bg-glass-12">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-white opacity-60">
                {adplist.heading1}
              </p>
              <h3 className="text-2xl font-black mb-4 font-brand text-white">
                {adplist.heading2}
              </h3>
              <p className="text-base leading-relaxed mb-8 flex-1 text-white">
                {adplist.desc}
              </p>
              {/* ADPList Stats */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {adplist.stats.map((s, i) => (
                  <div
                    key={i}
                    className="py-5 px-3 rounded-2xl text-center transition-all duration-300 cursor-default bg-glass-12 hover-community">
                    <div className="text-2xl font-black mb-1 font-brand text-white">
                      {s.number}
                    </div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-white opacity-60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              {/* Testimonial quote carousel */}
              <div
                className="rounded-2xl p-5 mb-6"
                style={{ background: "rgba(255,255,255,0.1)", borderLeft: "3px solid rgba(255,255,255,0.4)" }}>
                  {/* Dot navigation */}
                <div className="flex items-center gap-2 mb-3">
                  <button
                    onClick={() => setQuoteIdx((quoteIdx - 1 + adplist.quotes.length) % adplist.quotes.length)}
                    className="text-xs px-2 py-1 rounded-full transition-all duration-150"
                    style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.1)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                    aria-label="Previous quote"
                  >‹  Previous </button>
                  {adplist.quotes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setQuoteIdx(i)}
                      aria-label={`Quote ${i + 1}`}
                      className="rounded-full transition-all duration-200"
                      style={{
                        width: i === quoteIdx ? "25px" : "15px",
                        height: "15px",
                        background: i === quoteIdx ? "#fff" : "rgba(255,255,255,0.50)",
                      }}
                    />
                  ))}
                  <button
                    onClick={() => setQuoteIdx((quoteIdx + 1) % adplist.quotes.length)}
                    className="text-xs px-2 py-1 rounded-full transition-all duration-150"
                    style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.1)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                    aria-label="Next quote"
                  >Next ›</button>
                </div>

                <blockquote
                  className="relative text-sm leading-relaxed italic mb-3 min-h-[72px]"
                  style={{ color: "rgba(255,255,255,0.85)" }}>
                  "{adplist.quotes[quoteIdx].text}"
                  <footer className="mt-2 text-s not-italic font-semibold" style={{ color: "rgba(255,255,255,0.80)" }}>
                    — {adplist.quotes[quoteIdx].author}

                  </footer>
                  {/* The Watermark Number */}
                    <span className="absolute mb- bottom-[-35px] right-2 text-8xl font-black  opacity-25 select-none pointer-events-none not-italic font-brand text-white">
                    {quoteIdx + 1}
                  </span>
                </blockquote>
                
              </div>
              <a
                href={adplist.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 self-start bg-white text-bg hover-bg-dsn">
                {adplist.label}<ArrowUpRight size={16}/>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section> 
  );
};
  