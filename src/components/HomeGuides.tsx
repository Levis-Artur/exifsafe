import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const guides = [
  {
    title: "Is it safe to upload photos to online tools?",
    description:
      "Understand the privacy trade-offs of upload-based tools and when local browser processing is a better choice.",
    href: "/guides/is-it-safe-to-upload-photos-to-online-tools",
  },
  {
    title: "What metadata can reveal about you",
    description:
      "Learn how EXIF, GPS, timestamps and camera details can expose more information than expected.",
    href: "/guides/what-metadata-can-reveal-about-you",
  },
  {
    title: "How to share photos safely online",
    description: "Simple steps to reduce privacy risks before posting or sending images.",
    href: "/guides/how-to-share-photos-safely-online",
  },
];

export function HomeGuides() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-blue-600">Guides</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-navy sm:text-4xl">
              Photo privacy guides
            </h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              Learn how photo metadata works, what it can reveal, and how to share images more
              safely.
            </p>
          </div>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            View all guides
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold leading-snug text-navy">{guide.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{guide.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                Read guide
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
