import React from 'react';
import backgroundVideo from '../../assets/AI-page/background-video.mp4';

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute z-0 w-full h-full object-cover"
      >
        <source 
          src={backgroundVideo}
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute z-1 w-full h-full bg-black opacity-50"></div>

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
          <p className="text-xl mb-8 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
            Vinasai delivers custom artificial intelligence solutions that drive real business outcomes. Our enterprise-grade AI services help you automate processes, gain actionable insights, and create exceptional customer experiences.
          </p>
        </div>
      </div>
    </section>
  );
}