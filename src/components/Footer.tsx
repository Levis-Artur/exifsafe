const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Clean photo", href: "/#upload" },
      { label: "How it works", href: "/#how" },
      { label: "Verify privacy", href: "/#verify" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Remove photo metadata", href: "/" },
      { label: "Compress image", href: "/compress-image" },
      { label: "Remove EXIF data", href: "/remove-exif-data" },
      { label: "Remove GPS from photo", href: "/remove-gps-from-photo" },
      { label: "Remove photo location", href: "/remove-photo-location" },
      { label: "Remove JPG metadata", href: "/remove-jpg-metadata" },
      { label: "Remove PNG metadata", href: "/remove-png-metadata" },
      { label: "Remove WEBP metadata", href: "/remove-webp-metadata" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Photo privacy guides", href: "/guides" },
      { label: "Safe photo uploads guide", href: "/guides/is-it-safe-to-upload-photos-to-online-tools" },
      { label: "What is EXIF data?", href: "/what-is-exif-data" },
      { label: "Safe photo sharing", href: "/guides/how-to-share-photos-safely-online" },
      { label: "Compress without uploading", href: "/guides/how-to-compress-images-without-uploading" },
      { label: "iPhone photo location guide", href: "/how-to-remove-location-from-iphone-photo" },
      { label: "Android photo location guide", href: "/how-to-remove-location-from-android-photo" },
    ],
  },
  {
    title: "Company / Trust",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "GitHub", href: "https://github.com/Levis-Artur/exifsafe", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.9fr]">
          <div>
          <p className="text-lg font-semibold text-navy">ExifSafe</p>
          <p className="mt-2 max-w-md text-sm text-slate-600">
            Free photo metadata remover. Built for local, browser-based processing with no
            upload, analytics, telemetry, cookies or account.
          </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <nav key={group.title}>
                <h2 className="text-xs font-semibold uppercase text-navy">{group.title}</h2>
                <div className="mt-3 grid gap-2">
                  {group.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-slate-600 transition hover:text-blue-600"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ExifSafe. Free privacy-first photo metadata remover.</p>
          <p>No analytics · No telemetry · No cookies</p>
        </div>
      </div>
    </footer>
  );
}
