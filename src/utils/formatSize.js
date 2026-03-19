/**
 * Formate un nombre d'octets en chaîne lisible.
 */
export function formatSize(bytes) {
  if (bytes < 1024)       return `${bytes} o`;
  if (bytes < 1_048_576)  return `${(bytes / 1024).toFixed(1)} Ko`;
  return `${(bytes / 1_048_576).toFixed(2)} Mo`;
}

/**
 * Calcule et formate le gain de taille entre l'original et le résultat.
 */
export function formatGain(original, result) {
  const diff = original - result;
  const pct  = ((diff / original) * 100).toFixed(0);
  const sign = diff >= 0 ? "−" : "+";
  return `${sign}${formatSize(Math.abs(diff))} (${sign}${Math.abs(pct)}%)`;
}