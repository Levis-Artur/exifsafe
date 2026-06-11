import { EyeOff, Laptop, UploadCloud } from "lucide-react";

const items = [
  {
    icon: UploadCloud,
    title: "No upload",
    text: "Your photos stay on your device",
  },
  {
    icon: EyeOff,
    title: "No tracking",
    text: "No analytics, telemetry, cookies or accounts",
  },
  {
    icon: Laptop,
    title: "Local processing",
    text: "Cleaning happens in your browser",
  },
];

export function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-navy">{item.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
