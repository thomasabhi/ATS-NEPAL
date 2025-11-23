import React from "react";
import image from "../../assets/atsImage.jpeg"

const ContactMainPage = () => {
  return (
    <section className="flex items-center justify-between px-16 py-12 bg-white min-h-screen">
      {/* Left - Contact Form */}
      <div className="max-w-md w-full">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Contact Us</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border-b border-red-400 focus:outline-none focus:border-red-500 py-2 text-gray-700"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border-b border-red-400 focus:outline-none focus:border-red-500 py-2 text-gray-700"
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border-b border-red-400 focus:outline-none focus:border-red-500 py-2 text-gray-700"
          />
          <textarea
            placeholder="Describe your Message"
            rows={4}
            className="w-full border-b border-red-400 focus:outline-none focus:border-red-500 py-2 text-gray-700 resize-none"
          />
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right - Phone Images */}

<div className="flex space-x-6 ml-16">
  <img
    src={image} // Replace with first phone image URL or React variable
    alt="Phone displaying insurance info screen"
    className="w-44 rounded-3xl shadow-lg"
    style={{ transform: 'rotate(35deg)', transformOrigin: 'bottom left' }}
  />
  <img
    src={image} // Replace with second phone image URL or React variable
    alt="Phone displaying add new vehicle screen"
    className="w-44 rounded-3xl shadow-lg"
    style={{ transform: 'rotate(0deg)', transformOrigin: 'bottom right' }}
  />
</div>
    </section>
  );
};

export default ContactMainPage;
