import React from 'react';
import teamImage from '../../assets/AI-Group.jpg' 

export default function WhyChooseVinasaiSection() {
  return (
    <section className="py-16 bg-white w-full n">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Container */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={teamImage} 
                  alt="Vinasai Team" 
                  className="rounded-full object-cover w-full h-full shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Vinasai AI
            </h2>
            
            <div className="space-y-4 text-gray-600 w-full md:w-3/4 mx-auto md:mx-0 text-justify">
              <p>
                Our expert team brings together technical prowess and business insight 
                to create customized AI solutions that tackle your unique challenges. 
                We don't force generic approaches - every system is precisely crafted to 
                meet your specific needs and goals.
              </p>
              
              <p>
                We build relationships on transparency and partnership, maintaining 
                open communication throughout every project phase. Your success 
                drives our commitment, as we work alongside you to support 
                sustainable growth and innovation through intelligent technology 
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}