import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "Remove GPS Location from Photos Before Sharing",
  description: "Clean common GPS and location metadata from photos locally in your browser. Free, private and no upload.",
};

export default function RemoveGpsFromPhotoPage() {
  return (
    <SeoArticlePage
      h1="Remove GPS location from photos before sharing"
      intro="Some photos may contain GPS coordinates. ExifSafe helps clean common location metadata locally before you share."
      sections={[
        {
          title: "Why GPS metadata matters",
          paragraphs: [
            "Some camera apps can store GPS coordinates in image metadata. If shared unchanged, that data may reveal where a photo was taken.",
            "Removing GPS metadata helps reduce accidental location exposure when sharing photos online.",
          ],
        },
        {
          title: "Local GPS metadata cleaning",
          paragraphs: [
            "ExifSafe processes JPG, PNG and WEBP files in your browser and creates a cleaned copy from pixel data.",
            "No upload, no account, no analytics and no tracking are required.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Which formats are supported?",
          answer: "The current version supports JPG, PNG and WEBP images.",
        },
        {
          question: "Can I verify that the image was not uploaded?",
          answer: "Yes. Open DevTools, check the Network tab, then clean a photo. You should not see the image file being uploaded.",
        },
      ]}
    />
  );
}
