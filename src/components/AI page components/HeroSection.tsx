import React from 'react';

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(228, 12, 5, 0.98), rgba(243, 68, 111, 0.8)), url('/path/to/your/background-image.jpg')`, // Gradient + Image
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="inline-block">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-semibold tracking-wider shadow-md hover:bg-red-600 transition-colors duration-300 ease-in-out">
                Vinasai AI
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl text-white">
            Transform Your Business with Intelligent Solutions
          </h1>
          {/* Subheading */}
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white">
            Vinasai delivers custom artificial intelligence solutions that drive real business outcomes. Our enterprise-grade AI services help you automate processes, gain actionable insights, and create exceptional customer experiences.
          </p>
        </div>
      </div>
    </section>
  );
}