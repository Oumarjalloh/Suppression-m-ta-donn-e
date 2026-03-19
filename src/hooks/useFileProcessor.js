import { useState, useCallback } from "react";
import { SUPPORTED_TYPES, FILE_STATUS } from "../constants/fileTypes";
import { stripImageMetadata } from "../utils/stripImage";
import { stripPdfMetadata }   from "../utils/stripPdf";

function createEntry(file) {
  const typeInfo = SUPPORTED_TYPES[file.type] ?? null;
  return {
    id:        crypto.randomUUID(),
    file,
    status:    FILE_STATUS.IDLE,
    supported: !!typeInfo,
    typeInfo,
    result:    null,
    error:     null,
  };
}

export function useFileProcessor() {
  const [files, setFiles] = useState([]);

  const updateEntry = useCallback((id, patch) => {
    setFiles((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...patch } : f))
    );
  }, []);

  const addFiles = useCallback((incoming) => {
    const entries = Array.from(incoming).map(createEntry);
    setFiles((prev) => [...prev, ...entries]);
  }, []);

  const processOne = useCallback(async (id) => {
    const entry = files.find((f) => f.id === id);
    if (!entry || !entry.supported || entry.status !== FILE_STATUS.IDLE) return;

    updateEntry(id, { status: FILE_STATUS.PROCESSING, error: null });

    try {
      let result;
      if (entry.typeInfo.method === "canvas") {
        result = await stripImageMetadata(entry.file);
      } else if (entry.typeInfo.method === "pdf") {
        result = await stripPdfMetadata(entry.file);
      } else {
        throw new Error(`Méthode inconnue : ${entry.typeInfo.method}`);
      }
      updateEntry(id, { status: FILE_STATUS.DONE, result });
    } catch (err) {
      updateEntry(id, {
        status: FILE_STATUS.ERROR,
        error: err.message ?? "Erreur inconnue",
      });
    }
  }, [files, updateEntry]);

  const processAll = useCallback(() => {
    files
      .filter((f) => f.supported && f.status === FILE_STATUS.IDLE)
      .forEach((f) => processOne(f.id));
  }, [files, processOne]);

  const download = useCallback((entry) => {
    if (!entry.result) return;
    const url = URL.createObjectURL(entry.result);
    const a   = document.createElement("a");
    a.href     = url;
    a.download = entry.result.name;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const downloadAll = useCallback(() => {
    files.filter((f) => f.status === FILE_STATUS.DONE).forEach(download);
  }, [files, download]);

  const remove = useCallback((id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }, []);

  const clear = useCallback(() => setFiles([]), []);

  const counts = {
    total:       files.length,
    idle:        files.filter((f) => f.supported && f.status === FILE_STATUS.IDLE).length,
    processing:  files.filter((f) => f.status === FILE_STATUS.PROCESSING).length,
    done:        files.filter((f) => f.status === FILE_STATUS.DONE).length,
    error:       files.filter((f) => f.status === FILE_STATUS.ERROR).length,
    unsupported: files.filter((f) => !f.supported).length,
  };

  return { files, counts, addFiles, processOne, processAll, download, downloadAll, remove, clear };
}