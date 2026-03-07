import HeroSlider from "@/components/hero/HeroSlider";
import ValueProp from "@/components/sections/ValueProp";
import QuickCta from "@/components/sections/QuickCta";
import PolicyPreview from "@/components/sections/PolicyPreview";
import Advantages from "@/components/sections/Advantages";
import FinalCtaHome from "@/components/sections/FinalCtaHome";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ValueProp />
      <QuickCta />
      <PolicyPreview />
      <Advantages />
      <FinalCtaHome />
    </>
  );
}
