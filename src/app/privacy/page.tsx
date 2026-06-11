import type { Metadata } from "next";
import { SeoCTA } from "@/components/SeoCTA";
import { SeoPageLayout } from "@/components/SeoPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ExifSafe processes photos locally in your browser. No uploads, accounts, analytics, telemetry, tracking cookies or photo storage.",
};

const sections = [
  {
    title: "No photo uploads",
    text: "ExifSafe processes images locally in your browser. Your photos are not uploaded to our servers.",
  },
  {
    title: "No accounts",
    text: "You do not need to create an account to use ExifSafe.",
  },
  {
    title: "No tracking",
    text: "ExifSafe does not use tracking cookies, advertising pixels, third-party tracking scripts or user behavior monitoring.",
  },
  {
    title: "No analytics or telemetry",
    text: "ExifSafe does not use analytics tools, telemetry, tracking cookies, advertising pixels or user behavior monitoring. We do not count visitors, track events or build usage profiles.",
  },
  {
    title: "No storage",
    text: "Because photos are processed locally, we do not store your photos.",
  },
  {
    title: "How to verify",
    text: "You can open your browser's Developer Tools, go to the Network tab, and clean a photo. You should not see your image file being uploaded.",
  },
  {
    title: "Limitations",
    text: "ExifSafe is a lightweight browser-based privacy tool. It removes common metadata by re-exporting images from pixel data, but it is not a forensic metadata audit.",
  },
];

export default function PrivacyPage() {
  return (
    <SeoPageLayout>
      <article>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold text-blue-600">Simple privacy policy</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-normal text-navy sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            ExifSafe is built around a simple idea: your photo should stay on your device. The
            tool is free and does not use accounts, analytics, telemetry, ads, tracking cookies
            or photo uploads.
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold tracking-normal text-navy">{section.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{section.text}</p>
            </section>
          ))}
        </div>

        <div className="mt-8">
          <SeoCTA />
        </div>
      </article>
    </SeoPageLayout>
  );
}
