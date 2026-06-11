import { FileUp, MonitorCog, Network, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: MonitorCog,
    label: "Step 1",
    title: "Open DevTools",
    text: "In your browser, open Developer Tools and go to the Network tab.",
  },
  {
    icon: FileUp,
    label: "Step 2",
    title: "Choose a photo",
    text: "Upload a JPG, PNG or WEBP file in ExifSafe.",
  },
  {
    icon: Network,
    label: "Step 3",
    title: "Check network activity",
    text: "You will not see your image file being sent to any server.",
  },
];

export function VerifyPrivacy() {
  return (
    <section id="verify" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-normal text-navy sm:text-4xl">
            Verify it yourself
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            You do not have to trust our words. You can check that your image is never uploaded.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-5 text-sm font-bold text-blue-600">{step.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm leading-6 text-slate-700">
            ExifSafe works locally using browser APIs. The cleaned image is created from pixel
            data on your device.
          </p>
        </div>
      </div>
    </section>
  );
}
