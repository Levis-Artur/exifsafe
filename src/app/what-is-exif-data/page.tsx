import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "What Is EXIF Data?",
  description: "Learn what EXIF data is and remove common photo metadata locally in your browser with ExifSafe.",
};

export default function WhatIsExifDataPage() {
  return (
    <SeoArticlePage
      h1="What is EXIF data?"
      intro="EXIF is photo metadata that can describe how, when and sometimes where a picture was taken."
      sections={[
        {
          title: "Simple EXIF examples",
          paragraphs: [
            "EXIF data can include camera model, date, time, lens details, exposure settings and GPS location if location capture was enabled.",
            "Most people never see this data when looking at an image, but it can remain embedded inside the file.",
          ],
        },
        {
          title: "Why remove EXIF before sharing",
          paragraphs: [
            "Removing common EXIF metadata can reduce accidental sharing of device details, timestamps or location information.",
            "ExifSafe is a free browser-based tool that cleans common metadata locally without upload, tracking or accounts.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Is EXIF always bad?",
          answer: "No. EXIF can be useful for photography workflows. Removing it is often helpful before public sharing.",
        },
        {
          question: "Can ExifSafe remove common EXIF metadata?",
          answer: "Yes. ExifSafe uses browser re-export to remove common metadata markers from supported image files.",
        },
      ]}
    />
  );
}
