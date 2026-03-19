import { useState, useEffect } from "react";

const PDF_LIB_CDN =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js";

/**
 * Charge pdf-lib depuis un CDN une seule fois et expose son état.
 */
export function usePdfLib() {
  const [ready, setReady] = useState(() => !!window.PDFLib);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Déjà disponible
    if (window.PDFLib) {
      setReady(true);
      return;
    }

    // Éviter les doubles injections
    if (document.querySelector(`script[src="${PDF_LIB_CDN}"]`)) return;

    const script = document.createElement("script");
    script.src   = PDF_LIB_CDN;
    script.async = true;

    script.onload  = () => setReady(true);
    script.onerror = () =>
      setError("Impossible de charger pdf-lib. Vérifiez votre connexion internet.");

    document.head.appendChild(script);
  }, []);

  return { ready, error };
}