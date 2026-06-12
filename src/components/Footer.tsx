const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Clean photo", href: "/#upload" },
      { label: "How it works", href: "/#how" },
      { label: "Verify privacy", href: "/#verify" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Tools",
    links: [
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
      { label: "What is EXIF data?", href: "/what-is-exif-data" },
      { label: "iPhone photo location guide", href: "/how-to-remove-location-from-iphone-photo" },
      { label: "Android photo location guide", href: "/how-to-remove-location-from-android-photo" },
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
          <a
            href="https://github.com/Levis-Artur/exifsafe"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            GitHub
          </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <nav key={group.title}>
                <h2 className="text-xs font-semibold uppercase text-navy">{group.title}</h2>
                <div className="mt-3 grid gap-2">
                  {group.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
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
