// ============================================
// Community.tsx
// I support this.
// ============================================
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, stagger } from '../styles/animations';
import { colours, uxa, adplist } from '../data/portfolioData';
import { ArrowUpRight} from "lucide-react";

export const Community = () => {
  const [quoteIdx, setQuoteIdx] = useState(0);
  return (
   <section
        id="community"
        className="py-24 px-6 lg:px-12 z-10 relative"
        style={{ background: colours.bgCommunity, opacity: 100 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <motion.div {...fadeUp} className="text-center mb-14">
            <p
              className="text-s font-semibold tracking-widest uppercase mb-3"
              style={{ color: colours.secondary }}
            >
              Community
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{ fontFamily: "'Fraunces', serif", color: colours.text }}
            >
              Giving <em style={{ color: colours.primary }}> Back</em>
            </h2>
          </motion.div>

          {/* Two community cards side by side */}
          <motion.div {...stagger} className="grid md:grid-cols-2 gap-8 mb-10">

            {/* UX Auckland card */}
            <motion.div
              {...fadeUp}
              className="rounded-3xl p-8 flex flex-col"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Managing Organiser since 2013
              </p>
              <h3
                className="text-2xl font-black mb-4"
                style={{ fontFamily: "'Fraunces', serif", color: "#fff" }}
              >
                {uxa.heading}
              </h3>
              <p
                className="text-base leading-relaxed mb-8 flex-1"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {uxa.desc}
              </p>
              {/* UXA Stats */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {uxa.stats.map((s, i) => (
                  <div
                    key={i}
                    className="py-5 px-3 rounded-2xl text-center transition-all duration-300 cursor-default"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background =
                        "rgba(255,255,255,0.22)";
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background =
                        "rgba(255,255,255,0.12)";
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "translateY(0)";
                    }}
                  >
                    <div
                      className="text-2xl font-black mb-1"
                      style={{ fontFamily: "'Fraunces', serif", color: "#fff" }}
                    >
                      {s.number}
                    </div>
                    <div
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={uxa.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 self-start"
                style={{
                  background: "#fff",
                  color: colours.bg,
                  transform: "translateY(0)",
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.2)";
                  el.style.background = colours.bg;
                  el.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.background = "#fff";
                  el.style.color = colours.bg;
                }}
              >
                Visit UX Auckland's Linktree <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* ADPList card */}
            <motion.div
              {...fadeUp}
              className="rounded-3xl p-8 flex flex-col"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Mentor since {adplist.since} · ADPList
              </p>
              <h3
                className="text-2xl font-black mb-4"
                style={{ fontFamily: "'Fraunces', serif", color: "#fff" }}
              >
                {adplist.heading}
              </h3>
              <p
                className="text-base leading-relaxed mb-8 flex-1"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {adplist.desc}
              </p>
              {/* ADPList Stats */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {adplist.stats.map((s, i) => (
                  <div
                    key={i}
                    className="py-5 px-3 rounded-2xl text-center transition-all duration-300 cursor-default"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background =
                        "rgba(255,255,255,0.22)";
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background =
                        "rgba(255,255,255,0.12)";
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "translateY(0)";
                    }}
                  >
                    <div
                      className="text-2xl font-black mb-1"
                      style={{ fontFamily: "'Fraunces', serif", color: "#fff" }}
                    >
                      {s.number}
                    </div>
                    <div
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              {/* Testimonial quote carousel */}
              <div
                className="rounded-2xl p-5 mb-6"
                style={{ background: "rgba(255,255,255,0.1)", borderLeft: "3px solid rgba(255,255,255,0.4)" }}
              >
                <blockquote
                  className="text-sm leading-relaxed italic mb-3 min-h-[72px]"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  "{adplist.quotes[quoteIdx].text}"
                  <footer className="mt-2 text-xs not-italic font-semibold" style={{ color: "rgba(255,255,255,0.55)" }}>
                    — {adplist.quotes[quoteIdx].author}
                  </footer>
                </blockquote>
                {/* Dot navigation */}
                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={() => setQuoteIdx((quoteIdx - 1 + adplist.quotes.length) % adplist.quotes.length)}
                    className="text-xs px-2 py-1 rounded-full transition-all duration-150"
                    style={{ color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.1)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                    aria-label="Previous quote"
                  >‹</button>
                  {adplist.quotes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setQuoteIdx(i)}
                      aria-label={`Quote ${i + 1}`}
                      className="rounded-full transition-all duration-200"
                      style={{
                        width: i === quoteIdx ? "20px" : "8px",
                        height: "8px",
                        background: i === quoteIdx ? "#fff" : "rgba(255,255,255,0.35)",
                      }}
                    />
                  ))}
                  <button
                    onClick={() => setQuoteIdx((quoteIdx + 1) % adplist.quotes.length)}
                    className="text-xs px-2 py-1 rounded-full transition-all duration-150"
                    style={{ color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.1)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                    aria-label="Next quote"
                  >›</button>
                </div>
              </div>
              <a
                href={adplist.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 self-start"
                style={{
                  background: "#fff",
                  color: colours.bg,
                  transform: "translateY(0)",
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.2)";
                  el.style.background = colours.bg;
                  el.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.background = "#fff";
                  el.style.color = colours.bg;
                }}
              >
                View My ADPList Profile <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section> 
  );
};
  