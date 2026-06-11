import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ExifSafe - Free Photo Metadata Remover",
    template: "%s | ExifSafe",
  },
  description: "Remove common EXIF, GPS and camera metadata locally. Free, no upload, no analytics, no telemetry and no account.",
  openGraph: {
    title: "ExifSafe - Free Photo Metadata Remover",
    description: "Remove common EXIF, GPS and camera metadata locally. Free, no upload, no analytics, no telemetry and no account.",
    type: "website",
    siteName: "ExifSafe",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
