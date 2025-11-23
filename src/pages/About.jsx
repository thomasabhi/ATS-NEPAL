import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import atsImageAbout from '../assets/atsImageAbout.jpeg';

const About = () => {
  const topText = [
    "If your vehicle is disturbing someone, you can be contacted without revealing your phone number. ATS provides a QR Decal to stick on the left-hand side of the windscreen. On scanning, notification options are available like PARKED WRONG, NEEDS ATTENTION, TOW ALERT, EMERGENCY ALERT to FAMILY MEMBERS, or custom messages.",
    "Depending on the requirement, the person can contact the vehicle owner directly or talk via the ATS application. Communications keep identities private.",
    "ATS also stores e-copies of documents—RC, insurance, PUC, Driving License—and notifies you before expiry.",
    "Users enter two emergency mobile numbers for accident or emergency notifications."
  ];

  const bottomText = [
    "At Your Service has come up with ATS to solve parking problems, where spaces are packed and people frequently block cars, residences, offices, or gates.",
    "You never know what might happen when parking your vehicle. ATS offers the QR Decal and a platform to quickly contact vehicle owners without exposing personal details.",
    "Our app enhances customer safety and document management, including renewal reminders and emergency notifications."
  ];

  const renderContentBlock = (keyPrefix) => (
    <section
      key={keyPrefix}
      className="mb-32 bg-white p-8 sm:p-12 rounded-2xl shadow-md border border-gray-100"
    >
      {/* Top section */}
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed tracking-wide">
        {topText.map((para, i) => (
          <p key={`${keyPrefix}-top-${i}`}>{para}</p>
        ))}
      </div>

      {/* Image */}
      <div className="flex justify-center mt-16">
        <img
          src={atsImageAbout}
          alt="ATS App QR Scan"
          className="rounded-2xl shadow-xl border border-gray-200 max-w-sm w-full"
        />
      </div>

      {/* Bottom section */}
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed tracking-wide mt-16">
        {bottomText.map((para, i) => (
          <p key={`${keyPrefix}-bottom-${i}`}>{para}</p>
        ))}
      </div>
    </section>
  );

  return (
    <div>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 sm:px-10 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-14 tracking-wide">
          About ATS
        </h1>

        {renderContentBlock('first')}
        {renderContentBlock('second')}
      </main>

      <Footer />
    </div>
  );
};

export default About;
