import Image from "next/image";
import HeroSection from "./components/Hero";
import SubHeroSection from "./components/SubHeroSection";

export default function Home() {
  return (
    <div className="mt-0.2">
      <HeroSection />
      <SubHeroSection />

    </div>
  );
}
