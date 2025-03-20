import React from 'react';
import { Star } from 'lucide-react';
import TrustBoxContainer from './TrustPilot';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maya R",
      role: "CTO @ NextGen HealthTech",
      text: "Working with VINASAI was like unlocking a secret weapon for our startup. They transformed our half-baked concept into a market-ready app in just 12 weeks. Their team seamlessly integrated with ours, filling skill gaps we didn’t even realize we had. Now, we’re scaling faster than we ever imagined. If innovation had a name, it’d be VINASAI!",
      rating: 5
    },
    {
      name: "Raj P.",
      role: "Product Lead @ Finova Solutions",
      text: "We thought ‘top-notch development’ was just a buzzword—until VINASAI proved us wrong. Their testing rigor caught critical flaws our in-house team missed, saving us six months of post-launch headaches. Their app support team? Always two steps ahead. Trust isn’t earned overnight, but they did it in 90 days.",
      rating: 5
    },
    {
      name: "Chenthu",
      role: "Chef",
      text: "Working with VINASAI was an exceptional experience. They captured my vision perfectly, creating a website that truly reflects my culinary journey and passion. The design is elegant, user-friendly, and visually stunning. Their professionalism, attention to detail, and creativity are unmatched. I highly recommend vinasai, to anyone looking to bring their brand to life online!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-red-50 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#FF2A53]">Client Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-lg italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-xl text-gray-800">{testimonial.name}</p>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-4 text-[#FF2A53]">What Our Clients Say On TrustPilot</h3>
          <div className="relative px-6 py-4 bg-gradient-to-r from-red-50 to-white rounded-lg">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#FF2A53] rounded-full flex items-center justify-center text-white font-bold">
              ★
            </div>
            <TrustBoxContainer />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-[#FF2A53] rounded-full flex items-center justify-center text-white font-bold">
              ★
            </div>
          </div>
        </div>
        
        {/* Trustpilot Widget with proper React className and styling
        <div className="mt-12 flex justify-center">
          <div 
            className="trustpilot-widget" 
            data-locale="en-US" 
            data-template-id="56278e9abfbbba0bdcd568bc" 
            data-businessunit-id="67dafec107f885f02f1e78b0" 
            data-style-height="52px" 
            data-style-width="100%"
          >
            <a href="https://www.trustpilot.com/review/vinasai.ca" target="_blank" rel="noopener">
              Trustpilot
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
