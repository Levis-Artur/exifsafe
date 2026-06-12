import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://exifsafe.com";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/compress-image", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.7, changeFrequency: "monthly" },
  { path: "/remove-exif-data", priority: 0.7, changeFrequency: "monthly" },
  { path: "/remove-gps-from-photo", priority: 0.7, changeFrequency: "monthly" },
  { path: "/remove-photo-location", priority: 0.7, changeFrequency: "monthly" },
  { path: "/remove-jpg-metadata", priority: 0.7, changeFrequency: "monthly" },
  { path: "/remove-png-metadata", priority: 0.7, changeFrequency: "monthly" },
  { path: "/remove-webp-metadata", priority: 0.7, changeFrequency: "monthly" },
  { path: "/what-is-exif-data", priority: 0.7, changeFrequency: "monthly" },
  { path: "/how-to-remove-location-from-iphone-photo", priority: 0.7, changeFrequency: "monthly" },
  { path: "/how-to-remove-location-from-android-photo", priority: 0.7, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
