import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white min-h-screen space-y-10 md:space-y-0">
        
        {/* Left - Contact Form */}
        <div className="max-w-md w-full text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">
            Contact Us
          </h2>

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
              placeholder="Describe your message"
              rows={4}
              className="w-full border-b border-red-400 focus:outline-none focus:border-red-500 py-2 text-gray-700 resize-none"
            />

            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Responsive Phone Images */}
        <div className="flex space-x-6 md:ml-16 justify-center">
          <img
            src="https://i.imgur.com/mbZ87h8.png"
            alt="Phone screen"
            className="w-32 sm:w-40 md:w-48 rounded-3xl shadow-lg rotate-12"
          />

          <img
            src="https://i.imgur.com/uYwCl5I.png"
            alt="Phone screen"
            className="w-32 sm:w-40 md:w-48 rounded-3xl shadow-lg -rotate-6"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
