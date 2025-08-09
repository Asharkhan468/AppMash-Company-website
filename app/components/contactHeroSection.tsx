import React from 'react'

function ContactHeroSection() {
  return (
<section className="relative w-full min-h-screen">
  {/* Background Image with Dull Effect */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/contact-hero-image.jpg')",
      filter: "brightness(0.5)", // image dull
    }}
  ></div>

  {/* Left & Right Red Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-red-700/60 via-transparent to-red-700/60"></div>

  {/* Extra Dark Overlay for Better Text Visibility */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
    <div className="w-full text-center">
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
        Contact
      </span>
    </div>
  </div>
</section>






  )
}

export default ContactHeroSection
