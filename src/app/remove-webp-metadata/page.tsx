import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "Remove Metadata from WEBP Images",
  description: "Remove common WEBP EXIF or XMP metadata locally in your browser. Free, private and no upload.",
};

export default function RemoveWebpMetadataPage() {
  return (
    <SeoArticlePage
      h1="Remove metadata from WEBP images"
      intro="WEBP files may contain EXIF or XMP metadata. ExifSafe creates a cleaned WEBP version locally."
      sections={[
        {
          title: "WEBP metadata",
          paragraphs: [
            "WEBP images may include EXIF or XMP metadata depending on the tool or camera workflow that created them.",
            "ExifSafe uses browser-based cleaning to create a new WEBP file from pixel data where supported by the browser.",
          ],
        },
        {
          title: "Browser support",
          paragraphs: [
            "Modern browsers generally support WEBP display and export, but exact behavior can vary by browser.",
            "ExifSafe keeps the process local and free, with no account or upload required.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Does ExifSafe support WEBP?",
          answer: "Yes. The current version accepts WEBP files and exports cleaned WEBP where browser support is available.",
        },
        {
          question: "Is this a forensic WEBP parser?",
          answer: "No. It is a lightweight browser-based privacy tool for common metadata removal.",
        },
      ]}
    />
  );
}
