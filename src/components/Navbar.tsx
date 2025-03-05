import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import company_logo from "../assets/company_logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation(); 
  const navigate = useNavigate(); 
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Handle navigation to Home Page with scroll target
  const handleHomePageNavigation = (targetId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } }); 
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsServicesOpen(false); 
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
            <div key={item} className="relative">
              {item === "Services" ? (
                <div className="relative" ref={servicesRef}>
                  <button
                    onClick={toggleServicesDropdown}
                    className="text-gray-700 hover:text-red-600 transition-all duration-300 text-lg font-medium flex items-center"
                  >
                    {item}
                    <ChevronDown className={`h-5 w-5 ml-1 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg shadow-red-500/50 animate-fadeIn">
                      <Link
                        to="/ai" 
                        className="block px-4 py-2 text-gray-700 hover:text-red-600 transition-all duration-300 text-lg font-medium"
                        onClick={() => setIsServicesOpen(false)} 
                      >
                        AI & ML
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleHomePageNavigation(item.toLowerCase())} 
                  className="text-gray-700 hover:text-red-600 transition-all duration-300 text-lg font-medium"
                >
                  {item}
                </button>
              )}
            </div>
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
            <div key={item} className="w-full text-center">
              {item === "Services" ? (
                <div className="relative" ref={servicesRef}>
                  <button
                    onClick={toggleServicesDropdown}
                    className="text-gray-700 hover:text-red-600 transition-all duration-300 text-lg font-medium flex items-center justify-center w-full"
                  >
                    {item}
                    <ChevronDown className={`h-5 w-5 ml-1 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 w-full bg-white/80 backdrop-blur-lg rounded-lg shadow-lg shadow-red-500/50 animate-fadeIn">
                      <Link
                        to="/ai" 
                        className="block px-4 py-2 text-gray-700 hover:text-red-600 transition-all duration-300 text-lg font-medium"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Artificial Intelligence
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleHomePageNavigation(item.toLowerCase())} 
                  className="text-gray-700 hover:text-red-600 transition-all duration-300 text-lg font-medium"
                >
                  {item}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}