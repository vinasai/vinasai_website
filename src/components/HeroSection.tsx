import React from 'react';
import { ChevronRight } from 'lucide-react';
import logo from '../assets/company_logo.png';
import backgroundVideo from '../assets/banner-video.mp4'; 

export default function HeroSection() {
  // Function to scroll to the appointment section
  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        className="absolute z-0 min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source 
          src={backgroundVideo} 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-1"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className="flex flex-col items-center">
          <div className="mb-6 animate__animated animate__fadeIn animate__delay-1s">
            <img 
              src={logo} 
              alt="Company Logo" 
              className="w-80 h-auto mb-4 animate__animated animate__fadeIn" 
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Building The Future <span className="text-red-300">Together</span>
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
            VINASAI crafts top-notch development, turning ideas into reality.
          </p>
          
          <button
            className="bg-red-300 text-black px-8 py-3 rounded-full hover:bg-red-400 transition-colors flex items-center animate__animated animate__fadeIn animate__delay-2s"
            onClick={scrollToAppointment}
          >
            Get Started <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}