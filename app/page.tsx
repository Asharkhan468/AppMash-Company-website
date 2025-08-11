import Image from "next/image";
import SubHeroSection from "./components/SubHeroSection";
import WhyUsSection from "./components/WhyChooseUsSection";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import HeroCarouselWrapper from "./components/HeroCarouselWrapper";

export default function Home() {
  return (
    <div className="mt-0.2">
      <HeroCarouselWrapper />
      <SubHeroSection />
      <WhyUsSection />
      <OurTeam />
      <Testimonials />
      <Portfolio />
      <Blog />



    </div>
  );
}
