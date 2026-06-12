import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeGuides } from "@/components/HomeGuides";
import { HowItWorks } from "@/components/HowItWorks";
import { CommonMetadataExamples } from "@/components/CommonMetadataExamples";
import { MoreTools } from "@/components/MoreTools";
import { PrivacySection } from "@/components/PrivacySection";
import { faqQuestions } from "@/components/FAQ";
import { StructuredData } from "@/components/StructuredData";
import { TrustBar } from "@/components/TrustBar";
import { UploadSection } from "@/components/UploadSection";
import { UseCases } from "@/components/UseCases";
import { VerifyPrivacy } from "@/components/VerifyPrivacy";
import { WhyLocalProcessing } from "@/components/WhyLocalProcessing";

const siteDescription =
  "Remove common EXIF, GPS and camera metadata from photos locally in your browser. Free, private, no upload, no tracking, no account.";

const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ExifSafe",
  url: "https://exifsafe.com",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any modern browser",
  description: siteDescription,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Remove common EXIF metadata",
    "Remove common GPS metadata",
    "Clean JPG, PNG and WEBP images",
    "Process images locally in the browser",
    "No photo upload",
    "No analytics",
    "No telemetry",
    "No cookies",
    "No account required",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqQuestions.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <StructuredData data={webApplicationJsonLd} />
      <StructuredData data={faqJsonLd} />
      <Header />
      <Hero />
      <TrustBar />
      <UploadSection />
      <MoreTools />
      <HowItWorks />
      <PrivacySection />
      <VerifyPrivacy />
      <WhyLocalProcessing />
      <UseCases />
      <CommonMetadataExamples />
      <HomeGuides />
      <FAQ />
      <Footer />
    </main>
  );
}
