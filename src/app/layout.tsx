import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://exifsafe.com"),
  title: {
    default: "ExifSafe - Free Photo Metadata Remover",
    template: "%s | ExifSafe",
  },
  description: "Remove common EXIF, GPS, camera and hidden photo metadata locally in your browser. Free, private, no upload, no tracking and no account.",
  openGraph: {
    title: "ExifSafe - Free Photo Metadata Remover",
    description: "Remove common EXIF, GPS, camera and hidden photo metadata locally in your browser. Free, private, no upload, no tracking and no account.",
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
