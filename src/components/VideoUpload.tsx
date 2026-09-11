"use client";

import { useId, useRef, useState } from "react";

const ACCEPTED_TYPES = ["video/mp4", "video/quicktime", "video/webm"];
const ACCEPTED_EXTENSIONS = [".mp4", ".mov", ".webm"];
const MAX_SIZE_BYTES = 500 * 1024 * 1024; // 500 MB

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  const mb = bytes / (1024 * 1024);
  return `${mb % 1 === 0 ? mb.toFixed(0) : mb.toFixed(1)} MB`;
}

function isAcceptedFile(file: File) {
  const lowerName = file.name.toLowerCase();
  const hasAcceptedExtension = ACCEPTED_EXTENSIONS.some((ext) => lowerName.endsWith(ext));
  return ACCEPTED_TYPES.includes(file.type) || hasAcceptedExtension;
}

export function VideoUpload({
  file,
  onChange,
  error,
}: {
  file: File | null;
  onChange: (file: File | null) => void;
  error?: string;
}) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [localError, setLocalError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleFile(candidate: File | null) {
    if (!candidate) {
      onChange(null);
      return;
    }
    if (!isAcceptedFile(candidate)) {
      setLocalError("Formato no admitido. Usa MP4, MOV o WebM.");
      onChange(null);
      return;
    }
    if (candidate.size > MAX_SIZE_BYTES) {
      setLocalError(`El archivo supera el máximo de ${formatBytes(MAX_SIZE_BYTES)}.`);
      onChange(null);
      return;
    }
    setLocalError(null);
    onChange(candidate);
  }

  function handleRemove() {
    setLocalError(null);
    onChange(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  const shownError = localError ?? error;

  return (
    <div>
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept=".mp4,.mov,.webm,video/mp4,video/quicktime,video/webm"
        className="sr-only"
        onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
        aria-describedby={`${inputId}-hint ${shownError ? `${inputId}-error` : ""}`}
      />

      {!file && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            handleFile(e.dataTransfer.files?.[0] ?? null);
          }}
          className={`flex flex-col items-center justify-center gap-3 border border-dashed px-6 py-10 text-center transition-colors ${
            isDragging ? "border-junto-coral bg-junto-coral/5" : "border-junto-ink/25 bg-junto-ink/[0.02]"
          }`}
        >
          <p className="text-sm text-junto-ink/70">
            Arrastra tu vídeo aquí, o
          </p>
          <label
            htmlFor={inputId}
            className="cursor-pointer border border-junto-ink/25 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.06em] text-junto-ink transition-colors hover:border-junto-coral hover:text-junto-coral"
          >
            Seleccionar vídeo
          </label>
          <p id={`${inputId}-hint`} className="text-xs text-junto-ink/45">
            MP4, MOV o WebM · máximo {formatBytes(MAX_SIZE_BYTES)}
          </p>
        </div>
      )}

      {file && (
        <div className="flex flex-col gap-4 border border-junto-ink/15 bg-junto-ink/[0.02] px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-junto-ink">{file.name}</p>
            <p className="mt-0.5 text-xs text-junto-ink/50">{formatBytes(file.size)}</p>
          </div>
          <div className="flex flex-shrink-0 gap-2.5">
            <label
              htmlFor={inputId}
              className="cursor-pointer border border-junto-ink/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.06em] text-junto-ink transition-colors hover:border-junto-coral hover:text-junto-coral"
            >
              Reemplazar
            </label>
            <button
              type="button"
              onClick={handleRemove}
              className="border border-junto-ink/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.06em] text-junto-ink/60 transition-colors hover:border-junto-coral hover:text-junto-coral"
            >
              Eliminar
            </button>
          </div>
        </div>
      )}

      {shownError && (
        <p id={`${inputId}-error`} role="alert" className="mt-2.5 text-sm font-medium text-junto-coral">
          {shownError}
        </p>
      )}
    </div>
  );
}
