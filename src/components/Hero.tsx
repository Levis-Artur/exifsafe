import Link from "next/link";
import { ArrowRight, LockKeyhole, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:44px_44px] opacity-45" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#eff6ff,transparent_45%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-18">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
            <LockKeyhole className="h-4 w-4" aria-hidden="true" />
            Completely free — no upload, no tracking, no account
          </div>

          <h1 className="mt-7 max-w-[680px] text-4xl font-bold leading-tight tracking-normal text-navy sm:text-5xl md:text-6xl">
            Remove photo metadata locally
            <span className="mt-3 block text-blue-600">No upload. No tracking. No account.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            ExifSafe is a completely free privacy-first tool that removes common EXIF, GPS
            location, camera info and timestamps directly in your browser.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#upload"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Clean a photo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#verify"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy shadow-sm transition hover:border-blue-300 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              Verify privacy
            </Link>
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-600">
            Free forever · No sign-up required
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase text-blue-600">Example metadata preview</p>
                <p className="text-sm font-semibold text-navy">photo.jpg</p>
                <p className="text-xs text-slate-500">Illustrative local cleaning result</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Local only
              </span>
            </div>
            <div className="space-y-3 py-5">
              {["GPS location", "Camera model", "Capture timestamp", "Lens data"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-lg bg-white p-3">
                  <span className="text-sm text-slate-600">{item}</span>
                  <span className="text-sm font-semibold text-blue-600">Removed</span>
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-navy p-4 text-white">
              <p className="text-sm font-semibold">Ready to download</p>
              <p className="mt-1 text-sm text-slate-300">
                Clean image generated in browser memory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
