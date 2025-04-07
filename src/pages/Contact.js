import React from "react";

function Contact() {
  return (
    <div
      className="bg-black text-white min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 mt-auto"
    >
      <div className="w-full max-w-4xl text-center bg-black bg-opacity-80 p-8 rounded-2xl shadow-lg md:bg-opacity-90 md:backdrop-blur-sm md:rounded-3xl md:shadow-xl sm:bg-opacity-100 sm:backdrop-blur-none sm:shadow-none">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#C6962C] mb-8">
          Get in Touch
        </h1>
        <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
          Whether you're ready to join, have questions, or just want to say hi — we'd love to connect with you.
        </p>

        <div className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-8 text-left shadow-md max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#C6962C] mb-4">Visit Us</h2>
          <p className="mb-4">📍 201-2544 Enterprise Way, Kelowna, BC</p>

          <h2 className="text-2xl font-bold text-[#C6962C] mb-4 mt-8">Call or Email</h2>
          <p className="mb-2">📞 (250) 793-7477</p>
          <p className="mb-2">📧 info@therealmfitnesskelowna.com</p>

          <h2 className="text-2xl font-bold text-[#C6962C] mb-4 mt-8">Hours</h2>
          <p className="mb-1">🕒 Open 24/7 for Members</p>
          <p className="mb-1">🗓️ Staffed Hours:</p>
          <ul className="list-disc list-inside ml-2">
            <li>Monday – Friday: 6am – 10pm</li>
            <li>Saturday – Sunday: 8am – 4pm</li>
            <li>Stat Holidays: 8am – 8pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
