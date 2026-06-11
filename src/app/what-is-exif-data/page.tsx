import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "What Is EXIF Data?",
  description: "Learn what EXIF data is, what it can contain, and how to remove common metadata locally with ExifSafe.",
};

export default function WhatIsExifDataPage() {
  return (
    <SeoArticlePage
      h1="What is EXIF data?"
      intro="EXIF is hidden technical information saved in many image files. It can describe how, when and sometimes where a picture was taken."
      sections={[
        {
          title: "EXIF data explained simply",
          paragraphs: [
            "EXIF data is hidden technical information saved in many image files. Most people do not see it when looking at a photo, but it can remain embedded inside the file.",
            "It is commonly created by cameras, phones and editing software.",
          ],
        },
        {
          title: "Examples of EXIF information",
          paragraphs: [
            "The exact fields depend on the device, app and file format, but common EXIF-style information can include:",
          ],
          bullets: [
            "Camera or phone model",
            "Date and time",
            "GPS location if enabled",
            "Lens details",
            "Exposure settings",
            "Image orientation",
            "Software used to edit the image",
          ],
        },
        {
          title: "Why EXIF data exists",
          paragraphs: [
            "EXIF is useful for photography, organization and editing. It helps cameras, apps and photo software understand how the image was captured.",
            "For example, editing tools may use EXIF details for sorting, rotation, lens correction or camera settings.",
          ],
        },
        {
          title: "Why people remove EXIF data",
          paragraphs: [
            "People may remove EXIF before sharing images publicly to reduce accidental information sharing.",
            "This is especially useful when photos may include timestamps, device details or location-related metadata.",
          ],
        },
        {
          title: "How to check and clean EXIF data",
          paragraphs: [
            "You can upload a photo to ExifSafe, view a lightweight metadata marker report, and download a cleaned copy.",
            "The photo is not uploaded to a server. ExifSafe works locally in your browser using browser re-export.",
          ],
        },
        {
          title: "Limitations",
          paragraphs: [
            "ExifSafe removes common metadata by browser re-export. It is not a professional forensic tool.",
            "Some unusual, proprietary or format-specific metadata may require advanced tools.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Is EXIF data visible in the photo?",
          answer: "No. EXIF is hidden inside the file and is not normally visible when looking at the image.",
        },
        {
          question: "Is EXIF always bad?",
          answer: "No. EXIF can be useful for photographers and editing workflows. Removing it is useful when privacy matters.",
        },
        {
          question: "Can EXIF reveal location?",
          answer: "Sometimes, if GPS location tagging was enabled.",
        },
        {
          question: "Can I remove EXIF for free?",
          answer: "Yes. ExifSafe is free and works locally in the browser.",
        },
      ]}
      relatedLinks={[
        { label: "Remove EXIF data", href: "/remove-exif-data" },
        { label: "Remove GPS from photo", href: "/remove-gps-from-photo" },
        { label: "Remove photo location", href: "/remove-photo-location" },
        { label: "Privacy policy", href: "/privacy" },
      ]}
    />
  );
}
