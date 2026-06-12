import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";

export function MoreTools() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold text-blue-600">More tools</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-navy sm:text-4xl">
            More privacy-first image tools
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            ExifSafe also includes simple browser-based tools that help you prepare images for
            sharing without uploading private files.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            href="/compress-image"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <ImageIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                New
              </span>
            </div>
            <h3 className="mt-5 text-xl font-bold text-navy">Compress image locally</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Reduce JPG, PNG and WEBP file size in your browser. No upload, no tracking and no
              account.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
              Compress an image
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
