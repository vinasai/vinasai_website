import React from "react";
import logo from '../assets/ai.png'; 

const Description: React.FC = () => {
  return (
    <section id="decription" className="py-20 bg-red-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Side - Image (1/3 width) */}
          <div className="flex justify-center md:col-span-1">
            <img 
              src={logo}
              alt="AI Illustration"
              className="w-full max-w-xs md:max-w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right Side - Text (2/3 width) */}
          <div className="md:col-span-2">
            <h2 className="text-5xl font-extrabold text-gray-700 text-center md:text-left mb-6">
              Transforming Businesses with Smart AI-Powered Solutions
            </h2>
            <p className="text-center md:text-left text-xl text-gray-700 mb-8">
            We are passionate AI innovators empowering businesses with intelligent solutions, enhancing engagement, streamlining operations, and unlocking growth opportunities through cutting-edge technology in the digital era."
            <br/>
            <br/>
              Unlock the power of AI to transform your business with cutting-edge solutions tailored for the digital age. Our advanced AI-driven services provide seamless support across industries, including travel and tourism, online restaurant management, web and mobile applications, and the Internet of Things (IoT). Whether enhancing customer experiences, automating operations, or optimizing decision-making, our intelligent solutions drive efficiency and growth. Elevate your business with AI-powered innovation today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
