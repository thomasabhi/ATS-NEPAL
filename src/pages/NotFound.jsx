import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
