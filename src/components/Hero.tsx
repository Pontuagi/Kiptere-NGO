'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroImages = [
  '/images/hero-1.jpeg',
  '/images/hero-2.jpeg',
  '/images/hero-3.jpeg',
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Images with Blur */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt="Students learning computer skills"
            fill
            className="object-cover blur-sm scale-105"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 via-primary-500/30 to-secondary-500/40" />

      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium">Serving Kericho County, Kenya</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            Empowering Rural Students Through{' '}
            <span className="text-yellow-300">Digital Education</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            We believe every child deserves access to technology. Kiptere NGO is bridging
            the digital divide by bringing computer education to schools in rural Kenya.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#help"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Donate Now
            </a>
            <a
              href="#mission"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-10 rounded-lg transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          {/* Stats Preview */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 drop-shadow-lg">500+</div>
              <div className="text-sm text-white/80 mt-1">Students Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 drop-shadow-lg">12</div>
              <div className="text-sm text-white/80 mt-1">Schools Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 drop-shadow-lg">50+</div>
              <div className="text-sm text-white/80 mt-1">Computers Donated</div>
            </div>
          </div>

          {/* Image Indicators */}
          <div className="mt-12 flex justify-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
