import React from 'react'

function ContactHeroSection() {
  return (
<section
  className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
  style={{ backgroundImage: `url('/contact-hero-image.jpg')` }}
>
  {/* Left Red Shadow */}
  <div className="absolute left-0 top-0 w-32 h-full bg-red-600 opacity-40 blur-2xl"></div>

  {/* Right Red Shadow */}
  <div className="absolute right-0 top-0 w-32 h-full bg-red-600 opacity-40 blur-2xl"></div>

  {/* Center Heading */}
  <h1 className="text-white text-4xl sm:text-5xl font-bold z-10 text-center items-center">
    Contact
  </h1>
</section>






  )
}

export default ContactHeroSection
