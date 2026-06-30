"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, ChevronRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Products", href: "#products" },
  { label: "Business Model", href: "#business-model" },
  { label: "Impact", href: "#impact" },
  { label: "Investors", href: "#investors" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          ...(scrolled
            ? { background: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 1px 0 rgba(15,23,42,0.08)", borderBottom: "1px solid rgba(226,232,240,0.8)" }
            : { background: "transparent" }),
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>

          {/* Logo */}
          <Link href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                width: "38px", height: "38px", borderRadius: "12px",
                background: "linear-gradient(135deg,#10B981,#047857)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 14px rgba(5,150,105,0.3)",
              }}
            >
              <Leaf style={{ width: "20px", height: "20px", color: "white" }} strokeWidth={2.5} />
            </motion.div>
            <div style={{ lineHeight: 1 }}>
              <span style={{ display: "block", fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "18px", color: scrolled ? "#0F172A" : "#FFFFFF", transition: "color 0.3s ease" }}>Verdaez</span>
              <span style={{ display: "block", fontFamily: "'Outfit',sans-serif", fontWeight: 500, fontSize: "10px", color: scrolled ? "#10B981" : "rgba(110,231,183,0.95)", textTransform: "uppercase", letterSpacing: "0.18em", marginTop: "1px", transition: "color 0.3s ease" }}>Bioenergy</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  padding: "8px 14px", borderRadius: "10px",
                  fontFamily: "'Work Sans',sans-serif", fontWeight: 500, fontSize: "14px",
                  color: scrolled ? "#334155" : "rgba(255,255,255,0.88)", textDecoration: "none",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = scrolled ? "#F1F5F9" : "rgba(255,255,255,0.14)";
                  (e.target as HTMLElement).style.color = scrolled ? "#047857" : "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "transparent";
                  (e.target as HTMLElement).style.color = scrolled ? "#334155" : "rgba(255,255,255,0.88)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + burger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-g"
              style={{ padding: "10px 22px", fontSize: "13.5px" }}
            >
              Contact Us
            </motion.a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                width: "40px", height: "40px", borderRadius: "12px",
                background: "transparent", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: scrolled ? "#334155" : "#FFFFFF", transition: "color 0.3s ease",
              }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X style={{ width: "20px", height: "20px" }} />
                  </motion.span>
                ) : (
                  <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu style={{ width: "20px", height: "20px" }} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            style={{
              position: "fixed", inset: 0, zIndex: 40, background: "white",
              display: "flex", flexDirection: "column",
            }}
          >
            <div style={{ height: "68px" }} />
            <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
              <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "14px 16px", borderRadius: "14px",
                        fontFamily: "'Work Sans',sans-serif", fontWeight: 500, fontSize: "16px",
                        color: "#0F172A", textDecoration: "none",
                      }}
                    >
                      {link.label}
                      <ChevronRight style={{ width: "16px", height: "16px", color: "#CBD5E1" }} />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-g" style={{ justifyContent: "center", textAlign: "center" }}>
                  Contact Us
                </a>
                <a href="#investors" onClick={() => setMobileOpen(false)} className="btn-outline" style={{ justifyContent: "center", textAlign: "center" }}>
                  Partner With Us
                </a>
              </motion.div>
            </div>
            <div style={{ padding: "24px", borderTop: "1px solid #E2E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "linear-gradient(135deg,#10B981,#047857)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Leaf style={{ width: "16px", height: "16px", color: "white" }} />
                </div>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, color: "#0F172A" }}>Verdaez Bioenergy</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
