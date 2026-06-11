import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SeoCTA() {
  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
      <h2 className="text-2xl font-bold tracking-normal text-navy">Clean a photo now</h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">
        Remove common photo metadata locally in your browser. Free, private and no account
        required.
      </p>
      <Link
        href="/#upload"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        Upload photo
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  );
}
