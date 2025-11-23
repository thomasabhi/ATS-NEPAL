import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import atsImageFeature from "../assets/atsImageAbout.jpeg"
import { Link } from 'react-router-dom';

const atsUIScreens = [
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsOA40wsvZjhWGzwhFsgKfOId0je2DtSqaA&s", // Replace with the Profile screen image
        alt: "ATS App Profile Screen for Vijay Shrestha",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsOA40wsvZjhWGzwhFsgKfOId0je2DtSqaA&s", // Replace with the Vehicle Details screen image
        alt: "ATS App Vehicle Details Screen",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsOA40wsvZjhWGzwhFsgKfOId0je2DtSqaA&s", // Replace with the Notifications screen image
        alt: "ATS App Notifications Screen (Alerts and Requests)",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsOA40wsvZjhWGzwhFsgKfOId0je2DtSqaA&s", // Replace with the repeated Vehicle Details screen image
        alt: "ATS App Vehicle Details Screen (Second instance)",
    },
  ];

export default function Features() {
  return (
    <>
  
    <Navbar />
      {/* ================================================================================
        Section 1: Emergency Alerts & Real-Time Notifications 
        ================================================================================
      */}

      <section className="py-12 md:py-24 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl  tracking-tight mb-12">
            Emergency Alerts & Real-Time Notifications
          </h2>

          {/* Image Display Area */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[450px] sm:h-[550px] md:h-[650px] flex justify-center items-center">
            
            {/* Background image/texture (simulated) */}
            <div className="absolute inset-0 bg-cover bg-center opacity-70"
                 style={{ 
                   backgroundImage: 'url("path/to/dark-textured-background.jpg")', 
                 }}
            ></div>

            {/* Mobile Phone Mockup */}
            <div className="z-10 w-48 h-[400px] sm:w-56 sm:h-[480px] md:w-64 md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl ring-4 ring-gray-800 bg-white">
              <img
                
                src={atsImageFeature} 
                alt="ATS Mobile Notifications UI showing alerts"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Description */}
          <div className="mt-12 max-w-1xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600">
            With **ATS**, you’re always connected to your vehicle even when you’re not around. Our Emergency Alerts & Real-Time Notifications system ensures you receive **instant push notifications** the moment someone scans your **ATS QR decal or attempts to contact you**. This allows you to take immediate action before a situation escalates, helping you prevent unnecessary conflicts, vehicle damage, or penalties. Whether you’re parked near a residential gate, a commercial space, or a busy street, **ATS keeps you informed 24/7**. Every interaction is securely logged in your dashboard, giving you a complete record for future reference. Plus, with customizable alert preferences, you’re in full control of how and when you’re notified ensuring your vehicle stays protected and you stay at peace, no matter where you are.
          </div>
        </div>
      </section>

      <hr className="my-12 max-w-7xl mx-auto border-gray-200" />
      
      {/* ================================================================================
        Section 2: Empowering safer parking through smart, seamless solutions 
        ================================================================================
      */}
      <section className="py-12 md:py-24 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl  tracking-tight mb-12">
            Empowering safer parking through smart, seamless solutions
          </h2>

          {/* Image Display Area */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[450px] sm:h-[550px] md:h-[650px] flex justify-center items-center">
            
            {/* Background image/texture (simulated) */}
            <div className="absolute inset-0 bg-cover bg-center opacity-70"
                 style={{ 
                   backgroundImage: 'url("path/to/dark-textured-background-2.jpg")', 
                 }}
            ></div>

            {/* Mobile Phone Mockup */}
            <div className="z-10 w-48 h-[400px] sm:w-56 sm:h-[480px] md:w-64 md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl ring-4 ring-gray-800 bg-white">
              <img
                // *** REPLACE THIS PATH WITH YOUR ACTUAL IMAGE URL ***
                src={atsImageFeature}
                alt="ATS Mobile Parking Map UI showing available spots"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Description */}
          <div className="mt-12 max-w-1xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600">
            Navigating city parking is often stressful: limited space, unauthorized zones, and unclear boundaries can quickly turn a routine stop into a frustrating situation. At Your Service (**ATS**) is here to change that. We combine smart technology with real-world needs to give vehicle owners a proactive way to avoid conflict, prevent damage, and stay connected during emergencies—all without compromising privacy or security. Whether you’re parking in a tight neighborhood, near a shop, or in an unfamiliar area, **ATS ensures you’re always within reach if needed**. With a simple QR decal, a feature-rich mobile app, and user-friendly interface, ATS transforms the way you interact with your surroundings making parking hassle-free and stress-free.
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-24 bg-white text-gray-900">
        
<hr className="my-12 max-w-7xl mx-auto border-gray-200"/>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl tracking-tight mb-16">
          Cross-Platform App – Available for iOS & Android
        </h2>

        {/* Two-Column Layout for iOS and Android */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Column 1: iOS App */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-xl font-semibold">Available for iOS</h3>
            <p className="text-base leading-relaxed text-gray-600 max-w-sm">
              Install ATS from the Apple App Store and stay connected to your vehicle with just a tap. 
              [<Link  target="_blank" to="https://apps.apple.com/us/app/ats-nepal/id6461348049" className="text-blue-600 hover:underline font-medium">Download on the App Store</Link>]
            </p>

            {/* iOS Phone Mockup */}
            <div className="w-56 h-auto rounded-3xl overflow-hidden shadow-xl ring-4 ring-gray-100 bg-white mb-4">
              <img
                src={atsImageFeature}
                alt="ATS App Store listing screenshot"
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* App Store Badge */}
            <Link to="https://apps.apple.com/us/app/ats-nepal/id6461348049" target="_blank" >
              <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"  
                alt="Download on the App Store"
                className="w-40 sm:w-48"
              />
            </Link>
          </div>

          {/* Column 2: Android App */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-xl font-semibold">Available for Android</h3>
            <p className="text-base leading-relaxed text-gray-600 max-w-sm">
              Get ATS on the Google Play Store and enjoy a smooth, secure experience tailored for your Android device. 
              [<Link to="https://play.google.com/store/apps/details?id=com.aksoment.ats&hl=en" className="text-blue-600 hover:underline font-medium">Download on Google Play</Link>]
            </p>

            {/* Android Phone Mockup */}
            <div className="w-56 h-auto rounded-3xl overflow-hidden shadow-xl ring-4 ring-gray-100 bg-white mb-4">
              <img
                src={atsImageFeature}
                alt="ATS Google Play listing screenshot"
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Google Play Badge */}
            <Link to="https://play.google.com/store/apps/details?id=com.aksoment.ats&hl=en" target="_blank">
              <img
                   src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"

                alt="Get it on Google Play"
                className="w-44 sm:w-52"
              />
            </Link>
          </div>

        </div>
      </div>



{/* kzsvdjhsdkjf */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12">
          Get to know ATS
        </h2>

        {/* Scrolling UI Showcase Area */}
        <div className="flex gap-8 overflow-x-auto scrollbar-hide snap-x p-4">
          
          {atsUIScreens.map((item, idx) => (
            <article
              key={idx}
              // These classNamees ensure the cards are a fixed width and snap into place on scroll
              className="snap-center flex-shrink-0 w-64 bg-white rounded-xl shadow-2xl ring-4 ring-gray-100 p-2"
              style={{ minWidth: '256px' }} // Tailwind w-64 is 256px
            >
              {/* Mobile Phone Mockup */}
              <div className="w-full h-auto rounded-3xl overflow-hidden bg-white">
                <img
                    src={item.src}
                    alt={item.alt}
                    className="object-cover w-full h-full"
                />
              </div>
              
              {/* Optional: You can add a caption below the phone if needed */}
              {/* <p className="text-xs text-gray-500 pt-4 text-center">{item.alt}</p> */}
            </article>
          ))}
          
        </div>
        
        {/* Note about the functionality, which often accompanies these showcases */}
        <p className="text-center text-sm text-gray-500 pt-8">
          The ATS app provides a seamless interface for managing your profile, vehicle details, documents, and real-time requests.
        </p>

      </div>


{/* Customer support */}
<hr className="my-12 max-w-7xl mx-auto border-gray-200"/>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl  tracking-tight mb-12">
            Customer Support - We're with you Every
          </h2>

          {/* Image Display Area */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[450px] sm:h-[550px] md:h-[650px] flex justify-center items-center">
            
            {/* Background image/texture (simulated) */}
            <div className="absolute inset-0 bg-cover bg-center opacity-70"
                 style={{ 
                   backgroundImage: 'url("path/to/dark-textured-background.jpg")', 
                 }}
            ></div>

            {/* Mobile Phone Mockup */}
            <div className="z-10 w-48 h-[400px] sm:w-56 sm:h-[480px] md:w-64 md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl ring-4 ring-gray-800 bg-white">
              <img
                // *** REPLACE THIS PATH WITH YOUR ACTUAL IMAGE URL ***
                src={atsImageFeature}
                alt="ATS Mobile Notifications UI showing alerts"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Description */}
          <div className="mt-12 max-w-1xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600">
            With **ATS**, you’re always connected to your vehicle even when you’re not around. Our Emergency Alerts & Real-Time Notifications system ensures you receive **instant push notifications** the moment someone scans your **ATS QR decal or attempts to contact you**. This allows you to take immediate action before a situation escalates, helping you prevent unnecessary conflicts, vehicle damage, or penalties. Whether you’re parked near a residential gate, a commercial space, or a busy street, **ATS keeps you informed 24/7**. Every interaction is securely logged in your dashboard, giving you a complete record for future reference. Plus, with customizable alert preferences, you’re in full control of how and when you’re notified ensuring your vehicle stays protected and you stay at peace, no matter where you are.
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}