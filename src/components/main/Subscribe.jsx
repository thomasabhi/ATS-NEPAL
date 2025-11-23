import React from 'react'

const Subscribe = () => {
  return (
    // New container to limit the width and center the component
    <div className="max-w-6xl mb-10 mx-auto shadow-xl">
        <div className="bg-blue-800 py-8 px-4 rounded-md flex flex-col md:flex-row items-center justify-between">
            <div className="text-white max-w-2xl">
                {/* Adjusted size to match the prominence */}
                <h2 className="text-4xl lg:text-5xl font-bold mb-3 leading-snug"> 
                    Subscribed to get updated
                </h2>
                {/* Opacity and size look good */}
                <p className="text-lg opacity-90"> 
                    Subscribe to our newsletter and be the first to know about new features, parking safety tips, app updates, and exclusive offers. Stay informed, stay connected directly in your inbox.
                </p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
                {/* Used bg-red-500 for the coral color, removed the scale transform for a cleaner look */}
                <a href="#" className="inline-block px-8 py-4 text-lg font-semibold text-white bg-red-500 rounded-lg cursor-pointer hover:bg-red-600 transition duration-300 shadow-md">
                    Get started
                </a>
            </div>
        </div>
    </div>
  )
}

export default Subscribe