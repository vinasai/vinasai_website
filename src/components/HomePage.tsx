import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
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
  const location = useLocation(); 

  useEffect(() => {
    // Scroll to the target component if state exists
    if (location.state?.scrollTo) {
      const targetElement = document.getElementById(location.state.scrollTo);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Intersection Observer for animations
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
  }, [location.state]); 

  return (
    <div className="min-h-screen bg-white" id="home">
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