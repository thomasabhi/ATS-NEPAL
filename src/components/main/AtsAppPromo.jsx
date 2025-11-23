import React from 'react';
import handPhoneImg from "../../assets/handPhoneImage.png";
const ATSAppPromo = () => {
  return (
    <section className="flex items-center justify-between px-16 py-12 bg-gray-100">
      {/* Text Section */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Get the ATS App Today
        </h1>
        <p className="text-gray-700 mb-6">
          Take full control of your vehicle’s safety and parking experience anytime,
          anywhere with the ATS mobile app. Enjoy real-time updates, seamless communication,
          and easy access to essential features designed to protect your vehicle and give you peace
          of mind on the go.
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.aksoment.ats&hl=en', '_blank')}
        >
          Download App
        </button>
      </div>
      
      {/* Image Section */}
      <div className="flex-shrink-0 ml-12">
        <img
          src={handPhoneImg} // Replace with actual image URL
          alt="Hand holding phone with ATS Nepal app"
          className="rounded-3xl h-[600px] w-[300px] object-cover"
        />
      </div>
    </section>
  );
};

export default ATSAppPromo;
