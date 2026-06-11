import { CheckCircle2, CloudUpload, ShieldCheck } from "lucide-react";

const typicalItems = [
  "Uploads your file to a server",
  "May store files temporarily",
  "Requires trust in the service",
  "May use cookies, analytics or telemetry",
];

const exifSafeItems = [
  "Keeps photos on your device",
  "Cannot see or store your files",
  "Easy to verify in DevTools",
  "No analytics, telemetry, cookies or accounts",
];

export function WhyLocalProcessing() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-normal text-navy sm:text-4xl">
            Why local processing matters
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            Most online metadata removers ask you to upload your file. ExifSafe does not.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-slate-600 ring-1 ring-slate-200">
                <CloudUpload className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-navy">Typical online metadata remover</h3>
            </div>
            <div className="mt-5 grid gap-3">
              {typicalItems.map((item) => (
                <p key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-navy">ExifSafe</h3>
            </div>
            <div className="mt-5 grid gap-3">
              {exifSafeItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <p className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-navy">
          Privacy is strongest when your photo never leaves your device and your usage is not
          tracked.
        </p>
      </div>
    </section>
  );
}
