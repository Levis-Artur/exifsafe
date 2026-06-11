import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PrivacySection } from "@/components/PrivacySection";
import { TrustBar } from "@/components/TrustBar";
import { UploadSection } from "@/components/UploadSection";
import { UseCases } from "@/components/UseCases";
import { VerifyPrivacy } from "@/components/VerifyPrivacy";
import { WhyLocalProcessing } from "@/components/WhyLocalProcessing";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <Header />
      <Hero />
      <TrustBar />
      <UploadSection />
      <HowItWorks />
      <PrivacySection />
      <VerifyPrivacy />
      <WhyLocalProcessing />
      <UseCases />
      <FAQ />
      <Footer />
    </main>
  );
}
