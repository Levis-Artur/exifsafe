import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { guideArticles } from "@/lib/guides";

const article = guideArticles["what-metadata-can-reveal-about-you"];

export const metadata: Metadata = {
  title: {
    absolute: article.title,
  },
  description: article.description,
};

export default function WhatMetadataCanRevealPage() {
  return <ArticleLayout article={article} />;
}
