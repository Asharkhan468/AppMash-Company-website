'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import image1 from '../../public/testinomial-image-1.png'

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO of XYZ Company',
    text: 'Working with this team was an amazing experience. They delivered the project on time with top-notch quality. Highly recommended!',
    image: image1,
  },
  {
    name: 'Sarah Johnson',
    position: 'Marketing Head at ABC Corp',
    text: 'Their dedication and attention to detail impressed us. The project turned out better than we imagined!',
    image: image1,
  },
  {
    name: 'Michael Lee',
    position: 'Founder of LMN Tech',
    text: 'Professional and reliable team! They communicated well and ensured our satisfaction throughout the process.',
    image: image1,
  },
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const { name, position, text, image } = testimonials[currentIndex]

  return (
    <section className="relative w-full flex items-center overflow-hidden pt-6 sm:pt-8 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Center Button & Heading */}
        <div className="text-center mb-8 sm:mb-12 mt-4">
          <button className="border-2 border-primary2 text-primary2 px-5 py-2 rounded-sm text-xs sm:text-sm font-semibold mb-3">
            Testimonial
          </button>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary1 mt-3 leading-snug">
            What Our Client Say About Us
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 relative">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 md:-left-10 top-1/2 transform -translate-y-1/2  text-secondary1 p-3 rounded-full shadow-md hover:transition"
          >
            &#10094;
          </button>

          {/* Left Side - Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={image}
              alt={name}
              className="rounded-lg w-72 h-72 object-cover shadow-lg"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-primary2 text-2xl font-bold">{name}</h3>
            <p className="text-gray-400 text-sm mb-4">{position}</p>
            <p className="text-secondary1 text-base leading-relaxed">"{text}"</p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="absolute right-2 md:-right-10 top-1/2 transform -translate-y-1/2  text-secondary1 p-3 rounded-full shadow-md hover:transition"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
