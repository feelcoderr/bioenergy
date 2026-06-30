"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Recycle, Factory, Users, Leaf, BarChart3, ArrowUpRight, Globe } from "lucide-react";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  useEffect(() => {
    if (!inView) return;
    let start: number;
    const frame = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
      else setCount(target);
    };
    requestAnimationFrame(frame);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const features = [
  {
    icon: Factory,
    title: "30 TPD Start",
    description: "Low capital-risk modular facility with rapid deployment capability.",
    stat: "30 TPD",
    statLabel: "Initial capacity",
    accent: false,
  },
  {
    icon: TrendingUp,
    title: "300 TPD Scale",
    description: "Phased scale-up to 300 TPD within five years through additional modules.",
    stat: "10×",
    statLabel: "Growth potential",
    accent: true,
  },
  {
    icon: BarChart3,
    title: "Multi-Revenue",
    description: "Diversified revenue across multiple high-demand product lines reduces risk.",
    stat: "6+",
    statLabel: "Revenue streams",
    accent: false,
  },
  {
    icon: Recycle,
    title: "Circular Biomass",
    description: "100% of biomass feedstock is converted — zero waste output model.",
    stat: "Zero",
    statLabel: "Waste generated",
    accent: false,
  },
  {
    icon: Leaf,
    title: "Carbon Removal",
    description: "Biochar & advanced carbon materials with measurable, verifiable climate impact.",
    stat: "CO₂−",
    statLabel: "Net negative",
    accent: false,
  },
  {
    icon: Users,
    title: "Rural Network",
    description: "Strong, inclusive rural feedstock procurement ecosystem creates livelihoods.",
    stat: "500+",
    statLabel: "Rural partners",
    accent: false,
  },
];

/* ── Marquee ── */
const products = [
  "Fuel Pellets", "Industrial Biochar", "Slow-Release Fertilizer",
  "Water Filtration Media", "Pyrolysis Oil Fractions", "Asphalt Modifier",
  "Phenolic Resin Replacement", "Renewable Fuel Partnerships", "Graphene & Carbon Materials",
];

function Marquee() {
  return (
    <div className="overflow-hidden border-y" style={{ background: "#F1F5F9", borderColor: "#E2E8F0", padding: "14px 0" }}>
      <div className="flex" style={{ width: "max-content", animation: "marqueeScroll 30s linear infinite" }}>
        {[...products, ...products].map((p, i) => (
          <span key={i} className="flex items-center gap-3 px-8 whitespace-nowrap"
                style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "13px", color: "#1A7042" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3DA872", display: "inline-block", flexShrink: 0 }} />
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ f, index }: { f: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ y: -7, scale: 1.01 }}
      style={{
        borderRadius: "20px",
        padding: "24px",
        cursor: "default",
        overflow: "hidden",
        position: "relative",
        ...(f.accent
          ? { background: "linear-gradient(135deg,#1A7042,#0F4226)", color: "white" }
          : { background: "white", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(26,112,66,0.06)" }),
        transition: "transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease",
      }}
    >
      {f.accent && (
        <div style={{
          position: "absolute", inset: 0, opacity: 0.08,
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 60%)"
        }} />
      )}
      <div style={{
        width: "46px", height: "46px", borderRadius: "14px",
        background: f.accent ? "rgba(255,255,255,0.15)" : "#F1F5F9",
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px",
      }}>
        <f.icon style={{ width: "22px", height: "22px", color: f.accent ? "white" : "#1A7042" }} strokeWidth={1.8} />
      </div>
      <h3 style={{
        fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "17px",
        color: f.accent ? "white" : "#0F172A", marginBottom: "8px"
      }}>
        {f.title}
      </h3>
      <p style={{
        fontFamily: "'Work Sans',sans-serif", fontSize: "14px", lineHeight: 1.65,
        color: f.accent ? "rgba(255,255,255,0.72)" : "#475569", marginBottom: "20px"
      }}>
        {f.description}
      </p>
      <div style={{
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        paddingTop: "16px",
        borderTop: `1px solid ${f.accent ? "rgba(255,255,255,0.15)" : "#E2E8F0"}`
      }}>
        <div>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "24px", color: f.accent ? "white" : "#155833" }}>
            {f.stat}
          </p>
          <p style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "11px", color: f.accent ? "rgba(255,255,255,0.55)" : "#64748B" }}>
            {f.statLabel}
          </p>
        </div>
        <ArrowUpRight style={{ width: "18px", height: "18px", color: f.accent ? "rgba(255,255,255,0.4)" : "#E2E8F0" }} />
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ paddingTop: "96px", paddingBottom: "96px", background: "#F8FAFC" }}>
      <Marquee />

      <div style={{ maxWidth: "1280px", margin: "80px auto 0", padding: "0 24px" }}>

        {/* Section header */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: "64px" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={headInView ? { opacity: 1, y: 0 } : {}}>
            <span className="tag" style={{ marginBottom: "20px", display: "inline-flex" }}>
              <BarChart3 style={{ width: "13px", height: "13px" }} />
              Platform Overview
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#0F172A", lineHeight: 1.2, marginBottom: "16px" }}
          >
            One Platform.{" "}
            <span className="text-grad-2">Multiple Revenue Streams.</span>
            <br />Measurable Impact.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "17px", color: "#475569", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}
          >
            Designed to reduce biomass waste, create rural income, support low-carbon materials
            and unlock carbon-value opportunities.
          </motion.p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "20px", marginBottom: "56px" }}>
          {features.map((f, i) => <FeatureCard key={i} f={f} index={i} />)}
        </div>

        {/* Process flow image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #E2E8F0", boxShadow: "0 4px 32px rgba(26,112,66,0.08)" }}
        >
          <Image src="/process-flow.svg" alt="Biorefinery Process Flow" width={900} height={200} style={{ width: "100%", height: "auto", display: "block" }} />
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            marginTop: "20px",
            borderRadius: "20px",
            background: "white",
            border: "1px solid #E2E8F0",
            padding: "32px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "8px",
          }}
        >
          {[
            { v: 30, s: " TPD", l: "Starting Capacity" },
            { v: 300, s: " TPD", l: "5-Year Target" },
            { v: 6, s: "+", l: "Product Lines" },
            { v: 100, s: "%", l: "Biomass Utilization" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "0 16px", borderRight: i < 3 ? "1px solid #E2E8F0" : "none" }}>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "32px", color: "#155833" }}>
                <AnimatedCounter target={s.v} suffix={s.s} />
              </p>
              <p style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "13px", color: "#64748B", marginTop: "4px" }}>{s.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
