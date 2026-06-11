import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "Remove Hidden Location Data from Photos",
  description: "Remove common hidden location metadata from photos locally in your browser. Free, private and no account required.",
};

export default function RemovePhotoLocationPage() {
  return (
    <SeoArticlePage
      h1="Remove hidden location data from photos"
      intro="Location metadata can sometimes reveal where a photo was taken. ExifSafe helps clean common location-related metadata locally."
      sections={[
        {
          title: "Hidden location data in photos",
          paragraphs: [
            "Depending on camera settings, a photo may include location-related metadata alongside camera and timestamp information.",
            "Before sharing images publicly, it can be useful to create a clean copy without common hidden markers.",
          ],
        },
        {
          title: "Clean a photo without uploading",
          paragraphs: [
            "ExifSafe uses browser-based cleaning to re-export your image locally. Your photo stays on your device.",
            "The tool is free, requires no account, and does not use tracking cookies or analytics.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Does ExifSafe store my photo?",
          answer: "No. Photos are processed locally in your browser and are not uploaded to ExifSafe servers.",
        },
        {
          question: "Is this a forensic metadata audit?",
          answer: "No. ExifSafe is a lightweight privacy-focused tool for removing common metadata.",
        },
      ]}
    />
  );
}
