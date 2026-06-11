import { SeoCTA } from "@/components/SeoCTA";
import { SeoPageLayout } from "@/components/SeoPageLayout";

type SeoArticlePageProps = {
  h1: string;
  intro: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export function SeoArticlePage({ h1, intro, sections, faqs }: SeoArticlePageProps) {
  return (
    <SeoPageLayout>
      <article>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold text-blue-600">Free browser-based privacy tool</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-normal text-navy sm:text-5xl">
            {h1}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{intro}</p>
        </div>

        <div className="mt-8 grid gap-6">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold tracking-normal text-navy">{section.title}</h2>
              <div className="mt-4 grid gap-3 text-base leading-7 text-slate-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8">
          <SeoCTA />
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-normal text-navy">FAQ</h2>
          <div className="mt-5 grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-t border-slate-200 pt-4 first:border-t-0 first:pt-0">
                <h3 className="font-semibold text-navy">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </SeoPageLayout>
  );
}
