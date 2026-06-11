import { Check, ServerOff } from "lucide-react";

const checklist = [
  "No server upload — ever",
  "No analytics, telemetry or usage tracking",
  "No cookies or advertising pixels",
  "No account required",
  "Easy to verify in the browser Network tab",
];

const rows = [
  ["Your photo", "Browser memory"],
  ["Image processing", "Web API local"],
  ["Cleaned image", "Your device"],
  ["External server", "Never contacted"],
];

export function PrivacySection() {
  return (
    <section id="privacy" className="scroll-mt-24 bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            Privacy first
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-normal text-navy sm:text-4xl">
            Your photos never touch our servers
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Many online metadata removers send your files to a server for processing. ExifSafe
            is different — all cleaning happens entirely within your browser using standard Web
            APIs. We cannot see, store or analyze your photos because they never leave your
            device. ExifSafe is completely free, requires no account, and does not use cookies,
            analytics, telemetry, advertising pixels or usage tracking.
          </p>

          <div className="mt-8 grid gap-3">
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-start gap-3 border-b border-slate-200 pb-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <ServerOff className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold text-navy">ExifSafe architecture</h3>
              <p className="mt-1 text-sm text-slate-500">Data flow overview</p>
            </div>
          </div>

          <div className="mt-5 divide-y divide-slate-200">
            {rows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 py-4">
                <span className="text-sm text-slate-600">{label}</span>
                <span className="text-right text-sm font-semibold text-navy">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
