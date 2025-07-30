"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import image1 from "../../public/team-image-1.png";
import image2 from "../../public/team-image-2.png";
import image3 from "../../public/team-image-3.png";

export default function OurTeam() {
  const team = [
    { name: "John Doe", role: "Web Developer", image: image1 },
    { name: "Jane Smith", role: "UI/UX Designer", image: image2 },
    { name: "Michael Lee", role: "Backend Developer", image: image3 },
    { name: "Sarah Johnson", role: "Project Manager", image: image1 },
    { name: "David Wilson", role: "Frontend Developer", image: image2 },
    { name: "Emily Brown", role: "Graphic Designer", image: image3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Responsive card count
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 4;
    const width = window.innerWidth;
    if (width < 640) return 1; // Mobile
    if (width < 768) return 2; // Small tablet
    if (width < 1024) return 3; // Tablet
    return 4; // Desktop
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const totalCards = team.length;
  const canSlide = totalCards > visibleCards;
  const autoScrollDelay = 3000;

  useEffect(() => {
    const handleResize = () => {
      const newVisibleCards = getVisibleCards();
      setVisibleCards(newVisibleCards);
      setIsMobile(window.innerWidth < 640);
      // Reset index if it would cause empty space
      if (currentIndex > totalCards - newVisibleCards) {
        setCurrentIndex(Math.max(0, totalCards - newVisibleCards));
      }
    };

    handleResize(); // Initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, totalCards]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= totalCards - visibleCards) return 0;
      return prevIndex + 1;
    });
    resetAutoScroll();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) return totalCards - visibleCards;
      return prevIndex - 1;
    });
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    clearInterval(intervalRef.current);
    startAutoScroll();
  };

  const startAutoScroll = () => {
    if (!canSlide || isHovered) return;

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, autoScrollDelay);
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [canSlide, isHovered, visibleCards]);

  // Get the subset of cards to display
  const visibleTeam = team.slice(currentIndex, currentIndex + visibleCards);

  return (
    <section className="relative bg-neutral2 w-full pt-6 sm:pt-8 pb-8 sm:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 mt-4">
          <button className="border-2 border-primary2 text-primary2 px-5 py-2 rounded-sm text-xs sm:text-sm font-semibold mb-3">
            What We Offer
          </button>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary1 mt-3 leading-snug">
            Our Experienced Team
          </h2>
        </div>

        {/* Cards Container */}
        <div
          className="relative"
          onMouseEnter={() => {
            setIsHovered(true);
            clearInterval(intervalRef.current);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            startAutoScroll();
          }}
        >
          {canSlide && (
            <>
              <button
                onClick={prevSlide}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-12 z-10  text-secondary1 p-3 rounded-full shadow-lg transition-all hover:scale-110 ${
                  isMobile ? "hidden" : ""
                }`}
                aria-label="Previous team members"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-12 z-10  text-secondary1 p-3 rounded-full shadow-lg transition-all hover:scale-110 ${
                  isMobile ? "hidden" : ""
                }`}
                aria-label="Next team members"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          <div
            ref={sliderRef}
            className={`flex ${
              isMobile ? "justify-center" : "justify-center"
            } gap-6 transition-transform duration-500 ease-in-out overflow-x-visible px-4`}
          >
            {visibleTeam.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className={`bg-neutral1 p-6 text-center relative rounded-md ${
                  isMobile ? "w-[280px]" : "min-w-[280px]"
                } flex-shrink-0 mx-auto transition-all hover:shadow-lg `}
              >
                {/* Borders */}
                <div
                  className="absolute top-0 left-0 border-t-4 border-l-4 border-primary2 rounded-md"
                  style={{ width: "50%", height: "30%" }}
                ></div>
                <div
                  className="absolute bottom-0 right-0 border-b-4 border-r-4 border-primary2 rounded-md"
                  style={{ width: "50%", height: "30%" }}
                ></div>

                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-primary2"
                  width={128}
                  height={128}
                />
                <h3 className="text-primary2 text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-secondary1 text-base mt-1 mb-2">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Mobile Indicators */}
          {isMobile && canSlide && (
            <div className="flex justify-center mt-8 gap-2">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-primary2 scale-125"
                      : "bg-neutral1/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
