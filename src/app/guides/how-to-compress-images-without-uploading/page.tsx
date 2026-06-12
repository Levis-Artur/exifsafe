import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { guideArticles } from "@/lib/guides";

const article = guideArticles["how-to-compress-images-without-uploading"];

export const metadata: Metadata = {
  title: {
    absolute: article.title,
  },
  description: article.description,
};

export default function HowToCompressImagesWithoutUploadingPage() {
  return <ArticleLayout article={article} />;
}
