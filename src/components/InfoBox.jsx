import React from "react";
import { META_CATEGORIES } from "../constants/fileTypes";

export default function InfoBox() {
  return (
    <div style={styles.box}>
      <div style={styles.title}>MÉTADONNÉES SUPPRIMÉES</div>

      <div style={styles.tags}>
        {META_CATEGORIES.map((cat) => (
          <span key={cat} style={styles.tag}>
            <span style={styles.tagIcon}>⊘</span> {cat}
          </span>
        ))}
      </div>

      <div style={styles.divider} />

      <div style={styles.privacyRow}>
        <PrivacyItem icon="🔒" text="100% local — aucun fichier envoyé sur un serveur" />
        <PrivacyItem icon="⚡" text="Traitement instantané dans le navigateur" />
        <PrivacyItem icon="🗑️" text="Aucune donnée conservée après fermeture de l'onglet" />
      </div>
    </div>
  );
}

function PrivacyItem({ icon, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontSize: 14 }}>{icon}</span>
      <span style={{ fontSize: 10, color: "#333", letterSpacing: 0.5 }}>{text}</span>
    </div>
  );
}

const styles = {
  box: {
    marginTop: 32,
    border: "1px solid #151515",
    borderRadius: 3,
    padding: "18px 20px",
  },
  title: {
    fontSize: 9,
    color: "#333",
    letterSpacing: 3,
    marginBottom: 14,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    fontSize: 10,
    color: "#2e2e2e",
    border: "1px solid #1a1a1a",
    padding: "3px 9px",
    borderRadius: 2,
    letterSpacing: 0.5,
  },
  tagIcon: {
    color: "#ff3c3c",
    opacity: 0.5,
    marginRight: 2,
  },
  divider: {
    height: 1,
    background: "#111",
    margin: "16px 0",
  },
  privacyRow: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
};