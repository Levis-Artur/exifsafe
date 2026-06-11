import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "Remove Metadata from JPG Images",
  description: "Remove common JPG metadata locally in your browser. Free tool with no upload, no tracking and no account.",
};

export default function RemoveJpgMetadataPage() {
  return (
    <SeoArticlePage
      h1="Remove metadata from JPG images"
      intro="JPG files commonly contain EXIF metadata. ExifSafe creates a cleaned JPG copy locally in your browser."
      sections={[
        {
          title: "JPG metadata and EXIF",
          paragraphs: [
            "JPG files often include EXIF metadata such as camera model, timestamps, settings and sometimes GPS information.",
            "This can be helpful for editing workflows, but it is often not needed when sharing a finished image.",
          ],
        },
        {
          title: "High quality browser re-export",
          paragraphs: [
            "ExifSafe re-exports JPG images in the browser with high quality settings while removing common embedded metadata.",
            "The cleaned file size may change slightly because the browser creates a new image file.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Will the JPG look different?",
          answer: "ExifSafe uses high quality browser export settings. In most cases, visual quality stays the same.",
        },
        {
          question: "Is upload required?",
          answer: "No. JPG cleaning happens locally in your browser.",
        },
      ]}
    />
  );
}
