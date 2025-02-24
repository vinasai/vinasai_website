import React from 'react';
import { Star } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-b from-red-400 to-red-600">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg animate-on-scroll">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}