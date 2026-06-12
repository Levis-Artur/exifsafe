import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import type { GuideArticle } from "@/lib/guides";

const publishedDate = "2026-06-12";

export function ArticleLayout({ article }: { article: GuideArticle }) {
  const articleUrl = `https://exifsafe.com/guides/${article.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.description,
    author: {
      "@type": "Organization",
      name: "ExifSafe",
    },
    publisher: {
      "@type": "Organization",
      name: "ExifSafe",
    },
    mainEntityOfPage: articleUrl,
    datePublished: publishedDate,
    dateModified: publishedDate,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://exifsafe.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: "https://exifsafe.com/guides",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.h1,
        item: articleUrl,
      },
    ],
  };

  const relatedLinks = [
    { label: "Remove metadata tool", href: "/" },
    { label: "Compress image tool", href: "/compress-image" },
    { label: "Privacy page", href: "/privacy" },
    { label: "Guides hub", href: "/guides" },
  ];

  return (
    <main className="min-h-screen bg-white text-navy">
      <StructuredData data={articleJsonLd} />
      <StructuredData data={breadcrumbJsonLd} />
      <Header />

      <article className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: article.h1 },
          ]}
        />

        <header className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold text-blue-600">Photo privacy guide</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-normal text-navy sm:text-5xl">
            {article.h1}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{article.intro}</p>
        </header>

        <div className="mt-8 grid gap-6">
          {article.sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold tracking-normal text-navy">{section.title}</h2>
              {section.paragraphs?.length ? (
                <div className="mt-4 grid gap-3 text-base leading-7 text-slate-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {section.bullets?.length ? (
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold tracking-normal text-navy">Try ExifSafe</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">{article.cta.text}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {article.cta.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                {link.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-normal text-navy">Helpful links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
