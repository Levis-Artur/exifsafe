import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "Remove JPG Metadata Online for Free",
  description: "Remove common metadata from JPG images locally in your browser. Free, private, no upload, no tracking and no account required.",
};

export default function RemoveJpgMetadataPage() {
  return (
    <SeoArticlePage
      breadcrumb={{ name: "Remove JPG Metadata", path: "/remove-jpg-metadata" }}
      h1="Remove metadata from JPG images"
      intro="JPG files commonly contain EXIF metadata. ExifSafe creates a cleaned JPG copy locally in your browser with no upload or account."
      sections={[
        {
          title: "Why JPG files often contain metadata",
          paragraphs: [
            "JPG images commonly store EXIF metadata from cameras and phones. This can include camera model, date and time, lens details, exposure settings and sometimes GPS location.",
            "That information can be useful for editing or organizing photos, but it is often unnecessary when sharing images online.",
          ],
        },
        {
          title: "What metadata can be found in JPG files?",
          paragraphs: [
            "The exact metadata depends on the device, app and editing workflow that created the JPG file.",
          ],
          bullets: [
            "EXIF data",
            "GPS location if enabled",
            "Camera or phone model",
            "Date and time",
            "Lens and exposure settings",
            "Color profile information",
            "Editing software information",
          ],
        },
        {
          title: "How ExifSafe cleans JPG files",
          paragraphs: [
            "ExifSafe loads the JPG locally in the browser, renders the visible image to a canvas, and exports a new JPG copy.",
            "This browser re-export removes common embedded metadata while keeping the visible image. Your file is not uploaded to a server.",
          ],
        },
        {
          title: "Will JPG quality change?",
          paragraphs: [
            "JPG is a lossy format. ExifSafe exports JPG files with high quality settings, so the visual result should look the same in most cases, but file size may change.",
          ],
        },
        {
          title: "When to clean JPG metadata",
          paragraphs: [
            "Cleaning common JPG metadata can be useful before sharing images in public or semi-public places.",
          ],
          bullets: [
            "Before sharing photos online",
            "Before sending images to clients",
            "Before uploading marketplace photos",
            "Before posting travel photos",
            "Before publishing images in articles or reports",
          ],
        },
      ]}
      faqs={[
        {
          question: "Does ExifSafe upload JPG files?",
          answer: "No. JPG files are processed locally in your browser.",
        },
        {
          question: "Can JPG files contain GPS location?",
          answer: "Yes, if the camera or phone saved location data when the photo was taken.",
        },
        {
          question: "Why did the cleaned JPG file size change?",
          answer: "The browser creates a new JPG file during re-export. This can change file size even when the image looks the same.",
        },
        {
          question: "Is the original JPG modified?",
          answer: "No. ExifSafe creates a new cleaned copy for download.",
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
