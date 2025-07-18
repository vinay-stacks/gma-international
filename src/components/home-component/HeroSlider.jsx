'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Start Your Beautiful And Bright Future",
      description: "There are many variations of passages orem psum available but the majority have suffered alteration in some repeat predefined chunks form injected humour.",
      image: "/images/hero-slider-1.webp"
    },
    {
      title: "Transform Your Career With Quality Education",
      description: "Discover endless possibilities with our comprehensive learning programs designed to help you achieve your professional goals.",
     image: "/images/hero-slider-2.webp"
    },
    {
      title: "Excellence In Every Learning Experience",
      description: "Join thousands of successful students who have transformed their lives through our innovative educational approach.",
      image: "/images/hero-slider-3.webp"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[650px] overflow-hidden mt-34 md:mt-34">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#012758]/80 via-[#012758]/70 to-[#012758]/50" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:text-orange-400" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:text-orange-400" />
      </button>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 transition-opacity duration-700 ease-in-out">
        <div className="max-w-6xl w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between h-full">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Welcome Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-orange-400/30 mx-auto lg:mx-0">
                {/* <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🎓</span>
                </div> */}
                <span className="text-orange-400 font-medium tracking-wide uppercase text-sm">
                  Welcome to GMA international School
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                {slides[currentSlide].title.split(' ').map((word, index) => (
                  <span key={index} className={word === 'Bright' ? 'text-orange-400' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-orange-500/25">
                  ABOUT MORE
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group">
                  LEARN MORE
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div> */}

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  );
};

export default HeroSlider;
