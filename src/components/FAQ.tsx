import { ChevronDown } from "lucide-react";

export const faqQuestions = [
  {
    question: "Does ExifSafe upload my photos to a server?",
    answer: "No. Photos are processed locally in your browser. They never leave your device.",
  },
  {
    question: "Which metadata does ExifSafe remove?",
    answer:
      "The browser re-exports the image from pixel data, which removes common embedded metadata such as EXIF, GPS location, camera model and timestamps. Some unusual or proprietary metadata may require advanced server-side tools in a future version.",
  },
  {
    question: "Will the image quality change after cleaning?",
    answer:
      "JPEG and WEBP files are exported with high quality settings. PNG files are exported losslessly where supported by the browser. In most cases, visual quality stays the same.",
  },
  {
    question: "Which file formats are supported?",
    answer: "The current version supports JPG, PNG and WEBP images.",
  },
  {
    question: "Is there a file size limit?",
    answer: "The current limit is 20 MB per file to keep browser processing fast and stable.",
  },
  {
    question: "How can I verify that my image was not uploaded?",
    answer:
      "Open your browser's Developer Tools, go to the Network tab, then clean a photo. You should not see the image file being sent to any server.",
  },
  {
    question: "Does ExifSafe use analytics or track usage?",
    answer:
      "No. ExifSafe does not use analytics, telemetry, cookies, advertising pixels or event tracking. We do not count visitors or monitor how people use the tool.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-normal text-navy sm:text-4xl">FAQ</h2>
          <p className="mt-3 text-lg text-slate-600">
            Straight answers about private photo cleaning.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqQuestions.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-navy">
                {item.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-6 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
