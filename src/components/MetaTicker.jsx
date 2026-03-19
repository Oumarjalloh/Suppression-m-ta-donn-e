import React from "react";
import { META_CATEGORIES } from "../constants/fileTypes";

export default function MetaTicker() {
  const items = [...META_CATEGORIES, ...META_CATEGORIES];

  return (
    <div style={styles.wrapper}>
      <div style={styles.track}>
        {items.map((label, i) => (
          <span key={i} style={styles.item}>
            <span style={styles.icon}>⊘</span> {label}
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    overflow: "hidden",
    borderBottom: "1px solid #111",
    padding: "6px 0",
    background: "#080808",
  },
  track: {
    display: "flex",
    gap: 32,
    whiteSpace: "nowrap",
    animation: "ticker-scroll 22s linear infinite",
  },
  item: {
    fontSize: 10,
    color: "#3a3a3a",
    letterSpacing: 1,
    flexShrink: 0,
  },
  icon: {
    color: "#ff3c3c",
    opacity: 0.6,
  },
};