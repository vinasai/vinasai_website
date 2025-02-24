import  { useState } from 'react';
import procleancanada from '../assets/projects/procleancanada.png';
import qrbook from '../assets/projects/qrbook.png';
import prime from '../assets/projects/prime.png';
import flyplaces from '../assets/projects/flyplaces.png';
import geethaanjalie from '../assets/projects/geethaanjalie.png';
import goldenproduce from '../assets/projects/goldenproduce.png';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const projects = [
    {
      title: "QR Book",
      desc: "Portfolio QR code generator for modern digital business cards",
      image: qrbook,
      link: "https://qrbook.ca/",
      category: "web systems"
    },
    {
      title: "Flyplaces",
      desc: "Booking engine + website for flights and holydays.",
      image: flyplaces,
      link: "https://travelworth.ca/",
      category: "web systems"
    },
    {
      title: "Procleancanada",
      desc: "Canadian cleaning agency website with service showcase and booking",
      image: procleancanada,
      link: "https://Procleancanada.ca",
      category: "static websites"
    },
    {
      title: "Geethaanjalie",
      desc: "Web-based student management system for Australian music class",
      image: geethaanjalie,
      link: "https://Geethaanjalie.com",
      category: "web systems"
    },
    {
      title: "Golden Produce",
      desc: "E-commerce platform for fresh grocery delivery and online shopping",
      image: goldenproduce,
      link: "#",
      category: "web systems"
    },
    {
      title: "Primeville",
      desc: "Construction company website showcasing projects and services",
      image: prime,
      link: "https://Primeville.ca",
      category: "static websites"
    }
  ];

  const categories = ['all', 'static websites', 'web systems'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

    return (
      <section id="projects" className="py-12 md:py-20 bg-gradient-to-b from-red-600 to-red-400">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">Our Projects</h2>
        
         {/* Mobile Dropdown */}
         <div className="sm:hidden mb-6 relative">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-4 pr-10 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 focus:border-white focus:ring-2 focus:ring-white focus:outline-none appearance-none transition-all duration-300"
            >
              {categories.map(category => (
                <option 
                  key={category} 
                  value={category}
                  className="bg-red-600 text-white"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg 
                className="w-5 h-5 text-white/80"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </div>
          </div>
        </div>

       {/* Desktop Filter Buttons */}
       <div className="hidden sm:flex justify-center gap-4 mb-8 sm:mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-red-600 ring-2 ring-white'
                  : 'text-white hover:bg-white/20 hover:ring-1 hover:ring-white/30'
              } capitalize font-semibold`}
            >
              {category}
            </button>
          ))}
        </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl 
                  shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="h-64 sm:h-72 md:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 
                      transition-transform duration-500"
                  />
                </div>
                
                {/* Mobile-optimized overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
                  opacity-0 group-hover:opacity-100 md:transition-opacity md:duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 
                    translate-y-2 group-hover:translate-y-0 md:transition-transform md:duration-500">
                    <span className="bg-white/10 text-white px-2.5 py-1 rounded-full 
                      text-xs sm:text-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-2 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                  
                  {/* Corner Decoration - Hidden on mobile */}
                  <div className="hidden md:block absolute top-4 right-4 w-10 h-10 
                    border-2 border-white/30 rounded-full opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
  
                {/* Touch-friendly link */}
                <a 
                  href={project.link} 
                  target={'_blank'}
                  className="absolute inset-0 z-10 cursor-pointer"
                  aria-label={`View ${project.title} project`}
                ></a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }