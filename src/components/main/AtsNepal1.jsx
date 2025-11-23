import React from "react";
import atsMobileImage from "../../assets/ats-mobile.png"


export default function AtsNepalAppUI() {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 py-16">
      {/* Left Side - Hand holding phone */}
      <div className="flex justify-center md:w-1/2">
        <img
          src={atsMobileImage}
          alt="ATS Nepal App on phone"
          className="w-[280px] md:w-[320px]  rounded-3xl shadow-lg"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="md:w-1/2 max-w-xl text-center md:text-left mt-12 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          From Anywhere, To Everywhere!
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          From expiry reminders to parking, towing, insurance, and more manage
          everything from your phone with the ATS Nepal app.
        </p>
      </div>
    </section>
  );
}
