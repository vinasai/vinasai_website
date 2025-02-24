import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import company_logo from "../assets/company_logo.png"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] bg-white/80 backdrop-blur-lg 
      shadow-xl shadow-white-300/50 rounded-[2.5rem] px-6 py-3 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
    
        <div className="flex items-center ml-6">
          <img src={company_logo} alt="Company Logo" className="h-10 w-auto" />
        </div>

       
        <div className="hidden md:flex justify-center flex-1 space-x-8">
          {["Home", "Services", "Projects", "Appointment", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-red-600 transition-all duration-300 text-lg font-medium"
              onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
            >
              {item}
            </a>
          ))}
        </div>

    
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-8 w-8 text-red-600" /> : <Menu className="h-8 w-8 text-red-600" />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4 bg-white/80 backdrop-blur-lg rounded-xl p-4 shadow-md shadow-red-500/50 animate-fadeIn">
          {["Home", "Services", "Projects", "Appointment", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-red-600 transition-all duration-300 text-lg font-medium"
              onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
