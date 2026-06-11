import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "How to Remove Location from Android Photos",
  description: "Clean common Android photo location metadata locally in your browser. Free, private and no account required.",
};

export default function AndroidLocationGuidePage() {
  return (
    <SeoArticlePage
      h1="How to remove location from Android photos"
      intro="Android photos may include location metadata depending on camera settings and manufacturer defaults."
      sections={[
        {
          title: "Location metadata varies on Android",
          paragraphs: [
            "Android camera settings vary across manufacturers, but photos may include location metadata if location tagging is enabled.",
            "Before sharing, you can create a cleaned copy that removes common location-related metadata.",
          ],
        },
        {
          title: "Clean locally with ExifSafe",
          paragraphs: [
            "ExifSafe can clean common location metadata locally in your browser for JPG, PNG and WEBP images.",
            "The tool is free and does not require uploads, accounts, tracking cookies or analytics.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Will this work for every Android phone?",
          answer: "ExifSafe works with supported image files in the browser. Camera metadata can vary by manufacturer and app.",
        },
        {
          question: "Is ExifSafe free?",
          answer: "Yes. ExifSafe is completely free and does not include paid features.",
        },
      ]}
    />
  );
}
