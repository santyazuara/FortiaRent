import HeroSlider from "@/components/hero/HeroSlider";
import ValueProp from "@/components/sections/ValueProp";
import SplitWhySection from "@/components/sections/SplitWhySection";
import QuickCta from "@/components/sections/QuickCta";
import PolicyPreview from "@/components/sections/PolicyPreview";
import VisualSupport from "@/components/sections/VisualSupport";
import Advantages from "@/components/sections/Advantages";
import FinalCtaHome from "@/components/sections/FinalCtaHome";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ValueProp />
      <SplitWhySection />
      <QuickCta />
      <VisualSupport />
      <PolicyPreview />
      <Advantages />
      <FinalCtaHome />
    </>
  );
}
