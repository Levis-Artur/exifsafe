import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownToLine,
  CheckCircle2,
  ImageIcon,
  LockKeyhole,
  ServerOff,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ImageCompressor } from "@/components/ImageCompressor";
import { StructuredData } from "@/components/StructuredData";

const description =
  "Compress JPG, PNG and WEBP images locally in your browser. Free, private, no upload, no tracking and no account.";

export const metadata: Metadata = {
  title: "Compress Image Online for Free | ExifSafe",
  description,
  openGraph: {
    title: "Compress Image Online for Free | ExifSafe",
    description,
    url: "https://exifsafe.com/compress-image",
  },
};

const compressorJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ExifSafe Image Compressor",
  url: "https://exifsafe.com/compress-image",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any modern browser",
  description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Compress JPG images",
    "Compress PNG images",
    "Compress WEBP images",
    "Resize images by max width",
    "Process images locally in the browser",
    "No photo upload",
    "No analytics",
    "No telemetry",
    "No cookies",
    "No account required",
  ],
};

const trustItems = [
  {
    icon: ServerOff,
    title: "No upload",
    text: "Your images stay on your device",
  },
  {
    icon: LockKeyhole,
    title: "No analytics",
    text: "No telemetry, cookies or tracking",
  },
  {
    icon: ShieldCheck,
    title: "Local processing",
    text: "Compression happens in your browser",
  },
];

const steps = [
  {
    icon: ImageIcon,
    title: "Select an image",
    text: "Drag and drop or browse for a JPG, PNG or WEBP file.",
  },
  {
    icon: SlidersHorizontal,
    title: "Choose quality or max width",
    text: "Adjust JPG/WEBP quality or set an optional max width for resizing.",
  },
  {
    icon: ShieldCheck,
    title: "Browser compresses locally",
    text: "ExifSafe renders the image through canvas using standard browser APIs.",
  },
  {
    icon: ArrowDownToLine,
    title: "Download compressed copy",
    text: "Save a new compressed image. The original file is not changed.",
  },
];

const faqs = [
  {
    question: "Does ExifSafe upload images for compression?",
    answer: "No. Images are compressed locally in your browser.",
  },
  {
    question: "Which formats are supported?",
    answer: "JPG, PNG and WEBP.",
  },
  {
    question: "Will image quality change?",
    answer:
      "JPG and WEBP compression can reduce quality depending on the quality setting. PNG export keeps visible image quality but may not always reduce size.",
  },
  {
    question: "Why did my PNG get larger?",
    answer:
      "Browser PNG export may encode the image differently from the original file. PNG is lossless, so size reductions are not always guaranteed.",
  },
  {
    question: "Is the original image changed?",
    answer: "No. ExifSafe creates a new compressed copy for download.",
  },
];

export default function CompressImagePage() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <StructuredData data={compressorJsonLd} />
      <Header />

      <section className="border-b border-slate-200 bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Local compression — your images never leave your device
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-normal text-navy sm:text-5xl md:text-6xl">
              Compress images locally in your browser
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Reduce image file size for sharing, websites and email. Free, private, no upload,
              no tracking and no account.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#compressor"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Compress an image
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy shadow-sm ring-1 ring-slate-200 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                How it works
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase text-blue-600">Local image compressor</p>
              <div className="mt-5 grid gap-3">
                {[
                  ["Input formats", "JPG · PNG · WEBP"],
                  ["Compression", "Browser canvas"],
                  ["Upload", "Never"],
                  ["Account", "Not required"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                    <span className="text-sm text-slate-600">{label}</span>
                    <span className="text-sm font-semibold text-blue-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="compressor" className="scroll-mt-24 bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-bold text-blue-600">Free browser-based compressor</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-navy sm:text-4xl">
              Compress an image now
            </h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              Reduce JPG, PNG and WEBP file size without uploading your images.
            </p>
          </div>
          <ImageCompressor />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-semibold text-navy">{item.title}</h2>
                  <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-normal text-navy sm:text-4xl">
              How image compression works
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Four steps, no server-side image processing.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-blue-600">Smaller image files</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-navy sm:text-4xl">
              How to get smaller image files
            </h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              The best result usually comes from combining modern format conversion, quality
              adjustment and sensible resizing.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Convert JPG or PNG to WEBP",
                text: "WEBP usually gives better size reduction for photos and web sharing.",
              },
              {
                title: "Lower JPG or WEBP quality",
                text: "A quality setting around 60-75% often keeps photos looking good while reducing size.",
              },
              {
                title: "Resize large photos",
                text: "Large camera images can be much bigger than needed for websites, email or messaging.",
              },
              {
                title: "Use 1600px or 1920px width",
                text: "These widths are practical defaults for many web sharing and publishing workflows.",
              },
              {
                title: "Be careful with PNG",
                text: "PNG may not shrink much unless converted to WEBP or resized because PNG is lossless.",
              },
              {
                title: "Use Auto optimize",
                text: "ExifSafe can try several local WebP outputs and pick the smallest successful file.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-blue-600">Privacy first</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-navy">
              Compression stays local
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              ExifSafe does not upload your images. Compression happens locally in your browser
              using standard Web APIs. We do not store images, collect event data, use analytics,
              set cookies or require an account.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/privacy"
                className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Read privacy policy
              </Link>
              <Link
                href="/guides/how-to-compress-images-without-uploading"
                className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Compression guide
              </Link>
              <Link
                href="/remove-exif-data"
                className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Remove EXIF data
              </Link>
              <Link href="/" className="text-sm font-semibold text-blue-600 transition hover:text-blue-700">
                Back to homepage
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-bold text-blue-600">Limitations</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-navy">
              What to expect
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
              {[
                "JPG and WEBP compression can reduce file size significantly.",
                "PNG is lossless and may not always become smaller.",
                "Very large images depend on browser memory.",
                "This is a lightweight browser-based compressor, not a professional image optimization pipeline.",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-normal text-navy sm:text-4xl">FAQ</h2>
            <p className="mt-3 text-lg text-slate-600">
              Straight answers about local image compression.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-navy">
                  {item.question}
                  <span className="text-blue-600">+</span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
