"use client";

import { useEffect } from "react";
import { UploadSection } from "@/components/UploadSection";

export function UploadSectionClient({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    onReady();
  }, [onReady]);

  return <UploadSection />;
}
