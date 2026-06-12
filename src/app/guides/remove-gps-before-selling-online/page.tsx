import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { guideArticles } from "@/lib/guides";

const article = guideArticles["remove-gps-before-selling-online"];

export const metadata: Metadata = {
  title: {
    absolute: article.title,
  },
  description: article.description,
};

export default function RemoveGpsBeforeSellingOnlinePage() {
  return <ArticleLayout article={article} />;
}
