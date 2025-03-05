import React from 'react';

// Custom SVG Icons for Key Points (Using Heroicons)
const Icons = {
  IntelligentAutomation: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  PredictiveAnalytics: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  ConversationalAI: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  ComputerVisionSolutions: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
};

const KeyPointCard = ({ title, description, iconName }) => {
  const IconComponent = Icons[iconName];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center space-y-4 border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="mb-4">
        <IconComponent />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
};

export default function KeyPointsSection() {
  const keyPointsData = [
    {
      title: "Intelligent Automation",
      description: "Streamline operations and reduce manual tasks with our AI-powered solutions. From document processing to workflow optimization, we help you focus on what matters most.",
      iconName: "IntelligentAutomation"
    },
    {
      title: "Predictive Analytics",
      description: "Leverage the power of your data to forecast trends, identify opportunities, and mitigate risks. Our predictive models deliver actionable insights that drive strategic decisions.",
      iconName: "PredictiveAnalytics"
    },
    {
      title: "Conversational AI",
      description: "Enhance customer experiences with sophisticated chatbots and virtual assistants that understand natural language, learn from interactions, and provide personalized support.",
      iconName: "ConversationalAI"
    },
    {
      title: "Computer Vision Solutions",
      description: "Transform visual data into valuable insights with our advanced image recognition and processing capabilities. Ideal for quality control, security, and asset management.",
      iconName: "ComputerVisionSolutions"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Key Points
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyPointsData.map((point, index) => (
            <KeyPointCard 
              key={index}
              title={point.title}
              description={point.description}
              iconName={point.iconName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}