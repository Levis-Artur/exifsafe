"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";

function UploadSectionPlaceholder() {
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

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto h-14 w-14 rounded-2xl border border-blue-100 bg-blue-50" />
          <p className="mt-5 text-base font-semibold text-navy">
            Loading local metadata remover...
          </p>
          <p className="mt-2 text-sm text-slate-600">
            The upload tool runs in your browser and never uploads your photo.
          </p>
        </div>
      </div>
    </section>
  );
}

const UploadSection = dynamic(
  () => import("@/components/UploadSectionClient").then((module) => module.UploadSectionClient),
  {
    ssr: false,
  },
);

export function LazyUploadSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleReady = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {!isLoaded ? <UploadSectionPlaceholder /> : null}
      <UploadSection onReady={handleReady} />
    </>
  );
}
