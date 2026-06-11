import type { Metadata } from "next";
import { SeoArticlePage } from "@/components/SeoArticlePage";

export const metadata: Metadata = {
  title: "Remove GPS Location from Photos Before Sharing",
  description: "Remove common GPS location metadata locally in your browser before sharing photos. Free, private and no upload.",
};

export default function RemoveGpsFromPhotoPage() {
  return (
    <SeoArticlePage
      breadcrumb={{ name: "Remove GPS Location from Photos", path: "/remove-gps-from-photo" }}
      h1="Remove GPS location from photos before sharing"
      intro="Some photos may contain GPS coordinates. ExifSafe helps clean common location metadata locally before you share."
      sections={[
        {
          title: "Can photos contain GPS location?",
          paragraphs: [
            "Some cameras and phones can save GPS coordinates in photo metadata when location tagging is enabled.",
            "This information is usually invisible when viewing the photo normally, but it may remain inside the image file.",
          ],
        },
        {
          title: "Why GPS metadata can be sensitive",
          paragraphs: [
            "Removing common GPS metadata can reduce accidental location exposure before posting, sending or publishing photos.",
          ],
          bullets: [
            "It may reveal where a photo was taken",
            "It can expose home, work or travel locations",
            "It may reveal patterns when many photos are shared",
            "It is often invisible when viewing the photo normally",
          ],
        },
        {
          title: "How ExifSafe helps",
          paragraphs: [
            "ExifSafe creates a cleaned copy of the photo locally in the browser. The original photo stays on your device, and the cleaned version is created from image pixel data.",
            "No upload, no account, no analytics, no telemetry, no cookies and no tracking are required.",
          ],
        },
        {
          title: "When should you remove GPS data?",
          paragraphs: [
            "You may want to clean common GPS metadata before sharing photos in situations where location privacy matters.",
          ],
          bullets: [
            "Before posting photos on social media",
            "Before sending images to strangers",
            "Before uploading product photos",
            "Before sharing family photos",
            "Before publishing images in articles or reports",
          ],
        },
      ]}
      faqs={[
        {
          question: "Does every photo contain GPS metadata?",
          answer: "No. GPS metadata depends on device settings and whether location tagging was enabled.",
        },
        {
          question: "Can ExifSafe show exact GPS coordinates?",
          answer: "ExifSafe uses a lightweight marker check and does not display or extract precise GPS coordinates.",
        },
        {
          question: "Does the cleaned photo keep the visible image?",
          answer: "Yes, the cleaned copy keeps the visible image while removing common hidden metadata.",
        },
        {
          question: "Is the original file changed?",
          answer: "No. ExifSafe creates a new cleaned copy for download.",
        },
      ]}
      relatedLinks={[
        { label: "Remove EXIF data", href: "/remove-exif-data" },
        { label: "Remove photo location", href: "/remove-photo-location" },
        { label: "Remove JPG metadata", href: "/remove-jpg-metadata" },
        { label: "Privacy policy", href: "/privacy" },
      ]}
    />
  );
}
