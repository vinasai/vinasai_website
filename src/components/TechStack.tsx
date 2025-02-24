import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Database, Cloud, Smartphone, Link, Megaphone, Briefcase } from "lucide-react";
import "./TechStack.css";

export default function TechStack() {
  const services = [
    { icon: <Database className="h-16 w-16 text-white" />, title: "Software Solutions", desc: "Crafting software for innovative progress." },
    { icon: <Cloud className="h-16 w-16 text-white" />, title: "Cloud Services", desc: "Scalable, reliable cloud-based solutions." },
    { icon: <Smartphone className="h-16 w-16 text-white" />, title: "Mobile App Solutions", desc: "Transforming ideas into mobile realities." },
    { icon: <Link className="h-16 w-16 text-white" />, title: "Internet of Things", desc: "Connecting devices for smarter living." },
    { icon: <Megaphone className="h-16 w-16 text-white" />, title: "Digital Marketing", desc: "Boosting your brand's digital reach." },
    { icon: <Briefcase className="h-16 w-16 text-white" />, title: "Business Consultancy", desc: "Empower your business with expert guidance." }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-red-800 to-red-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-white drop-shadow-lg">
          Our Services
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !w-2 !h-2 !rounded-sm !bg-red-200/50 !transition-all !duration-300',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !w-8 !rounded-sm'
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 35 },
          }}
          className="modern-hex-slider pb-16 md:pb-24"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group h-full flex flex-col px-2 sm:px-0">
                <div className="relative hex-glass bg-red-800/40 backdrop-blur-lg border border-red-300/30 rounded-2xl p-4 md:p-6 lg:p-8 transform hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="hex-glow absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl" />
                  
                  {/* Icon Container */}
                  <div className="icon-wrapper mb-3 md:mb-4 mx-auto w-fit relative">
                    <div className="hex-icon bg-gradient-to-br from-red-400 to-red-600 p-2 md:p-3 rounded-lg shadow-md hover:shadow-red-500/30 transition-all duration-300">
                      <item.icon.type {...item.icon.props} className="h-12 w-12 md:h-16 md:w-16 text-white" />
                    </div>
                  </div>
                  
                  {/* Compact Content */}
                  <div className="min-h-[80px] flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-red-50">
                      {item.title}
                    </h3>
                    <p className="text-red-100/90 text-xs md:text-sm leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}