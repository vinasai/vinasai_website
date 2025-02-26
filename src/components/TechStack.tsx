import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Brain, Database, Cloud, Smartphone, Link, Megaphone, Briefcase } from "lucide-react";
import img1 from '../assets/ai.jpg'; 
import img2 from '../assets/t.jpg'; 
import img3 from '../assets/i.jpg'; 

export default function TechStack() {
  const services = [
    { icon: <Database className="h-12 w-12 text-[#FF2A53]" />, title: "API Development", desc: "Comprehensive API development services for scalable solutions." },
    { icon: <Cloud className="h-12 w-12 text-[#FF2A53]" />, title: "Salesforce Services", desc: "End-to-end Salesforce solutions for business optimization." },
    { icon: <Smartphone className="h-12 w-12 text-[#FF2A53]" />, title: "MuleSoft Services", desc: "Robust MuleSoft integrations for seamless connectivity." },
    { icon: <Megaphone className="h-12 w-12 text-[#FF2A53]" />, title: "Digital Marketing", desc: "Boosting your brand's digital reach." },
    { icon: <Briefcase className="h-12 w-12 text-[#FF2A53]" />, title: "Business Consultancy", desc: "Empower your business with expert guidance." }
  ];

  return (
    <section id="services" className="py-12 bg-red-50">
      <div className="bg-gradient-to-b from-pink-100 to-white py-12 px-6 text-center flex justify-center items-center">
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl font-extrabold text-center text-[#FF2A53] mb-6 pb-10">
            Customized IT Services to Elevate Your Business 
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center lg:w-[1300px] w-full mx-auto">
              <div
                className="flex flex-col items-center text-center w-full p-6 bg-black rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-2 border-red-500 hover:shadow-lg hover:shadow-[#FF2A53] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${img1})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                <Brain className="h-12 w-12 text-[#FF2A53] relative z-10" />
                <h3 className="text-xl font-semibold mb-2 text-white relative z-10"><br />AI Development</h3>
                <p className="text-gray-300 text-sm pt-20 relative z-10">
                  Unlock the power of AI with our innovative services! From intelligent automation to data-driven insights, we provide cutting-edge AI solutions to enhance efficiency, accuracy, and decision-making for businesses and individuals.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mx-auto">
                <div
                  className="flex flex-col items-center text-center w-full sm:w-[600px] h-[300px] p-6 bg-black rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-2 border-red-500 hover:shadow-lg hover:shadow-[#FF2A53] bg-cover bg-center"
                  style={{ backgroundImage: `url(${img2})` }}
                >
                  <Smartphone className="h-12 w-12 text-[#FF2A53]" />
                  <h3 className="text-xl font-semibold mb-2 text-white"><br />Travel and Tourism Support</h3>
                  <p className="text-gray-300 text-sm">
                    We provide full travel support to ensure a smooth and memorable journey. From itinerary planning to booking accommodations and transportation, we make travel stress-free and enjoyable, offering expert guidance every step of the way.
                  </p>
                </div>

                <div
                  className="flex flex-col items-center text-center w-full sm:w-[600px] h-[300px] p-6 bg-black rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-2 border-red-500 hover:shadow-lg hover:shadow-[#FF2A53] bg-cover bg-center"
                  style={{ backgroundImage: `url(${img3})` }}
                >
                  <Link className="h-12 w-12 text-[#FF2A53]" />
                  <h3 className="text-xl font-semibold mb-2 text-white"><br />Internet of Things</h3>
                  <p className="text-gray-300 text-sm">
                    The Internet of Things (IoT) connects devices to collect and share data, enabling smarter, more efficient living. It automates tasks and improves convenience in homes, cities, and industries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              autoplay={{ 
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="overflow-hidden py-12"
            >
              {services.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="flex flex-col items-center text-center w-[90%] max-w-[300px] h-[380px] p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-2 border-red-500 hover:shadow-lg hover:shadow-[#FF2A53]">
                    <div className="flex items-center justify-center w-[90px] h-[90px] bg-gray-100 text-white rounded-full mb-6 transition-all duration-300 ease-in-out hover:bg-red-200">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-lg text-gray-700">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
