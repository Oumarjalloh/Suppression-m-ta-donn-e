export const SUPPORTED_TYPES = {
  "image/jpeg": { label: "JPEG",  icon: "🖼️", method: "canvas", outputType: "image/jpeg" },
  "image/png":  { label: "PNG",   icon: "🖼️", method: "canvas", outputType: "image/png"  },
  "image/webp": { label: "WebP",  icon: "🖼️", method: "canvas", outputType: "image/png"  },
  "image/gif":  { label: "GIF",   icon: "🖼️", method: "canvas", outputType: "image/png"  },
  "image/bmp":  { label: "BMP",   icon: "🖼️", method: "canvas", outputType: "image/png"  },
  "image/tiff": { label: "TIFF",  icon: "🖼️", method: "canvas", outputType: "image/png"  },
  "application/pdf": { label: "PDF", icon: "📄", method: "pdf", outputType: "application/pdf" },
};

export const META_CATEGORIES = [
  "Données EXIF",
  "GPS & localisation",
  "Modèle d'appareil photo",
  "Date & heure de prise de vue",
  "Logiciel de retouche",
  "Auteur / Artiste",
  "Copyright",
  "Commentaires intégrés",
  "Profil colorimétrique ICC",
  "Miniature embarquée",
  "Titre du document",
  "Mots-clés",
];

export const FILE_STATUS = {
  IDLE:       "idle",
  PROCESSING: "processing",
  DONE:       "done",
  ERROR:      "error",
};