import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "Remove PNG Metadata Online for Free",
  description: "Remove common metadata from PNG images locally in your browser. Free, private, no upload, no tracking and no account required.",
};

export default function RemovePngMetadataPage() {
  return (
    <SeoArticlePage
      breadcrumb={{ name: "Remove PNG Metadata", path: "/remove-png-metadata" }}
      h1="Remove metadata from PNG images"
      intro="PNG files can contain text chunks, color profiles and other embedded data. ExifSafe creates a cleaned browser-exported PNG locally."
      sections={[
        {
          title: "Can PNG files contain metadata?",
          paragraphs: [
            "PNG files can contain metadata such as text chunks, color profile information, software information and other embedded data.",
            "PNG does not use EXIF in the same common way as JPG, but it can still contain hidden metadata.",
          ],
        },
        {
          title: "What metadata can be found in PNG files?",
          paragraphs: [
            "The metadata inside a PNG depends on the software, editor or export workflow that created the file.",
          ],
          bullets: [
            "Text chunks",
            "Color profile information",
            "Software or editor information",
            "Creation or modification details",
            "Embedded descriptions or comments",
          ],
        },
        {
          title: "How ExifSafe cleans PNG files",
          paragraphs: [
            "ExifSafe processes the PNG locally in the browser and creates a new PNG copy from the visible pixel data.",
            "This helps remove common embedded metadata while keeping the visible image content. No upload, account, analytics, telemetry or cookies are required.",
          ],
        },
        {
          title: "Will PNG quality change?",
          paragraphs: [
            "PNG is generally lossless. Browser-exported PNG files should preserve visible image quality, although file size may change depending on how the browser encodes the image.",
          ],
        },
        {
          title: "When to clean PNG metadata",
          paragraphs: [
            "Cleaning common PNG metadata can be useful before sharing screenshots, graphics or exported design files.",
          ],
          bullets: [
            "Before sharing screenshots",
            "Before uploading graphics",
            "Before sending design previews",
            "Before publishing images online",
            "Before sharing images from editing tools",
          ],
        },
      ]}
      faqs={[
        {
          question: "Does PNG always contain metadata?",
          answer: "No. Some PNG files contain little or no metadata, while others may include text chunks or color profile information.",
        },
        {
          question: "Does ExifSafe upload PNG files?",
          answer: "No. PNG files are processed locally in your browser.",
        },
        {
          question: "Why did my cleaned PNG file size change?",
          answer: "The browser creates a new PNG file during export, and the encoding may differ from the original file.",
        },
        {
          question: "Is ExifSafe a forensic PNG metadata tool?",
          answer: "No. ExifSafe is a lightweight browser-based privacy tool, not a forensic metadata audit.",
        },
      ]}
      relatedLinks={[
        { label: "Remove EXIF data", href: "/remove-exif-data" },
        { label: "Remove GPS from photo", href: "/remove-gps-from-photo" },
        { label: "Remove photo location", href: "/remove-photo-location" },
        { label: "What is EXIF data?", href: "/what-is-exif-data" },
        { label: "Privacy policy", href: "/privacy" },
      ]}
    />
  );
}
