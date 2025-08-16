import React from 'react'

function LaptopPreviewRight({ bgImage, heading, description, image }: any) {
  return (
   <section
  className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-6 sm:pt-10 pb-12 bg-cover bg-center px-4 sm:px-6 text-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Heading */}
  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-snug">
    {heading}
  </h1>

  {/* Description */}
  <p className="text-white text-sm sm:text-base md:text-lg opacity-90 mt-3 sm:mt-4 max-w-[90%] sm:max-w-2xl mx-auto leading-relaxed">
    {description}
  </p>

  {/* Image */}
  <div className="mt-6 w-full flex justify-center lg:justify-end">
    <img
      src={image}
      alt={heading}
      className="rounded-lg w-[85%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[40%] h-auto object-contain"
    />
  </div>
</section>

  );
}

export default LaptopPreviewRight;
