import React from 'react';

const notifications = [
  {
    id: 1,
    title: 'ATS ALERT',
    message: 'Your vehicle is wrongly parked, please remove it.',
    time: '03:18:20 PM',
    date: '27-05-2025',
  },
  {
    id: 2,
    title: 'ATS ALERT',
    message: 'Your vehicle is wrongly parked, please remove it.',
    time: '03:18:20 PM',
    date: '27-05-2025',
  },
  {
    id: 3,
    title: 'ATS ALERT',
    message: 'Your vehicle is wrongly parked, please remove it.',
    time: '03:18:20 PM',
    date: '27-05-2025',
  },
  {
    id: 4,
    title: 'ATS ALERT',
    message: 'Your vehicle is wrongly parked, please remove it.',
    time: '03:18:20 PM',
    date: '27-05-2025',
  },
  {
    id: 5,
    title: 'ATS ALERT',
    message: 'Your vehicle is wrongly parked, please remove it.',
    time: '03:18:20 PM',
    date: '27-05-2025',
  },
];

export default function AtsNepalUI() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-6 md:px-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-36">
        {/* Left Text Section */}
        <div className="md:w-1/2 max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From Anywhere, To Everywhere!
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            From expiry reminders to parking, towing, insurance, and more manage everything from your phone with the ATS Nepal app.
          </p>
        </div>

        {/* Right Phone Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          {/* Phone Container */}
          <div className="w-[320px] h-[600px] bg-white rounded-[36px] shadow-xl flex flex-col overflow-hidden rotate-[15deg]">
            {/* Phone Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <button 
                aria-label="Back"
                className="text-blue-600 text-xl font-semibold hover:text-blue-800 transition"
              >
                &#8592;
              </button>
              <h3 className="text-black font-semibold text-lg leading-tight">Notifications</h3>
              {/* Status Bar Icons (simplified) */}
              <div className="text-gray-400 text-sm select-none">
                ⚡ 📶 📱
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 bg-white">
              <button className="flex-1 py-3 text-blue-600 font-semibold border-b-4 border-blue-600 focus:outline-none">
                Alert
              </button>
              <button className="flex-1 py-3 text-gray-500 font-semibold hover:text-gray-700 focus:outline-none">
                Request
              </button>
            </div>

            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">
              {notifications.map(({ id, title, message, time, date }) => (
                <div
                  key={id}
                  className="bg-white rounded-xl shadow-md flex items-start p-4"
                >
                  <div className="flex-shrink-0 w-9 h-9 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg select-none">
                    !
                  </div>
                  <div className="ml-4 flex-1">
                    <strong className="block text-gray-900 text-sm">{title}</strong>
                    <p className="text-gray-700 text-xs mt-1 leading-snug">{message}</p>
                    <small className="block mt-2 text-gray-400 text-[10px]">
                      {time} | {date}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
