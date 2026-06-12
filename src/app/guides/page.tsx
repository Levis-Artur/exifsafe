import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ImageIcon, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { GuideCard } from "@/components/GuideCard";
import { Header } from "@/components/Header";
import { guideCards } from "@/lib/guides";

export const metadata: Metadata = {
  title: {
    absolute: "Photo Privacy Guides | ExifSafe",
  },
  description:
    "Practical guides about photo metadata, GPS privacy, safe image sharing and local browser-based image tools.",
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <Header />

      <section className="border-b border-slate-200 bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Practical photo privacy guides
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-normal text-navy sm:text-5xl">
              Photo privacy guides
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Learn how photo metadata works, what it can reveal, and how to share or compress
              images more safely without uploading private files.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {guideCards.map((guide) => (
            <GuideCard key={guide.href} {...guide} />
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-blue-600">Tools from ExifSafe</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-navy">Local browser tools</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Remove photo metadata locally",
                text: "Create a cleaned copy with common EXIF, GPS and camera metadata removed by browser re-export.",
                href: "/",
              },
              {
                icon: ImageIcon,
                title: "Compress image locally",
                text: "Reduce JPG, PNG and WEBP file size in your browser without uploading images.",
                href: "/compress-image",
              },
            ].map((tool) => {
              const Icon = tool.icon;

              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{tool.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{tool.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Open tool
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
