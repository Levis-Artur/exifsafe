import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://exifsafe.com";

const routes = [
  "",
  "/privacy",
  "/remove-exif-data",
  "/remove-gps-from-photo",
  "/remove-photo-location",
  "/remove-jpg-metadata",
  "/remove-png-metadata",
  "/remove-webp-metadata",
  "/what-is-exif-data",
  "/how-to-remove-location-from-iphone-photo",
  "/how-to-remove-location-from-android-photo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
