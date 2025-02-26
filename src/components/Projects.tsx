import React, { useState } from 'react';
import img1 from '../assets/projects/qrbook.png'; 
import img2 from '../assets/projects/flyplaces.png'; 
import img3 from '../assets/projects/geethaanjalie.png'; 
import img4 from '../assets/projects/goldenproduce.png'; 
import img5 from '../assets/projects/prime.png'; 
import img6 from '../assets/projects/procleancanada.png'; 


export default function Projects() {
  const [filter, setFilter] = useState("All");
  
  const projects = [
    {
      title: "QR Book",
      desc: "Portfolio QR code generator for modern digital business cards",
      category: "Web System",
      image: img1,
      link: "https://qrbook.ca/"
    },
    {
      title: "Flyplaces",
      desc: "Booking engine + websites for flights and holidays",
      category: "Web System",
      image: img2,
      link: "https://travelworth.ca/"
    },
    {
      title: "Procleancanada",
      desc: "Canadian cleaning agency website with services showcase and booking",
      category: "Static Web",
      image: img6,
      link: "https://procleancanada.ca/"
    },

    {
      title: "Geethaanjalie",
      desc: "Web-based student management system for Australian music class",
      category: "Web System",
      image: img3,
      link: "https://geethaanjalie.com/index"
    },

    {
      title: "Golden Produce",
      desc: "E-commerce platform for fresh grocery delivery and online shopping",
      category: "Web System",
      image: img4,
      link: "#"
    },

    {
      title: "Primeville",
      desc: "Construction company website showcasing projects and services",
      category: "Static Web",
      image: img5,
      link: "https://primeville.ca/"
    }
  ];
  
  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 bg-red-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#FF2A53] mb-8">Our Projects</h2>
        
        {/* Navigation */}
        <div className="mb-8 flex justify-center space-x-4">
          {["All", "Static Web", "Web System"].map(category => (
            <button 
              key={category} 
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${filter === category ? "bg-[#FF2A53] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg group"
            >
              {/* Details container */}
              <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.desc}</p>
                <span className="text-red-400 hover:text-red-600 transition-colors">
                  View Project
                </span>
              </div>
  
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:opacity-50 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

