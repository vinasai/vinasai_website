import React, { useEffect } from 'react';

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
            label: 'Book an appointment',
            target,
          });
        }
      };
    }
  }, []);

  return (
    <section id="appointment" className="py-20 bg-gradient-to-b from-red-600 to-red-800">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-white text-center mb-6 animate__animated animate__fadeIn">
          Book Your Appointment
        </h2>
        <p className="text-center text-xl text-white mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Choose a time that works best for you, and we'll confirm your appointment shortly.
        </p>
        <div className="flex justify-center">
          <div id="google-calendar-btn" className="rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl"></div>
        </div>
      </div>
    </section>
  );
}
