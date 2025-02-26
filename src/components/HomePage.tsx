import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TechStack from './TechStack';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
import BookAppointment from './Appointment';
import Description from './Description';

export default function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TechStack />
      <Projects />
      <Description />
      <Testimonials />
      <BookAppointment/>
      <Footer />
     
    </div>
  );
}