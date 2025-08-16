import React from "react";
import Image from "next/image";

function PortfolioPreview1({ bgImage, heading, description, image, hero }: any) {
  return (
    // <section
    //   className={`relative w-full flex items-center overflow-hidden bg-cover bg-center ${
    //     hero ? "h-screen" : "py-10 sm:py-16"
    //   }`}
    //   style={{ backgroundImage: `url(${bgImage})` }}
    // >
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
    //     {/* Left Side: Heading & Text */}
    //     <div className="text-white w-full md:w-1/2 text-center md:text-left">
    //       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight tracking-tight break-words">
    //         {heading}
    //       </h1>
    //       <p className="text-base sm:text-lg md:text-xl opacity-90 mt-4 max-w-full sm:max-w-[90%] md:max-w-[85%] leading-relaxed mx-auto md:mx-0">
    //         {description}
    //       </p>
    //     </div>

    //     {/* Right Side: Image */}
    //   <div className={`w-full md:w-1/2 flex justify-center ${hero?"mt-16":''}`}>
    //             <Image
    //               src={image}
    //               alt="App Preview"
    //               width={1200}
    //               height={900}
    //               className="rounded-lg w-auto h-auto max-w-full"
    //               priority
    //             />
    //           </div>
    //   </div>
    // </section>


    <section
  className={`relative w-full flex items-center overflow-hidden bg-cover bg-center ${
    hero ? "h-screen" : "py-10 sm:py-16"
  }`}
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
    {/* Left Side: Heading & Text */}
    <div className="text-white w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-snug tracking-tight break-words">
        {heading}
      </h1>
      <p className="text-sm sm:text-base md:text-lg opacity-90 mt-4 max-w-full sm:max-w-[90%] md:max-w-[85%] leading-relaxed mx-auto md:mx-0">
        {description}
      </p>
    </div>

    {/* Right Side: Image */}
    <div className={`w-full md:w-1/2 flex justify-center ${hero ? "mt-12" : ""}`}>
      <Image
        src={image}
        alt="App Preview"
        width={800} // ↓ thoda normal size
        height={600}
        className="rounded-lg w-full max-w-md h-auto"
        priority
      />
    </div>
  </div>
</section>

  );
}

export default PortfolioPreview1;
