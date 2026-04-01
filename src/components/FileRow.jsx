import React from "react";
import { FILE_STATUS } from "../constants/fileTypes";
import { formatSize, formatGain } from "../utils/formatSize";

export default function FileRow({ entry, onProcess, onDownload, onRemove }) {
  const { id, file, status, supported, typeInfo, result, error } = entry;

  const borderColor =
    status === FILE_STATUS.DONE       ? "#1a3d2a" :
    status === FILE_STATUS.ERROR      ? "#3d1010" :
    status === FILE_STATUS.PROCESSING ? "#2a1800" :
    "#1a1a1a";

  return (
    <div className="fade-up" style={{ ...styles.row, borderColor }}>
      <span style={styles.typeIcon}>{typeInfo?.icon ?? "📎"}</span>

      <div style={styles.info}>
        <div style={styles.name} title={file.name}>{file.name}</div>
        <div style={styles.meta}>
          <span style={styles.badge}>{typeInfo?.label ?? "?"}</span>
          <span style={styles.size}>{formatSize(file.size)}</span>
          {result && (
            <span style={styles.gain}>{formatGain(file.size, result.size)}</span>
          )}
        </div>
        {error && <div style={styles.error}>⚠ {error}</div>}
      </div>

      <div style={styles.actions}>
        {status === FILE_STATUS.PROCESSING && (
          <div style={styles.spinner} className="spin" />
        )}

        {status === FILE_STATUS.DONE && (
          <>
            <span style={styles.doneTag}>✓ NETTOYÉ</span>
            <button style={styles.btnDownload} onClick={() => onDownload(entry)}>↓</button>
          </>
        )}

        {status === FILE_STATUS.IDLE && supported && (
          <button style={styles.btnProcess} onClick={() => onProcess(id)}>
            TRAITER
          </button>
        )}

        {status === FILE_STATUS.ERROR && (
          <button style={styles.btnRetry} onClick={() => onProcess(id)}>
            ↺ RETRY
          </button>
        )}

        {!supported && (
          <span style={styles.unsupported}>NON SUPPORTÉ</span>
        )}

        <button style={styles.btnRemove} onClick={() => onRemove(id)}>✕</button>
      </div>
    </div>
  );
}

const styles = {
  row: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    background: "#0e0e0e",
    border: "1px solid",
    borderRadius: 3,
    padding: "12px 16px",
    transition: "border-color 0.3s",
  },
  typeIcon: { fontSize: 20, flexShrink: 0, lineHeight: 1 },
  info: { flex: 1, minWidth: 0 },
  name: {
    fontSize: 12,
    color: "#ddd",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  meta: { display: "flex", alignItems: "center", gap: 10, marginTop: 4 },
  badge: {
    fontSize: 9, color: "#444", border: "1px solid #222",
    padding: "1px 5px", borderRadius: 2, letterSpacing: 1,
  },
  size: { fontSize: 10, color: "#444" },
  gain: { fontSize: 10, color: "#00cc66" },
  error: { fontSize: 10, color: "#ff5555", marginTop: 4 },
  actions: { display: "flex", alignItems: "center", gap: 8, flexShrink: 0 },
  spinner: {
    width: 16, height: 16,
    border: "2px solid #ff3c3c",
    borderTopColor: "transparent",
    borderRadius: "50%",
  },
  doneTag: { fontSize: 10, color: "#00ff88", letterSpacing: 1 },
  btnDownload: {
    background: "#001a0d", border: "1px solid #00ff88",
    color: "#00ff88", padding: "4px 12px", fontSize: 13, borderRadius: 2,
  },
  btnProcess: {
    background: "#110000", border: "1px solid #ff3c3c",
    color: "#ff3c3c", padding: "4px 12px", fontSize: 10,
    letterSpacing: 1, borderRadius: 2,
  },
  btnRetry: {
    background: "#1a1000", border: "1px solid #ffaa00",
    color: "#ffaa00", padding: "4px 10px", fontSize: 10,
    letterSpacing: 1, borderRadius: 2,
  },
  btnRemove: {
    background: "transparent", border: "none",
    color: "#333", fontSize: 14, padding: "2px 4px", lineHeight: 1,
  },
  unsupported: { fontSize: 10, color: "#333", letterSpacing: 1 },
};