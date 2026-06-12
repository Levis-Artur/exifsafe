"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDownToLine,
  CheckCircle2,
  ImageIcon,
  Loader2,
  RotateCcw,
  SlidersHorizontal,
  UploadCloud,
} from "lucide-react";

type AcceptedMimeType = "image/jpeg" | "image/png" | "image/webp";
type OutputFormat = "same" | AcceptedMimeType;
type CompressorStatus = "waiting" | "ready" | "compressing" | "compressed" | "error";
type Dimensions = { width: number; height: number };
type CompressionResult = {
  blob: Blob;
  outputType: AcceptedMimeType;
  quality: number;
  outputDimensions: Dimensions;
};

const acceptedTypes: AcceptedMimeType[] = ["image/jpeg", "image/png", "image/webp"];

const presets = [
  {
    id: "best-quality",
    label: "Best quality",
    description: "High quality, original dimensions, same format.",
    quality: 0.9,
    maxWidth: "",
    outputFormat: "same" as OutputFormat,
  },
  {
    id: "balanced",
    label: "Balanced",
    description: "Good quality with strong WebP savings for sharing.",
    quality: 0.75,
    maxWidth: "1920",
    outputFormat: "image/webp" as OutputFormat,
  },
  {
    id: "small-file",
    label: "Small file",
    description: "Smaller WebP output for websites and email.",
    quality: 0.6,
    maxWidth: "1600",
    outputFormat: "image/webp" as OutputFormat,
  },
  {
    id: "maximum",
    label: "Maximum compression",
    description: "Aggressive WebP compression and resizing.",
    quality: 0.45,
    maxWidth: "1280",
    outputFormat: "image/webp" as OutputFormat,
  },
] as const;

function isAcceptedType(type: string): type is AcceptedMimeType {
  return acceptedTypes.includes(type as AcceptedMimeType);
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function formatType(type: OutputFormat | AcceptedMimeType, originalType?: AcceptedMimeType) {
  const resolvedType = type === "same" ? originalType : type;

  if (resolvedType === "image/jpeg") {
    return "JPG";
  }

  if (resolvedType === "image/png") {
    return "PNG";
  }

  return "WEBP";
}

function getResolvedOutputType(outputFormat: OutputFormat, fileType: AcceptedMimeType) {
  return outputFormat === "same" ? fileType : outputFormat;
}

function getCompressedFileName(file: File, type: AcceptedMimeType) {
  const baseName = file.name.replace(/\.[^/.]+$/, "") || "image";
  const extension = type === "image/jpeg" ? "jpg" : type.split("/")[1];

  return `${baseName}-compressed.${extension}`;
}

function getSizeChange(originalSize: number, compressedSize: number) {
  const difference = originalSize - compressedSize;
  const percent = Math.abs((difference / originalSize) * 100);

  if (difference >= 0) {
    return `Saved ${percent.toFixed(0)}%`;
  }

  return `File increased by ${percent.toFixed(0)}%`;
}

function getSavedPercent(originalSize: number, compressedSize: number) {
  return ((originalSize - compressedSize) / originalSize) * 100;
}

function parseTargetSize(value: string) {
  const trimmed = value.trim().toLowerCase();

  if (!trimmed) {
    return null;
  }

  const match = trimmed.match(/^(\d+(?:\.\d+)?)\s*(kb|mb)?$/);

  if (!match) {
    return Number.NaN;
  }

  const amount = Number(match[1]);
  const unit = match[2] ?? "kb";

  return unit === "mb" ? amount * 1024 * 1024 : amount * 1024;
}

function getImageElement(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Image failed to load."));
    image.src = src;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement, type: AcceptedMimeType, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Compression failed."));
          return;
        }

        resolve(blob);
      },
      type,
      type === "image/png" ? undefined : quality,
    );
  });
}

function waitForPaint() {
  return new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => resolve());
  });
}

async function exportCandidate(
  image: HTMLImageElement,
  outputType: AcceptedMimeType,
  quality: number,
  maxWidth: number | null,
) {
  const outputWidth = maxWidth && image.naturalWidth > maxWidth ? maxWidth : image.naturalWidth;
  const outputHeight = Math.round((outputWidth / image.naturalWidth) * image.naturalHeight);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Compression failed.");
  }

  canvas.width = outputWidth;
  canvas.height = outputHeight;
  context.drawImage(image, 0, 0, outputWidth, outputHeight);

  return {
    blob: await canvasToBlob(canvas, outputType, quality),
    outputType,
    quality,
    outputDimensions: { width: outputWidth, height: outputHeight },
  };
}

export function ImageCompressor() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [compressedFileName, setCompressedFileName] = useState("");
  const [compressedSize, setCompressedSize] = useState<number | null>(null);
  const [quality, setQuality] = useState(0.75);
  const [maxWidth, setMaxWidth] = useState("1920");
  const [targetSize, setTargetSize] = useState("");
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("image/webp");
  const [selectedPreset, setSelectedPreset] = useState("balanced");
  const [autoOptimize, setAutoOptimize] = useState(true);
  const [originalDimensions, setOriginalDimensions] = useState<Dimensions | null>(null);
  const [outputDimensions, setOutputDimensions] = useState<Dimensions | null>(null);
  const [resultOutputType, setResultOutputType] = useState<AcceptedMimeType | null>(null);
  const [resultQuality, setResultQuality] = useState<number | null>(null);
  const [resultNote, setResultNote] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<CompressorStatus>("waiting");
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  useEffect(() => {
    return () => {
      if (compressedUrl) {
        URL.revokeObjectURL(compressedUrl);
      }
    };
  }, [compressedUrl]);

  function clearCompressedResult() {
    if (compressedUrl) {
      URL.revokeObjectURL(compressedUrl);
    }

    setCompressedUrl(null);
    setCompressedFileName("");
    setCompressedSize(null);
    setOutputDimensions(null);
    setResultOutputType(null);
    setResultQuality(null);
    setResultNote("");
  }

  function markReadyAfterSettingsChange() {
    clearCompressedResult();

    if (selectedFile) {
      setStatus("ready");
    }
  }

  function applyPreset(presetId: string) {
    const preset = presets.find((item) => item.id === presetId);

    if (!preset) {
      return;
    }

    setSelectedPreset(preset.id);
    setQuality(preset.quality);
    setMaxWidth(preset.maxWidth);
    setOutputFormat(preset.outputFormat);
    setAutoOptimize(preset.id !== "best-quality");
    markReadyAfterSettingsChange();
  }

  function resetCompressor() {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    clearCompressedResult();
    setSelectedFile(null);
    setPreviewUrl(null);
    setOriginalDimensions(null);
    setOutputDimensions(null);
    setMaxWidth("1920");
    setTargetSize("");
    setQuality(0.75);
    setOutputFormat("image/webp");
    setSelectedPreset("balanced");
    setAutoOptimize(true);
    setError("");
    setStatus("waiting");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function handleFile(file: File) {
    setError("");

    if (!isAcceptedType(file.type)) {
      resetCompressor();
      setStatus("error");
      setError("Unsupported file type. Please choose a JPG, PNG or WEBP image.");
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    clearCompressedResult();
    const nextPreviewUrl = URL.createObjectURL(file);
    setSelectedFile(file);
    setPreviewUrl(nextPreviewUrl);
    setOriginalDimensions(null);
    setOutputDimensions(null);
    setOutputFormat("image/webp");
    setQuality(0.75);
    setMaxWidth("1920");
    setSelectedPreset("balanced");
    setAutoOptimize(true);
    setStatus("ready");

    try {
      const image = await getImageElement(nextPreviewUrl);
      setOriginalDimensions({ width: image.naturalWidth, height: image.naturalHeight });
    } catch {
      setStatus("error");
      setError("Image failed to load. Please try a different image.");
    }
  }

  async function getBestAutoResult(image: HTMLImageElement, targetBytes: number | null) {
    const outputType: AcceptedMimeType = "image/webp";
    const parsedMaxWidth = parseMaxWidth();
    const widths = targetBytes
      ? [parsedMaxWidth, 1920, 1600, 1280].filter((width): width is number | null => width !== undefined)
      : [1920, 1600, 1280, null];
    const qualities = targetBytes ? [0.9, 0.8, 0.7, 0.6, 0.5, 0.4] : [0.75, 0.65, 0.55, 0.75];
    const compactCandidates = targetBytes
      ? widths.flatMap((width) => qualities.map((candidateQuality) => ({ width, quality: candidateQuality })))
      : [
          { width: 1920, quality: 0.75 },
          { width: 1600, quality: 0.65 },
          { width: 1280, quality: 0.55 },
          { width: null, quality: 0.75 },
        ];

    let smallest: CompressionResult | null = null;
    let closestUnderTarget: CompressionResult | null = null;

    for (const candidate of compactCandidates) {
      await waitForPaint();

      try {
        const result = await exportCandidate(image, outputType, candidate.quality, candidate.width);

        if (!smallest || result.blob.size < smallest.blob.size) {
          smallest = result;
        }

        if (
          targetBytes &&
          result.blob.size <= targetBytes &&
          (!closestUnderTarget || result.blob.size > closestUnderTarget.blob.size)
        ) {
          closestUnderTarget = result;
        }
      } catch {
        // Ignore unsupported or failed candidate exports and continue with the next option.
      }
    }

    return closestUnderTarget ?? smallest;
  }

  function parseMaxWidth() {
    if (!maxWidth.trim()) {
      return null;
    }

    const parsedMaxWidth = Number(maxWidth);

    if (!Number.isInteger(parsedMaxWidth) || parsedMaxWidth <= 0) {
      return Number.NaN;
    }

    return parsedMaxWidth;
  }

  async function compressImage() {
    if (!selectedFile || !previewUrl || !isAcceptedType(selectedFile.type)) {
      setStatus("error");
      setError("Please choose a JPG, PNG or WEBP image first.");
      return;
    }

    const parsedMaxWidth = parseMaxWidth();

    if (Number.isNaN(parsedMaxWidth)) {
      setStatus("error");
      setError("Invalid max width. Enter a whole number such as 1600, or leave the field empty.");
      return;
    }

    const targetBytes = parseTargetSize(targetSize);

    if (Number.isNaN(targetBytes)) {
      setStatus("error");
      setError("Invalid target size. Use a value such as 500 KB or 1.5 MB.");
      return;
    }

    setStatus("compressing");
    setError("");
    clearCompressedResult();

    try {
      const image = await getImageElement(previewUrl);
      const resolvedOutputType = getResolvedOutputType(outputFormat, selectedFile.type);
      const result =
        autoOptimize || targetBytes
          ? await getBestAutoResult(image, targetBytes)
          : await exportCandidate(image, resolvedOutputType, quality, parsedMaxWidth);

      if (!result) {
        throw new Error("Compression failed.");
      }

      const nextCompressedUrl = URL.createObjectURL(result.blob);
      const reachedTarget = targetBytes ? result.blob.size <= targetBytes : true;

      setCompressedUrl(nextCompressedUrl);
      setCompressedFileName(getCompressedFileName(selectedFile, result.outputType));
      setCompressedSize(result.blob.size);
      setOutputDimensions(result.outputDimensions);
      setResultOutputType(result.outputType);
      setResultQuality(result.quality);
      setResultNote(
        targetBytes && !reachedTarget
          ? "Could not reach target size without stronger resizing. Try Maximum compression or lower max width."
          : "",
      );
      setStatus("compressed");
    } catch (compressionError) {
      setStatus("error");
      setError(
        compressionError instanceof Error
          ? compressionError.message
          : "Compression failed. Please try a different image.",
      );
    }
  }

  const originalFileType = selectedFile && isAcceptedType(selectedFile.type) ? selectedFile.type : null;
  const effectiveOutputType = originalFileType
    ? getResolvedOutputType(outputFormat, originalFileType)
    : "image/webp";
  const outputIsPng = effectiveOutputType === "image/png";
  const hasCompressedResult = status === "compressed" && selectedFile && compressedSize !== null;
  const savingsPercent =
    selectedFile && compressedSize !== null ? getSavedPercent(selectedFile.size, compressedSize) : null;
  const settingsChanged = status === "ready" && selectedFile;
  const statusText = autoOptimize || targetSize.trim() ? "Optimizing locally..." : "Compressing image locally...";

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <UploadCloud className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-navy">1. Choose image and settings</h2>
            <p className="text-sm text-slate-600">JPG, PNG or WEBP. Processed locally.</p>
          </div>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="sr-only"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              void handleFile(file);
            }
          }}
        />

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setIsDragging(false);
            const file = event.dataTransfer.files?.[0];
            if (file) {
              void handleFile(file);
            }
          }}
          className={`mt-6 flex min-h-56 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition ${
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-slate-300 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/50"
          }`}
        >
          <ImageIcon className="h-10 w-10 text-blue-600" aria-hidden="true" />
          <span className="mt-4 text-base font-semibold text-navy">
            Drag & drop your image here
          </span>
          <span className="mt-2 text-sm font-semibold text-blue-600">or browse to upload</span>
          <span className="mt-4 flex flex-wrap justify-center gap-2">
            {["JPG", "PNG", "WEBP"].map((format) => (
              <span
                key={format}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
              >
                {format}
              </span>
            ))}
          </span>
          <span className="mt-4 text-xs text-slate-500">
            Your image is compressed locally and never uploaded.
          </span>
        </button>

        {selectedFile ? (
          <div className="mt-5 rounded-xl border border-slate-200 p-4">
            <div className="grid gap-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-slate-600">Selected file</span>
                <span className="max-w-[220px] truncate font-semibold text-navy">
                  {selectedFile.name}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-600">Original size</span>
                <span className="font-semibold text-navy">{formatFileSize(selectedFile.size)}</span>
              </div>
              {originalDimensions ? (
                <div className="flex justify-between gap-4">
                  <span className="text-slate-600">Original dimensions</span>
                  <span className="font-semibold text-navy">
                    {originalDimensions.width} × {originalDimensions.height}
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="mt-5 rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <h3 className="font-semibold text-navy">Compression presets</h3>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {presets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset.id)}
                className={`rounded-xl border p-3 text-left transition ${
                  selectedPreset === preset.id
                    ? "border-blue-300 bg-blue-50"
                    : "border-slate-200 bg-white hover:border-blue-200"
                }`}
              >
                <span className="block text-sm font-semibold text-navy">{preset.label}</span>
                <span className="mt-1 block text-xs leading-5 text-slate-500">
                  {preset.description}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <h3 className="font-semibold text-navy">Compression settings</h3>
          </div>

          <div className="mt-4 grid gap-4">
            <label>
              <span className="text-sm font-semibold text-navy">Output format</span>
              <select
                value={outputFormat}
                onChange={(event) => {
                  setOutputFormat(event.target.value as OutputFormat);
                  setSelectedPreset("custom");
                  markReadyAfterSettingsChange();
                }}
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-navy outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              >
                <option value="same">Same as original</option>
                <option value="image/jpeg">JPG</option>
                <option value="image/png">PNG</option>
                <option value="image/webp">WEBP</option>
              </select>
              <span className="mt-2 block text-xs leading-5 text-slate-500">
                WEBP usually gives the best size reduction for photos and web sharing.
              </span>
            </label>

            <label className={outputIsPng ? "opacity-60" : ""}>
              <span className="flex items-center justify-between text-sm font-semibold text-navy">
                Quality
                <span>{Math.round(quality * 100)}%</span>
              </span>
              <input
                type="range"
                min="0.4"
                max="0.95"
                step="0.05"
                value={quality}
                disabled={outputIsPng}
                onChange={(event) => {
                  setQuality(Number(event.target.value));
                  setSelectedPreset("custom");
                  markReadyAfterSettingsChange();
                }}
                className="mt-3 w-full accent-blue-600"
              />
              {outputIsPng ? (
                <span className="mt-2 block text-xs leading-5 text-slate-500">
                  PNG files are often already lossless and may not compress well as PNG. For
                  smaller files, try WEBP output.
                </span>
              ) : null}
            </label>

            <label>
              <span className="text-sm font-semibold text-navy">Optional max width</span>
              <input
                type="number"
                min="1"
                inputMode="numeric"
                value={maxWidth}
                placeholder="Optional max width, e.g. 1600"
                onChange={(event) => {
                  setMaxWidth(event.target.value);
                  setSelectedPreset("custom");
                  markReadyAfterSettingsChange();
                }}
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
              <span className="mt-2 block text-xs leading-5 text-slate-500">
                Leave empty to keep original dimensions. Use 1600px or 1920px for web sharing.
              </span>
            </label>

            <label>
              <span className="text-sm font-semibold text-navy">Target size optional</span>
              <input
                type="text"
                value={targetSize}
                placeholder="e.g. 500 KB"
                onChange={(event) => {
                  setTargetSize(event.target.value);
                  markReadyAfterSettingsChange();
                }}
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
              <span className="mt-2 block text-xs leading-5 text-slate-500">
                Best effort. ExifSafe tries lower quality and resized WebP output locally.
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-3">
              <input
                type="checkbox"
                checked={autoOptimize}
                onChange={(event) => {
                  setAutoOptimize(event.target.checked);
                  markReadyAfterSettingsChange();
                }}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 accent-blue-600"
              />
              <span>
                <span className="block text-sm font-semibold text-navy">Auto optimize</span>
                <span className="mt-1 block text-xs leading-5 text-slate-600">
                  Tries several WebP quality and width combinations locally, then picks the
                  smallest successful result.
                </span>
              </span>
            </label>

            <button
              type="button"
              onClick={() => void compressImage()}
              disabled={!selectedFile || status === "compressing"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {status === "compressing" ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
              )}
              {settingsChanged ? "Compress again" : "Compress image"}
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <ArrowDownToLine className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-navy">2. Preview and download</h2>
            <p className="text-sm text-slate-600">Download a new compressed copy.</p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          {previewUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={previewUrl} alt="Selected image preview" className="max-h-80 w-full object-contain" />
          ) : (
            <div className="flex min-h-80 flex-col items-center justify-center p-8 text-center">
              <ImageIcon className="h-10 w-10 text-slate-300" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold text-navy">
                Upload an image to preview compression.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                The download button will appear here after compression.
              </p>
            </div>
          )}
        </div>

        {status === "compressing" ? (
          <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
            <div className="flex items-center gap-3">
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              {statusText}
            </div>
          </div>
        ) : null}

        {status === "error" && error ? (
          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-900">{error}</p>
            <button
              type="button"
              onClick={resetCompressor}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-navy shadow-sm ring-1 ring-amber-100 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Compress another image
            </button>
          </div>
        ) : null}

        {hasCompressedResult ? (
          <div className="mt-5">
            <div
              className={`rounded-xl border p-4 ${
                savingsPercent !== null && savingsPercent >= 0
                  ? "border-emerald-100 bg-emerald-50"
                  : "border-amber-200 bg-amber-50"
              }`}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className={`mt-0.5 h-5 w-5 shrink-0 ${
                    savingsPercent !== null && savingsPercent >= 0
                      ? "text-emerald-700"
                      : "text-amber-700"
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      savingsPercent !== null && savingsPercent >= 0
                        ? "text-emerald-900"
                        : "text-amber-900"
                    }`}
                  >
                    Compression complete
                  </p>
                  <p
                    className={`mt-1 text-sm leading-6 ${
                      savingsPercent !== null && savingsPercent >= 0
                        ? "text-emerald-800"
                        : "text-amber-900"
                    }`}
                  >
                    {getSizeChange(selectedFile.size, compressedSize)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-200">
              <div className="divide-y divide-slate-200">
                {[
                  ["Original format", originalFileType ? formatType(originalFileType) : "Unknown"],
                  ["Output format", resultOutputType ? formatType(resultOutputType) : formatType(effectiveOutputType)],
                  [
                    "Original dimensions",
                    originalDimensions
                      ? `${originalDimensions.width} × ${originalDimensions.height}`
                      : "Unknown",
                  ],
                  [
                    "Output dimensions",
                    outputDimensions ? `${outputDimensions.width} × ${outputDimensions.height}` : "Unknown",
                  ],
                  ["Original size", formatFileSize(selectedFile.size)],
                  ["Compressed size", formatFileSize(compressedSize)],
                  [
                    "Saved",
                    savingsPercent !== null && savingsPercent >= 0
                      ? `${savingsPercent.toFixed(0)}%`
                      : "0%",
                  ],
                  ["Output quality", resultQuality ? `${Math.round(resultQuality * 100)}%` : "Browser default"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 px-4 py-3 text-sm">
                    <span className="text-slate-600">{label}</span>
                    <span className="font-semibold text-navy">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {compressedSize > selectedFile.size ? (
              <p className="mt-3 rounded-lg bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">
                Try WEBP output, lower quality, or smaller max width.
              </p>
            ) : null}

            {resultNote ? (
              <p className="mt-3 rounded-lg bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">
                {resultNote}
              </p>
            ) : null}

            {compressedUrl ? (
              <a
                href={compressedUrl}
                download={compressedFileName}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                Download compressed image
              </a>
            ) : null}

            <button
              type="button"
              onClick={resetCompressor}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy shadow-sm ring-1 ring-slate-200 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Compress another image
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
