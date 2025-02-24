import { useState } from 'react';
import { Twitter, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null); 


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  interface EmailJSResponse {
    status: number;
    text: string;
  }

  interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement;
  }

  const handleSubmit = (e: FormSubmitEvent): void => {
    e.preventDefault();

    // Replace with your own EmailJS userID, templateID, and serviceID
    emailjs
      .sendForm('service_id', 'template_id', e.target, 'user_id')
      .then(
        (_result: EmailJSResponse) => {
          setStatus('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (_error: Error) => {
          setStatus('Error sending message. Please try again later.');
        }
      );
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
              <p className="text-red-500 transition-colors hover:text-red-600">
                VINASAI builds top-notch development processes to bring your big ideas to life. Whether you need to grow your in-house team or require help with development, testing, or app support, we've got you covered.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-red-500 hover:text-red-600 transition-colors">Home</a></li>
                <li><a href="#services" className="text-red-500 hover:text-red-600 transition-colors">Services</a></li>
                {/* <li><a href="#about-us" className="text-red-500 hover:text-red-600 transition-colors">About Us</a></li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/share/19ktp8nNvM/" className="text-red-500 hover:text-red-600 transition-colors transform hover:scale-110">
                  <Facebook className="h-7 w-7" />
                </a>
                <a href="https://www.instagram.com/vinasai.ca?igsh=MTYwN2dxbm5nc29jNw==" className="text-red-500 hover:text-red-600 transition-colors transform hover:scale-110">
                  <Instagram className="h-7 w-7" />
                </a>
                <a href="https://www.linkedin.com/company/vinasai/" className="text-red-500 hover:text-red-600 transition-colors transform hover:scale-110">
                  <Linkedin className="h-7 w-7" />
                </a>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-red-600">Contact Details</h4>
                <p className="text-red-500 mt-2">Phone: +1 (416) 633-3628</p>
                <p className="text-red-500">Email: <a href="mailto:info@vinasai.com" className="hover:text-red-600">info@vinasai.com</a></p>
              </div>
            </div>
            
            {/* Send Message Form */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Send Us a Message</h3>
              {status && (
              <p className="mb-4 text-red-600 text-center font-medium animate-pulse px-4 py-2 rounded-md bg-red-50">
                {status}
              </p>
            )}
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
            </div>
          </div>
          <div className="border-t-4 border-red-600 mt-8 pt-8 text-center text-red-500">
            <p>&copy; {new Date().getFullYear()} VINASAI. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}