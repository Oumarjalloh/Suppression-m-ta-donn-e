import React from "react";
import FileRow from "./FileRow";

export default function FileList({ files, onProcess, onDownload, onRemove }) {
  if (files.length === 0) {
    return (
      <div style={styles.empty}>
        <div style={styles.emptyGlyph}>⊘⊘⊘</div>
        <p style={styles.emptyText}>AUCUN FICHIER — DÉPOSEZ DES DOCUMENTS CI-DESSUS</p>
      </div>
    );
  }

  return (
    <div style={styles.list}>
      {files.map((entry) => (
        <FileRow
          key={entry.id}
          entry={entry}
          onProcess={onProcess}
          onDownload={onDownload}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

const styles = {
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  empty: {
    marginTop: 56,
    textAlign: "center",
  },
  emptyGlyph: {
    fontSize: 52,
    color: "#1a1a1a",
    letterSpacing: 10,
  },
  emptyText: {
    fontSize: 10,
    color: "#2a2a2a",
    letterSpacing: 3,
    marginTop: 14,
  },
};