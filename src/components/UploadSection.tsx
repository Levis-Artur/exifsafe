"use client";

import { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";
import { CheckCircle2, FileImage, ImageUp, Loader2, RotateCcw, ShieldCheck } from "lucide-react";
import { createMetadataReport, type MetadataReport } from "@/lib/metadata-report";

const formats = ["JPG", "PNG", "WEBP"];
const acceptedTypes = ["image/jpeg", "image/png", "image/webp"] as const;
const maxFileSize = 20 * 1024 * 1024;

type AcceptedMimeType = (typeof acceptedTypes)[number];
type UploadStatus = "waiting" | "file selected" | "cleaning" | "cleaned successfully" | "error";

function isAcceptedMimeType(type: string): type is AcceptedMimeType {
  return acceptedTypes.includes(type as AcceptedMimeType);
}

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function formatSizeDifference(originalSize: number, cleanedFileSize: number) {
  const difference = originalSize - cleanedFileSize;
  const absoluteDifferenceKb = Math.abs(difference) / 1024;
  const percentage = originalSize === 0 ? 0 : Math.abs((difference / originalSize) * 100);

  if (difference === 0) {
    return "0.0 KB (0.0%)";
  }

  const direction = difference > 0 ? "smaller" : "larger";

  return `${absoluteDifferenceKb.toFixed(1)} KB ${direction} (${percentage.toFixed(1)}%)`;
}

function getCleanedFileName(file: File, type: AcceptedMimeType) {
  const baseName = file.name.replace(/\.[^/.]+$/, "") || "photo";
  const extension = type === "image/png" ? "png" : type === "image/webp" ? "webp" : "jpg";

  return `${baseName}-cleaned.${extension}`;
}

function loadImage(url: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Could not read this image. Try another JPG, PNG or WEBP file."));
    image.src = url;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement, type: AcceptedMimeType) {
  const quality = type === "image/png" ? undefined : 0.95;

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Could not export a cleaned image from the canvas."));
          return;
        }

        resolve(blob);
      },
      type,
      quality,
    );
  });
}

export function UploadSection() {
  const inputRef = useRef<HTMLInputElement>(null);
  const requestIdRef = useRef(0);
  const [status, setStatus] = useState<UploadStatus>("waiting");
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [cleanedUrl, setCleanedUrl] = useState<string | null>(null);
  const [cleanedFileName, setCleanedFileName] = useState("");
  const [cleanedSize, setCleanedSize] = useState<number | null>(null);
  const [metadataReport, setMetadataReport] = useState<MetadataReport | null>(null);
  const [isReportLoading, setIsReportLoading] = useState(false);
  const [reportError, setReportError] = useState("");
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
      if (cleanedUrl) {
        URL.revokeObjectURL(cleanedUrl);
      }
    };
  }, [cleanedUrl]);

  async function cleanImage(file: File, type: AcceptedMimeType, imageUrl: string, requestId: number) {
    try {
      setStatus("cleaning");

      const image = await loadImage(imageUrl);
      if (requestIdRef.current !== requestId) {
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Canvas is not available in this browser.");
      }

      context.drawImage(image, 0, 0);

      const blob = await canvasToBlob(canvas, type);
      if (requestIdRef.current !== requestId) {
        return;
      }

      const nextCleanedUrl = URL.createObjectURL(blob);
      setCleanedUrl(nextCleanedUrl);
      setCleanedFileName(getCleanedFileName(file, type));
      setCleanedSize(blob.size);
      setStatus("cleaned successfully");
    } catch (cleaningError) {
      if (requestIdRef.current !== requestId) {
        return;
      }

      setStatus("error");
      setError(
        cleaningError instanceof Error
          ? cleaningError.message
          : "Something went wrong while cleaning this image.",
      );
    }
  }

  async function createReport(file: File, requestId: number) {
    try {
      setIsReportLoading(true);
      const report = await createMetadataReport(file);

      if (requestIdRef.current !== requestId) {
        return;
      }

      setMetadataReport(report);
    } catch (metadataError) {
      if (requestIdRef.current !== requestId) {
        return;
      }

      setReportError(
        metadataError instanceof Error
          ? metadataError.message
          : "Could not create a metadata report for this file.",
      );
    } finally {
      if (requestIdRef.current === requestId) {
        setIsReportLoading(false);
      }
    }
  }

  function resetUpload() {
    requestIdRef.current += 1;
    setStatus("waiting");
    setIsDragging(false);
    setSelectedFile(null);
    setPreviewUrl(null);
    setCleanedUrl(null);
    setCleanedFileName("");
    setCleanedSize(null);
    setMetadataReport(null);
    setIsReportLoading(false);
    setReportError("");
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function handleFile(file?: File) {
    if (!file) {
      return;
    }

    requestIdRef.current += 1;
    const requestId = requestIdRef.current;
    setCleanedUrl(null);
    setCleanedFileName("");
    setCleanedSize(null);
    setMetadataReport(null);
    setIsReportLoading(false);
    setReportError("");
    setError("");

    if (!isAcceptedMimeType(file.type)) {
      setSelectedFile(null);
      setPreviewUrl(null);
      setStatus("error");
      setError("Please choose a JPG, PNG or WEBP image.");
      return;
    }

    const fileType = file.type;

    if (file.size > maxFileSize) {
      setSelectedFile(null);
      setPreviewUrl(null);
      setStatus("error");
      setError("Please choose an image that is 20 MB or smaller.");
      return;
    }

    const nextPreviewUrl = URL.createObjectURL(file);
    setSelectedFile(file);
    setPreviewUrl(nextPreviewUrl);
    setStatus("file selected");
    void createReport(file, requestId);
    void cleanImage(file, fileType, nextPreviewUrl, requestId);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    handleFile(event.target.files?.[0]);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    handleFile(event.dataTransfer.files?.[0]);
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(event: DragEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsDragging(false);
    }
  }

  const hasCleanedResult = status === "cleaned successfully" && selectedFile && cleanedSize !== null;
  const canDownload = hasCleanedResult && cleanedUrl;
  const markerRows = metadataReport
    ? [
        ["EXIF", metadataReport.likelyExif],
        ["GPS", metadataReport.likelyGps],
        ["XMP", metadataReport.likelyXmp],
        ["ICC profile", metadataReport.likelyIccProfile],
        ["Photoshop data", metadataReport.likelyPhotoshopData],
      ] as const
    : [];

  return (
    <section id="upload" className="scroll-mt-24 bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-normal text-navy sm:text-4xl">
          Clean a photo now
        </h2>
        <p className="mt-3 text-base text-slate-600">
          JPG, PNG or WEBP · Processed entirely in your browser
        </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={handleInputChange}
            />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-blue-600">1. Choose your photo</p>
                <h3 className="mt-1 text-lg font-semibold text-navy">Local image upload</h3>
              </div>
              {selectedFile ? (
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Selected
                </span>
              ) : null}
            </div>

            {!selectedFile ? (
              <div
                className={`mt-5 flex min-h-80 flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition ${
                  isDragging ? "border-blue-500 bg-blue-50" : "border-blue-200 bg-blue-50/40"
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm ring-1 ring-blue-100">
                  <ImageUp className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg font-semibold text-navy">Drag & drop your photo here</p>
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="mt-2 text-sm font-semibold text-blue-600 underline-offset-4 hover:underline"
                >
                  or browse to upload
                </button>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {formats.map((format) => (
                    <span
                      key={format}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {format}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-slate-600">
                  <ShieldCheck className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  Your photo is processed locally and never uploaded.
                </div>
              </div>
            ) : (
              <div className="mt-5">
                {previewUrl ? (
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element -- Object URLs from local files are not handled by next/image. */}
                    <img
                      src={previewUrl}
                      alt={`Preview of ${selectedFile.name}`}
                      className="h-72 w-full object-contain"
                    />
                  </div>
                ) : null}

                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-start gap-3 border-b border-slate-200 px-4 py-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <FileImage className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-navy">{selectedFile.name}</p>
                      <p className="mt-1 text-xs text-slate-500">Selected image</p>
                    </div>
                  </div>
                  <div className="divide-y divide-slate-200">
                    <div className="flex justify-between gap-4 px-4 py-3 text-sm">
                      <span className="text-slate-600">File type</span>
                      <span className="font-semibold text-navy">{selectedFile.type}</span>
                    </div>
                    <div className="flex justify-between gap-4 px-4 py-3 text-sm">
                      <span className="text-slate-600">Original file size</span>
                      <span className="font-semibold text-navy">{formatFileSize(selectedFile.size)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  >
                    Choose another photo
                  </button>
                  <button
                    type="button"
                    onClick={resetUpload}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-navy transition hover:border-blue-300 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div>
              <p className="text-sm font-bold text-blue-600">2. Download clean image</p>
              <h3 className="mt-1 text-lg font-semibold text-navy">Privacy-focused cleaning</h3>
            </div>

            {!selectedFile ? (
              <div className="mt-5 flex min-h-80 flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-6 py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm ring-1 ring-blue-100">
                  <ShieldCheck className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg font-semibold text-navy">
                  Upload a photo to generate a clean version.
                </p>
                <p className="mt-2 text-sm text-slate-600">The download button will appear here.</p>
              </div>
            ) : null}

            {selectedFile && status === "cleaning" ? (
              <div className="mt-5 flex min-h-80 flex-col items-center justify-center rounded-xl border border-blue-100 bg-blue-50 px-6 py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm ring-1 ring-blue-100">
                  <Loader2 className="h-8 w-8 animate-spin" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg font-semibold text-navy">Cleaning image in your browser...</p>
                <p className="mt-2 text-sm text-slate-600">Browser re-export is creating a clean file.</p>
              </div>
            ) : null}

            {selectedFile && status === "file selected" ? (
              <div className="mt-5 flex min-h-80 flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-6 py-10 text-center">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-navy">Preparing local cleaning...</p>
              </div>
            ) : null}

            {selectedFile && status === "error" ? (
              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-5">
                <p className="text-sm font-semibold text-amber-900">Cleaning could not continue</p>
                <p className="mt-2 text-sm leading-6 text-amber-800">
                  {error || "Something went wrong while cleaning this image."}
                </p>
                <button
                  type="button"
                  onClick={resetUpload}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-navy shadow-sm ring-1 ring-amber-100 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Reset
                </button>
              </div>
            ) : null}

            {hasCleanedResult ? (
              <div className="mt-5">
                <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-emerald-900">
                        Common metadata markers removed successfully
                      </p>
                      <p className="mt-1 text-sm leading-6 text-emerald-800">
                        Your image looks the same, but common hidden metadata has been removed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-slate-200">
                  <div className="divide-y divide-slate-200">
                    <div className="flex justify-between gap-4 px-4 py-3 text-sm">
                      <span className="text-slate-600">Original file size</span>
                      <span className="font-semibold text-navy">{formatFileSize(selectedFile.size)}</span>
                    </div>
                    <div className="flex justify-between gap-4 px-4 py-3 text-sm">
                      <span className="text-slate-600">Cleaned file size</span>
                      <span className="font-semibold text-navy">{formatFileSize(cleanedSize)}</span>
                    </div>
                    <div className="flex justify-between gap-4 px-4 py-3 text-sm">
                      <span className="text-slate-600">File size difference</span>
                      <span className="text-right font-semibold text-navy">
                        {formatSizeDifference(selectedFile.size, cleanedSize)}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 rounded-lg bg-blue-50 px-4 py-3 text-sm font-medium text-slate-700">
                  Pixel dimensions are preserved.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  {canDownload ? (
                    <a
                      href={cleanedUrl}
                      download={cleanedFileName}
                      className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    >
                      Download cleaned image
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={resetUpload}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-navy transition hover:border-blue-300 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    Clean another photo
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {selectedFile ? (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-navy">Metadata report</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  This lightweight browser check looks for common metadata markers. It is not a
                  forensic metadata audit.
                </p>
              </div>
              {isReportLoading ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                  Scanning locally
                </span>
              ) : null}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-slate-500">File name</p>
                <p className="mt-1 truncate text-sm font-semibold text-navy">
                  {metadataReport?.fileName ?? selectedFile.name}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-slate-500">File type</p>
                <p className="mt-1 text-sm font-semibold text-navy">
                  {metadataReport?.fileType ?? selectedFile.type}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase text-slate-500">Original file size</p>
                <p className="mt-1 text-sm font-semibold text-navy">
                  {formatFileSize(metadataReport?.fileSize ?? selectedFile.size)}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-slate-200">
              <div className="border-b border-slate-200 px-4 py-3">
                <p className="text-sm font-semibold text-navy">Detected markers</p>
              </div>
              <div className="divide-y divide-slate-200">
                {metadataReport ? (
                  markerRows.map(([label, isDetected]) => (
                    <div key={label} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                      <span className="text-slate-600">{label}</span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          isDetected
                            ? "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
                            : "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                        }`}
                      >
                        {isDetected ? "Detected" : "Not detected"}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-slate-600">
                    {reportError || "Scanning common metadata markers locally..."}
                  </div>
                )}
              </div>
            </div>

            {metadataReport?.notes.length ? (
              <div className="mt-4 space-y-2">
                {metadataReport.notes.map((note) => (
                  <p key={note} className="rounded-lg bg-blue-50 px-4 py-3 text-sm leading-6 text-slate-700">
                    {note}
                  </p>
                ))}
              </div>
            ) : null}

            {reportError ? (
              <p className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800">
                {reportError}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
