import React from "react";
import Header     from "./components/Header";
import MetaTicker from "./components/MetaTicker";
import DropZone   from "./components/DropZone";
import ActionBar  from "./components/ActionBar";
import FileList   from "./components/FileList";
import InfoBox    from "./components/InfoBox";
import { useFileProcessor } from "./hooks/useFileProcessor";
import { usePdfLib }        from "./hooks/usePdfLib";

export default function App() {
  const { ready: pdfReady, error: pdfError } = usePdfLib();

  const {
    files,
    counts,
    addFiles,
    processOne,
    processAll,
    download,
    downloadAll,
    remove,
    clear,
  } = useFileProcessor();

  return (
    <div style={styles.app}>
      <Header />
      <MetaTicker />

      <main style={styles.main}>

        {pdfError && (
          <div style={styles.pdfWarning}>
            ⚠ pdf-lib n'a pas pu être chargé — le traitement PDF est désactivé.
            Vérifiez votre connexion internet.
          </div>
        )}

        <DropZone onFiles={addFiles} />

        <div style={{ height: 24 }} />

        <ActionBar
          counts={counts}
          onProcessAll={processAll}
          onDownloadAll={downloadAll}
          onClear={clear}
        />

        <FileList
          files={files}
          onProcess={processOne}
          onDownload={download}
          onRemove={remove}
        />

        <InfoBox />

      </main>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#0a0a0a",
  },
  main: {
    flex: 1,
    maxWidth: 860,
    width: "100%",
    margin: "0 auto",
    padding: "28px 32px 48px",
    boxSizing: "border-box",
  },
  pdfWarning: {
    marginBottom: 20,
    padding: "10px 16px",
    background: "#1a0e00",
    border: "1px solid #ffaa0044",
    borderRadius: 3,
    fontSize: 11,
    color: "#ffaa00",
    letterSpacing: 0.5,
  },
};