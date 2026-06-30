"use client";

import { motion } from "framer-motion";
import { Leaf, MapPin, Mail, Globe, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  ["Home","About","Technology","Products"],
  ["Business Model","Impact","Investors","Contact"],
];

const focusAreas = [
  "Biomass-to-Value Platform",
  "Biochar & Carbon Solutions",
  "Renewable Fuels & Materials",
  "Carbon Removal & Climate Impact",
  "Rural Development & Inclusion",
];

const socials = [
  { label: "LinkedIn", href: "#", svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: "X", href: "#", svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "YouTube", href: "#", svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { label: "Email", href: "mailto:info@verdaezbioenergy.com", svg: <Mail style={{ width: "16px", height: "16px" }} /> },
];

const contactDetails = [
  { icon: MapPin, text: "Verdaez Bioenergy Pvt. Ltd., Bengaluru, Karnataka, India" },
  { icon: Mail,   text: "info@verdaezbioenergy.com" },
  { icon: Globe,  text: "www.verdaezbioenergy.com" },
  { icon: Phone,  text: "+91 80 1234 5678" },
];

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#04140E", color: "white", position: "relative", overflow: "hidden" }}>
      {/* Top accent bar */}
      <div style={{ height: "3px", background: "linear-gradient(90deg,#047857,#34D399,#10B981,#022C22)" }} />

      {/* Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle at 20% 80%, rgba(5,150,105,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.06) 0%, transparent 50%)" }} />
      <div className="dot-bg-dark" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "64px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: "48px", marginBottom: "56px" }}>

          {/* Brand */}
          <div>
            <Link href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "20px", width: "fit-content" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg,#10B981,#047857)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Leaf style={{ width: "20px", height: "20px", color: "white" }} strokeWidth={2.5} />
              </div>
              <div>
                <span style={{ display: "block", fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "18px", color: "white" }}>Verdaez</span>
                <span style={{ display: "block", fontFamily: "'Outfit',sans-serif", fontWeight: 500, fontSize: "10px", color: "#10B981", textTransform: "uppercase", letterSpacing: "0.18em" }}>Bioenergy</span>
              </div>
            </Link>
            <p style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "13.5px", lineHeight: 1.7, color: "rgba(201,235,218,0.5)", marginBottom: "24px" }}>
              Turning biomass waste into bioenergy, biochar and advanced carbon materials for a sustainable, circular future.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {contactDetails.map(({ icon: Icon, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <Icon style={{ width: "14px", height: "14px", color: "#10B981", flexShrink: 0, marginTop: "2px" }} strokeWidth={2} />
                  <span style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "12.5px", color: "rgba(201,235,218,0.45)", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "12px", color: "rgba(201,235,218,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
              Quick Links
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {quickLinks.flat().map((label) => (
                <Link
                  key={label}
                  href={`#${label.toLowerCase().replace(/ /g, "-")}`}
                  style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "'Work Sans',sans-serif", fontSize: "13px", color: "rgba(201,235,218,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#6EE7B7"}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(201,235,218,0.45)"}
                >
                  <ArrowUpRight style={{ width: "12px", height: "12px", flexShrink: 0 }} />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "12px", color: "rgba(201,235,218,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
              Key Focus Areas
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {focusAreas.map((area, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Leaf style={{ width: "13px", height: "13px", color: "#10B981", flexShrink: 0 }} strokeWidth={2} />
                  <span style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "13px", color: "rgba(201,235,218,0.45)", lineHeight: 1.5 }}>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "12px", color: "rgba(201,235,218,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
              Stay Connected
            </h4>
            <p style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "13px", color: "rgba(201,235,218,0.4)", marginBottom: "20px", lineHeight: 1.6 }}>
              Follow us for updates on platform growth and industry news.
            </p>
            <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
              {socials.map(({ svg, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: "40px", height: "40px", borderRadius: "12px",
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(201,235,218,0.55)", textDecoration: "none",
                    transition: "background 0.2s, color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#059669";
                    el.style.borderColor = "#059669";
                    el.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.06)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(201,235,218,0.55)";
                  }}
                >
                  {svg}
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(201,235,218,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
              Newsletter
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1, padding: "10px 16px", borderRadius: "12px",
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                  fontFamily: "'Work Sans',sans-serif", fontSize: "13px", color: "white",
                  outline: "none", minWidth: 0,
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "10px 16px", borderRadius: "12px",
                  background: "#059669", border: "none", color: "white",
                  fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "13px",
                  cursor: "pointer", flexShrink: 0,
                }}
              >
                Join
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "12.5px", color: "rgba(201,235,218,0.3)" }}>
            © {new Date().getFullYear()} Verdaez Bioenergy Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <Link key={item} href="#"
                style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "12.5px", color: "rgba(201,235,218,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#6EE7B7"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(201,235,218,0.3)"}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
