import React from 'react';
import OpenAILogo from '../../assets/AI-page/openai-logo.png';
import PythonLogo from '../../assets/AI-page/python-logo.png';
import LangChainLogo from '../../assets/AI-page/langchain-logo.png';
import TensorFlowLogo from '../../assets/AI-page/tensorflow-logo.png';
import PyTorchLogo from '../../assets/AI-page/pytorch-logo.png';
import AzureLogo from '../../assets/AI-page/azure-logo.png';

export default function TechStackSection() {
  const techLogos = [
    { name: 'OpenAI', logo: OpenAILogo },
    { name: 'PyTorch', logo: PyTorchLogo },
    { name: 'LangChain', logo: LangChainLogo },
    { name: 'TensorFlow', logo: TensorFlowLogo },
    { name: 'Python', logo: PythonLogo },
    { name: 'Azure', logo: AzureLogo },
  ];

  return (
    <section className="py-16 bg-red-50 w-full h-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Description */}
            <div className="md:w-1/2 text-center md:text-left md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tech Stack
              </h2>
              <p className="text-gray-600 w-full md:w-4/5 mx-auto md:mx-0 text-justify">
              Our AI capabilities are powered by a specialized tech stack including natural language processing frameworks, computer vision libraries, and machine learning toolkits. We implement transformer-based models for language understanding, deep neural networks for pattern recognition, and reinforcement learning systems for adaptive solutions. Our stack includes MLOps tools for model deployment, vector databases for embeddings storage, and custom inference engines for optimized performance. This comprehensive AI infrastructure allows us to deliver sophisticated intelligent solutions across various domains.
              </p>
            </div>

          {/* Right Side: Logos */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-8 items-center justify-center">
              {techLogos.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} Logo`}
                    className="max-h-12 max-w-[140px] object-contain" // Reduced size
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}