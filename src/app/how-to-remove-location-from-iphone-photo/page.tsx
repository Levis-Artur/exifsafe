import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "How to Remove Location from iPhone Photos",
  description: "Clean common iPhone photo location metadata locally in your browser. Free, private and no upload.",
};

export default function IPhoneLocationGuidePage() {
  return (
    <SeoArticlePage
      h1="How to remove location from iPhone photos"
      intro="iPhone photos may include location metadata if location access is enabled for Camera. ExifSafe can clean a copy locally."
      sections={[
        {
          title: "Location metadata on iPhone photos",
          paragraphs: [
            "When location access is enabled for Camera, photos may include location metadata alongside date and camera details.",
            "Settings and interface details can change over time, so a simple approach is to clean a copy before sharing.",
          ],
        },
        {
          title: "Use ExifSafe to clean a copy",
          paragraphs: [
            "Upload the photo in ExifSafe, let the browser re-export it locally, then download the cleaned copy.",
            "No server upload, no account, no cookies, no analytics and no tracking are used.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Does ExifSafe change my original iPhone photo?",
          answer: "No. It creates a cleaned downloadable copy in the browser.",
        },
        {
          question: "Does the image leave my device?",
          answer: "No. Processing happens locally in your browser.",
        },
      ]}
    />
  );
}
