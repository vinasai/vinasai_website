import React, { useEffect } from 'react';
import logo from '../assets/girl2.png'; 

export default function BookAppointment() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://calendar.google.com/calendar/scheduling-button-script.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
      script.async = true;
      document.body.appendChild(script);

      const link = document.createElement('link');
      link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      script.onload = () => {
        const target = document.getElementById('google-calendar-btn');

        if (target && window?.calendar?.schedulingButton) {
          window.calendar.schedulingButton.load({
            url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zbkDZ5JMDOF568H6xqtftUcL9Jz4wo878A_H-dW4UQH1fNLX0kMPKJMFFZSuhIVtZskXH-mHv?gv=true',
            color: '#ec1a1a',
            label: 'Book an Appointment Now',
            target,
          });
        }
      };
    }
  }, []);

  return (
    <section id="appointment" className="py-20 bg-red-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* Left Side - Text & Button (2/3) */}
          <div className="col-span-2 text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Schedule Your Consultation Today!
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Don't wait—secure your spot now! Pick a time that works for you, and we'll handle the rest. Fast, easy, and stress-free!
            </p>
            <div className="flex justify-center md:justify-start">
              <div 
                id="google-calendar-btn" 
                className="rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl border border-red-300 bg-white">
              </div>
            </div>
          </div>
  
          {/* Right Side - Image (1/3) */}
          <div className="col-span-1 flex justify-center md:justify-end">
            <img 
              src={logo}
              alt="Booking Illustration"
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}