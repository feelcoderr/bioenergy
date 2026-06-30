"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Leaf, ChevronDown } from "lucide-react";
import Image from "next/image";

/* ─── Cycling headline word ─── */
const cycleWords = ["Bioenergy", "Biochar", "Carbon Materials", "Clean Energy"];

function WordCycle() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIdx((p) => (p + 1) % cycleWords.length),
      2700,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <span
      style={{
        display: "block",
        overflow: "hidden",
        height: "1.18em",
        lineHeight: 1.18,
        marginTop: "2px",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={cycleWords[idx]}
          initial={{ y: "110%", opacity: 0, filter: "blur(10px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-110%", opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.52, ease: [0.25, 1, 0.5, 1] }}
          style={{
            display: "block",
            background:
              "linear-gradient(120deg,#6EE7B7 0%,#34D399 50%,#10B981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {cycleWords[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ─── Marquee ticker ─── */
const ticks = [
  "30 TPD Starting Capacity",
  "300 TPD Scale Target",
  "6+ Revenue Streams",
  "Zero Waste Model",
  "Carbon-Negative Biochar",
  "Multi-Product Biorefinery",
  "Rural Procurement Network",
  "Measurable Climate Impact",
];

function Ticker() {
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(110,231,183,0.18)",
        background:
          "linear-gradient(90deg,#022C22,#065F46,#047857,#065F46,#022C22)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marqueeScroll 34s linear infinite",
        }}
      >
        {[...ticks, ...ticks].map((t, i) => (
          <span
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "13px 32px",
              whiteSpace: "nowrap",
              fontFamily: "'Outfit',sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              color: "rgba(209,250,229,0.92)",
            }}
          >
            <Leaf
              style={{
                width: "14px",
                height: "14px",
                color: "#34D399",
                flexShrink: 0,
              }}
            />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Hero Section ─── */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: "100svh",
        background:
          "linear-gradient(135deg,#04140E 0%,#052e22 55%,#021109 100%)",
      }}
    >
      {/* ── Background photo ── */}
      <motion.div
        style={{ scale: imgScale, position: "absolute", inset: 0, zIndex: 0 }}
      >
        <Image
          src="/heroimage.png"
          alt="Verdaez biorefinery facility converting biomass into bioenergy, biochar and carbon products"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover", objectPosition: "center right" }}
        />
      </motion.div>

      {/* ── Scrim for legibility ── */}
      <div
        className="hero-scrim"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ── Ambient emerald glow ── */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-6%",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 65%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "120px 32px 56px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span
                className="tag-glow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "6px 15px",
                  borderRadius: "99px",
                  fontFamily: "'Outfit',sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "26px",
                }}
              >
                <Leaf style={{ width: "13px", height: "13px" }} />
                Biomass-to-Value · Circular Future
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.18,
                duration: 0.7,
                ease: [0.25, 1, 0.5, 1],
              }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.4rem, 5.2vw, 4.2rem)",
                color: "#FFFFFF",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                textShadow: "0 2px 30px rgba(0,0,0,0.4)",
              }}
            >
              Turning Biomass
              <br />
              Waste into
            </motion.h1>

            {/* Cycling word */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: [0.25, 1, 0.5, 1],
              }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.4rem, 5.2vw, 4.2rem)",
                letterSpacing: "-0.02em",
              }}
            >
              <WordCycle />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.6 }}
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "clamp(15px, 1.6vw, 18px)",
                lineHeight: 1.75,
                color: "rgba(226,232,240,0.88)",
                maxWidth: "540px",
                marginTop: "22px",
                marginBottom: "38px",
              }}
            >
              A scalable biorefinery platform converting agro-waste, grasses and
              organic residues into industrial fuels, biochar, pyrolysis-oil
              derivatives and advanced carbon products — with measurable climate
              impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.54, duration: 0.5 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginBottom: "48px",
              }}
            >
              <motion.a
                href="#technology"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-g"
              >
                Explore Our Platform
                <ArrowRight style={{ width: "16px", height: "16px" }} />
              </motion.a>
              <motion.a
                href="#investors"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline-light"
              >
                Partner With Us
              </motion.a>
            </motion.div>

            {/* Key metrics */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.5 }}
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {[
                { num: "30", unit: "TPD", label: "Starting Capacity" },
                { num: "300", unit: "TPD", label: "5-Year Target" },
                { num: "6+", unit: "", label: "Revenue Streams" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: i === 0 ? "0 26px 0 0" : "0 26px",
                    borderLeft:
                      i === 0 ? "none" : "1.5px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Outfit',sans-serif",
                        fontWeight: 900,
                        fontSize: "32px",
                        color: "#fff",
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </span>
                    {s.unit && (
                      <span
                        style={{
                          fontFamily: "'Outfit',sans-serif",
                          fontWeight: 600,
                          fontSize: "14px",
                          color: "#6EE7B7",
                        }}
                      >
                        {s.unit}
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Work Sans',sans-serif",
                      fontSize: "12px",
                      color: "rgba(226,232,240,0.6)",
                      marginTop: "5px",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "62px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            color: "rgba(209,250,229,0.7)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            style={{ width: "18px", height: "18px", color: "#34D399" }}
          />
        </motion.div>
      </motion.div>

      {/* Ticker */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <Ticker />
      </div>
    </section>
  );
}
