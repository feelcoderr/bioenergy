"use client";

import { motion } from "framer-motion";
import { ArrowRight, Handshake, Leaf, Building, FlaskConical, Globe } from "lucide-react";

const partnerTypes = [
  { icon: FlaskConical, label: "Technology Providers" },
  { icon: Leaf,         label: "Feedstock Aggregators" },
  { icon: Building,     label: "Industrial Offtakers" },
  { icon: Globe,        label: "Carbon Market Partners" },
  { icon: Handshake,    label: "Investors" },
  { icon: FlaskConical, label: "Research Institutions" },
];

export default function CTASection() {
  return (
    <section id="investors" style={{ paddingTop: "96px", paddingBottom: "96px", background: "#F8FAFC", position: "relative", overflow: "hidden" }}>
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: "-160px", left: "-160px", width: "500px", height: "500px", borderRadius: "50%", background: "#F1F5F9", filter: "blur(60px)", opacity: 0.8, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-160px", right: "-160px", width: "500px", height: "500px", borderRadius: "50%", background: "#E2E8F0", filter: "blur(60px)", opacity: 0.8, pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          borderRadius: "28px", overflow: "hidden",
          background: "linear-gradient(135deg,#047857 0%,#059669 40%,#022C22 100%)",
          padding: "64px",
          position: "relative",
        }}>
          {/* Inner glow dots */}
          <div className="dot-bg-dark" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 80%, rgba(16,185,129,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(110,231,183,0.15) 0%, transparent 50%)", pointerEvents: "none" }} />

          {/* Animated orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", top: "40px", right: "40px", width: "200px", height: "200px", borderRadius: "50%", background: "#6EE7B7", filter: "blur(60px)", pointerEvents: "none" }}
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.1, 0.04] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            style={{ position: "absolute", bottom: "40px", left: "40px", width: "280px", height: "280px", borderRadius: "50%", background: "#10B981", filter: "blur(80px)", pointerEvents: "none" }}
          />

          <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Leaf style={{ width: "16px", height: "16px", color: "#6EE7B7" }} />
                </div>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "11px", color: "rgba(201,235,218,0.7)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Collaboration
                </span>
              </div>

              <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "white", lineHeight: 1.15, marginBottom: "24px" }}>
                Build the Next
                <br />
                <span style={{ color: "#6EE7B7" }}>Biomass-to-Carbon</span>
                <br />
                Value Chain With Us
              </h2>

              <p style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.7)", marginBottom: "36px" }}>
                We invite technology providers, feedstock aggregators, industrial offtakers,
                carbon-market partners, investors, research institutions and strategic collaborators
                to join the platform.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-white"
                >
                  <Handshake style={{ width: "16px", height: "16px" }} />
                  Contact Verdaez
                  <ArrowRight style={{ width: "16px", height: "16px" }} />
                </motion.a>
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "rgba(255,255,255,0.1)", color: "white",
                    border: "2px solid rgba(255,255,255,0.2)", padding: "13px 28px",
                    borderRadius: "99px", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "15px",
                    cursor: "pointer", textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>

            {/* Right — partner grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                {partnerTypes.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, type: "spring", stiffness: 280, damping: 22 }}
                    whileHover={{ scale: 1.06, y: -4 }}
                    style={{
                      display: "flex", flexDirection: "column", alignItems: "center", gap: "12px",
                      padding: "20px 12px", borderRadius: "16px",
                      background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                      cursor: "default", textAlign: "center",
                      transition: "background 0.2s ease",
                    }}
                  >
                    <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon style={{ width: "20px", height: "20px", color: "#6EE7B7" }} strokeWidth={1.8} />
                    </div>
                    <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(201,235,218,0.85)", lineHeight: 1.4 }}>
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
