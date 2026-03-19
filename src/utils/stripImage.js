import { SUPPORTED_TYPES } from "../constants/fileTypes";

/**
 * Supprime toutes les métadonnées d'une image en la redessinant
 * via un canvas HTML5. Seuls les pixels sont copiés.
 */
export function stripImageMetadata(file) {
  return new Promise((resolve, reject) => {
    const typeInfo  = SUPPORTED_TYPES[file.type];
    const outType   = typeInfo?.outputType ?? "image/png";
    const objectUrl = URL.createObjectURL(file);

    const img = new Image();

    img.onload = () => {
      // 1. Créer un canvas aux dimensions exactes de l'image
      const canvas = document.createElement("canvas");
      canvas.width  = img.naturalWidth;
      canvas.height = img.naturalHeight;

      // 2. Redessiner l'image — seuls les pixels sont copiés
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(objectUrl);

      // 3. Exporter vers un nouveau blob vierge de métadonnées
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("La conversion canvas → blob a échoué."));
            return;
          }
          const ext  = outType === "image/jpeg" ? "jpg" : "png";
          const name = file.name.replace(/\.[^.]+$/, `_clean.${ext}`);
          resolve(new File([blob], name, { type: outType }));
        },
        outType,
        0.95
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Impossible de décoder l'image. Le fichier est peut-être corrompu."));
    };

    img.src = objectUrl;
  });
}