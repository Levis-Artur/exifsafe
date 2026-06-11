import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "Remove Hidden Location Data from Photos",
  description: "Remove common hidden location metadata from photos locally in your browser. Free, private, no upload, no tracking and no account.",
};

export default function RemovePhotoLocationPage() {
  return (
    <SeoArticlePage
      breadcrumb={{ name: "Remove Hidden Location Data from Photos", path: "/remove-photo-location" }}
      h1="Remove hidden location data from photos"
      intro="Location metadata can sometimes reveal where a photo was taken. ExifSafe helps clean common location-related metadata locally in your browser."
      sections={[
        {
          title: "What is hidden photo location data?",
          paragraphs: [
            "Some image files can contain GPS coordinates or location-related metadata that is not visible when simply looking at the photo.",
            "This hidden data may be stored alongside camera, timestamp and editing information.",
          ],
        },
        {
          title: "Why remove location data?",
          paragraphs: [
            "Removing common location metadata can be useful before sharing photos outside a private workflow.",
          ],
          bullets: [
            "Before posting photos online",
            "Before sending photos to people you do not know well",
            "Before publishing images in articles",
            "Before uploading product or marketplace photos",
            "Before sharing family or travel photos",
          ],
        },
        {
          title: "How ExifSafe removes common location metadata",
          paragraphs: [
            "ExifSafe loads the image locally, renders the visible image to browser canvas and exports a cleaned copy.",
            "This browser re-export removes common embedded metadata such as EXIF/GPS markers without uploading the photo.",
          ],
        },
        {
          title: "What stays the same?",
          paragraphs: [
            "ExifSafe creates a cleaned copy for download while keeping the normal visible photo workflow simple.",
          ],
          bullets: [
            "The visible photo content",
            "The image dimensions",
            "The original file on your device",
            "Your privacy-first workflow",
          ],
        },
        {
          title: "What may change?",
          paragraphs: [
            "Because the browser creates a new image file, some file characteristics may differ from the original.",
          ],
          bullets: [
            "File size may change",
            "JPG and WEBP may be re-encoded",
            "Some browser-specific output differences are possible",
          ],
        },
      ]}
      faqs={[
        {
          question: "Can a photo reveal where it was taken?",
          answer: "Sometimes. If GPS metadata is present, it may indicate where the photo was taken.",
        },
        {
          question: "Does ExifSafe show my GPS coordinates?",
          answer: "No. ExifSafe uses lightweight marker detection and does not display precise coordinates.",
        },
        {
          question: "Is my photo uploaded?",
          answer: "No. The photo stays on your device and is processed locally in your browser.",
        },
        {
          question: "What are the limitations for location metadata?",
          answer: "ExifSafe removes common location metadata through browser re-export, but it is not a forensic metadata audit.",
        },
      ]}
      relatedLinks={[
        { label: "Remove GPS from photo", href: "/remove-gps-from-photo" },
        { label: "Remove EXIF data", href: "/remove-exif-data" },
        { label: "What is EXIF data?", href: "/what-is-exif-data" },
        { label: "Remove JPG metadata", href: "/remove-jpg-metadata" },
        { label: "Privacy policy", href: "/privacy" },
      ]}
    />
  );
}
