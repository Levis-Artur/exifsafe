import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { guideArticles } from "@/lib/guides";

const article = guideArticles["is-it-safe-to-upload-photos-to-online-tools"];

export const metadata: Metadata = {
  title: {
    absolute: article.title,
  },
  description: article.description,
};

export default function IsItSafeToUploadPhotosPage() {
  return <ArticleLayout article={article} />;
}
