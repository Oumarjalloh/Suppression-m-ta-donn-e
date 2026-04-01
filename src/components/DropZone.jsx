import React, { useRef, useState } from "react";

export default function DropZone({ onFiles }) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length > 0) {
      onFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      onFiles(e.target.files);
      e.target.value = "";
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      style={{
        ...styles.zone,
        borderColor:     dragging ? "#ff3c3c" : "#222",
        backgroundColor: dragging ? "#110000" : "#0e0e0e",
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
    >
      {dragging && <div style={styles.scanLine} />}

      <div style={styles.iconWrap}>
        <span style={{ ...styles.icon, color: dragging ? "#ff3c3c" : "#2a2a2a" }}>⊘</span>
      </div>

      <p style={styles.label}>
        Glisse tes fichiers ici ou{" "}
        <span style={styles.highlight}>clique pour sélectionner</span>
      </p>

      <p style={styles.formats}>
        IMAGES — JPEG · PNG · WEBP · GIF · BMP · TIFF &nbsp;|&nbsp; PDF
      </p>

      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*,.pdf"
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </div>
  );
}

const styles = {
  zone: {
    position: "relative",
    overflow: "hidden",
    border: "2px dashed",
    borderRadius: 4,
    padding: "48px 32px",
    textAlign: "center",
    cursor: "pointer",
    transition: "border-color 0.2s, background-color 0.2s",
    userSelect: "none",
  },
  scanLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 2,
    background: "linear-gradient(90deg, transparent, #ff3c3c44, transparent)",
    animation: "scan-line 1.2s ease-in-out infinite",
  },
  iconWrap: {
    marginBottom: 14,
  },
  icon: {
    fontSize: 44,
    transition: "color 0.2s",
  },
  label: {
    fontSize: 13,
    color: "#999",
    lineHeight: 1.8,
    marginBottom: 8,
  },
  highlight: {
    color: "#ff3c3c",
    textDecoration: "underline",
    textDecorationStyle: "dotted",
  },
  formats: {
    fontSize: 10,
    color: "#333",
    letterSpacing: 1.5,
    marginTop: 4,
  },
};