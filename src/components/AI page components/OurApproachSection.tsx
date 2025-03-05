import React from 'react';

// Custom SVG Icons
const Icons = {
  Discovery: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-red-500 w-8 h-8">
      <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  ),
  Strategy: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-red-500 w-8 h-8">
      <path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 16H5V5h14v14zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-1 4h2v-2h-2v2z"/>
    </svg>
  ),
  DataAssessment: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-red-500 w-8 h-8">
      <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>
  ),
  ProofOfConcept: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-red-500 w-8 h-8">
      <path fill="currentColor" d="M12 2C6.69 2 2 6.69 2 12s4.69 10 10 10 10-4.69 10-10S17.31 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </svg>
  ),
  EthicalAI: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-red-500 w-8 h-8">
      <path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
  ),
  Development: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-red-500 w-8 h-8">
      <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </svg>
  ),
  Implementation: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-red-500 w-8 h-8">
      <path fill="currentColor" d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
    </svg>
  ),
  Optimization: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-red-500 w-8 h-8">
      <path fill="currentColor" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
    </svg>
  )
};

// Approach Card Component
const ApproachCard = ({ title, description }) => {
  // Dynamically select icon based on title
  const IconComponent = Icons[title.replace(/\s+/g, '')] || Icons.Discovery;

  return (
    <div className="group bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl space-y-4 border-2">
      <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mx-auto mb-4">
        <IconComponent />
      </div>
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-center text-sm">
        {description}
      </p>
    </div>
  );
};

export default function OurApproachSection() {
  const approachData = [
    {
      title: "Discovery",
      description: "We begin by thoroughly understanding your business, challenges, and goals. Our team conducts in-depth analysis to identify opportunities where AI can create the most value."
    },
    {
      title: "Strategy",
      description: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs, outlining expected outcomes and implementation roadmap."
    },
    {
      title: "Data Assessment",
      description: "We evaluate your existing data infrastructure to evaluate quality and identify gaps. Our team ensures you have strong data foundations to power effective AI solutions."
    },
    {
      title: "Proof of Concept",
      description: "Before full-scale implementation, we develop and test rapid prototypes that validate our approach and demonstrate tangible value, allowing for adjustments and optimization."
    },
    {
      title: "Ethical AI Integration",
      description: "We prioritize responsible AI development, ensuring transparency, fairness, and privacy in all our solutions while aligning with your organizational values and compliance requirements."
    },
    {
      title: "Development",
      description: "Our expert team builds custom AI solutions using cutting-edge technologies, ensuring scalability, security, and performance."
    },
    {
      title: "Implementation",
      description: "We seamlessly integrate our solutions into your existing systems and workflows, minimizing disruption while maximizing impact."
    },
    {
      title: "Optimization",
      description: "We continuously monitor, test, and refine our solutions to ensure optimal performance and help you adapt to changing business needs."
    }
  ];

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Approach
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachData.map((approach, index) => (
            <ApproachCard 
              key={index}
              title={approach.title}
              description={approach.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}