"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import image1 from "../../public/sub-hero-section-image-1.png";
import image2 from "../../public/sub-hero-section-image-2.png";
import image3 from "../../public/sub-hero-section-image-3.png";
import image4 from "../../public/sub-hero-section-image-4.png";

interface SubSlide {
  heading1: string;
  heading2: string;
  description: string;
  image: StaticImageData;
}

const subSlides: SubSlide[] = [
  {
    heading1: "Web & Mobile App",
    heading2: "Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: image1,
  },
  {
    heading1: "ChatBot Development",
    heading2: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: image2,
  },
  {
    heading1: "Machine Learning & IoT",
    heading2: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: image3,
  },

  {
    heading1: "AI Development",
    heading2: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: image4,
  },
];

function SubHeroSection() {
  const [index, setIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-slide logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % subSlides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const { heading1, heading2, description, image } = subSlides[index];

  return (
    <section className="relative bg-neutral2 w-full flex items-center overflow-hidden pt-6 sm:pt-8 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Center Button & Heading */}
        <div className="text-center mb-8 sm:mb-12 mt-4">
          <button className="border-2 border-primary2 text-primary2 px-5 py-2 rounded-sm text-xs sm:text-sm font-semibold mb-3">
            What We Offer
          </button>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-3 leading-snug">
            Unlock Revenue Growth For Your Business
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 transition-all duration-700 ease-in-out">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary2 mb-1 leading-tight">
              {heading1}
            </h3>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary2 mb-5 leading-tight">
              {heading2}
            </h4>
            <p className="text-gray-400 mb-5 text-sm sm:text-base leading-relaxed sm:leading-loose">
              {description}
            </p>
            <button className="border-2 border-primary2 text-primary2 px-5 py-2 text-sm sm:text-base rounded-sm hover:bg-primary2 hover:text-white transition duration-300">
              Read More
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src={image}
              alt={`${heading1} ${heading2}`}
              width={380}
              height={450}
              className="object-cover rounded-lg shadow-lg transition-opacity duration-500"
              priority
            />
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {subSlides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === slideIndex
                  ? "bg-primary2 w-4 sm:w-5"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SubHeroSection;
