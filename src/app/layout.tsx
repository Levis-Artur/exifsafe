import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteDescription =
  "Remove common EXIF, GPS and camera metadata from photos locally in your browser. Free, private, no upload, no tracking, no account.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://exifsafe.com"),
  title: {
    default: "ExifSafe - Free Photo Metadata Remover",
    template: "%s | ExifSafe",
  },
  description: siteDescription,
  icons: {
    icon: "/exifsafe-icon.svg",
    apple: "/exifsafe-icon.svg",
  },
  openGraph: {
    title: "ExifSafe - Free Photo Metadata Remover",
    description: siteDescription,
    url: "https://exifsafe.com",
    type: "website",
    siteName: "ExifSafe",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ExifSafe - Free Photo Metadata Remover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExifSafe - Free Photo Metadata Remover",
    description: siteDescription,
    images: ["/og-image.svg"],
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
