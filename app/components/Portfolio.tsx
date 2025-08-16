"use client";

import Image from "next/image";
import image1 from "../../public/project-1.png";
import image2 from "../../public/project-2.png";
import image3 from "../../public/project-3.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const portfolioCards = [
  {
    id: "1",
    category: "Property Projects",
    title: "InspeCasa",
    image: image1,
    bg: "/bg-1.png",
    description: "Full details about InspeCasa project go here..."
  },
  {
    id: "2",
    category: "All Services",
    title: "MYSUTRA",
    image: image2,
    bg: "/bg-2.png",
    description: "Full details about REELConnect project go here..."
  },
  {
    id: "3",
    category: "Film Making Project",
    title: "REELConnect",
    image: image3,
    bg: "/bg-3.png",
    description: "Full details about MYSUTRA project go here..."
  }
];

  


export default function PortfolioSection() {
  const [selectedCard, setSelectedCard] = useState(null);
  const router = useRouter();


  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <section
  id="portfolio"
  className="relative bg-neutral2 w-full flex flex-col items-center overflow-hidden pt-6 sm:pt-8 pb-8 sm:pb-12"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    {/* Top Center Button & Heading */}
    <div className="text-center mb-8 sm:mb-6 mt-4">
      <button className="border-2 border-primary2 text-primary2 px-5 py-2 rounded-sm text-xs sm:text-sm font-semibold mb-3">
        Our Best Portfolio
      </button>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-3 leading-snug">
        Our Best Portfolio
      </h2>
    </div>
  </div>

 {/* Suggestion Buttons + See All */}
<div className="w-full px-4 sm:px-6 flex flex-wrap justify-between items-center mt-6 max-w-7xl mx-auto">
  {/* Left Side Buttons */}
  <div className="flex flex-wrap gap-3">
    {["Mobile App", "Web App UI", "Landing Page", "E-commerce UI", "Dashboard UI"].map(
      (btn, idx) => (
        <button
          key={idx}
          className="text-secondary1 border border-secondary1 px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-primary2 hover:text-white transition"
        >
          {btn}
        </button>
      )
    )}
  </div>

  {/* Right Side - See All Button */}
  <button className="text-primary2 px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium hover:text-primary2 border border-primary2 transition">
    See All
  </button>
</div>


  {/* Cards Section */}
  <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
    {portfolioCards.map((card, index) => (
      <div
        key={index}
        className="relative w-full h-[28rem] lg:h-[30rem] rounded-lg overflow-hidden shadow-lg border border-gray-600 bg-primary2 flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary2"></div>
          <div className="absolute inset-0 bg-black clip-diagonal-ltr"></div>
        </div>

        {/* Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white font-semibold text-lg">
          <Image
            src={card.image}
            alt={card.title}
            className="w-[85%] h-[85%] object-contain"
          />
        </div>

        {/* Bottom Blur with Text + Arrow */}
        <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-xl py-3 px-4 flex items-center justify-between z-20">
          <div>
            <p className="text-primary2 text-xs font-medium tracking-wide">
              {card.category}
            </p>
            <h3 className="text-white text-lg sm:text-xl font-extrabold mt-1">
              {card.title}
            </h3>
          </div>

          <div
            onClick={() => router.push(`/portfolio/${card.id}`)}
            className="text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    ))}
  </div>

  <style jsx>{`
    /* Left-to-right diagonal (red triangle) */
    .clip-diagonal-ltr {
      clip-path: polygon(100% 0, 100% 100%, 0 100%);
    }
  `}</style>
</section>

  );
}
