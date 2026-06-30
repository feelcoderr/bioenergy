"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Package } from "lucide-react";
import Image from "next/image";

const products = [
  {
    src: "/products/fuel-pellets.png",
    title: "Fuel Pellets",
    tagline: "Industrial Energy",
    description:
      "Clean, consistent energy for industrial boilers and heat applications. High calorific value, low ash content, directly replacing fossil fuels.",
    tags: ["Boilers", "Heat Plants", "Industrial"],
    metric: "High Demand",
  },
  {
    src: "/products/biochar.png",
    title: "Biochar",
    tagline: "Soil & Carbon",
    description:
      "Soil amendment and carbon sequestration for healthier soils and measurable climate impact. Carbon-negative product with premium carbon credit value.",
    tags: ["Agriculture", "Carbon Credits", "Soil Health"],
    metric: "Carbon −ve",
  },
  {
    src: "/products/seedlings.png",
    title: "Slow-Release Fertilizer",
    tagline: "Agri-Tech",
    description:
      "Biochar-enhanced fertilizer that boosts crop yield and reduces nutrient loss. Improves plant uptake by up to 30% versus conventional fertilizers.",
    tags: ["Farming", "Yield Boost", "Sustainable"],
    metric: "30% Efficiency+",
  },
  {
    src: "/products/water-droplet.png",
    title: "Filter Media",
    tagline: "Water Treatment",
    description:
      "High-performance activated biochar media for water treatment and advanced filtration systems. Municipal and industrial grade purity standards.",
    tags: ["Water Treatment", "Municipal", "Industrial"],
    metric: "99%+ Filtration",
  },
  {
    src: "/products/pyrolysis-oil.png",
    title: "Pyrolysis Oil Derivatives",
    tagline: "Chemicals & Fuels",
    description:
      "Valuable bio-oil fractions for chemicals, fuels and industrial processes extracted through precision low-temperature pyrolysis.",
    tags: ["Bio-chemicals", "Bio-fuel", "Industrial"],
    metric: "Multi-fraction",
  },
  {
    src: "/products/carbon-graphene.svg",
    title: "Carbon / Graphene Derivatives",
    tagline: "Advanced Materials",
    description:
      "Advanced nano-carbon materials for high-tech, energy storage, electronics and industrial applications — the highest-value output.",
    tags: ["High-Tech", "Energy Storage", "Electronics"],
    metric: "Premium Grade",
  },
];

function ProductCard({ p, index }: { p: (typeof products)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: index * 0.07,
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -10 }}
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "white",
        border: "1px solid #E2E8F0",
        cursor: "default",
        transition: "box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 24px 64px -12px rgba(5,150,105,0.22)"
          : "0 2px 12px rgba(15,23,42,0.06)",
      }}
    >
      {/* Product image header */}
      <div
        style={{ position: "relative", height: "200px", background: "#F1F5F9" }}
      >
        <motion.div
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            src={p.src}
            alt={p.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>

        {/* Metric badge */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(8px)",
            borderRadius: "99px",
            padding: "4px 12px",
            fontFamily: "'Outfit',sans-serif",
            fontWeight: 700,
            fontSize: "11px",
            color: "#047857",
            border: "1px solid rgba(5,150,105,0.18)",
          }}
        >
          {p.metric}
        </div>

        {/* Shimmer on hover */}
        <motion.div
          animate={{ x: hovered ? "200%" : "-100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "20px" }}>
        <p
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontWeight: 700,
            fontSize: "11px",
            color: "#10B981",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "4px",
          }}
        >
          {p.tagline}
        </p>
        <h3
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            color: "#0F172A",
            marginBottom: "10px",
          }}
        >
          {p.title}
        </h3>
        <p
          style={{
            fontFamily: "'Work Sans',sans-serif",
            fontSize: "13.5px",
            lineHeight: 1.65,
            color: "#475569",
            marginBottom: "16px",
          }}
        >
          {p.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "16px",
          }}
        >
          {p.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "4px 10px",
                borderRadius: "8px",
                background: "#F1F5F9",
                border: "1px solid #E2E8F0",
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 500,
                fontSize: "11px",
                color: "#047857",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "'Outfit',sans-serif",
            fontWeight: 700,
            fontSize: "13px",
            color: "#047857",
            cursor: "pointer",
          }}
        >
          Learn More <ArrowRight style={{ width: "14px", height: "14px" }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="products"
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
        background: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        className="dot-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(5,150,105,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Header */}
        <div
          ref={headRef}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
          >
            <span
              className="tag"
              style={{ marginBottom: "20px", display: "inline-flex" }}
            >
              <Package style={{ width: "13px", height: "13px" }} />
              Product Portfolio
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem,4vw,3rem)",
              color: "#0F172A",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Products Built from{" "}
            <span className="text-grad-2">Biomass Carbon</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            style={{
              fontFamily: "'Work Sans',sans-serif",
              fontSize: "17px",
              color: "#475569",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Each product stream targets a practical market with industrial,
            agricultural, environmental or energy-sector relevance.
          </motion.p>
        </div>

        {/* Product grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
            gap: "24px",
          }}
        >
          {products.map((p, i) => (
            <ProductCard key={i} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
