import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function SeoPageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-white text-navy">
      <Header />
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">{children}</div>
      <Footer />
    </main>
  );
}
