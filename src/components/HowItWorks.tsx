const steps = [
  {
    number: "01",
    title: "Select your photo",
    text: "Drag & drop or click to browse. JPG, PNG, and WEBP are all supported.",
  },
  {
    number: "02",
    title: "Browser reads metadata",
    text: "ExifSafe reads the file's EXIF tags locally — no data leaves your device.",
  },
  {
    number: "03",
    title: "Metadata is stripped",
    text: "GPS, timestamps, camera info and all hidden tags are removed from the image.",
  },
  {
    number: "04",
    title: "Download clean image",
    text: "Your cleaned photo is ready, pixel-perfect but with all hidden data removed.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-normal text-navy sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-lg text-slate-600">Four steps, zero servers involved.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-bold text-blue-600">{step.number}</span>
              <h3 className="mt-5 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
