import React, { useState } from 'react';

export default function Team() {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status
  const [selectedMember, setSelectedMember] = useState<any>(null); // State to track the selected member for the modal

  const team = [
    { name: "Alex Thompson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80", bio: "Alex is a visionary leader with over 10 years of experience in the tech industry." },
    { name: "Emma Wilson", role: "CTO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80", bio: "Emma leads our tech innovations with a strong background in software engineering." },
    { name: "David Chen", role: "Lead Developer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80", bio: "David manages all major product developments at our company." },
    { name: "Sophie Martinez", role: "UX Designer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80", bio: "Sophie ensures our products offer the best user experience." },
    { name: "Michael Johnson", role: "Marketing Head", image: "https://images.unsplash.com/photo-1590086782792-6f3d17a35df7?auto=format&fit=crop&w=400&q=80", bio: "Michael crafts the marketing strategies for the company." },
    { name: "Lisa Brown", role: "Project Manager", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80", bio: "Lisa manages projects efficiently, ensuring smooth execution." },
    { name: "Daniel White", role: "Data Scientist", image: "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=400&q=80", bio: "Daniel analyzes data to provide insights that drive our decisions." },
    { name: "Sophia Lee", role: "HR Manager", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80", bio: "Sophia handles recruitment and HR policies for the team." }
  ];

  // Function to close the modal
  const closeModal = () => setSelectedMember(null);

  return (
    <section id="team" className="py-20 bg-red-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}  // Set hover to true when mouse enters
          onMouseLeave={() => setIsHovered(false)} // Set hover to false when mouse leaves
        >
          <div
            className={`team-slider flex ${isHovered ? 'paused' : ''}`} // Apply 'paused' class based on hover
          >
            {team.map((member, index) => (
              <div key={index} className="text-center p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover cursor-pointer"
                  onClick={() => setSelectedMember(member)} // Open modal with selected member
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
            {/* Duplicate the team items to create an infinite loop effect */}
            {team.map((member, index) => (
              <div key={index + team.length} className="text-center p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover cursor-pointer"
                  onClick={() => setSelectedMember(member)} // Open modal with selected member
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for displaying team member details */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-white rounded-lg p-8 w-96"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <h2 className="text-3xl font-semibold mb-4">{selectedMember.name}</h2>
            <p className="text-xl text-gray-700 mb-4">{selectedMember.role}</p>
            <p className="text-lg text-gray-500">{selectedMember.bio}</p>
            <button
              className="mt-6 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              onClick={closeModal} // Close modal when clicking the close button
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
