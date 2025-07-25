import { KeyFeatures } from "@/components/landing/key-features";
import Hero from "./hero";
import Footer from "@/components/common/footer";
import LandingPageNavBar from "@/components/landing/landing-page-nav-bar";
import BenefitsSection from "@/components/landing/benefits";

export default function LandingPage() {
  return (
    <div>
      <LandingPageNavBar />
      <Hero />
      <KeyFeatures />
      <BenefitsSection />
      <Footer />
    </div>
  );
} 