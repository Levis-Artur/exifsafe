import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { guideArticles } from "@/lib/guides";

const article = guideArticles["how-to-share-photos-safely-online"];

export const metadata: Metadata = {
  title: {
    absolute: article.title,
  },
  description: article.description,
};

export default function HowToSharePhotosSafelyPage() {
  return <ArticleLayout article={article} />;
}
