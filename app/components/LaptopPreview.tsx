import React from 'react'

function LaptopPreview({bgImage , heading , description , image}:any) {
  return (
<section
  className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-6 sm:pt-10 pb-12 bg-cover bg-center px-4 sm:px-6 text-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Heading */}
  <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight">
  {heading}
</h1>

<p className="text-white text-sm sm:text-base md:text-lg opacity-90 mt-3 sm:mt-4 max-w-[90%] sm:max-w-2xl mx-auto leading-relaxed sm:leading-relaxed">
  {description}
</p>

  {/* Image - slightly left aligned */}
 <div className="mt-4 w-full flex justify-center">
  <img
    src={image}
    alt={heading}
    className="rounded-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[45%] h-auto object-contain ml-0 lg:ml-[-350px]"
  />
</div>


</section>




  )
}

export default LaptopPreview
