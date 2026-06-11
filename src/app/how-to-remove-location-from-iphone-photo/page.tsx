import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "How to Remove Location from iPhone Photos",
  description: "Learn how to remove common location metadata from iPhone photos locally in your browser. Free, private, no upload and no account required.",
};

export default function IPhoneLocationGuidePage() {
  return (
    <SeoArticlePage
      h1="How to remove location from iPhone photos"
      intro="iPhone photos may include location metadata if location access was enabled for the Camera app. ExifSafe can clean a copy locally in your browser."
      sections={[
        {
          title: "Can iPhone photos contain location data?",
          paragraphs: [
            "iPhone photos may include location metadata if location access was enabled for the Camera app.",
            "This metadata can sometimes indicate where the photo was taken, even though it is not visible when simply looking at the image.",
          ],
        },
        {
          title: "Why remove location before sharing?",
          paragraphs: [
            "Cleaning common location metadata can reduce accidental information sharing before you upload, send or publish a photo.",
          ],
          bullets: [
            "Reduce accidental location exposure",
            "Share photos without hidden GPS metadata",
            "Avoid revealing home, work or travel locations",
            "Keep only the visible image content",
            "Create a cleaner copy before uploading or sending",
          ],
        },
        {
          title: "How to clean an iPhone photo with ExifSafe",
          paragraphs: [
            "You do not need OS-specific steps to use ExifSafe. The tool creates a cleaned copy in your browser.",
          ],
          bullets: [
            "Open ExifSafe in your browser.",
            "Choose a JPG, PNG or WEBP photo.",
            "ExifSafe processes the image locally in your browser.",
            "Download the cleaned copy.",
            "Share the cleaned copy instead of the original.",
          ],
        },
        {
          title: "Does ExifSafe upload iPhone photos?",
          paragraphs: [
            "No. The photo is processed locally in the browser. ExifSafe does not upload, store, analyze or track your photo.",
            "There is no account, no analytics, no telemetry, no cookies and no event tracking.",
          ],
        },
        {
          title: "Important limitation",
          paragraphs: [
            "ExifSafe removes common metadata by browser re-export. It is not a forensic audit.",
            "Some unusual or app-specific metadata may require advanced tools.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Does every iPhone photo contain GPS data?",
          answer: "No. It depends on location settings and how the photo was created or edited.",
        },
        {
          question: "Is the original iPhone photo changed?",
          answer: "No. ExifSafe creates a new cleaned copy for download.",
        },
        {
          question: "Can I use ExifSafe on iPhone Safari?",
          answer: "ExifSafe is designed to work in modern browsers. Browser behavior can vary, so if one browser has trouble, try another modern browser.",
        },
        {
          question: "Is ExifSafe free?",
          answer: "Yes. ExifSafe is free and does not require an account.",
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
