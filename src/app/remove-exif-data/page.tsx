import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "Remove EXIF Data from Photos Online for Free",
  description: "Remove common EXIF, GPS and camera metadata locally in your browser. Free, private, no upload and no account required.",
};

export default function RemoveExifDataPage() {
  return (
    <SeoArticlePage
      h1="Remove EXIF data from photos online for free"
      intro="ExifSafe is a free browser-based tool for privacy-focused cleaning before you share photos."
      sections={[
        {
          title: "What EXIF data can include",
          paragraphs: [
            "EXIF data can include camera model, capture timestamps, lens settings and sometimes location data if GPS was enabled.",
            "That information is useful while organizing photos, but it may be unnecessary when posting or sending images online.",
          ],
        },
        {
          title: "How ExifSafe cleans photos",
          paragraphs: [
            "ExifSafe removes common EXIF metadata by re-exporting the image locally in your browser from pixel data.",
            "Your photo is not uploaded to a server. There is no account, no tracking and no cookies.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Is ExifSafe free?",
          answer: "Yes. ExifSafe is completely free and does not include paid plans, accounts or gated features.",
        },
        {
          question: "Does this guarantee every metadata field is gone?",
          answer: "No. ExifSafe removes common metadata through browser-based cleaning, but it is not a forensic metadata audit.",
        },
      ]}
    />
  );
}
