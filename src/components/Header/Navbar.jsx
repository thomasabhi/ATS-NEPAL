
import React, { useState } from 'react';
import logo from "../../assets/ats.png";
import { CiMenuFries, CiSquareRemove } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  
  return (
    <header className="flex justify-between items-center h-23 bg-gray-100 text-black px-8 md:px-32 shadow-md relative z-50">

      {/* Logo */}
      <Link to="/" className="cursor-pointer">
        <img
          src={logo}
          alt="App Logo"
          className="w-36 hover:scale-105 transition-all"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden xl:flex items-center gap-6 ">
        <li>
         <NavLink
  to="/"
  className={({ isActive }) =>
    `px-4 py-2 text-lg rounded-md transition-all ${
      isActive ? "text-sky-400 font-semibold" : "hover:text-sky-400"
    }`
  }
>
  Home
</NavLink>
        </li>
        <li>
          <NavLink to="/features" className={({ isActive }) =>
    `px-4 py-2 text-lg rounded-md transition-all ${
      isActive ? "text-sky-400 font-semibold" : "hover:text-sky-400"
    }`}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="/privacy-policy" className={({ isActive }) =>
    `px-4 py-2 text-lg rounded-md transition-all ${
      isActive ? "text-sky-400 font-semibold" : "hover:text-sky-400"
    }`}>
            Privacy & Policy
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" className={({ isActive }) =>
    `px-4 py-2 text-lg rounded-md transition-all ${
      isActive ? "text-sky-400 font-semibold" : "hover:text-sky-400"
    }`}>
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={({ isActive }) =>
    `px-4 py-2 text-lg rounded-md transition-all ${
      isActive ? "text-sky-400 font-semibold" : "hover:text-sky-400"
    }`}>
            About Us
          </NavLink>
        </li>
      </ul>

      {/* Download App Button */}
    <div className="hidden xl:block">
  <Link to="https://play.google.com/store/search?q=ats+nepal&c=apps&hl=en" target='_blank' className="border border-blue-700 text-blue-700 px-6 py-3 rounded-full hover:bg-blue-700 hover:text-white transition flex items-center gap-2 cursor-pointer">
    <FiDownload className="text-xl" />
    Download App
  </Link>
</div>

      {/* Mobile Menu Icon */}
     {isMenuOpen ? (
  <CiSquareRemove
    onClick={() => setIsMenuOpen(false)}
    className="xl:hidden text-5xl cursor-pointer z-50"
  />
) : (
  <CiMenuFries
    onClick={() => setIsMenuOpen(true)}
    className="xl:hidden text-5xl cursor-pointer z-50"
  />
)}
      
     {/* Mobile Menu */}
<div className={`xl:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 font-semibold text-lg transition-all duration-600 z-40 ${isMenuOpen ? 'animate-slide-down opacity-100 pointer-events-auto' : 'animate-slide-up opacity-0 pointer-events-none'}`}>
  <Link to="/" className='w-full text-center p-4 hover:text-sky-400  transition-all'>Home</Link>
  <Link to="/features" className='w-full text-center p-4 hover:text-sky-400  transition-all'>Features</Link>
  <Link to="/privacy-policy" className='w-full text-center p-4 hover:text-sky-400  transition-all'>Privacy & Policy</Link>
  <Link to="/faq" className='w-full text-center p-4 hover:text-sky-400  transition-all'>FAQ</Link>
    <Link to="/about-us"  className='w-full text-center p-4 hover:text-sky-400  transition-all'>About us</Link>

  <Link to="/contact" className='w-full text-center p-4 hover:text-sky-400 transition-all'>Contact Us</Link>
</div>
    </header>
  );
};

export default Navbar;