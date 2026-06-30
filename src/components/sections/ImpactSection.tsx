"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, TrendingUp, Users, Globe2, ArrowRight } from "lucide-react";

const impacts = [
  { icon: Leaf,      val: "Net CO₂−", label: "Carbon Negative",   desc: "Biochar permanently sequesters carbon, making our entire process carbon-negative.", bg: "#F1F5F9", border: "#E2E8F0", col: "#155833", iconBg: "#228B55" },
  { icon: TrendingUp,val: "10×",      label: "Value Multiplier",  desc: "Biomass waste is converted into products worth 10× more than raw feedstock value.", bg: "#F1F5F9", border: "#E2E8F0", col: "#1A7042", iconBg: "#3DA872" },
  { icon: Users,     val: "500+",     label: "Rural Livelihoods", desc: "Building income for farming communities through a structured feedstock procurement network.", bg: "#F1F5F9", border: "#E2E8F0", col: "#228B55", iconBg: "#1A7042" },
  { icon: Globe2,    val: "Zero",     label: "Waste Generated",   desc: "100% of biomass input is converted — every fraction has a defined market application.", bg: "#F1F5F9", border: "#E2E8F0", col: "#155833", iconBg: "#228B55" },
];

const steps = [
  { step: "01", icon: Leaf,       title: "Feedstock Procurement", desc: "Agro-waste, grasses, and organic residues sourced from rural network at low cost." },
  { step: "02", icon: TrendingUp, title: "Modular Conversion",   desc: "30 TPD pyrolysis units convert biomass into multiple product streams simultaneously." },
  { step: "03", icon: Globe2,     title: "Multi-Revenue Distribution", desc: "Each product targets a distinct market — fuel, agriculture, water, advanced materials." },
  { step: "04", icon: Users,      title: "Scale & Replicate",    desc: "Modular design allows fast replication at new sites, scaling to 300 TPD in 5 years." },
];

export default function ImpactSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });
  const bmRef = useRef<HTMLDivElement>(null);
  const bmInView = useInView(bmRef, { once: true, margin: "-80px" });

  return (
    <section id="impact" style={{ paddingTop: "96px", paddingBottom: "96px", background: "white", position: "relative", overflow: "hidden" }}>
      {/* BG */}
      <div style={{ position: "absolute", right: 0, bottom: 0, width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, #F1F5F9 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Impact metrics */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: "56px" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={headInView ? { opacity: 1, y: 0 } : {}}>
            <span className="tag" style={{ marginBottom: "20px", display: "inline-flex" }}>
              <Globe2 style={{ width: "13px", height: "13px" }} />
              Climate & Economic Impact
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#0F172A", lineHeight: 1.2 }}
          >
            Impact That <span className="text-grad-2">Scales</span> with the Platform
          </motion.h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "20px", marginBottom: "80px" }}>
          {impacts.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.09, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -6 }}
              style={{
                borderRadius: "20px", padding: "24px",
                background: m.bg, border: `1px solid ${m.border}`, cursor: "default",
                transition: "transform 0.3s cubic-bezier(.34,1.56,.64,1)",
              }}
            >
              <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: m.iconBg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <m.icon style={{ width: "22px", height: "22px", color: "white" }} strokeWidth={1.8} />
              </div>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "32px", color: m.col, marginBottom: "4px" }}>{m.val}</p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "15px", color: "#0F172A", marginBottom: "10px" }}>{m.label}</p>
              <p style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "13px", lineHeight: 1.65, color: "#475569" }}>{m.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Business model flow */}
        <div id="business-model" ref={bmRef}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={bmInView ? { opacity: 1, y: 0 } : {}}
              style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#0F172A", lineHeight: 1.2 }}
            >
              How the <span className="text-grad-2">Business Model</span> Works
            </motion.h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px", position: "relative" }}>
            {/* Connector line */}
            <div style={{ position: "absolute", top: "56px", left: "12.5%", right: "12.5%", height: "2px", background: "linear-gradient(90deg,#E2E8F0,#64748B,#228B55,#155833)", borderRadius: "99px" }} />

            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={bmInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
              >
                <div style={{
                  position: "relative", zIndex: 1,
                  width: "112px", height: "112px", borderRadius: "50%",
                  background: "white", border: "2px solid #E2E8F0",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 24px rgba(26,112,66,0.1)", marginBottom: "24px",
                }}>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "10px", color: "#E2E8F0", letterSpacing: "0.1em" }}>{s.step}</span>
                  <s.icon style={{ width: "30px", height: "30px", color: "#1A7042", marginTop: "4px" }} strokeWidth={1.6} />
                </div>
                <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "15px", color: "#0F172A", marginBottom: "8px" }}>{s.title}</h4>
                <p style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "13px", color: "#475569", lineHeight: 1.6 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
