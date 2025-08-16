import Image from "next/image";
import React from "react";

function PortfolioPreview({ bgImage, image, heading, description }: any) {
  return (
  <section
  className="relative w-full flex items-center overflow-hidden pt-6 sm:pt-10 pb-10 sm:pb-16 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
    {/* Left Side: Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        src={image}
        alt="App Preview"
        width={800} // ↓ chhota size
        height={600}
        className="rounded-lg w-full max-w-md h-auto"
        priority
      />
    </div>

    {/* Right Side: Heading & Text */}
    <div className="text-white w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-snug tracking-tight break-words">
        {heading}
      </h1>
      <p className="text-sm sm:text-base md:text-lg opacity-90 mt-4 max-w-full sm:max-w-[90%] md:max-w-[85%] leading-relaxed mx-auto md:mx-0">
        {description}
      </p>
    </div>
  </div>
</section>

  );
}

export default PortfolioPreview;
