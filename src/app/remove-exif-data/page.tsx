import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "Remove EXIF Data from Photos Online for Free",
  description: "Remove common EXIF and GPS metadata locally in your browser. Free, private, no upload, no tracking and no account.",
};

export default function RemoveExifDataPage() {
  return (
    <SeoArticlePage
      h1="Remove EXIF data from photos online for free"
      intro="ExifSafe is a free, lightweight browser-based tool for privacy-focused cleaning before you share photos."
      sections={[
        {
          title: "What is EXIF data?",
          paragraphs: [
            "EXIF data is hidden information stored inside many image files. It can include camera model, date and time, exposure settings, lens information and sometimes GPS location if location tagging was enabled.",
            "This information can be useful for photography and organization, but it may be unnecessary when posting or sending images online.",
          ],
        },
        {
          title: "Why remove EXIF data before sharing photos?",
          paragraphs: [
            "Removing common EXIF/GPS metadata can help reduce accidental information sharing while keeping the visible image content.",
          ],
          bullets: [
            "Reduce accidental location exposure",
            "Remove camera and device details",
            "Share cleaner image files",
            "Keep only the visible image content",
            "Avoid sending unnecessary hidden information",
          ],
        },
        {
          title: "How ExifSafe removes EXIF data",
          paragraphs: [
            "ExifSafe processes the image locally in the browser. The image is loaded as pixels and re-exported as a new file.",
            "This browser re-export removes common embedded EXIF/GPS metadata without uploading the image to a server. There is no account, no tracking, no analytics, no telemetry and no cookies.",
          ],
        },
        {
          title: "What ExifSafe does not do",
          paragraphs: [
            "ExifSafe is not a forensic metadata audit. Some unusual, proprietary or format-specific metadata may require advanced tools.",
            "It is designed as a simple privacy-focused cleaner for common photo metadata before everyday sharing.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Does removing EXIF change the visible photo?",
          answer: "In most cases, the photo looks the same. JPEG and WEBP are exported with high quality settings, while PNG is handled locally by the browser.",
        },
        {
          question: "Does ExifSafe upload my photo?",
          answer: "No. The image is processed locally in your browser.",
        },
        {
          question: "Can EXIF include GPS location?",
          answer: "Yes, if location tagging was enabled when the photo was taken.",
        },
        {
          question: "Is ExifSafe free?",
          answer: "Yes. ExifSafe is free and does not require an account.",
        },
      ]}
      relatedLinks={[
        { label: "Remove GPS from photo", href: "/remove-gps-from-photo" },
        { label: "Remove photo location", href: "/remove-photo-location" },
        { label: "Remove JPG metadata", href: "/remove-jpg-metadata" },
        { label: "Privacy policy", href: "/privacy" },
      ]}
    />
  );
}
