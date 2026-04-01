import React from "react";

export default function ActionBar({ counts, onProcessAll, onDownloadAll, onClear }) {
  if (counts.total === 0) return null;

  return (
    <div style={styles.bar}>
      {counts.idle > 0 && (
        <button style={styles.btnProcess} onClick={onProcessAll}>
          ▶ TOUT TRAITER
          <span style={styles.countRed}>{counts.idle}</span>
        </button>
      )}

      {counts.processing > 0 && (
        <span style={styles.processing}>
          <span style={styles.spinnerInline} /> {counts.processing} EN COURS…
        </span>
      )}

      {counts.done > 0 && (
        <button style={styles.btnDownload} onClick={onDownloadAll}>
          ↓ TOUT TÉLÉCHARGER
          <span style={styles.countGreen}>{counts.done}</span>
        </button>
      )}

      <button style={styles.btnClear} onClick={onClear}>
        ✕ VIDER
      </button>
    </div>
  );
}

const styles = {
  bar: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
    flexWrap: "wrap",
  },
  btnProcess: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#110000",
    border: "1px solid #ff3c3c",
    color: "#ff3c3c",
    padding: "8px 18px",
    fontSize: 11,
    letterSpacing: 2,
    borderRadius: 2,
  },
  btnDownload: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#001a0d",
    border: "1px solid #00ff88",
    color: "#00ff88",
    padding: "8px 18px",
    fontSize: 11,
    letterSpacing: 2,
    borderRadius: 2,
  },
  btnClear: {
    background: "transparent",
    border: "1px solid #222",
    color: "#444",
    padding: "8px 16px",
    fontSize: 11,
    letterSpacing: 2,
    borderRadius: 2,
    marginLeft: "auto",
  },
  processing: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 10,
    color: "#ffaa00",
    letterSpacing: 2,
  },
  spinnerInline: {
    display: "inline-block",
    width: 10,
    height: 10,
    border: "2px solid #ffaa00",
    borderTopColor: "transparent",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  countRed: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    fontSize: 10,
    background: "#ff3c3c",
    color: "#000",
    borderRadius: 2,
    fontWeight: 700,
  },
  countGreen: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    fontSize: 10,
    background: "#00ff88",
    color: "#000",
    borderRadius: 2,
    fontWeight: 700,
  },
};