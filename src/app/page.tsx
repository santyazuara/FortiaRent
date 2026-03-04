import HeroSlider from "@/components/hero/HeroSlider";
import TrustBar from "@/components/sections/TrustBar";
import PolicyCards from "@/components/sections/PolicyCards";
import StepsSection from "@/components/sections/StepsSection";
import SplitWhySection from "@/components/sections/SplitWhySection";
import StatsStrip from "@/components/sections/StatsStrip";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import FinalCtaBanner from "@/components/sections/FinalCtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustBar />
      <PolicyCards />
      <StepsSection />
      <SplitWhySection />
      <StatsStrip />
      <TestimonialsCarousel />
      <FinalCtaBanner />
    </>
  );
}
