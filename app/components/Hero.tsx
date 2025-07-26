'use client';

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import pintrest from "@/public/Pintrest Icon.png";
import facebook from "@/public/facebook Icon.png";
import twitter from "@/public/Twitter Icon.png";
import youtube from "@/public/Youtube Icon.png";
import hero1 from "@/public/hero1.png";
import hero2 from "@/public/hero2.png";
import hero3 from "@/public/hero3.png";

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
}

const slides: Slide[] = [
  {
    title: "CUSTOM SOFTWARE",
    subtitle: "SOLUTION",
    description: "We develop tailored solutions that scale with your business growth.",
    image: hero1,
  },
  {
    title: "BRAND IDENTITY",
    subtitle: "INOVATION",
    description: "Cross-platform mobile apps that perform smoothly and look great.",
    image: hero3,
  },
  {
    title: "AI-DRIVEN MARKETING",
    subtitle: "EXPERIENCE",
    description: "From design to deployment, we deliver modern, scalable apps.",
    image: hero2,
  },
  {
    title: "IMERSIVE TECH &",
    subtitle: "INTERACTIVE DESIGN",
    description: "Cross-platform mobile apps that perform smoothly and look great.",
    image: hero3,
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto slide every 5 seconds
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const { title, subtitle, description, image } = slides[index];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary2/40 via-black to-primary2/20 z-0" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-20 pb-8 md:pb-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Left Content */}
        <div className="text-white space-y-4 md:space-y-6 transition-all duration-700 ease-in-out order-2 md:order-1">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-300">
            Welcome Creative Agency
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-[70px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] font-extrabold leading-tight tracking-tight text-white">
            {title}
            <br />
            {subtitle}
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-md md:max-w-lg">{description}</p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button className="flex items-center gap-2 bg-primary2 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition hover:bg-primary2/90">
              Get Started
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
            </button>

            <button className="group flex items-center gap-2 border border-white hover:bg-white hover:text-black text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition">
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-black"
              />
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Content - Carousel */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] flex items-center justify-center">
            <Image
              src={image}
              alt={`${title} ${subtitle}`}
              width={400}
              height={520}
              className="object-contain transition-opacity duration-500"
              priority
            />
          </div>

          {/* Vertical Social Icons */}
          <div className="hidden md:flex absolute right-[-40px] lg:right-[-60px] top-1/2 transform -translate-y-1/2 flex-col gap-3 lg:gap-4 z-20">
            <Image src={pintrest} alt="Pinterest" width={24} height={24} className="w-6 h-6 lg:w-7 lg:h-7" />
            <Image src={facebook} alt="Facebook" width={24} height={24} className="w-6 h-6 lg:w-7 lg:h-7" />
            <Image src={twitter} alt="Twitter" width={24} height={24} className="w-6 h-6 lg:w-7 lg:h-7" />
            <Image src={youtube} alt="YouTube" width={24} height={24} className="w-6 h-6 lg:w-7 lg:h-7" />
          </div>
        </div>
      </div>

      {/* Dot Indicators - Centered at bottom of section */}
      <div className="relative z-10 w-full flex justify-center mt-6 md:mt-8 mb-6 md:mb-10">
        <div className="flex justify-center gap-2 sm:gap-3">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === slideIndex ? 'bg-primary2 w-4 sm:w-6' : 'bg-white/50 hover:bg-white/70'}`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}