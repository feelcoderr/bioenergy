"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Flame, Droplets, Filter, Layers, Package, Beaker, Cpu, ArrowRight, TrendingUp } from "lucide-react";

const chain = [
  { icon: Flame,   title: "Fuel Pellets",           desc: "High-demand industrial fuel.",        tier: 1, col: "#228B55" },
  { icon: Layers,  title: "Industrial Biochar",      desc: "Soil amendment & carbon storage.",    tier: 1, col: "#1A7042" },
  { icon: Package, title: "Slow-Release Fertilizer", desc: "Boosts soil health & productivity.", tier: 2, col: "#3DA872" },
  { icon: Filter,  title: "Water Filtration Media",  desc: "Clean water & environmental use.",   tier: 2, col: "#228B55" },
  { icon: Droplets,title: "Pyrolysis Oil Fractions", desc: "Chemical & fuel feedstock.",         tier: 2, col: "#1A7042" },
  { icon: Beaker,  title: "Phenolic Resin",          desc: "Sustainable material substitution.", tier: 3, col: "#155833" },
  { icon: Leaf,    title: "Renewable Fuel Partners", desc: "Co-processing partnerships.",        tier: 3, col: "#0F4226" },
  { icon: Cpu,     title: "Graphene & Carbon",       desc: "High-value advanced materials.",     tier: 3, col: "#0F172A" },
];

export default function ValueChainSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const barRef = useRef<HTMLDivElement>(null);
  const barInView = useInView(barRef, { once: true, margin: "-80px" });

  return (
    <section id="technology" style={{ paddingTop: "96px", paddingBottom: "96px", background: "#F8FAFC", position: "relative", overflow: "hidden" }}>
      {/* BG blob */}
      <div style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%", pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 80% 30%, rgba(26,112,66,0.04) 0%, transparent 70%)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header split */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "flex-start", marginBottom: "56px" }}>
          <motion.div ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="tag" style={{ marginBottom: "20px", display: "inline-flex" }}>
              <TrendingUp style={{ width: "13px", height: "13px" }} />
              Value Chain
            </span>
            <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#0F172A", lineHeight: 1.15, marginTop: "16px" }}>
              From Commodity{" "}<span className="text-grad-2">Biomass</span>
              <br />to High-Margin
              <br /><span className="text-grad-1">Carbon Products</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
            style={{ paddingTop: "80px" }}
          >
            <p style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "16px", lineHeight: 1.7, color: "#475569", marginBottom: "24px" }}>
              Verdaez avoids dependence on one revenue line. Our platform produces multiple products
              across the commodity-to-specialty spectrum, giving investors stable base revenue
              with high-margin specialty upside.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {["Lower Risk Base", "Diversified Revenue", "Higher Value Upside"].map((label, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "8px 16px", borderRadius: "12px",
                  background: ["#F1F5F9","#E2E8F0","#E2E8F0"][i],
                  border: `1px solid ${["#E2E8F0","#CBD5E1","#CBD5E1"][i]}`,
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: ["#3DA872","#228B55","#155833"][i] }} />
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "12px", color: ["#228B55","#1A7042","#155833"][i] }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Risk → Value bar */}
        <div ref={barRef} style={{ marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "11px", color: "#3DA872", textTransform: "uppercase", letterSpacing: "0.1em", flexShrink: 0 }}>
              Lower Risk
            </span>
            <div style={{ flex: 1, height: "10px", borderRadius: "99px", overflow: "hidden", background: "#E2E8F0", position: "relative" }}>
              <motion.div
                initial={{ scaleX: 0, originX: "0" }}
                animate={barInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                style={{ height: "100%", borderRadius: "99px", background: "linear-gradient(90deg,#6EE7B7,#34D399,#10B981,#059669,#047857,#022C22)" }}
              />
            </div>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "11px", color: "#155833", textTransform: "uppercase", letterSpacing: "0.1em", flexShrink: 0, display: "flex", alignItems: "center", gap: "4px" }}>
              Higher Value <ArrowRight style={{ width: "14px", height: "14px" }} />
            </span>
          </div>
        </div>

        {/* Product chain grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "16px" }}>
          {chain.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                borderRadius: "16px", padding: "20px", cursor: "default",
                background: "white", border: "1px solid #E2E8F0",
                boxShadow: "0 2px 8px rgba(26,112,66,0.05)",
                position: "relative", overflow: "hidden",
                transition: "box-shadow 0.3s ease",
              }}
            >
              {/* Left border accent */}
              <div style={{ position: "absolute", left: 0, top: "20%", bottom: "20%", width: "3px", borderRadius: "99px", background: item.col }} />

              <div style={{
                width: "40px", height: "40px", borderRadius: "12px",
                background: item.col, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px"
              }}>
                <item.icon style={{ width: "20px", height: "20px", color: "white" }} strokeWidth={1.8} />
              </div>
              <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "14px", color: "#0F172A", marginBottom: "6px" }}>
                {item.title}
              </h4>
              <p style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "12.5px", color: "#475569", lineHeight: 1.55 }}>
                {item.desc}
              </p>

              {/* Tier badge */}
              <div style={{
                position: "absolute", top: "12px", right: "12px",
                width: "22px", height: "22px", borderRadius: "50%",
                background: `${item.col}22`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "10px", color: item.col,
              }}>
                T{item.tier}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
