import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null); // For status messages

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact">
      <footer className="bg-white text-red-600 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-red-600 text-3xl font-bold">VINASAI</span>
              </div>
              <p className="text-black transition-colors hover:text-red-600">
                VINASAI builds top-notch development processes to bring your big ideas to life. Whether you need to grow your in-house team or require help with development, testing, or app support, we've got you covered.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-black hover:text-red-600 transition-colors">Home</a></li>
                <li><a href="#services" className="text-black hover:text-red-600 transition-colors">Services</a></li>
                <li><a href="#about-us" className="text-black hover:text-red-600 transition-colors">About Us</a></li>
                <li><a href="#showcase" className="text-black hover:text-red-600 transition-colors">Showcase</a></li>
                <li><a href="#feedbacks" className="text-black hover:text-red-600 transition-colors">Feedbacks</a></li>
                <li><a href="#explore" className="text-black hover:text-red-600 transition-colors">Explore</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/share/15y59Vb3AV/" className="text-black hover:text-red-600 transition-colors transform hover:scale-110">Facebook</a>
                <a href="https://www.instagram.com/vinasai_inc?igsh=bjhxNjh3M25jemZx&utm_source=qr" className="text-black hover:text-red-600 transition-colors transform hover:scale-110">Instagram</a>
                <a href="https://www.linkedin.com/company/vinasai/posts/?feedView=all" className="text-black hover:text-red-600 transition-colors transform hover:scale-110">LinkedIn</a>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-red-600">Contact Details</h4>
                <p className="text-black mt-2">Phone: <a href="tel:+14166333628" className="hover:text-red-600">+1 (416) 633-3628</a></p>
                <p className="text-black">Email: <a href="mailto:info@vinasai.ca" className="hover:text-red-600">info@vinasai.ca</a></p>
              </div>
            </div>
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
              {status && (
                <p className="mt-4 text-center text-red-600">{status}</p>
              )}
            </div>
          </div>
          <div className="border-t-4 border-red-600 mt-8 pt-8 text-center text-black">
            <p>&copy; 2024 VINASAI. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
