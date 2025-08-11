// HeroCarouselWrapper.tsx
"use client";
import { useState, useEffect } from "react";
import HeroCarousel from "./Hero";

export default function HeroCarouselWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Server render par skeleton/placeholder
    return <div style={{ minHeight: "100vh" }} className="bg-black"></div>;
  }

  return <HeroCarousel />;
}
