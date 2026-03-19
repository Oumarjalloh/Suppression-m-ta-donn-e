import React from "react";

export default function Header() {
  return (
    <header style={styles.root}>
      <div style={styles.logo}>
        <span style={styles.logoLeft}>META</span>
        <span style={styles.divider} />
        <span style={styles.logoRight}>ERASER</span>
      </div>

      <div style={styles.badge}>
        <span style={styles.dot} />
        <span style={styles.badgeText}>TRAITEMENT 100% LOCAL — AUCUN UPLOAD</span>
      </div>
    </header>
  );
}

const styles = {
  root: {
    borderBottom: "1px solid #1a1a1a",
    padding: "18px 32px",
    display: "flex",
    alignItems: "center",
    gap: 20,
    position: "sticky",
    top: 0,
    background: "#0a0a0a",
    zIndex: 100,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  logoLeft: {
    fontFamily: "'Space Mono', monospace",
    fontWeight: 700,
    fontSize: 20,
    letterSpacing: 6,
    color: "#fff",
  },
  divider: {
    width: 1,
    height: 22,
    background: "#2a2a2a",
  },
  logoRight: {
    fontFamily: "'Space Mono', monospace",
    fontWeight: 700,
    fontSize: 20,
    letterSpacing: 6,
    color: "#ff3c3c",
  },
  badge: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    display: "inline-block",
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#00ff88",
    animation: "pulse-dot 2s ease-in-out infinite",
  },
  badgeText: {
    fontSize: 10,
    color: "#555",
    letterSpacing: 2,
  },
};