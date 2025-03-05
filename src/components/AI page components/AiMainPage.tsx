import React, { useEffect } from 'react';
import Navbar from '../Navbar'
import HeroSection from './HeroSection';
import OurApproachSection from './OurApproachSection';
import KeyPointsSection from './KeyPointsSection';
import TechStackSection from './TechStackSection';
import WhyChooseVinasaiSection from './WhyChooseVinasaiSection';
import Footer from '../Footer';

export default function AiMainPage() {
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
    <div className="min-h-screen bg-white" id="ai">
      <Navbar />     
      <HeroSection/>
      <OurApproachSection/>
      <KeyPointsSection/>
      <TechStackSection/>
      <WhyChooseVinasaiSection/>
      <Footer />
    </div>
  );
}