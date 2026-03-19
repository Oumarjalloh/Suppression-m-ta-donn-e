/**
 * Supprime les métadonnées d'un fichier PDF à l'aide de pdf-lib.
 * Les champs effacés : titre, auteur, sujet, mots-clés, producteur,
 * créateur, date de création et date de modification.
 */
export async function stripPdfMetadata(file) {
  const { PDFDocument } = window.PDFLib;
  if (!PDFDocument) {
    throw new Error("pdf-lib n'est pas encore chargé. Réessayez dans un instant.");
  }

  // 1. Lire le contenu binaire du fichier
  const arrayBuffer = await file.arrayBuffer();

  // 2. Charger le document PDF
  const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

  // 3. Écraser chaque champ de métadonnées
  pdfDoc.setTitle("");
  pdfDoc.setAuthor("");
  pdfDoc.setSubject("");
  pdfDoc.setKeywords([]);
  pdfDoc.setProducer("");
  pdfDoc.setCreator("");
  pdfDoc.setCreationDate(new Date(0));
  pdfDoc.setModificationDate(new Date(0));

  // 4. Sérialiser et retourner un nouveau File
  const pdfBytes = await pdfDoc.save();
  const name     = file.name.replace(/\.pdf$/i, "_clean.pdf");
  return new File([pdfBytes], name, { type: "application/pdf" });
}