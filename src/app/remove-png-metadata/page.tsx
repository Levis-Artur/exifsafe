import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "Remove Metadata from PNG Images",
  description: "Create a cleaned PNG locally in your browser. Free, private, no upload and no account required.",
};

export default function RemovePngMetadataPage() {
  return (
    <SeoArticlePage
      h1="Remove metadata from PNG images"
      intro="PNG files can contain text chunks, color profiles and other metadata. ExifSafe creates a cleaned browser-exported PNG."
      sections={[
        {
          title: "What PNG metadata can contain",
          paragraphs: [
            "PNG files can include textual chunks, color profile data and other embedded information depending on how they were created.",
            "For web sharing, you may prefer a browser-exported copy with common metadata removed.",
          ],
        },
        {
          title: "Local PNG output",
          paragraphs: [
            "ExifSafe handles PNG output locally in the browser. Your file is not sent to a server for processing.",
            "The tool is free and does not require accounts, cookies, analytics or tracking.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Are PNG files uploaded?",
          answer: "No. PNG processing happens locally in your browser.",
        },
        {
          question: "Can PNG file size change?",
          answer: "Yes. Browser-exported PNG files may be smaller or larger depending on the source file and browser encoder.",
        },
      ]}
    />
  );
}
