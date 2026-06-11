import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "Remove WEBP Metadata Online for Free",
  description: "Remove common metadata from WEBP images locally in your browser. Free, private, no upload, no tracking and no account required.",
};

export default function RemoveWebpMetadataPage() {
  return (
    <SeoArticlePage
      breadcrumb={{ name: "Remove WEBP Metadata", path: "/remove-webp-metadata" }}
      h1="Remove metadata from WEBP images"
      intro="WEBP files may contain EXIF or XMP metadata. ExifSafe creates a cleaned WEBP version locally in your browser."
      sections={[
        {
          title: "Can WEBP files contain metadata?",
          paragraphs: [
            "WEBP images can contain EXIF and XMP metadata depending on how they were created or exported.",
            "That metadata may come from cameras, editing tools, conversion tools or publishing workflows.",
          ],
        },
        {
          title: "What metadata can be found in WEBP files?",
          paragraphs: [
            "WEBP metadata varies by tool and browser support, but common marker types can include:",
          ],
          bullets: [
            "EXIF metadata",
            "XMP metadata",
            "Color profile information",
            "Software or editor information",
            "Creation details",
          ],
        },
        {
          title: "How ExifSafe cleans WEBP files",
          paragraphs: [
            "ExifSafe loads the WEBP image locally in the browser, renders the visible image to a canvas and exports a new WEBP copy.",
            "This browser re-export removes common embedded metadata without uploading the file.",
          ],
        },
        {
          title: "Will WEBP quality change?",
          paragraphs: [
            "WEBP can be lossy or lossless depending on encoding. ExifSafe exports WEBP with high quality settings, so the visible result should look the same in most cases, but file size may change.",
          ],
        },
        {
          title: "When to clean WEBP metadata",
          paragraphs: [
            "Cleaning common WEBP metadata can be useful before distributing optimized or compressed images.",
          ],
          bullets: [
            "Before uploading web images",
            "Before sharing compressed photos",
            "Before publishing website assets",
            "Before sending images from editing tools",
            "Before distributing optimized images",
          ],
        },
      ]}
      faqs={[
        {
          question: "Does ExifSafe upload WEBP files?",
          answer: "No. WEBP files are processed locally in your browser.",
        },
        {
          question: "Can WEBP contain EXIF metadata?",
          answer: "Yes. WEBP can include EXIF and XMP metadata depending on how the file was created.",
        },
        {
          question: "Why did my cleaned WEBP file size change?",
          answer: "The browser creates a new WEBP file during export. Encoding differences can change file size.",
        },
        {
          question: "Is WEBP supported in every browser?",
          answer: "Most modern browsers support WEBP, but behavior can vary by browser and version.",
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
