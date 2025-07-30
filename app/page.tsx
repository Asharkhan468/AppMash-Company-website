import Image from "next/image";
import HeroSection from "./components/Hero";
import SubHeroSection from "./components/SubHeroSection";
import WhyUsSection from "./components/WhyChooseUsSection";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="mt-0.2">
      <HeroSection />
      <SubHeroSection />
      <WhyUsSection />
      <OurTeam />
      <Testimonials />


    </div>
  );
}
